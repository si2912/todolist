import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { Daily } from '~/interfaces/Daily';
import { Habit } from '~/interfaces/Habit';

import { Todo } from '~/interfaces/Todo';

import habit from './habit';

export const ADD_NEW_TODO = 'addNewTodo';
export const UPDATE_TODO = 'updateTodo';
export const CHANGE_TODO_ORDER = 'changeTodoOrder';
export const DELETE_TODO = 'deleteTodo';

export type RootState = ReturnType<typeof state>

const state = () => ({
  habits: [] as Habit[],
  dailies: [] as Daily[],
  todos: [] as Todo[],
  id: 0 as number,
  habitId: 0 as number,
  dailyId: 0 as number,
});

const mutations: MutationTree<RootState> = {
  [`${ADD_NEW_TODO}`](state, text: string) {
    state.todos.push({
      id: ++state.id,
      text,
      isCompleted: false
    });
  },
  [`${UPDATE_TODO}`](state, todo: Todo) {
    let _todo = state.todos.find((x: Todo) => x.id === todo.id);
    _todo = { ...todo };
  },
  [`${CHANGE_TODO_ORDER}`](state, todos: Todo[]) {
    state.todos = [...todos];
  },
  [`${DELETE_TODO}`](state, id: number) {
    state.todos = state.todos.filter((x: Todo) => x.id !== id);
  },
  ...habit.mutations
};

const actions: ActionTree<RootState, RootState> = {
  [`${ADD_NEW_TODO}`]({ commit }, payload) {
    commit(ADD_NEW_TODO, payload);
  },
  [`${UPDATE_TODO}`]({ commit }, payload) {
    commit(UPDATE_TODO, payload);
  },
  [`${CHANGE_TODO_ORDER}`]({ commit }, payload) {
    commit(CHANGE_TODO_ORDER, payload);
  },
  [`${DELETE_TODO}`]({ commit }, payload) {
    commit(DELETE_TODO, payload);
  },
  ...habit.actions
};

const getters: GetterTree<RootState, RootState> = {
  habits(state) {
    return state.habits;
  },
  dailies(state) {
    return state.dailies;
  },
  todos(state) {
    return state.todos;
  },
  id(state) {
    return state.id;
  },
  ...habit.getters
};

export default {
  state, mutations, actions, getters
};
