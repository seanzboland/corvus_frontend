<template>
  <b-navbar toggleable="lg" >
    <b-container>
      <b-navbar-brand to="/">
      <img src="../assets/img/corvus_logo.png" alt="fluid" class="img-fluid">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="(link, index) in navLinks" :key="index" :to="link.to">{{ link.name }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        </b-nav-form> -->
        <b-button size="sm" variant="primary" class="my-2 my-sm-0 bg-transparent">Sign out</b-button>

      </b-navbar-nav>
    </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      navLinks: [
        { to: "/", name: "Warehouse" },
        { to: "/Discrepancy", name: "Discrepancy analysis" },
        { to: "/Reports", name: "Reports" },
        { to: "/Flight", name: "Flight data" },
      ]
    };
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
  .navbar {
    background-color: #fff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    height: 48px;
    .nav-link {
      padding: 0 15px;
      font-size: 18px;
      // color: $text-light;
      font-weight: 500;
      position: relative;
    }
  }
  /* .nav-link::after {
    content: '';
    position: absolute;
    transition: 0.3s ease;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background-color: #0000ff63;
    opacity: 0;
  }
  .nav-link.router-link-exact-active::after {
    opacity: 1;
    width: 100%;
  } */
</style>