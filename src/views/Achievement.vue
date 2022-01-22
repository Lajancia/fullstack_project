<template>
  <body class="absolute bottom-0 right-0 h-full ">
    <div class="py-20 mr-10">
      <div class="text-white">
        <div>
          <h1>Achievement</h1>
          <ul>
            <li v-for="todo in todos" :key="todo.id" class="achieve">
              <span>{{ todo.date }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  created() {
    this.$http
      .get("api/todo")
      .then((response) => {
        this.todos = response.data;
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  },
  data() {
    return {
      todos: [],
    };
  },
};
</script>
