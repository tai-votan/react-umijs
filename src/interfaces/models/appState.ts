import type { IHome } from "./home";
import type { IPostState } from "@/models/post";

export interface AppStates {
  home: IHome;
  post: IPostState;
  loading: {
    global: boolean;
    models: Record<string, boolean>;
    effects: Record<string, boolean>;
  };
}
