<template>
  <div class="result-box d-flex justify-content-center align-items-center flex-wrap">
    <div class="result-group d-flex justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center result mr-5">
        <h6 class="name mr-2 mb-0">Exception</h6>
        <h5 class="value mb-0">{{ exception }}</h5>
      </div>
      <div class="d-flex justify-content-center align-items-center result mr-md-5">
        <h6 class="name mr-2 mb-0">Unscanned</h6>
        <h5 class="value mb-0">{{ unscanned }}</h5>
      </div>
    </div>
    <div class="result-group d-flex justify-content-center align-items-center mt-3 mt-md-0">
      <div class="d-flex justify-content-center align-items-center result mr-5">
        <h6 class="name mr-2 mb-0">Occupied</h6>
        <h5 class="value mb-0">{{ occupied }}</h5>
      </div>
      <div class="d-flex justify-content-center align-items-center result">
        <h6 class="name mr-2 mb-0">Unoccupied</h6>
        <h5 class="value mb-0">{{ unoccupied }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductResults",
  props: {
    exception: {
      type: Number,
      default: 0
    },
    unscanned: {
      type: Number,
      default: 0
    },
    occupied: {
      type: Number,
      default: 0
    },
    unoccupied: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.result-box {
  border: 1px solid #b7b7b7;
  border-radius: 2px;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 40px;
  .value {
    font-weight: 600;
  }
  .name {
    color: #7a7a7a;
  }
}
</style>
