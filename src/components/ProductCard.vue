<template>
  <div class="card-wrapper">
    <b-link to="/warehouse/12" class="card-link">
      <b-card class="text-center">
        <template v-slot:header>
          <h3 class="mb-1 title">Aisle A</h3>
          <p class="sub-title mb-0">Last scanned 4 hours ago</p>
        </template>
        <div class="result d-flex mt-3 justify-content-between align-items-center">
          <Badge type="exception" text="exception" />
          <h5 class="quantity mb-0">15</h5>
        </div>
        <div class="result d-flex mt-3 justify-content-between align-items-center">
          <Badge type="unscanned" text="unscanned" />
          <h5 class="quantity mb-0">2</h5>
        </div>
        <div class="result d-flex mt-3 justify-content-between align-items-center">
          <Badge type="occupied" text="occupied" />
          <h5 class="quantity mb-0">1034</h5>
        </div>
        <div class="result d-flex mt-3 justify-content-between align-items-center">
          <Badge type="unoccupied" text="unoccupied" />
          <h5 class="quantity mb-0">12</h5>
        </div>
      </b-card>
    </b-link>
  </div>
</template>

<script>
import Badge from "@/components/Badge";

export default {
  name: "ProductCard",
  props: {},
  components: {
    Badge
  }
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
    }
  }
}
</style>