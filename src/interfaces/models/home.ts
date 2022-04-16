import type { Effect, Reducer } from "umi";
import type { IFeed } from "@/interfaces";

export interface IHome {
  posts: IFeed[];
}

export interface IHomeModel {
  namespace: string;
  state: IHome;
  effects: {
    getFeeds: Effect;
  };
  reducers: {
    updateState: Reducer<IHome>;
    clearState: Reducer<IHome>;
  };
}
