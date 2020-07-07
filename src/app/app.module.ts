import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {NgxChatModule} from '../../projects/proxym/ngx-chat/src/lib/ngx-chat.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { IconsModule } from '../../projects/proxym/ngx-chat/src/lib/components/icons/icons.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MatVideoModule } from 'mat-video';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxChatModule.forRoot(),
        FormsModule,
        RouterModule.forRoot([]),
        MatSelectModule,
        NgbModule,
        MatSnackBarModule,
        MatCarouselModule,
        CarouselModule,
        WavesModule,
        IconsModule,
        PickerModule,
        MatVideoModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
