<template>
  <b-container id="dashboard" class="dashboard pb-5">
    <Header heading="Utilization Dashboard" />
    <div class="data-wrapper">
      <div class="sorting-options mb-2">
        <span class="label mr-2">Sort by:</span>
        <b-dropdown :text="selectedOption" variant="transparent">
          <b-dropdown-item v-for="(item, index) in sortingOptions" :key="index">
            <input type="text" readonly :value="item" @click="setSorting(item)" />
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <b-row>
        <b-col cols="12" sm="4" md="3" lg="3" v-for="i in 16" :key="i">
          <AisleCard />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import AisleCard from "@/components/AisleCard";
import Header from "@/components/Header";

export default {
  name: "Dashboard",
  data() {
    return {
      sortingOptions: ["Aisle A - Aisle Z", "Aisle Z - Aisle A"],
      selectedOption: "Aisle A - Aisle Z"
    };
  },
  components: {
    AisleCard,
    Header
  },
  methods: {
    setSorting(option) {
      this.selectedOption = option;
      console.log("selected sorting option", option);
    }
  }
};
</script>

<style lang="scss">
#dashboard {
  padding-top: 30px;
  .data-wrapper {
    .sorting-options {
      margin-top: 40px;
      .label {
        font-weight: 600;
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.0241176em;
      }
      .dropdown {
        border: 1px solid #b7b7b7;
        border-radius: 2px;
        background-color: #ffffff;
        min-width: 186px;
        height: 34px;
        .dropdown-toggle {
          font-weight: normal;
          font-size: 17px;
          line-height: 22px;
          letter-spacing: -0.0241176em;
          text-align: left;
          display: flex;
          align-items: center;
          &::after {
            margin-left: auto;
          }
        }
        .dropdown-menu {
          .dropdown-item {
            padding: 0;
            input {
              border: none;
              padding: 5px 15px;
              &:hover {
                background-color: darken(#ffffff, 7);
              }
              &:focus {
                outline: none;
                border: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
