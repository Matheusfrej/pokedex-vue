<template>
  <TheHeader />
  <HomePage />
</template>

<script>
import HomePage from './pages/HomePage.vue';
import TheHeader from './components/TheHeader.vue';


export default {
  name: 'App',
  components: {
    HomePage,
    TheHeader
}
}
</script>

<style scoped>
</style>
