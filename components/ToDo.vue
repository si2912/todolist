<template>
  <div class="todo">
    <div class="todo__input">
      <input placeholder="Add a To Do" @keyup.enter="addNewToDo" v-model="newTodo"/>
    </div>
    <draggable v-model="todos" @start="dragging = true" @end="dragging = false" class="todo__items">
      <div class="todo__items__item" v-for="todo in todos" :key="todo.id">
        <div class="todo__items__item__checkbox">
          <input type="checkbox" :checked="todo.isCompleted"
                 @click="onClickCheckbox({...todo, isCompleted: !todo.isCompleted})">
        </div>
        <div class="todo__items__item__text">
          {{ todo.text }}
        </div>
        <button @click="deleteTodo(todo.id)">X</button>
      </div>
    </draggable>
    <div>{{lastedId}}</div>
  </div>
</template>

<style lang="scss">
.todo {
  @apply bg-gray-100 w-1/4 h-5/6 mx-auto p-3 rounded-sm;
  min-height: 650px;

  &__input input {
    @apply text-gray-700 bg-gray-200 w-full p-2 mb-2;
    &:focus {
      @apply bg-white border-2;
    }
  }

  &__items {
    @apply flex flex-col;

    &__item {
      @apply flex bg-white border-2 rounded-sm;
      min-height: 20px;

      &__checkbox {
        @apply flex items-center bg-yellow-300 w-8;

        input {
          @apply rounded-sm bg-yellow-100 form-checkbox mx-auto cursor-pointer;
          font-size: 20px;

          &:hover {
            color: orangered;
          }

          &:checked {
            color: tan;
          }
        }
      }

      &__text {
        @apply bg-white p-2;
      }
    }
  }
}
</style>

<script>
import draggable from 'vuedraggable';

import { ADD_NEW_TODO, CHANGE_TODO_ORDER, DELETE_TODO, UPDATE_TODO } from '../store';

export default {
  components: {
    draggable
  },
  data() {
    return {
      newTodo: ''
    };
  },
  computed: {
    todos: {
      get() {
        return this.$store.getters.todos;
      },
      set(todos) {
        this.$store.dispatch(CHANGE_TODO_ORDER, todos);
      }
    },
    lastedId: function(){
      return this.$store.getters.id;
    } 
  },
  methods: {
    addNewToDo: function () {
      if (this.newTodo) {
        this.$store.dispatch(ADD_NEW_TODO, this.newTodo);
        this.newTodo = '';
      }
    },
    onClickCheckbox: function (todo) {
      this.$store.dispatch(UPDATE_TODO, todo);
    },
    deleteTodo: function (todoId){
      this.$store.dispatch(DELETE_TODO, todoId);
    }
  }
};
</script>
