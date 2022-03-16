<template>
  <section class="isLoading">
      <img src="../assets/loading-bar.gif" alt="">
  </section>
</template>

<script lang="ts" setup>
    import {computed} from 'vue';
    import { useTodo } from '../store/todo';

    const todoStore = useTodo();


    const displayLoader = computed(()=> todoStore.loading === true ? 'flex' : 'none');


</script>

<style lang="scss">
.isLoading{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 10;
    display: v-bind(displayLoader);
    align-items: center;
    justify-content: center;

}
</style>