import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Contact} from '../../core/contact';
import {ChatListStateService} from '../../services/chat-list-state.service';
import {ChatService, ChatServiceToken} from '../../services/chat-service';
import {ThemePalette} from '@angular/material/core';
import {Client, jid, xml} from '@xmpp/client';
import {LogService} from '../../services/log.service';
import {XmppChatAdapter} from '../../services/adapters/xmpp/xmpp-chat-adapter.service';
import {parse, stringify} from 'ltx';
import {MultiUserChatPlugin, Room, RoomSummary} from '../../services/adapters/xmpp/plugins/multi-user-chat.plugin';
import {DataService} from '../multi-user-chat/data.service';
import { Observer } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { imageBase64Url } from '';
import { delay } from 'rxjs/operators';
import {dummyAvatar} from '../../core/contact-avatar';

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

    nickname;

    iqResponse: string;

    imgAway = require('../../../../../../../src/assets/away.png');
    imgAvailable = require('../../../../../../../src/assets/available.png');
    imgDnd = require('../../../../../../../src/assets/dnd.png');

    public otherJid: any;
    me: string;

    base64TrimmedURL: string;
    base64DefaultURL: string;
    generatedImage: string;
    windowOPen: boolean;

    public client: Client;
    multiUserChatPlugin: MultiUserChatPlugin;
    constructor(@Inject(ChatServiceToken) public chatService: ChatService,
                private chatListService: ChatListStateService, private logService: LogService,
                @Inject(ChatServiceToken) public chatServices: XmppChatAdapter,
                @Inject(ChatServiceToken) private data: DataService,
                private domSanitizer: DomSanitizer) {
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
        this.sendIqq(this.me + '@localhost').then(data => {
            const itemChild = data.toString();
            const mySubString = itemChild.match(new RegExp('<PHOTO><BINVAL>' + '(.*)' + '</BINVAL><TYPE>'));
            const nick = itemChild.match(new RegExp('<NICKNAME>' + '(.*)' + '</NICKNAME>'));

            if (mySubString !== null) {
                const mySubb = mySubString.toString().substring(
                    mySubString.toString().lastIndexOf(',') + 1,
                    mySubString.toString().lastIndexOf('=') + 1
                );
                this.nickname = nick.toString().substring(
                    nick.toString().lastIndexOf(',') + 1
                );

                this.getImage('data:image/jpeg;base64,' + mySubb);

            } else {
                this.getImage(dummyAvatar);
            }

        });

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
        this.queryAllRooms();
        this.voted.emit(this.selectedRoom);
        this.roomName.emit(this.nameR);
        this.wind.emit(this.isOpen);

    }

    async queryAllRooms() {
        this.allRooms = await this.multiUserChatPlugin.queryAllRooms();
    }

    onAddContact() {
        if (this.otherJid) {
        this.chatService.addContact(this.otherJid + '@localhost');
        }
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

    getName(name: string) {
        this.nameR = name;
    }

    toggleVisibility() {
        const newState = this.rosterState === 'shown' ? 'hidden' : 'shown';
        this.rosterStateChanged.emit(newState);
    }



    sanatizeUrl(generatedImageUrl): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(generatedImageUrl);
    }

    /* Method to fetch image from Url */
    getBase64ImageFromURL(url: string): Observable<string> {
        return Observable.create((observer: Observer<string>) => {
            // create an image object
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            if (!img.complete) {
                // This will call another method that will create image from url
                img.onload = () => {
                    observer.next(this.getBase64Image(img));
                    observer.complete();
                };
                img.onerror = err => {
                    observer.error(err);
                };
            } else {
                observer.next(this.getBase64Image(img));
                observer.complete();
            }
        });
    }

    /* Method to create base64Data Url from fetched image */
    getBase64Image(img: HTMLImageElement): string {
        // We create a HTML canvas object that will create a 2d image
        const canvas: HTMLCanvasElement = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        // This will draw image
        ctx.drawImage(img, 0, 0);
        // Convert the drawn image to Data URL
        const dataURL: string = canvas.toDataURL('image/png');
        this.base64DefaultURL = dataURL;
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
    }

    getImage(imageUrl: string) {
        this.windowOPen = true;
        this.getBase64ImageFromURL(imageUrl).subscribe((base64Data: string) => {
            this.base64TrimmedURL = base64Data;
            this.createBlobImageFileAndShow();
        });
    }

    getImageWithoutWindowOpen(imageUrl: string) {
        this.windowOPen = false;
        this.getBase64ImageFromURL(imageUrl).subscribe((base64Data: string) => {
            this.base64TrimmedURL = base64Data;
            this.createBlobImageFileAndShow();
        });
    }

    /* Method that will create Blob and show in new window */
    createBlobImageFileAndShow(): void {
        this.dataURItoBlob(this.base64TrimmedURL).subscribe((blob: Blob) => {
            const imageBlob: Blob = blob;
            const imageName: string = this.generateName();
            const imageFile: File = new File([imageBlob], imageName, {
                type: 'image/jpeg'
            });
            this.generatedImage = window.URL.createObjectURL(imageFile);
            // on demo image not open window
          /*  if (this.windowOPen) {
                window.open(this.generatedImage);
            }*/
        });
    }

    /**Method to Generate a Name for the Image */
    generateName(): string {
        const date: number = new Date().valueOf();
        let text = '';
        const possibleText =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            text += possibleText.charAt(
                Math.floor(Math.random() * possibleText.length)
            );
        }
        // Replace extension according to your media type like this
        return date + '.' + text + '.jpeg';
    }

    /* Method to convert Base64Data Url as Image Blob */
    dataURItoBlob(dataURI: string): Observable<Blob> {
        return Observable.create((observer: Observer<Blob>) => {
            const byteString: string = window.atob(dataURI);
            const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
            const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
                int8Array[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([int8Array], { type: 'image/jpeg' });
            observer.next(blob);
            observer.complete();
        });
    }

    async sendIq() {
        const request = parse('');
        if (request) {
            const response = await this.chatServices.chatConnectionService.sendIq(request);
            this.iqResponse = stringify(response, 4, 1);
        }
    }

    async sendIqq(jid: string) {

        const response = await this.chatServices.chatConnectionService.sendIq(
            xml('iq', {type: 'get', to: jid, id: this.chatServices.chatConnectionService.getNextIqId()},
                xml('vCard', {xmlns: 'vcard-temp'})
            ));
        return response;
    }

}
