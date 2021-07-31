export const ADD_NEW_TODO = 'addNewTodo';
export const UPDATE_TODO = 'updateTodo';

const state = () => ({
  todos: [],
  id: 0
});

const mutations = {
  [`${ADD_NEW_TODO}`](state: any, text: any) {
    state.todos.push({
      id: ++state.id,
      text,
      isCompleted: false
    });
  },
  [`${UPDATE_TODO}`](state: any, todo: any) {
    let _todo = state.todos.find((x: any) => x.id === todo.id);
    _todo = { ...todo };
  }
};

const actions = {
  [`${ADD_NEW_TODO}`]({ commit }: any, payload: any) {
    commit(ADD_NEW_TODO, payload);
  },
  [`${UPDATE_TODO}`]({ commit }: any, payload: any) {
    commit(UPDATE_TODO, payload);
  }
};

const getters = {
  todos(state: any) {
    return state.todos;
  }
};

export default {
  state, mutations, actions, getters
};
