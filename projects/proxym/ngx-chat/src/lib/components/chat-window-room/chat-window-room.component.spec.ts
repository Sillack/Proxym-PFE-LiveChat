import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWindowRoomComponent } from './chat-window-room.component';

describe('ChatWindowRoomComponent', () => {
  let component: ChatWindowRoomComponent;
  let fixture: ComponentFixture<ChatWindowRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWindowRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWindowRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
