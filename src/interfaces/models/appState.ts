import type { IHome } from "./home";

export interface AppStates {
  home: IHome;
  loading: {
    global: boolean;
    models: Record<string, boolean>;
    effects: Record<string, boolean>;
  };
}
