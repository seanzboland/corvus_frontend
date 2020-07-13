<template>
  <b-container id="flight-data" class="flight-data pb-5">
    <Header heading="Flight data" />
    <Filters :filters="filters" />
    <b-table
      class="mt-4 table-flight-data"
      :current-page="currentPage"
      :per-page="perPage"
      :items="items"
      :fields="fields"
      responsive
      hover
    >
      <template v-slot:head()="data">
        <span class="hader-text">{{ data.label }}</span>
      </template>
    </b-table>
    <b-row>
      <b-col class="d-flex justify-content-end">
        <div class="pagination mr-3 mt-2 d-flex justify-content-between align-items-center">
          <div class="pagination-btn first d-flex justify-content-between align-items-center" @click="firstPage">
            <img src="../assets/img/arrow_left.png" alt="" class="img-fluid">
            <p class="ml-2 my-0">First</p>
          </div>
          <p class="pagination-btn m-0 previous" @click="previousPage">Previous</p>
          <p class="m-0 currently-showing">
            {{ showingFrom }}-{{ showingTo }} of {{items.length}}
          </p>
          <p class="pagination-btn m-0 next" @click="nextPage">Next</p>
          <div class="pagination-btn last d-flex justify-content-between align-items-center" @click="lastPage">
            <p class="mr-2 m-0">Last</p>
            <img src="../assets/img/arrow_right.png" alt="" class="img-fluid">
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from "@/components/Header";
import Filters from "@/components/Filters";

export default {
  name: "flightData",
  data() {
    return {
      currentPage: 1,
      perPage: 7,
      totalRows: 1,
      showingFrom: 1,
      showingTo: 7,
      filters: ["Jun 1 - Jun 30", "Mismatched", "Missing", "No data"],
      fields: [
        { key: "timestamp", label: "Timestamp", sortable: true },
        { key: "aisle", label: "Aisle", sortable: true },
        { key: "slot", label: "Slot", sortable: true },
        { key: "type", label: "Type", sortable: true },
        { key: "data", label: "Data", sortable: true }
      ],
      items: [
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "Missing",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "Missing",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "Missing",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "Missing",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "Missing",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "Missing",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:40",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "Missing",
          data: "image12034102ff3.png"
        },
        {
          timestamp: "Jun 12, 2019 07:20",
          aisle: "AV90023FF2",
          slot: "12309",
          type: "No data",
          data: "image12034102ff3.png"
        }
      ]
    };
  },
  components: {
    Header,
    Filters
  },
  watch: {
    currentPage() {
      let currentIndex = (this.currentPage - 1) * this.perPage
      this.showingFrom = currentIndex == 0 ? 1 : currentIndex
      this.showingTo = this.perPage * this.currentPage > this.items.length ? this.items.length : this.perPage * this.currentPage
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalRows / this.perPage);
    }
  },
  mounted() {
    this.totalRows = this.items.length
  },
  methods: {
    nextPage() {
      if(this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    previousPage() {
      if(this.currentPage > 1) {
        this.currentPage--
      }
    },
    lastPage() {
      this.currentPage = this.totalPages
    },
    firstPage() {
      this.currentPage = 1
    }
  }
};
</script>

<style lang="scss">
#flight-data {
  padding-top: 30px;
  .filters {
    margin-top: 40px;
  }
  .table-flight-data {
    background: #ffffff;
    border: 1px solid #dedede;
    border-radius: 4px;
    padding: 0 16px 12px;
    .table {
      td,th {
        min-width: 150px;
      }
      thead {
        tr {
          [aria-sort="ascending"], [aria-sort="descending"] {
            font-weight: 500;
            color: #2F2F2F;
          }
          th {
            font-size: 15px;
            line-height: 20px;
            letter-spacing: -0.016em;
            color: #7a7a7a;
            font-weight: normal;
            border-top: 0;
            &:focus {
              font-weight: 500;
              color: #2F2F2F;
              outline: none;
            }
          }
        } 
      }
    }
  }
  .pagination {
    width: 282px;
    .pagination-btn {
      cursor: pointer;
    }
    .first, .previous {
      color: #7A7A7A;
    }
    .last p, .next {
      color: #1A6FB1;
    }
    .currently-showing {
      color: #2F2F2F;
    }
  }
}
</style>
