import { ListDataBroker, UIDataBroker, CRUD } from "app-base-lib";
import { IChannelItem, IChannelSection } from "./channel.interface";
import { ChannelsDataBrokerConfig } from "./channels-data-broker-config.interface";
import { ChannelsDataBrokerEvent } from "./channels-data-broker-event.interface";
import { ChannelsDataBrokerSearchConstraint } from "./channels-data-broker-search-constraint.interface";

export interface ChannelsDataBroker extends ListDataBroker<IChannelSection, IChannelSection, ChannelsDataBrokerSearchConstraint, ChannelsDataBrokerEvent>, UIDataBroker<IChannelSection, IChannelSection, ChannelsDataBrokerSearchConstraint, ChannelsDataBrokerEvent> {

    getConfig(): ChannelsDataBrokerConfig;

    canCRUDItem(crudType: CRUD, channelItem?: IChannelItem): Promise<boolean>;

    onCRUDItem(crudType: CRUD, item?: IChannelItem): Promise<IChannelItem>;

    onExplore(channelItem: IChannelItem): Promise<any>;
}