<template>
  <b-container id="aisle-details" class="aisle-details pb-5">
    <div class="breadcrumb-wrapper my-3">
      <b-link to="/warehouse" class="link d-flex align-items-center">
        <img src="../assets/img/arrow_back.png" alt="got back" class="img-fluid mr-2" />
        <span>Back to warehouse</span>
      </b-link>
    </div>
    <div class="header pt-4">
      <div class="d-flex justify-content-between align-items-end flex-wrap">
        <div class="details d-flex align-items-end mb-3">
          <h1 class="heading text-uppercase mr-3 mb-0">{{aisleDetails ? aisleDetails.id : ''}}</h1>
          <h5
            @click="showDetails = !showDetails"
            class="details-toggler mb-0 mr-3"
          >{{showDetails ? 'Hide details' : 'See details'}}</h5>
        </div>
        <div class="buttons mb-3">
          <b-button size="md" variant="outline-primary" class="my-2 my-sm-0 mr-3">Fly aisle</b-button>
          <b-button size="md" variant="primary" class="my-2 my-sm-0">Export data</b-button>
        </div>
      </div>
      <b-collapse v-model="showDetails"  v-if="aisleDetails" class="details-card mt-2">
        <div class="detail-item d-flex align-items-center">
          <h6 class="name mr-2 mb-0">Items</h6>
          <h5 class="value mb-0">
            {{aisleDetails.numberException + aisleDetails.numberOccupied + aisleDetails.numberUnscanned}}
          </h5>
        </div>
        <div class="detail-item d-flex align-items-center">
          <h6 class="name mr-2 mb-0">Slots</h6>
          <h5 class="value mb-0">{{aisle.length}}</h5>
        </div>
        <div class="detail-item d-flex align-items-center">
          <h6 class="name mr-2 mb-0">Last modified</h6>
          <h5 class="value mb-0">5 days ago</h5>
        </div>
        <div class="detail-item d-flex align-items-center">
          <h6 class="name mr-2 mb-0">Last scanned</h6>
          <h5 class="value mb-0">{{formatDate(aisleDetails.lastScanned)}}</h5>
        </div>
      </b-collapse>
      <p :class="`m-0 ${showDetails ? 'mt-3' : ''}`">Data valid between Jun 18 and Jun 30, 2019</p>
    </div>
    <AisleResults
      v-if="aisleDetails"
      :exception="aisleDetails.numberException"
      :unscanned="aisleDetails.numberUnscanned"
      :occupied="aisleDetails.numberOccupied"
      :unoccupied="aisleDetails.numberEmpty"
    />
    <template v-if="shelfs && !isLoading && shelfs.length > 0">
      <Filters :filters="filters" />
      <b-row class="aisle-slots px-3 flex-nowrap">
        <b-col class="p-0 mr-3 shelfs" cols="4" sm="4" md="4" lg="4" v-for="(shelf, index) in shelfs" :key="index" >
          <SlotItem :item="item" :key="index" v-for="(item, index) in shelf" />
        </b-col>
      </b-row>
    </template>
    <template v-if="isLoading">
      <b-row class="spinner-wrapper justify-content-center align-items-center">
        <b-spinner
          variant="primary"
        ></b-spinner>
      </b-row>
    </template>
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { getFormattedDate } from '@/util/common.js';
import AisleResults from "@/components/AisleResults";
import Filters from "@/components/Filters";
import SlotItem from "@/components/SlotItem";

export default {
  name: "AisleDetails",
  data() {
    return {
      showDetails: false,
      filters: ["Extra", "Mismatched", "Missing", "No data"],
    };
  },
  computed: {
    aisleDetails() {
      return this.$store.getters['getAisleByID'](this.$route.params.aisleId)
    },
    shelfs() {
      const slots = this.$store.getters['aisle'] ? this.$store.getters['aisle'] : [];
      const shelfOne = [];
      const shelfTwo = [];
      const shelfThree = [];
      slots.filter(item => {
        if(item.shelf == 1) {
          shelfOne.push(item)
        }
        if(item.shelf == 2) {
          shelfTwo.push(item)
        }
        if(item.shelf == 3) {
          shelfThree.push(item)
        }
      })
      return [shelfOne ,shelfTwo ,shelfThree]
    },
    aisle() {
      return this.$store.getters['aisle'] ? this.$store.getters['aisle'] : [];
    },
    ...mapState(['isLoading'])
  },
  components: {
    AisleResults,
    Filters,
    SlotItem
  },
  mounted() {
    if(this.$route.params.aisleId) {
      this.getSingleAisle(this.$route.params.aisleId)
    }
  },
  methods: {
    ...mapActions(['getSingleAisle']),
    formatDate(date) {
      return getFormattedDate(date)
    }
  },
  beforeDestroy() {
    this.$store.commit('SET_SINGLE_AISLE', null)
  }
};
</script>

<style lang="scss" >
#aisle-details {
  .breadcrumb-wrapper {
    .link {
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
    }
  }
  .header {
    .details-toggler {
      color: #1a6fb1;
      text-decoration: underline;
      cursor: pointer;
    }
    .details-card {
      .detail-item {
        margin-bottom: 10px;
        .name {
          color: #7a7a7a;
        }
      }
    }
  }
  .aisle-slots {
    margin-top: 30px;
    overflow-x: auto;
    .shelfs {
      min-width: 200px;
    }
  }
  .spinner-wrapper {
    height: 300px;
    .spinner-border {
      width: 4rem;
      height: 4rem;
    }
  }
}
</style>
