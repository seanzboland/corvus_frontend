<template>
  <div
    class="file-upload mt-4 py-4 px-3 justify-content-center align-items-center d-flex text-center"
  >
    <b-form>
      <template v-if="!file">
        <span class="file-wrapper">
          <span class="browse">Browse</span>
          <input
            type="file"
            ref="file_input"
            @change="handleFileUpload"
            id="file-selector"
            class="mt-3"
            accept=".csv, .xlsx"
          />
        </span>
        <span class="text">to choose your file.</span>
        <p class="mt-2 mb-0 file-type">(.csv, .xlsx up to 4 mb)</p>
      </template>
      <template v-else>
        <div class="upload-completed mb-2">
          <img src="../assets/img/check.png" alt="upload completed" />
        </div>
        <h5 class="completed">Uploaded!</h5>
        <div class="file-uploaded d-flex justify-contet-center align-items-center">
          <h5 class="file-name mb-0">{{file.name}}</h5>
          <img
            @click="deleteFile"
            src="../assets/img/delete.png"
            alt="delete uploaded file"
            class="delete-file"
          />
        </div>

        <b-button
          size="md"
          variant="primary"
          class="my-2 my-sm-0 analyze-file"
          @click="analyze"
        >Analyze file</b-button>
      </template>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "AnalysisFileUpload",
  data() {
    return {
      file: null
    };
  },
  components: {},
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file_input.files[0];
    },
    deleteFile() {
      this.file = null;
    },
    analyze() {
      this.$emit("analyze");
    }
  }
};
</script>

<style lang="scss" scoped>
.file-upload {
  background: #ffffff;
  border: 1px dashed #b5b5b5;
  border-radius: 4px;
  min-height: 240px;
  .browse,
  .text {
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
  }
  .text {
    color: #2f2f2f;
  }
  .file-type {
    font-size: 15px;
    line-height: 20px;
  }
  .upload-completed {
    border: 2px solid #6faf8d;
    border-radius: 100%;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  .completed {
    color: #6faf8d;
    margin-bottom: 18px;
    font-weight: 600;
  }
  .file-uploaded {
    margin-bottom: 30px;
    .file-name {
      margin-right: 12px;
      color: #000000;
    }
    .delete-file {
      cursor: pointer;
    }
  }
  .analyze-file {
    width: 176px;
  }
  .file-wrapper {
    position: relative;
    .browse {
      margin-right: 2px;
      color: #1a6fb1;
      text-decoration: underline;
    }
    #file-selector {
      position: absolute;
      top: 0;
      left: 0;
      margin: 0 !important;
      height: 22px;
      width: 100%;
      cursor: pointer;
      font-size: 0;
      opacity: 0;
    }
  }
}
</style>
