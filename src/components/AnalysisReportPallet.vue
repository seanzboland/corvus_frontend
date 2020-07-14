<template>
  <div class="analysis-report-pallet">
    <div class="pallet-header d-flex flex-wrap align-items-baseline">
      <h5 class="pallet-number mr-3">Pallet #{{pallet.pallet_number}}</h5>
      <p class="m-0">{{pallet.last_scanned}}</p>
    </div>
    <div class="pallet-details-row d-flex flex-wrap">
      <div class="found d-flex mr-sm-5 pr-md-5 pr-0" v-if="pallet.found">
        <span class="type text-uppercase">FOUND</span>
        <h5 class="found-result">{{pallet.found.asile}}</h5>
        <h5 class="found-result">{{pallet.found.slot}}</h5>
      </div>
      <div class="expected d-flex" v-if="pallet.expected">
        <span class="type text-uppercase">EXPECTED</span>
        <h5 class="expected-result">{{pallet.expected.asile}}</h5>
        <h5 class="expected-result">{{pallet.expected.slot}}</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnalysisReportPallet",
  props: {
    pallet: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.analysis-report-pallet {
  margin-top: 30px;
  .pallet-header {
    border-bottom: 1px solid #7a7a7a;
    .pallet-number {
      margin-bottom: 6px;
      color: #1a6fb1;
      font-weight: 600;
    }
  }
  .pallet-details-row {
    margin: 18px 0;
    .found-result,
    .expected-result {
      margin-right: 30px;
    }
    .found-result {
      font-weight: 600;
      color: #fe7068;
    }
    .type {
      margin-right: 50px;
      color: #7a7a7a;
    }
  }
}
</style>