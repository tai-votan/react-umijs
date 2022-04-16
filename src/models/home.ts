import type { IHome, IHomeModel } from "@/interfaces/models/home";
import { getFeeds } from "@/services/feed";
import type { AppStates } from "@/interfaces";

const initState: IHome = {
  posts: [],
};

const MainModel: IHomeModel = {
  namespace: "home",
  state: initState,
  effects: {
    *getFeeds({ payload }, { put, call, select }) {
      const res = yield call(getFeeds, payload);
      const { posts } = yield select(({ home }: AppStates) => home);
      let postResponse = posts.concat(res.posts);
      if (payload.page === 1) {
        postResponse = res.posts;
      }
      yield put({
        type: "updateState",
        payload: {
          posts: postResponse,
        },
      });
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
