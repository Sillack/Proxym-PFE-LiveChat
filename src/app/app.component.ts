import {Component, Inject} from '@angular/core';
import {ChatService, ChatServiceToken} from '../../projects/proxym/ngx-chat/src/lib/services/chat-service';
import {ChatBackgroundNotificationService} from '../../projects/proxym/ngx-chat/src/lib/services/chat-background-notification.service';
import {ChatListStateService} from '../../projects/proxym/ngx-chat/src/lib/services/chat-list-state.service';
import {ContactFactoryService} from '../../projects/proxym/ngx-chat/src/lib/services/contact-factory.service';
import {LogInRequest} from '../../projects/proxym/ngx-chat/src/lib/core/log-in-request';
import {LogLevel, LogService} from '../../projects/proxym/ngx-chat/src/lib/services/log.service';
import {MultiUserChatPlugin} from '../../projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/multi-user-chat.plugin';
import {RegistrationPlugin} from '../../projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/registration.plugin';
import {UnreadMessageCountPlugin} from '../../projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/unread-message-count.plugin';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SocketIOService} from 'projects/proxym/ngx-chat/src/lib/services/socket.io.service';
import {Orientation} from '@ngmodule/material-carousel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public domain: string;
    public service: string;
    public password: string;
    public username: string;
    public otherJid: any;
    public loggedUserName;
    public multiUserChatPlugin: MultiUserChatPlugin;
    public unreadMessageCountPlugin: UnreadMessageCountPlugin;
    public registrationMessage: string;


    public slidesList = new Array<never>(5);
    public showContent = false;
    // public listKeyManager: ListKeyManager<any>;
    public timings = '300ms ease-in';
    public autoplay = true;
    public interval = 4000;
    public loop = true;
    public hideArrows = true;
    public hideIndicators = false;
    // public color: ThemePalette = 'accent';
    public maxWidth = 'auto';
    public proportion = 10;
    public logi = false;
    hide = true;
    public images = [
        {
            image: 'assets/video_call.png',
        } ];

    public slides: any = this.chunk(this.images, 3);


    public hideOverlay = false;
    public useKeyboard = true;
    public useMouseWheel = false;
    public orientation: Orientation = 'ltr';
    public log: string[] = [];

    constructor(@Inject(ChatServiceToken) public chatService: ChatService,
                private contactFactory: ContactFactoryService,
                private logService: LogService,
                private chatListStateService: ChatListStateService,
                private snackBar: MatSnackBar,
                private socketIOService: SocketIOService,
                chatBackgroundNotificationService: ChatBackgroundNotificationService) {
        const contactData: any = JSON.parse(localStorage.getItem('data')) || {};
        this.logService.logLevel = LogLevel.Debug;
        this.domain = contactData.domain;
        this.service = contactData.service;
        this.password = contactData.password;
        this.username = contactData.username;

        this.chatService.state$.subscribe((state) => this.stateChanged(state));
        this.multiUserChatPlugin = this.chatService.getPlugin(MultiUserChatPlugin);
        this.unreadMessageCountPlugin = this.chatService.getPlugin(UnreadMessageCountPlugin);

        chatBackgroundNotificationService.enable();
        // @ts-ignore
        window.chatService = chatService;
    }


    public onChange(index: number) {
        this.log.push(`MatCarousel#change emitted with index ${index}`);
    }
    /* public get currentIndex(): number {
         if (this.listKeyManager) {
             return this.listKeyManager.activeItemIndex;
         }

         return 0;
     }*/

    chunk(arr, chunkSize) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }






    AddUser() {
        this.socketIOService.SetUserName(this.loggedUserName)
            .subscribe(data => {
                if (data.username) {
                    // user added
                }
            });
    }

    onLogin() {
        const logInRequest: LogInRequest = {
            domain: 'localhost',
            service: 'wss://192.168.43.120:5280/xmpp',
            password: this.password,
            username: this.username,
        };
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem('data', JSON.stringify(logInRequest));
        sessionStorage.setItem('username', this.username);
        this.chatService.logIn(logInRequest);
        this.loggedUserName = sessionStorage.getItem('username');
        this.AddUser();
        this.logi = true;
    }

    onLogout() {
        this.chatService.logOut();
        this.socketIOService.RemoveUser();
        sessionStorage.clear();
        localStorage.clear();
        this.logi = false;
        //location.reload();


    }

    Logout() {
        this.socketIOService.RemoveUser();
        sessionStorage.clear();
        localStorage.clear();
        location.reload();
    }

    async onRegister() {
        this.registrationMessage = 'registering ...';
        try {
            await this.chatService.getPlugin(RegistrationPlugin).register(
                this.username,
                this.password,
                this.service,
                this.domain
            );
            this.registrationMessage = 'registration successful';
        } catch (e) {
            this.registrationMessage = 'registration failed: ' + e.toString();
            throw e;
        }

    }

    onAddContact() {
        this.chatService.addContact(this.otherJid);
    }

    onRemoveContact() {
        this.chatService.removeContact(this.otherJid);
    }

    onOpenChat() {
        this.chatListStateService.openChat(this.chatService.getOrCreateContactById(this.otherJid));
    }

    private async stateChanged(state: 'disconnected' | 'connecting' | 'online') {
        console.log('state changed!', state);
    }

    onReconnect() {
        this.chatService.reconnect();
    }

}
