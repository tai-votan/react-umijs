import { IHome, IHomeModel } from "@/interfaces/models/home";

const initState: IHome = {
  count: 0,
};

const MainModel: IHomeModel = {
  namespace: "home",
  state: initState,
  effects: {
    *updateCount({ payload }, { put }) {
      yield put({
        type: "updateState",
        payload: {
          count: payload.count,
        },
      });
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
