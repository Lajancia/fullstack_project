<template>
  <div class="py-10">
    <div v-if="user">
      <h1 class="text-yellow-500 text-6xl py-2">User Information</h1>
      <p class="text-white text-4xl py-2">ID : {{ user.email }}</p>
      <p class="text-white text-4xl py-2">Name : {{ user.nick }}</p>
    </div>
    <div v-else class="my-10 mx-10 pt-10">
      <!-- <form @submit.prevent="onSubmit"> -->
      <form method="post" action="api/auth/login">
        <p class="text-white ">아이디</p>
        <input type="text" name="email" v-model="email" />
        <p class="text-white">비밀번호</p>
        <input type="password" name="password" v-model="password" />
        <p></p>
        <button type="submit" class="text-white hover:text-yellow-500">
          로그인
        </button>
      </form>
    </div>
  </div>
  <div></div>
</template>

<script>
export default {
  created() {
    this.$http
      .get("/api/auth/login")
      .then((res) => {
        const user = res.user;
        console.log(user);
        if (user) {
          this.$store.commit("setUser", user);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
