import { createStore, Store as VuexStore, createLogger } from 'vuex'
import { state } from './state'
import { mutations } from './mutations'
import { actions, ActionTypes } from './actions'
import { getters } from './getters'
import type { CommitOptions, DispatchOptions } from 'vuex'
import type { State } from './state'
import type { Mutations } from './mutations'
import type { Actions } from './actions'
import type { Getters } from './getters'

export const store = createStore<State>({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {},

  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : []
})

export function useStore() {
  return store as Store
}

export type Store = Omit<VuexStore<State>, 'getters' | 'commit' | 'dispath'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    option?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
