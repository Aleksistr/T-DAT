<template>
  <div>
    <h4>Liste des produits</h4>
    <div
      style="max-height: 70vh; overflow: auto"
    >
      <q-infinite-scroll>
        <q-list>
          <q-item v-for="product in products" :key="product.name">
            <q-item-section>{{product.name}}</q-item-section>
            <q-item-section>{{product.famille}}</q-item-section>
          </q-item>
        </q-list>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['products']
}
</script>

<style scoped>

</style>
