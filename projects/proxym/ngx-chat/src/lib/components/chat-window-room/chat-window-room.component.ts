import {ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Contact} from '../../core/contact';
import {Presence} from '../../core/presence';
import {ChatListStateService, ChatWindowState} from '../../services/chat-list-state.service';
import {ChatMessageInputComponent} from '../chat-message-input/chat-message-input.component';
import {HttpFileUploadPlugin} from '../../services/adapters/xmpp/plugins/http-file-upload.plugin';
import {Subject} from 'rxjs';
import {ChatService, ChatServiceToken} from '../../services/chat-service';
import {SocketIOService} from '../../services/socket.io.service';
import {XmppChatAdapter} from '../../services/adapters/xmpp/xmpp-chat-adapter.service';
import {filter, takeUntil} from 'rxjs/operators';
import {Direction} from '../../core/message';
import {formatDate} from '@angular/common';
import {parse} from 'ltx';
import {MultiUserChatPlugin, Room, RoomSummary} from '../../services/adapters/xmpp/plugins/multi-user-chat.plugin';
import {MultiUserChatComponent} from '../multi-user-chat/multi-user-chat.component';

@Component({
  selector: 'ngx-chat-window-room',
  templateUrl: './chat-window-room.component.html',
  styleUrls: ['./chat-window-room.component.less']
})
export class ChatWindowRoomComponent implements OnInit, OnDestroy {

  contact: Contact;

  presence = Presence;

  @Input()
  public chatWindowState: ChatWindowState;

  @ViewChild(ChatMessageInputComponent)
  messageInput: ChatMessageInputComponent;

  multiUserChatPlugin: MultiUserChatPlugin;
  roomJid: string;

  allRooms: RoomSummary[] = [];

  httpFileUploadPlugin: HttpFileUploadPlugin;

  private ngDestroy = new Subject<void>();

  imgSendMessage = require('../../../../../../../src/assets/click.png');
  imgFileMessage = require('../../../../../../../src/assets/file.png');

  today = new Date();
  jstoday = '';

  @Input()
  selectedRoom: Room = null ;

  constructor(
      @Inject(ChatServiceToken) public chatService: ChatService,
      private chatListService: ChatListStateService,
      private changeDetector: ChangeDetectorRef,
      private socketIOService: SocketIOService,
      @Inject(ChatServiceToken) public chatServicee: XmppChatAdapter,
      @Inject(ChatServiceToken) public multiUserChatComponent: MultiUserChatComponent,
  ) {
    this.multiUserChatPlugin = chatService.getPlugin(MultiUserChatPlugin);
    this.httpFileUploadPlugin = this.chatService.getPlugin(HttpFileUploadPlugin);


  }

  ngOnInit() {
    console.log("anioss", this.multiUserChatComponent.selectedRoom);
  }

  ngOnDestroy() {
    this.ngDestroy.next();
    this.ngDestroy.complete();
  }

  public onClickHeader() {
    this.chatWindowState.isCollapsed = !this.chatWindowState.isCollapsed;
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  public onClickClose() {
    this.chatListService.closeChat(this.chatWindowState.contact);
  }

  sendMessage() {
    this.messageInput.onSendMessage();
  }

  async uploadFile(file: File) {
    const url = await this.httpFileUploadPlugin.upload(file);
    this.chatService.sendMessage(this.chatWindowState.contact.jidBare.toString(), url);
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
  chatWindow: ChatWindowRoomComponent;
}
