import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelEditorPageComponent } from './channel-editor-page.component';

describe('ChannelEditorPageComponent', () => {
  let component: ChannelEditorPageComponent;
  let fixture: ComponentFixture<ChannelEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelEditorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
