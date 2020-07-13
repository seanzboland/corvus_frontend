<template>
  <p :class="`badge-custom mb-0  ${type}`">{{text}}</p>
</template>

<script>
export default {
  name: "Badge",
  props: {
    type: {
      type: String,
      default: "exception"
    },
    text: {
      type: String,
      default: "exception"
    }
  }
};
</script>

<style lang="scss" scoped>
.badge-custom {
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  border-radius: 16px;
  color: #2f2f2f;
  width: fit-content;
  height: fit-content;
  padding: 4px 12px;
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
</style>