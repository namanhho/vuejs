<template>
  <div class="hello">
    <button @click="onClick">BUTTON</button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      user: {
        name: "pdthie",
        age: 25,
      },
    };
  },
  props: {
    name: {
      type: [String, Boolean],
      default: "default",
    },
  },
  methods: {
    onClick() {
      this.$emit("clicked", {
        name: "emit",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
