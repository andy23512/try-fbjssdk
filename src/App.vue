<template lang="pug">
#v-app: .container
  | App
</template>

<script>
export default {
  name: 'App',
  created() {
}
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
