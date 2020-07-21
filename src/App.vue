<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from 'axios'
export default {
  components: {
    Navbar
  },
  mounted() {
    axios
      .get('/aisles/a1')
      .then(response => {
        console.log('response', response)
      })
  }
};
</script>