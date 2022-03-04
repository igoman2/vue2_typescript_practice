<template>
  <div>
    <header>
      <h1>Vue Todo with Typescript</h1>
    </header>
    <main>
      <div>
        <TodoInput
          :item="todoText"
          @input="updateTodoText"
          @add="addTodoItem"
        />
      </div>
      <ul>
        <TodoListItem
          v-for="(todoItem, i) in todoItems"
          :key="i"
          :todoItem="todoItem"
        />
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

const STORAGE_KEY = "vue-todo-ts-v1";
const storage = {
  save(todoItems: any[]) {
    const parsed = JSON.stringify(todoItems);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
  fetch() {
    const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
    const result = JSON.parse(todoItems);
    return result;
  },
};

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data: () => ({
    todoText: "",
    todoItems: [] as any,
  }),
  created() {
    this.fetchTodoItems();
  },
  methods: {
    fetchTodoItems() {
      this.todoItems = storage.fetch();
    },
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      this.todoItems.push(value);
      storage.save(this.todoItems);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
  },
});
</script>

<style scoped></style>
