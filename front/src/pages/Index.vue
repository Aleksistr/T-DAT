<template>
  <q-page>
    <q-tabs
      v-model="tab"
      style="width: 100%"
    >
      <q-tab name="products" label="Produits"/>
      <q-tab name="recommandation" label="Recommandation"/>
      <q-tab name="dashboard" label="Dashboard"/>
      <q-tab name="clients" label="Données clients"/>
    </q-tabs>
    <q-tab-panels
      v-model="tab"
      swipeable
      transition-next="jump-up"
      transition-prev="jump-up"
    >
      <q-tab-panel name="products">
        <product-tab/>
      </q-tab-panel>
      <q-tab-panel name="recommandation">
        Recommandations
      </q-tab-panel>
      <q-tab-panel name="dashboard">
        <dash-board-tab/>
      </q-tab-panel>
      <q-tab-panel name="clients">
        Clients
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import ProductTab from 'components/productComponents/ProductTab'
import DashBoardTab from 'components/dashBoardComponents/dashBoardTab'
export default {
  name: 'PageIndex',
  components: {
    DashBoardTab,
    ProductTab
  },
  data () {
    return {
      tab: 'products'
    }
  }
}
</script>
