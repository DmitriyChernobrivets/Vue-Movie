<template>
  <transition name="modal-fade">
    <div width="500" class="modal-overlay" @click="close">
      <v-container>
        <v-layout row justify-center>
          <v-flex xs8 sm6>
            <v-card relative>
              <v-btn
                color="red"
                class="trailer-close-btn"
                absolute
                right
                top
                fab
                dark
                small
                @click="close"
              >X</v-btn>

              <div class="trailer-container">
                <iframe
                  class="trailer-frame"
                  src="https://www.youtube.com/embed/Lq-KoJ8GsQI?autoplay=1"
                  frameborder="0"
                ></iframe>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["tralierUrl"],

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  background-color: red;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
}
.trailer-close-btn {
  top: -50px;
  right: -30px;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.trailer-frame {
  width: 100%;
  height: 500px;
}
</style>