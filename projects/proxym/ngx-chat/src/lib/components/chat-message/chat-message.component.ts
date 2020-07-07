import {HttpClient} from '@angular/common/http';
import {Component, Inject, Input, OnInit} from '@angular/core';
import {Contact} from '../../core/contact';
import {Message, MessageState} from '../../core/message';
import {extractUrls} from '../../core/utils-links';
import {MessageStatePlugin, StateDate} from '../../services/adapters/xmpp/plugins/message-state.plugin';
import {XmppChatAdapter} from '../../services/adapters/xmpp/xmpp-chat-adapter.service';
import {ChatService, ChatServiceToken} from '../../services/chat-service';

export const MAX_IMAGE_SIZE = 250 * 1024;
declare var require: any;
declare var img: any;

@Component({
    selector: 'ngx-chat-message',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.less']
})


export class ChatMessageComponent implements OnInit {

    @Input()
    showAvatars: boolean;

    @Input()
    avatar?: string;

    @Input()
    message: Message;

    @Input()
    nick: string;

    @Input()
    isRoom = false;

    @Input()
    contact: Contact;

    imageLink: string;
    // ✓✓
    MessageState = MessageState;

    imgReceived = require('../../../../../../../src/assets/received.png');
    imgSent = require('../../../../../../../src/assets/sent.png');
    imgSeen = require('../../../../../../../src/assets/seen.png');
    imgDec = require('../../../../../../../src/assets/decli.png');
    imgAcc = require('../../../../../../../src/assets/accep.png');

    public sentMessageTitle: string;
    public receivedMessageTitle: string;
    public seenMessageTitle: string;

    private messageStatePlugin: MessageStatePlugin;

    constructor(
        @Inject(ChatServiceToken) public chatService: ChatService,
        private httpClient: HttpClient,
    ) {
        this.messageStatePlugin = this.chatService.getPlugin(MessageStatePlugin);
        this.seenMessageTitle = 'SEEN BY RECIPIENT';
        this.sentMessageTitle = 'SENT';
        this.receivedMessageTitle = 'RECEIVED BY RECIPIENT';
    }

    ngOnInit() {
        this.tryFindImageLink();
    }

    private async tryFindImageLink() {
        if (this.chatService instanceof XmppChatAdapter) {
            for (const url of extractUrls(this.message.body)) {
                try {
                    const headRequest = await this.httpClient.head(url, {observe: 'response'}).toPromise();
                    const contentType = headRequest.headers.get('Content-Type');
                    const isImage = contentType && contentType.startsWith('image');
                    const contentLength = headRequest.headers.get('Content-Length');
                    if (isImage && parseInt(contentLength, 10) < MAX_IMAGE_SIZE) {
                        this.imageLink = url;
                        break;
                    }
                } catch (e) {
                }
            }
        }
    }

    getMessageState() {
        if (this.message.state) {
            return this.message.state;
        } else if (this.messageStatePlugin && this.contact) {
            const date = this.message.datetime;
            const states = this.messageStatePlugin.getContactMessageState(this.contact.jidBare.toString());
            return this.getStateForDate(date, states);
        }
    }

    private getStateForDate(date: Date, states: StateDate) {
        if (date <= states.lastRecipientSeen) {
            return MessageState.RECIPIENT_SEEN;
        } else if (date <= states.lastRecipientReceived) {
            return MessageState.RECIPIENT_RECEIVED;
        } else if (date <= states.lastSent) {
            return MessageState.SENT;
        }
    }
}
