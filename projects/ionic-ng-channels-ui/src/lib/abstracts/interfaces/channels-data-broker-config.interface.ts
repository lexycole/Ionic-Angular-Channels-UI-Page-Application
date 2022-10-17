import { InjectionToken } from '@angular/core';
import { ChannelsDataBroker } from './channels-data-broker';
import { IonListUIDataBrokerConfig, IonUIDataBrokerUIPageConfig } from "vicky-ionic-ng-lib";

export type ChannelsDataBrokerConfigItemIndcImageConfig = {
  type: 'image', default?: {
    url?: string,
  }
}

export type ChannelsDataBrokerConfigItemIndcIconConfig = {
  type: 'ion-icon', default?: {
    name?: string
  }
};

export type ChannelsDataBrokerConfig = IonListUIDataBrokerConfig & {

  ui: {
    general: {
      custom?: {
        channelsUI: {
          sections: {
            items: {
              indicator: ChannelsDataBrokerConfigItemIndcIconConfig | ChannelsDataBrokerConfigItemIndcImageConfig
            }
          }
        }
      }
    }
    /**
     * contains all the properties related to the pages
     */
    pages: {
      channels: IonUIDataBrokerUIPageConfig & {
        behavior: {
          progressMsg?: string
        }
      },
      channelEditor: IonUIDataBrokerUIPageConfig & {
        buttons: {
          main: {
            backLabel?: string,
            confirmLabel?: string,
            nextLabel?: string,
          }
        }
      }
    },
  },
}

export const ChannelsDataBrokerServiceToken = new InjectionToken<ChannelsDataBroker>('ChannelsDataBrokerService');
