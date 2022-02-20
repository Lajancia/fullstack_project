<template>
  <body class="absolute bottom-0 right-0 h-full ">
    <div class="my-20 mr-10">
      <div class="text-white">
        <div v-if="user">
          <h1>My Page</h1>
          <h1 class="text-yellow-500 text-6xl py-2">User Information</h1>
          <p class="text-white text-4xl py-2">ID : {{ user.email }}</p>
          <p class="text-white text-4xl py-2">Name : {{ user.nick }}</p>
        </div>
        <div v-else>Login Needed</div>
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
