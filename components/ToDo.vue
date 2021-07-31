<template>
    <div class="todo">
        <div class="todo__input">
            <input placeholder="Add a To Do" />
        </div>
        <div class="todo__items">
            <div class="todo__items__item">
                <div class="todo__items__item__checkbox">
                <input type="checkbox">  
                </div>
                <div class="todo__items__item__text">
                    Working...    
                </div> 
            </div>
        </div>
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
            @apply bg-yellow-300 w-8;
            input {
                @apply rounded-sm bg-yellow-100 form-checkbox mx-auto cursor-pointer;
                font-size: 20px;
                &:hover {
                    @apply text-pink-900	   
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