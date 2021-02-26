<template>
  <div class="row">
    <client-purchase-list
      class="col-6"
      :client-id="clientId"
    />
  </div>
</template>

<script>
import ClientPurchaseList from 'components/clientComponents/clientPurchaseList'
export default {
  name: 'clientTab',
  components: {
    ClientPurchaseList
  },
  props: ['clientId']
}
</script>

<style scoped>

</style>
