<template>
  <b-container id="product-details" class="product-details pb-5">
    <div class="breadcrumb-wrapper my-3">
      <b-link to="/warehouse" class="link d-flex align-items-center">
        <img src="../assets/img/arrow_back.png" alt="got back" class="img-fluid mr-2" />
        <span>Back to warehouse</span>
      </b-link>
    </div>
    <div class="header pt-4">
      <div class="d-flex justify-content-between align-items-end flex-wrap">
        <div class="details d-flex align-items-end mb-3">
          <h1 class="heading text-capitalize mr-3 mb-0">Aisle H</h1>
          <h5
            @click="showDetails = !showDetails"
            class="details-toggler mb-0 mr-3"
          >{{showDetails ? 'Hide details' : 'See details'}}</h5>
        </div>
        <div class="buttons mb-3">
          <b-button size="md" variant="outline-primary" class="my-2 my-sm-0 mr-3">Fly aisle</b-button>
          <b-button size="md" variant="primary" class="my-2 my-sm-0">Export data</b-button>
        </div>
      </div>
      <b-collapse v-model="showDetails" class="details-card mt-2">
        <div class="detail-item d-flex align-items-center">
          <h6 class="name mr-2 mb-0">Items</h6>
          <h5 class="value mb-0">1980</h5>
        </div>
        <div class="detail-item d-flex align-items-center">
          <h6 class="name mr-2 mb-0">Slots</h6>
          <h5 class="value mb-0">300</h5>
        </div>
        <div class="detail-item d-flex align-items-center">
          <h6 class="name mr-2 mb-0">Last modified</h6>
          <h5 class="value mb-0">5 days ago</h5>
        </div>
        <div class="detail-item d-flex align-items-center">
          <h6 class="name mr-2 mb-0">Last scanned</h6>
          <h5 class="value mb-0">4 days ago</h5>
        </div>
      </b-collapse>
      <p :class="`m-0 ${showDetails ? 'mt-3' : ''}`">Data valid between Jun 18 and Jun 30, 2019</p>
    </div>
    <ProductResults :exception="78" :unscanned="2" :occupied="89" :unoccupied="10" />
  </b-container>
</template>

<script>
import ProductResults from "@/components/ProductResults";

export default {
  name: "productDetails",
  data() {
    return {
      showDetails: false
    };
  },
  components: {
    ProductResults
  }
};
</script>

<style lang="scss" scoped>
#product-details {
  .breadcrumb-wrapper {
    .link {
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
    }
  }
  .header {
    .details-toggler {
      color: #1a6fb1;
      text-decoration: underline;
      cursor: pointer;
    }
    .details-card {
      .detail-item {
        margin-bottom: 10px;
        .name {
          color: #7a7a7a;
        }
      }
    }
  }
}
</style>
