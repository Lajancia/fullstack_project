<template>
  <div>
    something wrond
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       id: "",
//       password: "",
//     };
//   },
//   methods: {
//     onSubmit() {
//       console.log("submit");
//       const id = this.id;
//       const password = this.password;
//       console.log(id, password);
//       this.$http
//         .post(
//           "api/auth/login",
//           { id, password },
//           { "Content-Type": "application-json" }
//         )
//         .then((res) => {
//           if (res.user) {
//             this.$store.commit("setUser", res.user);
//             this.$router.push({
//               name: "IndexPage",
//             });
//           } else if (res.data.message) {
//             alert(res.data.message);
//           }
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     },
//   },
// };
</script>
