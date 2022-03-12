import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Actions } from "./actions";
import { Getters } from "./getters";
import { Mutations } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};
// Omit<Store<RouteState>, "commit"> -> Store에서 commit만 뺴고 전부 들고 오는 타입을 의미
// commit은 MyMutations로 재정의

type MyGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export type MyStore = Omit<
  Store<RootState>,
  "getters" | "commit" | "dispatch"
> &
  MyMutations &
  MyActions &
  MyGetters;
