import {ChangeDetectorRef, Component, Inject, Injectable, Input, OnInit, ViewChild} from '@angular/core';
// import { ChatService, ChatServiceToken, MultiUserChatPlugin, Room, RoomSummary } from '@proxym/ngx-chat';
import { jid } from '@xmpp/client';
import { ChatService, ChatServiceToken } from '../../services/chat-service';
import {MultiUserChatPlugin, Room, RoomSummary} from '../../services/adapters/xmpp/plugins/multi-user-chat.plugin';
import {HttpFileUploadPlugin} from '../../services/adapters/xmpp/plugins/http-file-upload.plugin';
import {ChatListStateService, ChatWindowState} from '../../services/chat-list-state.service';
import {SocketIOService} from '../../services/socket.io.service';
import {XmppChatAdapter} from '../../services/adapters/xmpp/xmpp-chat-adapter.service';
import {ChatMessageInputComponent} from '../chat-message-input/chat-message-input.component';
import {RosterListComponent} from '../roster-list/roster-list.component';
@Component({
    selector: 'ngx-chat-multi-user-chat',
    templateUrl: './multi-user-chat.component.html',
    styleUrls: ['./multi-user-chat.component.less']
})

@Injectable()
export class MultiUserChatComponent implements OnInit {
    @Input()
    public chatWindowState: ChatWindowState;
    multiUserChatPlugin: MultiUserChatPlugin;
    roomJid: string;

    @Input()
    selectedRoom: Room;

    @Input()
    openA = 1;

    @Input()
    name: string;

    allRooms: RoomSummary[] = [];
    httpFileUploadPlugin: HttpFileUploadPlugin;
    @ViewChild(ChatMessageInputComponent)
    messageInput: ChatMessageInputComponent;
    constructor(@Inject(ChatServiceToken) public chatService: ChatService,
                private chatListService: ChatListStateService,
                private changeDetector: ChangeDetectorRef,
                private socketIOService: SocketIOService,
                @Inject(ChatServiceToken) public chatServicee: XmppChatAdapter
                ) {

        this.httpFileUploadPlugin = this.chatService.getPlugin(HttpFileUploadPlugin);

    }

    ngOnInit() {
    console.log('pffff', this.openA);
    }



    async queryAllRooms() {
        this.allRooms = await this.multiUserChatPlugin.queryAllRooms();
    }

   /* ngOnDestroy() {
        this.ngDestroy.next();
        this.ngDestroy.complete();
    }*/

    public onClickHeader() {
        this.chatWindowState.isCollapsed = !this.chatWindowState.isCollapsed;
    }
    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    public onClickClose() {
        this.openA = 0;
    }

    sendMessage() {
        this.messageInput.onSendMessage();
    }

    async uploadFile(file: File) {
        const url = await this.httpFileUploadPlugin.upload(file);
        this.chatService.sendMessage(sessionStorage.getItem('username') + '@localhost', url);
    }

    onFocus() {
        this.messageInput.focus();
    }

    onActionClick(chatAction: ChatAction) {
        chatAction.onClick({
            contact: this.chatWindowState.contact.jidBare.toString(),
            chatWindow: this,
        });
    }

}

export interface ChatAction {
    cssClass: { [className: string]: boolean } | string | string[];
    /**
     * to identify actions
     */
    id: string;
    html: string;

    onClick(chatActionContext: ChatActionContext): void;
}

export interface ChatActionContext {
    contact: string;
    chatWindow: MultiUserChatComponent;
}
