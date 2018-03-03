<template lang="pug">
  #app
    hr-header

    router-view

    hr-footer
</template>
<script>
import HrHeader from '@/components/layout/Header.vue'
import HrFooter from '@/components/layout/Footer.vue'

export default {
  name: 'app',
  components: {
    HrHeader,
    HrFooter
  }
}
</script>
<style lang="stylus" src="./assets/css/main.styl"></style>