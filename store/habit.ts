import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { Habit } from '~/interfaces/Habit';

import { RootState } from ".";



export const ADD_NEW_HABIT = 'addNewHabit';
export const UPDATE_HABIT = 'updateHabit';
export const CHANGE_HABIT_ORDER = 'changeHabitOrder';
export const DELETE_HABIT = 'deleteHabit';



const mutations: MutationTree<RootState> = {
  [`${ADD_NEW_HABIT}`](state, text: string) {
    state.habits.push({
      id: ++state.habitId,
      text,
      isCompleted: false
    });
  },
  [`${UPDATE_HABIT}`](state, habit: Habit) {
    let _habit = state.habits.find((x: Habit) => x.id === habit.id);
    _habit = { ...habit };
  },
  [`${CHANGE_HABIT_ORDER}`](state, habits: Habit[]) {
    state.habits = [...habits];
  },
  [`${DELETE_HABIT}`](state, id: number) {
    state.habits = state.habits.filter((x: Habit) => x.id !== id);
  }
};

const actions: ActionTree<RootState, RootState> = {
  [`${ADD_NEW_HABIT}`]({ commit }, payload) {
    commit(ADD_NEW_HABIT, payload);
  },
  [`${UPDATE_HABIT}`]({ commit }, payload) {
    commit(UPDATE_HABIT, payload);
  },
  [`${CHANGE_HABIT_ORDER}`]({ commit }, payload) {
    commit(CHANGE_HABIT_ORDER, payload);
  },
  [`${DELETE_HABIT}`]({ commit }, payload) {
    commit(DELETE_HABIT, payload);
  }
};

const getters: GetterTree<RootState, RootState> = {
  habits(state) {
    return state.habits;
  }
};

export default {
  mutations, actions, getters
};
