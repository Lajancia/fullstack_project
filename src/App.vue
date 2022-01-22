<template class="background">
  <div
    class="h-screen bg-gradient-to-r from-dark to-dark_green"
    id="background"
  >
    <div class="bg-container">
      <link rel="shortcut icon" type="image/png" href="./assets/favicon.ico" />
      <div class="relative ">
        <div class="absolute inset-y-0 left-0 h-full w-1/5 ">
          <div class="h-screen w-48 px-10 ">
            <div
              class="flex flex-col justify-around text-4xl mx-3 py-8 text-yellow-500 "
            >
              MENU
            </div>
            <div class="h-3/4 flex flex-col justify-around text-white">
              <h3
                class="pl-1 text-sm flex items-center py-2 mb-2 text-white hover:text-yellow-500 transition duration-200 ease-in "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 25 25"
                  fill="white"
                >
                  <path
                    d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
                  />
                </svg>
                <a
                  class="hover:text-yellow-500 transition duration-200 ease-linear"
                  href="http://lajanciadev.com/"
                  >Home</a
                >
              </h3>
              <h3
                class="pl-1 text-sm flex items-center py-2 mb-2 hover:text-yellow-500 transition duration-200 ease-in"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 25 25"
                  fill="white"
                >
                  <path
                    d="M23.548 10.931l-10.479-10.478c-.302-.302-.698-.453-1.093-.453-.396 0-.791.151-1.093.453l-2.176 2.176 2.76 2.76c.642-.216 1.377-.071 1.889.44.513.515.658 1.256.435 1.9l2.66 2.66c.644-.222 1.387-.078 1.901.437.718.718.718 1.881 0 2.6-.719.719-1.883.719-2.602 0-.54-.541-.674-1.334-.4-2l-2.481-2.481v6.529c.175.087.34.202.487.348.717.717.717 1.881 0 2.601-.719.718-1.884.718-2.601 0-.719-.72-.719-1.884 0-2.601.177-.178.383-.312.602-.402v-6.589c-.219-.089-.425-.223-.602-.401-.544-.544-.676-1.343-.396-2.011l-2.721-2.721-7.185 7.185c-.302.302-.453.697-.453 1.093 0 .395.151.791.453 1.093l10.479 10.478c.302.302.697.452 1.092.452.396 0 .791-.15 1.093-.452l10.431-10.428c.302-.303.452-.699.452-1.094 0-.396-.15-.791-.452-1.093"
                  />
                </svg>
                <a
                  class="hover:text-yellow-500 transition duration-200 ease-linear"
                  href="https://lajancia.github.io/"
                  >GitBlog</a
                >
              </h3>
              <h3
                class="pl-1 text-sm flex items-center py-2 mb-2 hover:text-yellow-500 transition duration-200 ease-in"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 25 25"
                  fill="white"
                >
                  <path
                    d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-6.91 14.554v-8.6l8-4.269v8.6l-8 4.269z"
                  />
                </svg>
                <router-link
                  to="/about"
                  class="hover:text-yellow-500 transition duration-200 ease-linear"
                  >Gallery</router-link
                >
              </h3>
              <h3
                class="pl-1 text-sm flex items-center py-2 mb-2 hover:text-yellow-500 transition duration-200 ease-in"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 25 25"
                  fill="white"
                >
                  <path
                    d="M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z"
                  />
                </svg>
                <router-link
                  to="/resume"
                  class="hover:text-yellow-500 transition duration-200 ease-linear"
                  >Resume</router-link
                >
              </h3>
              <h3
                class="pl-1 text-sm flex items-center py-2 mb-2 hover:text-yellow-500 transition duration-200 ease-in"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 25 25"
                  fill="white"
                >
                  <path
                    d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"
                  />
                </svg>
                <router-link
                  to="/projects"
                  class="hover:text-yellow-500 transition duration-200 ease-linear"
                  >Projects</router-link
                >
              </h3>
              <h3
                class="pl-1 text-sm flex items-center py-2 mb-2 hover:text-yellow-500 transition duration-200 ease-in"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <router-link
                  to="/achieve"
                  class="hover:text-yellow-500 transition duration-200 ease-linear"
                  >Achievement</router-link
                >
              </h3>
            </div>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0  h-full w-4/5">
          <router-view></router-view>
        </div>

        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
* {
  /* background-color: black; */
  font-family: "Anton", sans-serif;
}

svg:hover {
  fill: orange;
  text-align: right;
}
</style>
