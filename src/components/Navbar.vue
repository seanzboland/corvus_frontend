<template>
  <b-navbar toggleable="lg">
    <b-container>
      <b-navbar-brand to="/" class="mr-4">
        <img src="../assets/img/corvus_logo.png" alt="corvus" class="img-fluid" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="(link, index) in navLinks" :key="index" :to="link.to">{{ link.name }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="search-box d-flex align-items-center">
            <img src="../assets/img/search.png" alt="search" class="img-fluid search-icon" />
          </div>
          <b-button size="sm" variant="outline-primary" class="my-2 my-sm-0 sign-out-btn">Sign out</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navLinks: [
        { to: "/warehouse", name: "Warehouse" },
        { to: "/Discrepancy", name: "Discrepancy analysis" },
        { to: "/Reports", name: "Reports" },
        { to: "/flight-data", name: "Flight data" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.navbar {
  background-color: #fff;
  border: 1px solid #dedede;
  height: 48px;
  padding-top: 0;
  padding-bottom: 0;
  .navbar-toggler {
    border: none;
    &:focus {
      border: none;
      outline: none;
    }
  }
  .nav-link {
    position: relative;
    font-size: 13px;
    line-height: 18px;
    font-weight: 500;
    color: #b7b7b7;
    margin: 0 12px;
    height: 48px;
    display: flex;
    align-items: center;
    letter-spacing: -0.00615385em;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #1a6fb1 !important;
      &::after {
        opacity: 1;
      }
    }
    &::after {
      content: "";
      transition: 0.3s ease-in-out;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: #0000ff63;
      opacity: 0;
    }
    &.router-link-exact-active,
    &.router-link-active {
      font-weight: 600;
      color: #1a6fb1;
      &::after {
        opacity: 1;
      }
    }
  }
  .search-box {
    .search-icon {
      height: 20px;
      width: 20px;
      margin: 0 24px;
    }
  }
  .sign-out-btn {
    font-size: 12px;
    line-height: 16px;
    height: 28px;
    width: 85px;
    border-radius: 2px;
  }
}
</style>