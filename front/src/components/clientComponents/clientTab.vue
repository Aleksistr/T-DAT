<template>
  <div class="row">
    <client-purchase-list
      class="col-6"
      :client-id="clientId"
    />
    <client-familly-repartition
      class="col-6"
      :client-id="clientId"
    />
  </div>
</template>

<script>
import ClientPurchaseList from 'components/clientComponents/clientPurchaseList'
import ClientFamillyRepartition from 'components/clientComponents/clientFamillyRepartition'
export default {
  name: 'clientTab',
  components: {
    ClientFamillyRepartition,
    ClientPurchaseList
  },
  props: ['clientId']
}
</script>

<style scoped>

</style>
