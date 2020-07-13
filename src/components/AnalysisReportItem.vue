<template>
  <div class="analysis-report-item">
    <h3 class="title">{{item.title}}</h3>
    <h6 class="description">{{item.description}}</h6>
    <AnalysisReportPallet />
  </div>
</template>

<script>
import AnalysisReportPallet from "@/components/AnalysisReportPallet";

export default {
  name: "AnalysisReportItem",
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    AnalysisReportPallet
  }
};
</script>
<style lang="scss" scoped>
.analysis-report-item {
  margin-top: 80px;
}
</style>