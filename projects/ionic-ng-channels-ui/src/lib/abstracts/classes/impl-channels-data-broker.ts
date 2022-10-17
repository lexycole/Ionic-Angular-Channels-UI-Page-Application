import { LoadingController } from "@ionic/angular/providers/loading-controller";
import { ToastController } from "@ionic/angular/providers/toast-controller";
import { CRUD } from "app-base-lib";
import { ChannelsDataBroker } from "../interfaces/channels-data-broker";
import { ChannelsDataBrokerConfig } from "../interfaces/channels-data-broker-config.interface";
import { ChannelsDataBrokerEvent } from "../interfaces/channels-data-broker-event.interface";
import { ChannelsDataBrokerSearchConstraint } from "../interfaces/channels-data-broker-search-constraint.interface";
import { IonListDataBroker } from "vicky-ionic-ng-lib";
import { IChannelItem, IChannelSection } from "../interfaces/channel.interface";
import { ActionSheetController, AlertController } from "@ionic/angular";

export abstract class ImplChannelsDataBroker extends IonListDataBroker<IChannelSection, IChannelSection, ChannelsDataBrokerSearchConstraint, ChannelsDataBrokerEvent> implements ChannelsDataBroker {

  constructor(actionSheetCtrl: ActionSheetController, alertCtrl: AlertController, toastCtrl: ToastController,
    loadingCtrl: LoadingController, paginationOptions: {
      perPage: number;
      append?: boolean;
    }, fetchOneResultAsLatest: boolean = true) {
    super(actionSheetCtrl, alertCtrl, toastCtrl, loadingCtrl, paginationOptions, 'id', fetchOneResultAsLatest);
  }

  abstract canCRUDItem(crudType: CRUD, channelItem?: IChannelItem): Promise<boolean>;

  abstract onCRUDItem(crudType: CRUD, item?: IChannelItem): Promise<IChannelItem>;

  abstract onExplore(channelItem: IChannelItem): Promise<any>;

  abstract override getConfig(): ChannelsDataBrokerConfig;

}