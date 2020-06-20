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
            service: 'wss://localhost:5280/xmpp',
            password: this.password,
            username: this.username,
        };
        localStorage.setItem('data', JSON.stringify(logInRequest));
        sessionStorage.setItem('username', this.username);
        this.chatService.logIn(logInRequest);
        this.loggedUserName = sessionStorage.getItem('username');
        this.AddUser();
    }

    onLogout() {
        this.chatService.logOut();
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
