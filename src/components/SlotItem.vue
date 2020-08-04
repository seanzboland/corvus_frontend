<template>
  <div>
    <div
      @click="modalShow = !modalShow"
      :class="`slot-wrapper p-3 d-flex justify-content-between ${modalShow ? 'active' : ''}`"
    >
      <h4 class="slot-name mb-0">{{item.shelf}}-{{item.slot}}</h4>
      <Badge v-if="item.discrepancy !== ''" :type="item.discrepancy" :text="item.discrepancy" />
    </div>

    <b-modal v-model="modalShow" centered size="sm" dialog-class="modal-slot-item">
      <template v-slot:modal-header>
        <div class="last-scanned d-flex align-items-center">
          <h6 class="mb-0 mr-2 pr-1">Last scanned</h6>
          <h5 class="mb-0">{{formatDate(item.stopTime)}}</h5>
        </div>
        <img
          src="../assets/img/close.png"
          alt="close modal"
          class="img-fluid close-btn"
          @click="modalShow = false"
        />
      </template>
      <div class="slot-title p-4">
        <h3>Slot {{item.slot}}</h3>
        <Badge v-if="item.discrepancy !== ''" :type="item.discrepancy" :text="item.discrepancy" />
      </div>
      <img src="../assets/img/modal_image.png" alt="slot item" class="img-fluid" />
      <div class="sku-scanned p-4 mt-3">
        <h4 class="mb-3">SKU scanned</h4>
        <h5>{{item.sku}}</h5>
      </div>
      <!-- <div class="history px-4 pt-3">
        <h4 class="mb-3">History</h4>
        <div class="details">
          <div class="header d-flex justify-content-between align-items-center">
            <h5>SKU/Pallet #</h5>
            <h5>Date scanned</h5>
          </div>
          <hr class="mb-2 mt-0" />
          <div class="detail-item d-flex justify-content-between align-items-center">
            <h5>SKU #0192345</h5>
            <h5>Mar 31, 2019</h5>
          </div>
        </div>
      </div> -->
      <template v-slot:modal-footer>
        <b-button size="md" variant="primary" class="mt-4">Export data</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { getFormattedDate } from '@/util/common.js';
import Badge from "@/components/Badge";

export default {
  name: "SlotItem",
  data() {
    return {
      modalShow: false
    };
  },
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  components: {
    Badge
  },
  methods: {
    formatDate(date) {
      return getFormattedDate(date)
    }
  }
};
</script>

<style lang="scss">
.slot-wrapper {
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 2px;
  transition: 0.2s ease-in-out;
  min-width: 150px;
  &:hover,
  &.active {
    border-color: #fe7068;
  }
  .badge-custom {
    color: #000000;
  }
}
.modal-slot-item {
  max-width: 388px !important;
  .modal-content {
    background: #ffffff;
    border: none;
    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0;
    .modal-header {
      padding: 24px 24px 0;
      align-items: center;
      border: none;
      .last-scanned {
        h6 {
          color: #7a7a7a;
        }
      }
      .close-btn {
        cursor: pointer;
      }
    }
    .modal-body {
      padding: 0;
      .history {
        .details {
          .header {
            h5 {
              font-weight: 600;
              color: #7a7a7a;
            }
          }
        }
      }
    }
    .modal-footer {
      border: none;
      padding: 24px;
    }
  }
}
.modal {
  padding: 0px !important;
}
</style>