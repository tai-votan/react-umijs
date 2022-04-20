import { getPost } from "@/services/post";
import type { Effect, Reducer } from "umi";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostState {
  posts: IPost[];
  postDetails: IPost;
}

export interface IPostModel {
  namespace: string;
  state: {
    posts: IPost[];
  };
  effects: {
    getPost: Effect;
  };
  reducers: {
    updateState: Reducer<IPostState>;
    clearState: Reducer<IPostState>;
  };
}

const initState: IPostState = {
  posts: [],
  postDetails: {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  },
};

const MainModel: IPostModel = {
  namespace: "post",
  state: initState,
  effects: {
    *getPost({ payload }, { put, call }) {
      const res = yield call(getPost, payload);

      yield put({
        type: "updateState",
        payload: {
          postDetails: res,
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
