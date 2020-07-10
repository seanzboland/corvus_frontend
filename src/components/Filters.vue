<template>
  <div class="filters d-flex align-items-center flex-wrap">
    <h5 class="label mb-0 mr-2">Filters:</h5>
    <div class="filter-group d-flex align-items-center flex-wrap">
      <b-button
        variant="outline-primary"
        class="px-3 mr-2 mt-2 mt-md-0"
        v-for="filter in filters"
        :key="filter"
      >{{filter}}</b-button>
      <b-dropdown no-flip text="More filters" variant="outline-primary" class="mt-2 mt-md-0">
        <b-dropdown-form>
          <b-form-group
            label="Slot search"
            label-for="dropdown-form-search"
            class="p-3 mb-0"
            @submit.stop.prevent
          >
            <b-form-input
              id="dropdown-form-search"
              size="sm"
              placeholder="Type slot number"
              type="number"
            ></b-form-input>
          </b-form-group>
          <b-dropdown-divider></b-dropdown-divider>
          <div class="p-3">
            <b-form-checkbox>Unoccupied</b-form-checkbox>
            <b-form-checkbox class="mb-0">Unscanned</b-form-checkbox>
          </div>
          <b-dropdown-divider></b-dropdown-divider>
          <div class="px-3 pb-3 pt-2 d-flex justify-content-between align-items-center">
            <b-button size="sm" class="bg-transparent border-0 filter-btn clear-filters">Clear</b-button>
            <b-button size="sm" class="bg-transparent border-0 filter-btn apply-filters">Apply</b-button>
          </div>
        </b-dropdown-form>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {};
  },
  props: {
    filters: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" >
.filters {
  .label {
    font-weight: 600;
  }
  .filter-group {
    .btn-outline-primary {
      font-weight: normal;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.0241176em;
      color: #2f2f2f;
      border-color: #b7b7b7;
      background-color: #ffffff;
      &:hover,
      &:focus {
        color: #ffffff;
        border-color: #1a6fb1;
        background-color: #1a6fb1;
      }
    }
    .dropdown {
      &.show {
        .btn-outline-primary.btn.dropdown-toggle {
          border-color: #1a6fb1;
        }
      }
      .btn-outline-primary.btn.dropdown-toggle {
        &::after {
          display: none;
        }
        &:hover,
        &:focus {
          color: #2f2f2f;
          border-color: #1a6fb1;
          background-color: #ffffff;
        }
      }
      .dropdown-menu {
        width: 244px;
        margin-top: 4px !important;
        background: #ffffff;
        border: 1px solid #b7b7b7;
        box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        padding: 0;
        .b-dropdown-form {
          padding: 0;
          &:focus {
            outline: none !important;
          }
          label {
            font-size: 15px;
            line-height: 20px;
            letter-spacing: -0.016em;
          }
          .form-group {
            label {
              margin-bottom: 4px;
            }
            #dropdown-form-search {
              border-bottom: 1px solid #7a7a7a;
              border-top: none;
              border-left: none;
              border-right: none;
              border-radius: 0;
              padding: 0;
              font-size: 12px;
              line-height: 16px;
              &::placeholder {
                color: #b7b7b7;
              }
              &:focus {
                outline: none;
                box-shadow: none;
              }
            }
          }
          .custom-checkbox {
            margin-bottom: 12px;
            .custom-control-input:focus ~ .custom-control-label::before {
              box-shadow: none;
            }
            .custom-control-input:checked ~ .custom-control-label::before {
              background-color: #2f2f2f;
            }
            .custom-control-label {
              &::before,
              &::after {
                top: 0.1rem;
                height: 18px;
                width: 18px;
              }
              &::before {
                border: 2px solid #2f2f2f;
                border-radius: 2px;
              }
            }
          }
          .filter-btn {
            font-size: 17px;
            line-height: 22px;
            color: #1a6fb1;
            letter-spacing: -0.0241176em;
            &.apply-filters {
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>
