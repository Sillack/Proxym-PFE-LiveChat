import {ChangeDetectorRef, Component, Inject, Input, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {Direction} from '../../core/message';
import {HttpFileUploadPlugin} from '../../services/adapters/xmpp/plugins/http-file-upload.plugin';
import {ChatListStateService, ChatWindowState} from '../../services/chat-list-state.service';
import {ChatService, ChatServiceToken} from '../../services/chat-service';
import {ChatMessageInputComponent} from '../chat-message-input/chat-message-input.component';
import {Contact} from '../../core/contact';
import {Presence} from '../../core/presence';
import { SocketIOService } from '../../services/socket.io.service';
import {parse} from 'ltx';
import {XmppChatAdapter} from '../../services/adapters/xmpp/xmpp-chat-adapter.service';
import {formatDate } from '@angular/common';

@Component({
    selector: 'ngx-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.less']
})
export class ChatWindowComponent implements OnInit, OnDestroy, OnChanges {

    public loggedUserName;
    public isChat = false;
    public isVideoCall = false;
    public isAudioCall = false;
    public liveUserList = [];
    public callee: any;
    public callingInfo = { name: '', content: '', type: '' };
    public isVideoCallAccepted = false;
    public isAudioCallAccepted = false;
    public userType: string;
    public caller: any;
    public c: any;
    public video;
    contact: Contact;

    public loppRing = true;

    myAudio = new Audio('https://audio.jukehost.co.uk/waQVQiqBy7Jc6kBgtHVwQ9zO2OeF7rzm');

    public message = '';

    presence = Presence;

    public busyy = false;

    showEmojiPicker = false;

    @Input()
    public chatWindowState: ChatWindowState;

    @ViewChild(ChatMessageInputComponent)
    messageInput: ChatMessageInputComponent;

    httpFileUploadPlugin: HttpFileUploadPlugin;

    private ngDestroy = new Subject<void>();

    imgSendMessage = require('../../../../../../../src/assets/click.png');
    imgFileMessage = require('../../../../../../../src/assets/file.png');

    today = new Date();
    jstoday = '';
    constructor(
        @Inject(ChatServiceToken) public chatService: ChatService,
        private chatListService: ChatListStateService,
        private changeDetector: ChangeDetectorRef,
        private socketIOService: SocketIOService,
        @Inject(ChatServiceToken) public chatServicee: XmppChatAdapter
    ) {
        this.httpFileUploadPlugin = this.chatService.getPlugin(HttpFileUploadPlugin);
        this.loggedUserName = sessionStorage.getItem('username');

    }

     ngOnInit() {
        this.chatWindowState.contact.messages$
            .pipe(
                filter(message => message.direction === Direction.in),
                takeUntil(this.ngDestroy)
            )
            .subscribe(() => {
                this.chatWindowState.isCollapsed = false;
            });
        this.GetLiveUsers();
        this.OnVideoCallRequest();
        this.OnVideoCallAccepted();
        this.GetBusyUsers();
        this.OnVideoCallRejected();
        this.OnAudioCallRequest();
        this.OnAudioCallAccepted();
        this.OnAudioCallRejected();
    }

