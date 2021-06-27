<template>
  <div id="main">
    <Header title="我的影院" />
    <div id="content">
      <login />
    </div>
    <TabBar />
  </div>
</template>
<script>
import Header from '@/components/header'
import Login from '@/components/login'
import TabBar from '@/components/tabBar'
export default {
  name: 'User',
  components: {
    Header,
    Login,
    TabBar
  },
  props: {},
  data() {
    return {}
  },
  activated() {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped></style>
