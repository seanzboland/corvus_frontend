<template>
  <div class="analysis-report-pallet">
    <div class="pallet-header d-flex flex-wrap align-items-baseline">
      <h5 class="pallet-number mr-3">Pallet #123</h5>
      <p class="m-0">Last scanned Jun 5, 2019 08:34</p>
    </div>
    <div class="pallet-details-row d-flex flex-wrap">
      <div class="found d-flex mr-sm-5 pr-md-5 pr-0">
        <span class="type text-uppercase">FOUND</span>
        <h5 class="found-result">Aisle 3</h5>
        <h5 class="found-result">Slot 23</h5>
      </div>
      <div class="expected d-flex">
        <span class="type text-uppercase">EXPECTED</span>
        <h5 class="expected-result">Aisle 3</h5>
        <h5 class="expected-result">Slot 50</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnalysisReportPallet"
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