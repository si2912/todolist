<template>
  <div class="todo">
    <div class="todo__input">
      <input placeholder="Add a To Do" @keyup.enter="add" v-model="newTodo"/>
    </div>
    <draggable :list="todos" @start="dragging = true" @end="dragging = false" class="todo__items">
      <div class="todo__items__item" v-for="todo in todos" :key="todo.id">
        <div class="todo__items__item__checkbox">
          <input type="checkbox">
        </div>
        <div class="todo__items__item__text">
          {{ todo.text }}
        </div>
      </div>
    </draggable>
  </div>
</template>

<style lang="scss">
.todo {
  @apply bg-gray-100 w-1/4 h-5/6 mx-auto p-3 rounded-sm;
  min-height: 650px;

  &__input input {
    @apply text-gray-200 bg-gray-200 w-full p-2 mb-2;
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

let id = 2;

export default {
  components: {
    draggable
  },
  data() {
    return {
      todos: [ { id: 1, text: 'Working' }, { id: 2, text: 'Exercise' } ],
      newTodo: ''
    };
  },
  computed: {},
  methods: {
    add: function () {
      console.log('here', this.newTodo);
      if (this.newTodo) {
        this.todos.push({ text: this.newTodo, id: ++id });
        this.newTodo = '';
      }
    }
  }
};
</script>