    ngOnChanges() {
        this.message = '';
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
    AddUser() {
        this.socketIOService.SetUserName(this.loggedUserName)
            .subscribe(data => {
                if (data.username) {
                    // user added
                }
            });
    }
    GetLiveUsers() {
        this.socketIOService
            .GetConnectedUsers()
            .subscribe(data => {
                const users = data.filter(a => a.username !== this.loggedUserName);
                let count = 0;
                for (const i in users) {
                    if (this.liveUserList.indexOf(data[i]) === -1) {
                        count++;
                    }
                }
                if (count !== this.liveUserList.length) {
                    this.liveUserList = users;
                    this.socketIOService.connectedusers = users;
                    this.GetBusyUsers();
                }
            });
    }
    OnVideoCallRequest() {
        this.loppRing = true;
        this.socketIOService
            .OnVideoCallRequest()
            .subscribe(data => {
                this.callingInfo.name = data.fromname;
                this.callingInfo.content = 'Calling....';
                this.callingInfo.type = 'receiver';
                this.isVideoCall = true;
            });
    }

    toggleEmojiPicker() {
        this.showEmojiPicker = !this.showEmojiPicker;
    }

    addEmoji(event) {
        const { message } = this;
        const text = `${event.emoji.native}`;
        this.message = text;
    }

    OnAudioCallRequest() {
        this.socketIOService
            .OnAudioCallRequest()
            .subscribe(data => {
                this.callingInfo.name = data.fromname;
                this.callingInfo.content = 'Calling....';
                this.callingInfo.type = 'receiver';
                this.isAudioCall = true;
            });
    }
    OnVideoCallAccepted() {
        this.myAudio.pause();
        this.socketIOService
            .OnVideoCallAccepted()
            .subscribe(data => {
                const calee = this.liveUserList.find(a => a.username === this.callingInfo.name);
                this.userType = 'dialer';
                this.caller = calee.id;
                this.isVideoCallAccepted = true;
                this.socketIOService.BusyNow();
                this.sendStanzaVideo();

                this.CloseVideo();
            });
    }
    OnAudioCallAccepted() {
        this.myAudio.pause();
        this.socketIOService
            .OnAudioCallAccepted()
            .subscribe(data => {
                const calee = this.liveUserList.find(a => a.username === this.callingInfo.name);
                this.userType = 'dialer';
                this.caller = calee.id;
                this.isAudioCallAccepted = true;
                this.socketIOService.BusyNow();


                this.sendStanzaAudio();
                this.CloseAudio();
            });
    }
    GetBusyUsers() {
        this.socketIOService
            .GetBusyUsers()
            .subscribe(data => {
                this.liveUserList.forEach(a => { a.busy = false; });
                data.forEach(a => {
                    const usr = this.liveUserList.find(b => b.username === a.username);
                    if (usr) {
                        usr.busy = true;
                    }
                });
            });
    }
    OnVideoCallRejected() {
        this.myAudio.pause();
        this.socketIOService
            .OnVideoCallRejected()
            .subscribe(data => {
                this.callingInfo.content = 'Call Rejected ..';
                this.loppRing = false;
                this.myAudio.pause();
                setTimeout(() => {
                    this.CloseVideo();
                }, 1000);
            });
    }
    OnAudioCallRejected() {
        this.myAudio.pause();
        this.socketIOService
            .OnAudioCallRejected()
            .subscribe(data => {
                this.callingInfo.content = 'Call Rejected ..';
                setTimeout(() => {
                    this.CloseAudio();
                }, 1000);
            });
    }
    Chat() {
        this.isChat = true;
    }

    VideoCall() {
        this.loppRing = true;
        this.GetLiveUsers();
        let mySubString = '';
        if (this.chatWindowState.contact.name.indexOf('@') > 0) {
            mySubString = this.chatWindowState.contact.name.substring(
                0,
                this.chatWindowState.contact.name.lastIndexOf('@')
            );
        } else {
            mySubString = this.chatWindowState.contact.name.substring(
                0,
                this.chatWindowState.contact.name.lastIndexOf(' ')
            );
        }

        const callee = this.liveUserList.find(a => a.username === mySubString.toLowerCase());
        const calee = this.liveUserList.find(a => a.username === callee.username);
        if (calee) {
            this.socketIOService.VideoCallRequest(this.loggedUserName, calee.id);
           /* setTimeout(() => {
                    this.changeDetector.detectChanges();
                    this.RejectVideoCall();
                    this.sendStanzaVideoReject();
                }, 30000);*/
        }
        this.callee = callee;
        this.callingInfo.name = callee.username;

        this.callingInfo.content = 'Dialing....';
        this.callingInfo.type = 'dialer';
        this.isVideoCall = true;
        this.socketIOService.BusyNow();
        this.busyy = true;
    }

    changeLoop() {
        this.loppRing = false;
    }

    ChangeVideo() {
        this.video = true;
    }

    ChangeAudio() {
        this.video = false;
    }

    AcceptVideoCall() {
        this.myAudio.pause();
        const calee = this.liveUserList.find(a => a.username === this.callingInfo.name);
        if (calee) {
            this.socketIOService.VideoCallAccepted(this.loggedUserName, calee.id);
            this.userType = 'receiver';
            this.caller = calee.id;
            this.isVideoCallAccepted = true;
            this.socketIOService.BusyNow();
        }
        this.CloseVideo();
    }
    AcceptAudioCall() {
        this.myAudio.pause();
        const calee = this.liveUserList.find(a => a.username === this.callingInfo.name);
        if (calee) {
            this.socketIOService.AudioCallAccepted(this.loggedUserName, calee.id);
            this.userType = 'receiver';
            this.caller = calee.id;
            this.isAudioCallAccepted = true;
            this.socketIOService.BusyNow();
        }
        this.CloseAudio();
    }

    RejectVideoCall() {
        this.myAudio.pause();
        this.isVideoCall = false;
        const calee = this.liveUserList.find(a => a.username === this.callingInfo.name);
        if (calee) {
            this.socketIOService.VideoCallRejected(this.loggedUserName, calee.id);
            this.isVideoCallAccepted = false;

        }

        this.CloseVideo();
    }


    RejectAudioCall() {
        this.myAudio.pause();
        const calee = this.liveUserList.find(a => a.username === this.callingInfo.name);
        if (calee) {
            this.socketIOService.AudioCallRejected(this.loggedUserName, calee.id);
            this.isAudioCallAccepted = false;
        }
        this.CloseAudio();
    }

    AudioCall() {
        this.GetLiveUsers();
        let mySubString = '';
        if (this.chatWindowState.contact.name.indexOf('@') > 0) {
            mySubString = this.chatWindowState.contact.name.substring(
                0,
                this.chatWindowState.contact.name.lastIndexOf('@')
            );
        } else {
            mySubString = this.chatWindowState.contact.name.substring(
                0,
                this.chatWindowState.contact.name.lastIndexOf(' ')
            );
        }

        const callee = this.liveUserList.find(a => a.username === mySubString.toLowerCase());
        const calee = this.liveUserList.find(a => a.username === callee.username);
        if (calee) {
            this.socketIOService.AudioCallRequest(this.loggedUserName, calee.id);
           /* setTimeout(() => {
                this.changeDetector.detectChanges();
                this.RejectAudioCall();
                this.sendStanzaAudioReject();
            }, 30000);*/
            //  console.log('calleeid', calee.id);
        }
        this.callee = callee;
        this.callingInfo.name = callee.username;

        this.callingInfo.content = 'Dialing....';
        this.callingInfo.type = 'dialer';
        this.isAudioCall = true;
    }


    CallBackVideo(event) {
        this.isChat = false;
        this.isVideoCall = false;
        this.isAudioCall = false;
        this.isVideoCallAccepted = false;
        this.changeDetector.detectChanges();
        // location.reload();
    }

    CallBackAudio(event) {
        this.isChat = false;
        this.isVideoCall = false;
        this.isAudioCall = false;
        this.isAudioCallAccepted = false;
        this.changeDetector.detectChanges();
       // location.reload();
    }

    CloseVideo() {
        this.myAudio.pause();
        this.isVideoCall = false;
        this.changeDetector.detectChanges();
    }

    CloseAudio() {
        this.myAudio.pause();
        this.isAudioCall = false;
        this.changeDetector.detectChanges();
    }

    playAudio() {
        const audio = new Audio();
        audio.src = '../../../../../../../src/assets/ringtone.wav';
        audio.load();
        audio.play();
    }

    Logout() {
        this.socketIOService.RemoveUser();
        sessionStorage.clear();
        location.reload();
    }

    sendStanzaAudio() {
        this.GetLiveUsers();
        this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', 'CET');
        const request = '<message xml:lang=\'en\' to=\'' + this.callingInfo.name + '@localhost\'' +
            // tslint:disable-next-line:max-line-length
            ' type=\'chat\' xmlns=\'jabber:client\'>' + '<origin-id xmlns=\'urn:xmpp:sid:0\' id=\'' +  this.chatServicee.chatConnectionService.getNextIqId() + '\' /><body>' + 'Audio Call: ' + this.jstoday.toString() + '</body></message>';
        if (request) {
            this.chatServicee.chatConnectionService.send(parse(request));
        }

    }

    sendStanzaVideo() {
        this.GetLiveUsers();
        this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', 'CET');
        const request = '<message xml:lang=\'en\' to=\'' + this.callingInfo.name + '@localhost\'' +
            // tslint:disable-next-line:max-line-length
            ' type=\'chat\' xmlns=\'jabber:client\'>' + '<origin-id xmlns=\'urn:xmpp:sid:0\' id=\'' +  this.chatServicee.chatConnectionService.getNextIqId() + '\' /><body>' + 'Video Call: ' + this.jstoday.toString() + '</body></message>';
        if (request) {
            this.chatServicee.chatConnectionService.send(parse(request));
        }

    }

    sendStanzaAudioReject() {
        this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', 'CET');
        const request = '<message xml:lang=\'en\' to=\'' + this.callingInfo.name + '@localhost\'' +
            // tslint:disable-next-line:max-line-length
            ' type=\'chat\' xmlns=\'jabber:client\'>' + '<origin-id xmlns=\'urn:xmpp:sid:0\' id=\'' +  this.chatServicee.chatConnectionService.getNextIqId() + '\' /><body>' + ' Audio call: ' + this.jstoday.toString() + '</body></message>';
        if (request) {
            this.chatServicee.chatConnectionService.send(parse(request));
        }

    }

    sendStanzaVideoReject() {
        this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', 'CET');
        const request = '<message xml:lang=\'en\' to=\'' + this.callingInfo.name + '@localhost\'' +
            // tslint:disable-next-line:max-line-length
            ' type=\'chat\' xmlns=\'jabber:client\'>' + '<origin-id xmlns=\'urn:xmpp:sid:0\' id=\'' +  this.chatServicee.chatConnectionService.getNextIqId() + '\' /><body>' + ' Video call: ' + this.jstoday.toString() + '</body></message>';
        if (request) {
            this.chatServicee.chatConnectionService.send(parse(request));
        }

    }

    playRing() {
            this.myAudio.load();
            this.myAudio.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            this.myAudio.play();
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
    chatWindow: ChatWindowComponent;
}
