<template>
  <div class="row justify-center" style="height: 80vh">
    <product-list
      class="col-6"
      :products="productList"
    />
    <familly-list
      class="col-6"
      :famillies="familyList"
    />
  </div>
</template>

<script>
import ProductList from 'components/productComponents/ProductList'
import FamillyList from 'components/famillyComponents/FamillyList'
const productService = require('../../services/productService')
const famillyService = require('../../services/familleService')
export default {
  name: 'ProductTab',
  components: {
    FamillyList,
    ProductList
  },
  data () {
    return {
      productList: [],
      familyList: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      famillyService.getFamilleList().then((response) => {
        this.familyList = response
      })
      productService.getProductList().then((response) => {
        this.productList = response
      })
    }
  }
}
</script>

<style scoped>

</style>
