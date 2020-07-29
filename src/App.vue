<template lang="pug">
#v-app: .container
  v-login
</template>

<script>
import VLogin from './components/Login.vue';

export default {
  name: 'App',
  components: {
    VLogin
  },
  created() {
    console.log(window.FB.getLoginStatus());
  }
};
</script>

<style lang="sass" scoped>
@import "~@/mixin.sass"

#v-app
  background-color: white
  margin-left: auto
  margin-right: auto
  max-width: 1440px
  min-height: 100%
  min-width: 375px

@media (max-width: 1019px)
  #v-app
    max-width: 600px
</style>
