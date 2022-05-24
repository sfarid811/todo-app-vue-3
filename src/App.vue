<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Todo />
  </div>
  <router-view />
</template>

<script>
import Todo from "./views/Todo.vue";
export default {
  components: {
    Todo,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #27292d;
  color: #ffffff;
}
#app {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
h1 {
  font-weight: bold;
  font-size: 28px;
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
label {
  font-size: 14px;
  font-weight: bold;
}

button,
input {
  height: 48px;
  box-shadow: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  font-size: 18px;
  margin-top: 6px;
  margin-bottom: 12px;
}
input {
  background-color: transparent;
  border: 2px solid rgba(#fff, 0.35);
  color: inherit;
}
button {
  cursor: pointer;
  background-color: #a0a4d9;
  border: 1px solid #a0a4d9;
  color: #1f2023;
  font-weight: bold;
  outline: none;
  border-radius: 6px;
}
h2 {
  font-size: 22px;
  border-bottom: 2px solid rgba(#fff, 0.35);
  padding-bottom: 6px;
}
ul {
  padding: 10px;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgba(#fff, 0.35);
  padding: 12px 24px;
  border-radius: 6px;
  margin-bottom: 12px;
}
span {
  cursor: pointer;
}
.done {
  text-decoration: line-through;
}
h4 {
  text-align: center;
  opacity: 0.5;
  margin: 0;
}
button {
  font-size: 12px;
  padding: 6px;
}
</style>
