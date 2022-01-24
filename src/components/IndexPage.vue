<template>
  <div>
    <div v-if="user">
      <h1>유저</h1>
      <p>어아다 {{ user.id }}</p>
      <p>바말번호 {{ user.password }}</p>
    </div>
  </div>
</template>

<script>
export default {
  //   data() {
  //     return {
  //       user: null,
  //     };
  //   },
  //   created() {
  //     this.$http
  //       .get("/api/login")
  //       .then((res) => {
  //         const user = res.data.user;
  //         if (user) {
  //           this.user = user;
  //         }
  //       })
  //       .catch((err) => console.error(err));
  //   },
  created() {
    this.$http
      .get("/api/login")
      .then((res) => {
        const user = res.data.user;
        if (user) {
          this.$store.commit("setUser", user);
        } else {
          this.$router.push({ name: "Login" });
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
