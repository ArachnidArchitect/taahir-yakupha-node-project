<template>
  <div class="wrapper">
    <NavBar/>
    <main >
      <router-view/>
    </main>
    <FooterComp/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'
export default {
  components: {
    NavBar,
    FooterComp
  }
}

</script>

<style src="@/assets/css/style.css">
</style>

