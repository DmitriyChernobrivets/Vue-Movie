<template >
  <transition name="modal-fade">
    <div width="500" class="modal-overlay" @click="closeModal" v-if="isOpen && key">
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
                @click="closeModal"
              >X</v-btn>

              <div class="trailer-container">
                <iframe
                  v-if="!error"
                  class="trailer-frame"
                  :src="'https://www.youtube.com/embed/'+ key + '?autoplay=1'"
                  frameborder="0"
                ></iframe>
                <div v-else>
                  <h1>Sorry, Error :(</h1>
                </div>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </transition>
</template>

<script>
import api from "../services/api";
export default {
  data() {
    return {
      isOpen: false,
      key: null,
      error: null
    };
  },

  methods: {
    async fetchTrailer(id) {
      try {
        const response = await api.fetchTrailer(id);
        this.key = response.data.results[0].key;
      } catch (error) {
        this.error = error.message;
      }
    },
    openModal(id) {
      this.fetchTrailer(id);
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    }
  },

  mounted() {
    //this.$root.$on("close", () => this.closeModal());
    this.$root.$on("open", id => this.openModal(id));
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