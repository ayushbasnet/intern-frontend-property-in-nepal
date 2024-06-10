<template>
<div>
  <Navbar/>
  <router-view/>
  <Footer/>
</div>
</template>

<script>

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: 'AppLayout',
  components: {Navbar,Footer},
  data: () => ({
    //
  }),
};
</script>
