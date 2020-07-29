<template lang="pug">
.fb-login-button(data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="true" data-width="" data-onlogin="onlogin")
</template>

<script>
export default {
  name: 'Login',
  created() {
    console.log(window.FB.getLoginStatus());
    console.log(this);
    window.onlogin = function() {
      console.log(this);
      this.$store.commit('login');
    }.bind(this);
  }
};
</script>

<style lang="sass" scoped>
@import "~@/mixin.sass"
</style>
