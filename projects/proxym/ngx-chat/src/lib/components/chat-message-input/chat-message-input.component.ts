import {Component, ElementRef, Inject, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Contact} from '../../core/contact';
import {MultiUserChatPlugin, Room} from '../../services/adapters/xmpp/plugins/multi-user-chat.plugin';
import {ChatService, ChatServiceToken} from '../../services/chat-service';

@Component({
    selector: 'ngx-chat-message-input',
    templateUrl: './chat-message-input.component.html',
    styleUrls: ['./chat-message-input.component.less']
})
export class ChatMessageInputComponent implements OnInit, OnChanges {

    @Input()
    public contact: Contact;

    @Input()
    public room: Room;

    public message = '';

    @ViewChild('chatInput')
    chatInput: ElementRef;

    @Input()
    emoji;


    constructor(@Inject(ChatServiceToken) public chatService: ChatService) {
    }
    ngOnChanges() {
        this.message = this.message + this.emoji;
    }
    ngOnInit() {

    }
    onSendMessage() {
        if (this.message.trim().length > 0) {
            if (this.room) {
                this.chatService.getPlugin(MultiUserChatPlugin).sendMessage(this.room, this.message);
            } else {
                this.chatService.sendMessage(this.contact.jidBare.toString(), this.message);
            }
            this.message = '';
        }
        return false;
    }


    focus() {
        this.chatInput.nativeElement.focus();
    }

}
