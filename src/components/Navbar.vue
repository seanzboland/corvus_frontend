<template>
  <b-navbar toggleable="md" class="py-0 px-3 px-md-0">
    <b-container>
      <b-navbar-brand to="/" class="mr-4 navbar-brand">
        <img src="../assets/img/corvus_logo.png" alt="corvus" class="img-fluid" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="p-0"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-container class="p-0">
          <b-navbar-nav>
            <b-nav-item v-for="(link, index) in navLinks" :key="index" :to="link.to">{{ link.name }}</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto nav-right">
            <div class="search-box d-flex align-items-center">
              <img src="../assets/img/search.png" alt="search" class="img-fluid search-icon" />
            </div>
            <b-button size="sm" variant="outline-primary" class="my-2 my-sm-0 sign-out-btn">Sign out</b-button>
          </b-navbar-nav>
        </b-container>
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
        { to: "/discrepancy-analysis", name: "Discrepancy analysis" },
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
  @media (max-width: 575px) {
    #nav-collapse {
      padding: 0 16px;
    }
  }
  @media (max-width: 767px) {
    #nav-collapse {
      position: absolute;
      top: 48px;
      left: 0;
      width: 100%;
      background-color: #fff;
      border-bottom: 1px solid #dedede;
      padding-bottom: 30px;
      z-index: 999;
      .nav-link {
        margin-left: 0px !important;
        padding-bottom: 0px;
        padding-top: 0px;
        height: 35px;
      }
      .nav-right {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        flex-direction: row-reverse;
        margin-top: 20px;
      }
    }
  }

  .navbar-toggler {
    border: none;
    &:focus {
      border: none;
      outline: none;
    }
  }
  .navbar-brand {
    width: 90px;
  }
  #nav-collapse {
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
}
</style>