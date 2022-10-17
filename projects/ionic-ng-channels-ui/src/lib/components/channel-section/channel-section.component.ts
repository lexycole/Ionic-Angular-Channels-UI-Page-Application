import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { IChannelSection } from '../../abstracts/interfaces/channel.interface';
import { ChannelsDataBrokerConfigItemIndcIconConfig, ChannelsDataBrokerConfigItemIndcImageConfig } from '../../abstracts/interfaces/channels-data-broker-config.interface';
import { ACTION_SHEET_FUNCTION, ACTION_SHEET_OPTIONS } from 'app-base-lib';

@Component({
  selector: 'channels-ui-channel-section',
  templateUrl: './channel-section.component.html',
  styleUrls: ['./channel-section.component.css']
})
export class ChannelSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('template', { static: true }) template: any;
  @Input()
  channelSection!: IChannelSection
  @Input() indicatorConfig!: ChannelsDataBrokerConfigItemIndcIconConfig | ChannelsDataBrokerConfigItemIndcImageConfig;
  @Input() actionSheetFunction!: ACTION_SHEET_FUNCTION;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }


}
