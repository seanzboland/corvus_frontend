<template>
  <nav id="navbar" class="navbar d-flex align-items-center flex-row">
    <!-- <div class="nav-brand">
      <router-link to="/">
        <img src="/img/logo.png" class="logo" alt="corvus logo" />
      </router-link>
    </div> -->
    <div class="navbar-collapse h-100 d-flex align-items-center flex-row justify-space-between">
      <ul class="navbar-nav d-flex align-items-center flex-row h-100">
        <li class="nav-item h-100" v-for="(item, index) in navLinks" :key="index">
          <router-link :to="item.to" class="nav-link h-100 d-flex align-items-center" >{{item.text}}</router-link>
        </li>
      </ul>
      <button class="button-sign-out">Sign out</button>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      navLinks: [
        { to: "/", text: "Warehouse" },
        { to: "/Discrepancy", text: "Discrepancy ananlysis" },
        { to: "/Reports", text: "Reports" },
        { to: "/Flight", text: "Flight data" },
      ]
    };
  },
  methods: {
  }
};
</script>

<style scoped>
  .navbar {
    background-color: #fff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    padding: 0 60px;
    height: 75px;
  }
  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .nav-link {
    padding: 0 15px;
    font-size: 18px;
    color: #000;
    font-weight: 500;
    position: relative;
  }
  .nav-link::after {
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
  .navbar-collapse {
    flex: 1;
  }
  .nav-link.router-link-exact-active::after {
    opacity: 1;
    width: 100%;
  }
  .button-sign-out {
    border: 3px solid #0000ff63;
    background-color: transparent;
    height: 50px;
    width: 150px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;
  }
</style>