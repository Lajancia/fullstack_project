<template>
  <body class="absolute bottom-0 right-0 h-full w-4/5">
    <div class="my-10 py-10 mr-25">
      <div class="grid grid-cols-3 gap-4">
        <div class="mr-10">
          <vue-flip active-click="" width="200px" height="50px">
            <template v-slot:front class="front">
              <div
                id="card"
                class="text-white p-20  bg-gradient-to-r from-yellow-500 to-pink-500 rounded-lg"
              >
                <div>Park</div>
              </div>
            </template>
            <template v-slot:back class="back">
              <div
                id="card"
                class="text-yellow-500 p-20  border-2 border-yellow-500 rounded-lg bg-white"
              >
                <div>WebGL Three.js Blender</div>
                <div class="rounded-md bg-yellow-500 text-white p-2 mt-5">
                  <a href="http://test.lajanciadev.com/">Click!</a>
                </div>
              </div>
            </template>
          </vue-flip>
        </div>
        <div class="mr-5">
          <vue-flip active-click="" width="200px" height="50px">
            <template v-slot:front class="front">
              <div
                class="text-white p-20  bg-gradient-to-r from-yellow-500 to-pink-500 rounded-lg "
                id="front"
              >
                <div>Shoes</div>
              </div>
            </template>
            <template v-slot:back class="back">
              <div
                class="text-yellow-500 p-20  border-2 border-yellow-500 rounded-lg bg-white"
                id="back"
              >
                <div>This is 3D Shoes</div>
                <div class="rounded-md bg-yellow-500 text-white p-2 mt-5">
                  <a href="http://shoes.lajanciadev.com/">Click!</a>
                </div>
              </div>
            </template>
          </vue-flip>
        </div>
        <div class="mr-5">
          <vue-flip active-click="" width="200px" height="50px">
            <template v-slot:front class="front">
              <div
                class="text-white p-20  bg-gradient-to-r hover:bg-gradient-to-l from-yellow-500 to-pink-500 rounded-lg"
              >
                <div>Gallery</div>
              </div>
            </template>
            <template v-slot:back class="back">
              <div
                class="text-yellow-500 p-20  border-2 border-yellow-500 rounded-lg bg-white"
              >
                <div>This is Gallery. Made with WebGL Three.js</div>

                <div class="rounded-md bg-yellow-500 text-white p-2 mt-5">
                  <a href="http://gallery.lajanciadev.com/">Click!</a>
                </div>
              </div>
            </template>
          </vue-flip>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
h1 {
  color: white;
  text-align: center;
}
@media (max-width: 420px) {
}
</style>

<script>
import VueFlip from "vue-flip";
export default {
  components: {
    "vue-flip": VueFlip,
  },
};
</script>
