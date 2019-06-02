<template >
  <Modal name="trailer-dialog" @before-open="beforeOpen" :width="700" :height="500">
    <iframe
      class="trailer-frame"
      :src="'https://www.youtube.com/embed/'+ key + '?autoplay=1'"
      frameborder="0"
    ></iframe>
  </Modal>
</template>

<script>
import api from "../services/api";
export default {
  data() {
    return {
      key: null,
      error: null
    };
  },
  methods: {
    async fetchTrailer(id) {
      console.log(id);
      try {
        const response = await api.fetchTrailer(id);
        this.key = response.data.results[0].key;
      } catch (error) {
        this.error = error.message;
      }
    },
    beforeOpen(event) {
      this.fetchTrailer(event.params.id);
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

.trailer-frame {
  width: 100%;
  height: 500px;
}
</style>