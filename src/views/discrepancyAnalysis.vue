<template>
  <b-container id="discrepancy-analysis" class="discrepancy-analysis pb-5">
    <div class="header d-flex justify-content-between flex-wrap">
      <h1 class="heading mb-3 text-capitalize">discrepancy Analysis</h1>
      <template v-if="!newAnalysis">
        <div class="buttons mb-3">
          <b-button
            size="md"
            @click="modalShow = !modalShow"
            variant="outline-primary"
            class="my-2 my-sm-0 mr-3 px-4"
          >Start new analysis</b-button>
          <b-button size="md" variant="primary" class="my-2 my-sm-0">Export data</b-button>
        </div>
      </template>
    </div>
    <AnalysisFileUpload v-if="newAnalysis" v-on:analyze="analyze" />
    <AnalysisReportItem :item="item" v-else />
    <b-modal
      v-model="modalShow"
      centered
      size="sm"
      modal-class="start-new-analysis"
      header-class="new-analysis-header p-0 border-0"
      footer-class="new-analysis-footer p-0 border-0"
      body-class="p-0"
      content-class="py-4 px-3"
    >
      <template v-slot:modal-header>
        <div class="last-scanned d-flex align-items-center">
          <h3 class="mb-0 mr-2 pr-1">Start a new analysis</h3>
        </div>
        <img
          src="../assets/img/close.png"
          alt="close modal"
          class="img-fluid close-btn"
          @click="modalShow = false"
        />
      </template>
      <div class="content mt-2">
        <h5 class="mb-4">You will lose data from your current analysis.</h5>
        <h5>Select ‘Continue’ if you’d like to start a new analysis.</h5>
      </div>
      <template v-slot:modal-footer>
        <b-button
          @click="modalShow = !modalShow"
          size="sm"
          variant="outline-primary"
          class="mr-3 my-0 ml-0 back"
        >Back</b-button>
        <b-button
          @click="startNewAnalysis"
          size="sm"
          variant="primary"
          class="m-0 continue"
        >Continue</b-button>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
import AnalysisFileUpload from "@/components/AnalysisFileUpload";
import AnalysisReportItem from "@/components/AnalysisReportItem";

export default {
  name: "discrepancyAnalysis",
  data() {
    return {
      modalShow: false,
      newAnalysis: true,
      item: {
        title: "Move items",
        description:
          "These items have been found in a different location from what was expected."
      }
    };
  },
  components: {
    AnalysisFileUpload,
    AnalysisReportItem
  },
  methods: {
    analyze() {
      this.newAnalysis = false;
    },
    startNewAnalysis() {
      this.modalShow = false;
      this.newAnalysis = true;
    }
  }
};
</script>

<style lang="scss">
#discrepancy-analysis {
  padding-top: 30px;
}
.start-new-analysis {
  .modal-dialog {
    max-width: 364px !important;
    margin: auto;
    .modal-content {
      background: #ffffff;
      border: 1px solid #dedede;
      border-radius: 4px;
      .new-analysis-header {
        .close-btn {
          height: 13px;
          width: 13px;
          cursor: pointer;
        }
      }
      .modal-body {
        margin-bottom: 12px;
      }
      .new-analysis-footer {
        .back,
        .continue {
          height: 40px;
        }
        .back {
          width: 90px;
        }
        .continue {
          width: 120px;
        }
      }
    }
  }
}
</style>
