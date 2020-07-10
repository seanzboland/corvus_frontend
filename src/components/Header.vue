<template>
  <div class="header d-flex justify-content-between flex-wrap">
    <h1 class="heading text-capitalize">{{heading}}</h1>
    <b-button size="md" variant="primary" class="my-2 my-sm-0">Export data</b-button>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    heading: {
      type: String,
      default: ""
    }
  }
};
</script>