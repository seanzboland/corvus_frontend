<template>
  <div class="card-wrapper">
    <b-link to="/warehouse/12" class="card-link">
      <b-card class="text-center">
        <template v-slot:header>
          <h3 class="mb-1 title">Aisle A</h3>
          <p class="sub-title mb-0">Last scanned 4 hours ago</p>
        </template>
        <div class="result d-flex mt-3 justify-content-between align-items-center">
          <p class="name mb-0 py-1 px-2 exception">exception</p>
          <h5 class="quantity mb-0">15</h5>
        </div>
        <div class="result d-flex mt-3 justify-content-between align-items-center">
          <p class="name mb-0 py-1 px-2 unscanned">unscanned</p>
          <h5 class="quantity mb-0">2</h5>
        </div>
        <div class="result d-flex mt-3 justify-content-between align-items-center">
          <p class="name mb-0 py-1 px-2 occupied">occupied</p>
          <h5 class="quantity mb-0">1034</h5>
        </div>
        <div class="result d-flex mt-3 justify-content-between align-items-center">
          <p class="name mb-0 py-1 px-2 unoccupied">unoccupied</p>
          <h5 class="quantity mb-0">12</h5>
        </div>
      </b-card>
    </b-link>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {}
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 4px;
  margin-top: 18px;
  .card {
    .card-header {
      background: transparent;
      padding: 1rem 0 0.5rem;
      border-bottom-color: #dedede;
    }
    .card-body {
      padding: 0 16px 16px;
      .result {
        .name {
          font-weight: 500;
          border-radius: 16px;
          color: #2f2f2f;
          &.exception {
            background-color: #fe7068;
          }
          &.unscanned {
            background-color: rgba(245, 178, 77, 0.6);
          }
          &.occupied {
            background-color: rgba(111, 175, 141, 0.5);
          }
          &.unoccupied {
            background-color: #dedede;
          }
        }
      }
    }
  }
}
</style>