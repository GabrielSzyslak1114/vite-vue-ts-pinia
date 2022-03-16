<template>
  <section class="page-todo">
    <h1>Todo Vue3 + Pinia + typeScript</h1>
    <form class="form-task" @submit.prevent="addTask(name)">
      <input type="text" v-model.trim="name" class="form-task-input" placeholder="write here...">
      <button class="form-task-button">Create task</button>
    </form>

    <div class="no-result" v-if="todoStore.tasks.length === 0">
      <span>🤔</span>
      <br/>
      <strong>No items yet..</strong>
    </div>
  
    <section class="task-container">
      <div class="card-task" v-for="task in todoStore.tasks" :key="task.id">
        <input type="checkbox" class="card-task-check">
        <strong class="card-task-name">{{task.name}}</strong>
        <span class="card-task-date">{{task.date}}</span>
        <button class="card-task-button" @click="todoStore.deleteTask(task.id)">❌</button>
      </div>
    </section>

    </section>

    <Loader/>

</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Loader from "./components/Loader.vue";
import { useTodo } from "./store/todo";

const name = ref('');
const todoStore = useTodo();

const addTask = (value: string)=>{
  if(value == ''){
    return alert('tarea vacia')
  }
  todoStore.addTask(value); 
  name.value = ''
}


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

$color-primary: #51a8ff;
$color-secondary: #3eff5f;
$color-warning-alternate: rgba(255, 255, 51, 0.795);
$color-alternate: rgb(240, 240, 240);
$background-color: #0e1a25;
$background-color-alternate: #0b0f13;
$height-primary: 50px;
$height-secondary: 40px;


h1{
  color: $color-secondary;
  margin-bottom: 20px;
}


.page-todo{
  background: $background-color;
  position: relative;
  min-width: 100%;
  min-height: 100vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-task{
  width: 50%;
  height: $height-secondary;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  transition: .3s;
  &:hover{
    transform: scale(.98)
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
  .form-task-input{
    all: initial;
    width: 100%;
    height: 100%;
    padding: 2px 5px;
    border-radius: 15px;
    background: $color-alternate;
    border: 1px solid $color-primary;
  }
  .form-task-button{
    border-radius: 0px 15px 15px 0px;
    border: none;
    height: 46px;
    width: 135px;
    padding: 2px 5px;
    position: relative;
    left: -28px;
    background: $color-primary;
    color: $color-alternate;
    cursor: pointer;
    transition: .3s;

    &:hover{
      background: $color-secondary;
    }
  }
}

.no-result{
  position: absolute;
  margin: 45px auto;
  bottom: 0;
  border: 1px solid $color-warning-alternate;
  color: $color-warning-alternate;
}


.no-result, .card-task{
  width: 95%;
  padding: 5px 10px;
  background: $background-color-alternate;
  min-height: $height-primary;
  border-radius: 15px 0px 15px;
}

.task-container{
  width: 60%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  gap: 20px;
    @media (max-width: 1000px) {
    width: 90%;
  }
}

.card-task{
  border: 1px solid $color-primary;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $color-primary;
  transition: .2s;
  cursor: pointer;
  &:hover{
    transform: scale(.97);
  }
}

.card-task-date{
  position: absolute;
  width: 50%;
  right: 0;
  font-size: 2rem;
  color: #51a8ff3a;
}

.card-task-button{
    z-index: 1;
}

</style>
