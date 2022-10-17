import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IChannelItem, IChannelSection } from '../../abstracts/interfaces/channel.interface';
import { ChannelsDataBrokerConfigItemIndcIconConfig, ChannelsDataBrokerConfigItemIndcImageConfig } from '../../abstracts/interfaces/channels-data-broker-config.interface';
import { ACTION_SHEET_FUNCTION, ACTION_SHEET_OPTIONS } from 'app-base-lib';

@Component({
  selector: 'channels-ui-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  @Input() indicatorConfig!: ChannelsDataBrokerConfigItemIndcIconConfig | ChannelsDataBrokerConfigItemIndcImageConfig;

  @Input()
  channelSections!: IChannelSection[];

  @Input()
  sectionDeletable!: boolean;
  @Input()
  sectionEditable!: boolean;
  @Input()
  itemCreatable!: boolean;
  @Input()
  itemDeletable!: boolean;
  @Input()
  itemEditable!: boolean;

  @Input() actionSheetFunction!: ACTION_SHEET_FUNCTION;

  @Output()
  onItemEdit = new EventEmitter<IChannelItem>();
  @Output()
  onSectionEdit = new EventEmitter<IChannelSection>();
  @Output()
  onSectionDelete = new EventEmitter<IChannelSection>();
  @Output()
  onItemDelete = new EventEmitter<IChannelItem>();
  @Output()
  onExplore = new EventEmitter<IChannelItem>();

  constructor() { }

  ngOnInit(): void {
  }



}