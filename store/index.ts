import { GetterTree, ActionTree, MutationTree } from 'vuex';

import { Todo } from '~/interfaces/Todo';

export const ADD_NEW_TODO = 'addNewTodo';
export const UPDATE_TODO = 'updateTodo';
export const CHANGE_TODO_ORDER = 'changeTodoOrder';
export const DELETE_TODO = 'deleteTodo';

export type RootState = ReturnType<typeof state>

const state = () => ({
  todos: [] as Todo[],
  id: 0 as number
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
    state.todos = [ ...todos ];
  }
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
  }
};

const getters: GetterTree<RootState, RootState> = {
  todos(state) {
    return state.todos;
  }
};

export default {
  state, mutations, actions, getters
};
