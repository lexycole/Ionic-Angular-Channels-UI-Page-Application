import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, InfiniteScrollCustomEvent, IonInfiniteScroll, IonRefresher, LoadingController, ModalController, RefresherCustomEvent, SpinnerTypes } from '@ionic/angular';
import { CRUD, RESULT, PaginatedDataManager, ACTION_SHEET_FUNCTION } from 'app-base-lib';
import { AfterViewInit } from '@angular/core';
import { LOADER_STATE, ListDataBrokerLoadUIManager, LoaderComponent } from 'vicky-ionic-ng-lib';
import { from, Observable, Subject } from 'rxjs';
import { ViewChild } from '@angular/core';
import { IChannelItem, IChannelSection } from '../../abstracts/interfaces/channel.interface';
import { ChannelsDataBrokerConfig, ChannelsDataBrokerConfigItemIndcIconConfig, ChannelsDataBrokerConfigItemIndcImageConfig, ChannelsDataBrokerServiceToken } from '../../abstracts/interfaces/channels-data-broker-config.interface';
import { ChannelsDataBroker } from '../../abstracts/interfaces/channels-data-broker';
import { ChannelEditorPageComponent, CHANNEL_EDITOR_PAGE_KIND } from '../channel-editor-page/channel-editor-page.component';
import { ChannelsDataBrokerSearchConstraint } from '../../abstracts/interfaces/channels-data-broker-search-constraint.interface';
import { ChannelsDataBrokerEvent } from '../../abstracts/interfaces/channels-data-broker-event.interface';

@Component({
  selector: 'channels-ui-channels-page',
  templateUrl: './channels-page.component.html',
  styleUrls: ['./channels-page.component.css']
})
export class ChannelsPageComponent implements OnInit {

  indicatorConfig!: ChannelsDataBrokerConfigItemIndcIconConfig | ChannelsDataBrokerConfigItemIndcImageConfig;

  @ViewChild(LoaderComponent, { static: true })
  private loaderComponent!: LoaderComponent;

  public spinnerType !: SpinnerTypes;

  private config !: ChannelsDataBrokerConfig;

  public showAddBtn!: boolean;

  public canDeleteSection!: boolean;
  public canEditSection!: boolean;

  public canDeleteItem!: boolean;
  public canEditItem!: boolean;
  public canCreateItem!: boolean;

  public pageTitle!: string;
  public showTitle!: boolean;

  public refreshEnabled!: boolean;
  public infiniteScrollEnabled!: boolean;

  public actionSheetFunction!: ACTION_SHEET_FUNCTION;

  private listDataBrokerLoadUIManager!: ListDataBrokerLoadUIManager<IChannelSection, IChannelSection, ChannelsDataBrokerSearchConstraint, ChannelsDataBrokerEvent>;
  private paginatedDataManager!: PaginatedDataManager<IChannelSection>;

  infiniteScrollLoadingText!: string;

  public get channelSections(): IChannelSection[] {
    return this.paginatedDataManager.data;
  }

  constructor(@Inject(ChannelsDataBrokerServiceToken) private channelsDataBroker: ChannelsDataBroker,
    public modalCtlr: ModalController, public alertController: AlertController) {

    this.config = this.channelsDataBroker.getConfig();

    this.actionSheetFunction = this.channelsDataBroker.showActionSheet.bind(this.channelsDataBroker);

    this.indicatorConfig = this.config.ui.general.custom?.channelsUI?.sections.items.indicator!;

    const thiz = this;
    this.listDataBrokerLoadUIManager = new class extends ListDataBrokerLoadUIManager<IChannelSection, IChannelSection, ChannelsDataBrokerSearchConstraint, ChannelsDataBrokerEvent>{
      protected getLoaderComponent(): LoaderComponent {
        return thiz.loaderComponent;
      }
      constructor() {
        super({ append: true }, thiz.channelsDataBroker);
      }
    };

    this.paginatedDataManager = this.listDataBrokerLoadUIManager.getPaginatedDataManager();
  }

  async ngOnInit(): Promise<void> {

    this.spinnerType = this.config.ui.general.spinner.type || 'bubbles';

    this.showAddBtn = await this.channelsDataBroker.canCRUDItem(CRUD.CREATE);

    this.canDeleteSection = await this.channelsDataBroker.canCRUDItem(CRUD.DELETE);
    this.canEditSection = await this.channelsDataBroker.canCRUDItem(CRUD.UPDATE);

    this.canDeleteItem = await this.channelsDataBroker.canCRUDItem(CRUD.DELETE);
    this.canEditItem = await this.channelsDataBroker.canCRUDItem(CRUD.UPDATE);
    this.canCreateItem = await this.channelsDataBroker.canCRUDItem(CRUD.CREATE);

    const config = this.config;
    this.pageTitle = config.ui.pages.channels.title.label;
    this.showTitle = !config.ui.pages.channels.title.invisible;
  }

