import { Effect, Reducer } from "umi";

export interface IHome {
  count: number;
}

export interface IHomeModel {
  namespace: string;
  state: IHome;
  effects: {
    updateCount: Effect;
    resetCount: Effect;
  };
  reducers: {
    updateState: Reducer<IHome>;
    clearState: Reducer<IHome>;
  };
}
