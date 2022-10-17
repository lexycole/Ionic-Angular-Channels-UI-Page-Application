import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, InfiniteScrollCustomEvent, IonInfiniteScroll, IonRefresher, LoadingController, ModalController, RefresherCustomEvent, SpinnerTypes } from '@ionic/angular';
import { CRUD, RESULT, EDITOR_CRUD_MODE } from 'app-base-lib';
import { AfterViewInit } from '@angular/core';
import { LOADER_STATE, ListDataBrokerLoadUIManager, LoaderComponent, PAGE_SECTION_POSITION } from 'vicky-ionic-ng-lib';
import { from, Observable, Subject } from 'rxjs';
import { ViewChild } from '@angular/core';
import { IChannelItem, IChannelSection } from '../../abstracts/interfaces/channel.interface';
import { ChannelsDataBrokerConfig, ChannelsDataBrokerConfigItemIndcIconConfig, ChannelsDataBrokerConfigItemIndcImageConfig, ChannelsDataBrokerServiceToken } from '../../abstracts/interfaces/channels-data-broker-config.interface';
import { ChannelsDataBroker } from '../../abstracts/interfaces/channels-data-broker';
import { ChannelsDataBrokerSearchConstraint } from '../../abstracts/interfaces/channels-data-broker-search-constraint.interface';
import { ChannelsDataBrokerEvent } from '../../abstracts/interfaces/channels-data-broker-event.interface';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';


export enum CHANNEL_EDITOR_PAGE_KIND { SECTION = 1, CHANNEL };

@Component({
  selector: 'channels-ui-channel-editor-page',
  templateUrl: './channel-editor-page.component.html',
  styleUrls: ['./channel-editor-page.component.css']
})
export class ChannelEditorPageComponent implements OnInit {
  @Input()
  private mode !: EDITOR_CRUD_MODE;

  CHANNEL_EDITOR_PAGE_KIND = CHANNEL_EDITOR_PAGE_KIND;

  @Input()
  kind!: CHANNEL_EDITOR_PAGE_KIND;

  private config!: ChannelsDataBrokerConfig;

  @Input() btnPosition!: PAGE_SECTION_POSITION;

  @Input() addBtnText!: string;

  @Input() editBtnText!: string;

  get btnText() {
    return this.mode == CRUD.CREATE ? this.addBtnText : this.editBtnText;
  }

  @Input() pageTitle!: string;

  @Input() showTitle!: boolean;

  @Input() validationMsg1!: any;

  @Input() validationMsg2!: any;

  todoForm!: FormGroup;

  position = PAGE_SECTION_POSITION;

  title!: string;
  description!: string;

  constructor(@Inject(ChannelsDataBrokerServiceToken) private channelsDataBroker: ChannelsDataBroker,
    public modalCtlr: ModalController, public alertController: AlertController, private formBuilder: FormBuilder) { }

  async ngOnInit(): Promise<void> {

    this.config = this.channelsDataBroker.getConfig();

    this.pageTitle = this.pageTitle || this.config.ui.pages.channelEditor.title.label;

    this.addBtnText = this.addBtnText || this.config.ui.pages.channelEditor.buttons.main.backLabel || 'add';

    this.editBtnText = this.editBtnText || this.config.ui.pages.channelEditor.buttons.main.backLabel || 'edit';

    this.showTitle = this.showTitle || !this.config.ui.pages.channelEditor.title.invisible;

    this.btnPosition = this.btnPosition || this.config.ui.general.buttons?.core.sectionPosition || this.position.IN_CONTENT;

    this.validationMsg1 = this.validationMsg1 || 'Field cannot be empty, please enter a title';

    this.validationMsg2 = this.validationMsg2 || 'Field cannot be empty, please enter a description';


    this.todoForm = this.formBuilder.group({
      //Validating if url format is valid
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    if (this.mode == CRUD.UPDATE) {
      // path current values
      this.todoForm.patchValue({ title: this.title })
      this.todoForm.patchValue({ description: this.description })
    }


  }
  //This method performs a progress action when a user add a new url
  async next() {
    const link: IChannelItem = {
      id: null!,
      title: this.todoForm.value.title,
      description: this.todoForm.value.description,
      sectionId: null!,
      createdAt: null!,
    };

    await this.modalCtlr.dismiss({
      reason: 'success',
      data: link,
    } as RESULT<IChannelItem, any>);
  }

  // Method to close the todos editor
  async close() {
    await this.modalCtlr.dismiss({
      reason: 'close'
    } as RESULT<IChannelItem, any>);
  }
}