  explore(channelItem: IChannelItem) {
    console.log('LinksPage.explore() :', channelItem);
    this.channelsDataBroker.onExplore(channelItem);
  }

  async addNewSection() {

    const afterCreateSubject = new Subject<IChannelSection>();

    afterCreateSubject.subscribe({
      next: (link: IChannelSection) => {
        this.listDataBrokerLoadUIManager.reflectDataIntoPaginatedDataManager('create', link);
      }
    });

    const pageConfig = this.config.ui.pages.channels;

    this.channelsDataBroker.runCreateUIFlow({
      input: {
        get: async () => {

          return new Promise<RESULT<IChannelSection, any>>((resolve, reject) => {

            this.modalCtlr.create({
              component: ChannelEditorPageComponent,
              componentProps: {
                kind: CHANNEL_EDITOR_PAGE_KIND.SECTION
              }
            }).then((modal) => {
              modal.onDidDismiss().then(async (resp) => {

                const result = resp.data as RESULT<IChannelSection, any>;

                resolve(result);
              });
              modal.present().then();
            });
          });
        },
        messages: {
          failure: pageConfig.crud?.create?.messages?.failure || 'Oops something went wrong, pls try again'
        },
      },
      crudEvent: {
        before: {
          progress: {
            title: 'Please wait...',
            // spinner: this.config.spinner.type || 'bubbles',
            message: pageConfig.behavior.progressMsg || 'Creating your Channel',
          },
        },
        after: {
          subject: afterCreateSubject,
          messages: {
            success: pageConfig.crud?.create?.messages?.success || 'IChannelSection meta info added successfully',
            failure: pageConfig.crud?.create?.messages?.failure || 'Oops something went wrong, pls try again',
          }
        }
      }
    });
  }

  async editItem(channelItem: IChannelItem) {
    throw new Error('not yet implemented');
  }

  async deleteItem(channelItem: IChannelItem) {

  }

  async editSection(channelSection: IChannelSection) {
    throw new Error('not yet implemented');
  }

  async deleteSection(channelSection: IChannelSection) {

    console.log('ChannelSectionPage.delete() :', channelSection);

    await this.presentAlertConfirm();

    const linksConfig = this.config.ui.pages.channels;
    const afterDeleteSubject = new Subject<IChannelSection>();

    afterDeleteSubject.subscribe({
      next: (link: IChannelSection) => {
      },
      error: (err: any) => {
        this.listDataBrokerLoadUIManager.reflectDataIntoPaginatedDataManager('create', channelSection);
      }
    });

    this.channelsDataBroker.runDeleteUIFlow({
      data: channelSection,
      crudEvent: {
        before: {
          callback: async () => {
            this.listDataBrokerLoadUIManager.reflectDataIntoPaginatedDataManager('delete', channelSection);
          }
        },
        after: {
          subject: afterDeleteSubject,
          messages: {
            failure: linksConfig.crud?.delete?.messages?.failure || 'Sorry, could not delete channel'
          }
        }
      }
    });
  }

  onLoaderStateChange(s: any) {
    const state = s as unknown as LOADER_STATE;
    console.log(s + ' as ' + state)
    if (state == LOADER_STATE.LOADING) {
      this.loadInitial();
    }
  }

  private async loadInitial() {
    this.listDataBrokerLoadUIManager.handleLoader(this.loaderComponent).subscribe((channelSections: IChannelSection[]) => {
      console.log('linksDetailEditorPage.loadInitial() success :', channelSections);
    }, (err) => {
      console.log('linksDetailEditorPage.loadInitial() error :', err);
    });
  }

  public paginate(ev: Event): void {
    const event = ev as InfiniteScrollCustomEvent;
    this.listDataBrokerLoadUIManager.handleInfiniteScroll(event.target as unknown as IonInfiniteScroll).subscribe((channelSections: IChannelSection[]) => {
      console.log('linksDetailEditorPage.paginate() success :', channelSections);
    },
      err => {
        console.log('linksDetailEditorPage.paginate() error :', err);
      });
  }

  // Refreshing
  refresh(ev: Event) {
    const event = ev as RefresherCustomEvent;
    console.log(ev);

    this.listDataBrokerLoadUIManager.handleSwipeRefresh(event.target as unknown as IonRefresher).subscribe((channelSections: IChannelSection[]) => {
      console.log('channelsPage.refresh() success :', channelSections);
    },
      err => {
        console.log('channelsPage.refresh() error :', err);
      });
  }

  //Alert
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete this channel section?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          id: 'cancel-button'
        }, {
          text: 'Okay',
          id: 'confirm-button'
        }
      ]
    });

    await alert.present();
  }

}
