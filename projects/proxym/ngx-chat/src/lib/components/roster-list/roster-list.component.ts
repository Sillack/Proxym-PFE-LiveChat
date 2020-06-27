import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Contact} from '../../core/contact';
import {ChatListStateService} from '../../services/chat-list-state.service';
import {ChatService, ChatServiceToken} from '../../services/chat-service';
import {ThemePalette} from '@angular/material/core';
import {Client, jid} from '@xmpp/client';
import {LogService} from '../../services/log.service';
import {XmppChatAdapter} from '../../services/adapters/xmpp/xmpp-chat-adapter.service';
import {parse} from 'ltx';
import {MultiUserChatPlugin, Room, RoomSummary} from '../../services/adapters/xmpp/plugins/multi-user-chat.plugin';
import {DataService} from '../multi-user-chat/data.service';

@Component({
    selector: 'ngx-chat-roster-list',
    templateUrl: './roster-list.component.html',
    styleUrls: ['./roster-list.component.less'],
    animations: [
        trigger('rosterVisibility', [
            state('hidden', style({
                right: '-14em',
            })),
            state('shown', style({
                right: '0em',
            })),
            transition('hidden => shown', animate('400ms ease')),
            transition('shown => hidden', animate('400ms ease'))
        ]),
        trigger('drawerVisibility', [
            state('hidden', style({
                right: '0em',
            })),
            state('shown', style({
                right: '14em',
            })),
            transition('hidden => shown', animate('400ms ease')),
            transition('shown => hidden', animate('400ms ease'))
        ])
    ]
})
export class RosterListComponent implements OnInit {

    @Input()
    color: ThemePalette;

    @Input()
    rosterState: 'hidden' | 'shown';

    @Input()
    contacts: Observable<Contact[]>;

    @Input()
    contactRequestsReceived$: Observable<Contact[]>;

    @Input()
    contactRequestsSent$: Observable<Contact[]>;

    @Input()
    contactsUnaffiliated$: Observable<Contact[]>;

    hasNoContacts$: Observable<boolean>;

    @Output()
    rosterStateChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    statusColor = '#69ca48';

    theRoom: Room;

    @Output() countChanged: EventEmitter<number> =   new EventEmitter();
    @Output() voted = new EventEmitter<Room>();
    @Output() roomName = new EventEmitter<String>();
    @Output() wind = new EventEmitter<number>();
    selectedRoom: Room;
    nameR: string;
    allRooms: RoomSummary[] = [];

    isOpen = 1;

    imgAway = require('../../../../../../../src/assets/away.png');
    imgAvailable = require('../../../../../../../src/assets/available.png');

    public otherJid: any;
    me: string;

    public client: Client;
    multiUserChatPlugin: MultiUserChatPlugin;
    constructor(@Inject(ChatServiceToken) public chatService: ChatService,
                private chatListService: ChatListStateService, private logService: LogService,
                @Inject(ChatServiceToken) public chatServices: XmppChatAdapter,
                @Inject(ChatServiceToken) private data: DataService) {
        this.multiUserChatPlugin = chatService.getPlugin(MultiUserChatPlugin);
    }

    ngOnInit() {
        if (!this.contacts) {
            this.contacts = this.chatService.contactsSubscribed$;
        }
        if (!this.contactRequestsReceived$) {
            this.contactRequestsReceived$ = this.chatService.contactRequestsReceived$;
        }
        if (!this.contactRequestsSent$) {
            this.contactRequestsSent$ = this.chatService.contactRequestsSent$;
        }
        if (!this.contactsUnaffiliated$) {
            this.contactsUnaffiliated$ = this.chatService.contactsUnaffiliated$;
        }
        this.hasNoContacts$ = combineLatest([
            this.contacts,
            this.contactRequestsReceived$,
            this.contactRequestsSent$,
            this.contactsUnaffiliated$,
        ]).pipe(
            map(([contacts, received, sent, unaffiliated]) => contacts.length + received.length + sent.length + unaffiliated.length === 0)
        );

        this.queryAllRooms();
        this.me = sessionStorage.getItem('username');
    }

    modo(value: string) {
        switch (value) {
            case '1':
                this.sendStanzaChat();
                this.statusColor = '#69ca48';
                break;
            case '2':
                this.sendStanzaAway();
                this.statusColor = '#ffbe00';
                break;
        }
    }

    async joinRoom(roomJid: string) {
        const occupantJid = jid(roomJid);
        this.selectedRoom = await this.multiUserChatPlugin.joinRoom(occupantJid);
        console.log('RoomSelcy', this.isOpen);
        this.queryAllRooms();
        this.voted.emit(this.selectedRoom);
        this.roomName.emit(this.nameR);
        this.wind.emit(this.isOpen);

    }

    async queryAllRooms() {
        this.allRooms = await this.multiUserChatPlugin.queryAllRooms();
    }

    onAddContact() {
        this.chatService.addContact(this.otherJid + '@localhost');
    }

    onRemoveContact() {
        this.chatService.removeContact(this.otherJid + '@localhost');
    }

    onClickContact(contact: Contact) {
        this.chatListService.openChat(contact);
    }

    public send(content: any): PromiseLike<void> {
        this.logService.debug('>>>', content);
        try {
            return this.client.send(content);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    sendStanzaAway() {
        const request = parse('<presence><show>away</show></presence>');
        if (request) {
            return this.chatServices.chatConnectionService.send(request);
        }
    }

    sendStanzaDnd() {
        const request = parse('<presence><show>dnd</show></presence>');
        if (request) {
            return this.chatServices.chatConnectionService.send(request);
        }
    }

    sendStanzaChat() {
        const request = parse('<presence><show>chat</show></presence>');
        if (request) {
            return this.chatServices.chatConnectionService.send(request);
        }
    }

    getName(name: string){
        this.nameR = name;
    }

    toggleVisibility() {
        const newState = this.rosterState === 'shown' ? 'hidden' : 'shown';
        this.rosterStateChanged.emit(newState);
    }

}
