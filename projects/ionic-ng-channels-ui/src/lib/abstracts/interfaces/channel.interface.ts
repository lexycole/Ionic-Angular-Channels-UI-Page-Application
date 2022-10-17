import { ID } from "app-base-lib";

//Library Interface
export interface IChannelItem {
  id: ID;
  title: string;
  description: string;
  thumbnail?: {
    url?: string;
  },
  ionIcon?: {
    name?: string,
  }
  sectionId: ID;
  createdAt: Date,
}

export interface IChannelSection {
  id: ID,
  title: string,
  items: IChannelItem[],
  createdAt: Date,
};
