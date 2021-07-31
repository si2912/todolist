<template>
  <div class="daily">
    <div class="daily__input">
      <input type="text" placeholder="Add a Daily" />
    </div>
    <draggable
      v-model="dailies"
      @start="dragging = true"
      @end="dragging = false"
      class="daily__items"
    >
      <div class="daily__items__item" v-for="daily in dailies" :key="daily.id">
        {{ daily.text }}
      </div>
    </draggable>
  </div>
</template>

<style lang="scss">
.daily {
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
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      dailies: [
        { id: 1, text: "code" },
        { id: 2, text: "music" },
      ],
    };
  },
};
</script>



