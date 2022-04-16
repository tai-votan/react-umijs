import type { IHome, IHomeModel } from "@/interfaces/models/home";
import { getFeeds } from "@/services/feed";

const initState: IHome = {
  count: 0,
};

const MainModel: IHomeModel = {
  namespace: "home",
  state: initState,
  effects: {
    *updateCount({ payload }, { put, call }) {
      yield put({
        type: "updateState",
        payload: {
          count: payload.count,
        },
      });
      console.log(`Func: updateCount - PARAMS: payload`, payload);
      const params = {
        page: payload.count,
      };
      const res = yield call(getFeeds, params);
      console.log(`Func: updateCount - PARAMS: res`, res);
    },
    *resetCount(_, { put }) {
      yield put({ type: "clearState" });
    },
  },
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearState() {
      return {
        ...initState,
      };
    },
  },
};

export default MainModel;
