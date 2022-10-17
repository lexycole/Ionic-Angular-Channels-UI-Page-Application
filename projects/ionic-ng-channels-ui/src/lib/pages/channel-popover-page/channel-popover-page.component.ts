import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IChannelItem } from '../../abstracts/interfaces/channel.interface';
import { ChannelsDataBroker } from '../../abstracts/interfaces/channels-data-broker';
import { ChannelsDataBrokerConfig, ChannelsDataBrokerConfigItemIndcIconConfig, ChannelsDataBrokerConfigItemIndcImageConfig, ChannelsDataBrokerServiceToken } from '../../abstracts/interfaces/channels-data-broker-config.interface';

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
 }

@Component({
  selector: 'channels-ui-channel-popover-page',
  templateUrl: './channel-popover-page.component.html',
  styleUrls: ['./channel-popover-page.component.css']
})

export class ChannelPopoverPageComponent implements OnInit {

  private config : ChannelsDataBrokerConfig;

  @Input() indicatorConfig!:ChannelsDataBrokerConfigItemIndcIconConfig|ChannelsDataBrokerConfigItemIndcImageConfig;

  // @Input() channelItem: IChannelItem = {
  //   id: 0,
  //   title: '',
  //   description: '',
  //   thumbnail:'',
  //   createdAt: new Date(),

  //   sectionId: 0,
  // };
  // item:any;
 
  // @Input()
  // channelSection!: IChannelSection[];

 // General Channels
//  channelItem: IChannelItem[] = [
//   {
//     id: getRandomNumber(), 
//     title: 'lounge',
//     description: 'Lounge is a channel for chatting with other people.',
//     image: 'assets/images/hashtag.svg',
//     createdAt: new Date(),
//   },
//   {
//     id: getRandomNumber(),
//       title: 'Products',
//       description: 'Products is a channel for chatting with other people.',
//       image: 'assets/images/hashtag.svg',
//       createdAt: new Date(),
//     },
//     {
//       id: getRandomNumber(),
//       title: 'Industry',
//       description: 'Industry is a channel for chatting with other people.',
//       image: 'assets/images/hashtag.svg',
//       createdAt: new Date()
//     },
//     {
//       id: getRandomNumber(),
//       title: 'Humour',
//       description: 'Humour is a channel for chatting with other people.',
//       image: 'assets/images/hashtag.svg',
//       createdAt: new Date()
//     },
//     {
//       id: getRandomNumber(),
//       title: 'Voice-Channel',
//       description: 'Voice-Channel is a channel for chatting with other people.',
//       image: 'assets/images/hashtag.svg',
//       createdAt: new Date()
//     }
// ];

// trackByChannelId(index: any, item: any) {
//   return item.id;
//   } 

  constructor(@Inject(ChannelsDataBrokerServiceToken) private channelsDataBroker:ChannelsDataBroker , public popoverController: PopoverController) {

    this.config = this.channelsDataBroker.getConfig();

    this.indicatorConfig = this.indicatorConfig || this.config.ui.general?.custom?.channelsUI.sections.items.indicator;
  }

  ngOnInit(): void {
  }

    deleteChannelItem() {
      this.popoverController.dismiss({
        action:'delete',
        // channelItem:this.channelItem,
      });
    }

    editChannelItem() { 
      this.popoverController.dismiss({
        action:'edit',
        // channelItem:this.channelItem,
      });
      
    // this.onEdit.emit(this.channelItem);
    //   onDidDismiss((modalResp) => {
    //     const result = modalResp.data;
    //     if (result) {
    //     }
    //   })
    }

  close(){
    this.popoverController.dismiss();
  }

}

