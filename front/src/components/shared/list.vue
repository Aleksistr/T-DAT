<template>
  <q-table
    :data="data"
    :columns="displayColumns"
    :title="title"
    :row-key="rowKey"
  />
</template>

<script>
export default {
  name: 'list',
  props: ['data', 'displayColumns', 'title', 'rowKey'],
  mounted () {
    console.log(this.data)
  }
}
</script>

<style scoped>

</style>
