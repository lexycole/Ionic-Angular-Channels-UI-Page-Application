import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPopoverPageComponent } from './channel-popover-page.component';

describe('ChannelPopoverPageComponent', () => {
  let component: ChannelPopoverPageComponent;
  let fixture: ComponentFixture<ChannelPopoverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelPopoverPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPopoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
