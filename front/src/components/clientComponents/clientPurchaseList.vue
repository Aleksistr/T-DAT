<template>
  <div>
    <h4>Liste des derniers achats</h4>
    <q-list>
      <q-expansion-item
        v-for="(purchase, index) in purchases" :key="index"
        :label="'Id : ' + purchase.ticket_id + ' mois vente : ' + purchase.mois_vente"
      >
        <q-card>
          <q-card-section>
            <q-list>
              <q-item v-for="(product, indexBis) in purchase.products" :key="indexBis">
                <q-item-section>{{product.libelle}}</q-item-section>
                <q-item-section>{{product.prix}}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
const clientService = require('../../services/clientService')
export default {
  name: 'clientPurchaseList',
  props: ['clientId'],
  data () {
    return {
      purchases: []
    }
  },
  methods: {
    loadData () {
      clientService.getClient(this.clientId).then((response) => {
        response.forEach((element) => {
          console.log(element)
          let found = false
          this.purchases.forEach((purchase) => {
            if (purchase.ticket_id === element.TICKET_ID) {
              found = true
              purchase.products.push({
                libelle: element.LIBELLE,
                prix: element.PRIX_NET
              })
            }
          })
          if (!found) {
            this.purchases.push({
              ticket_id: element.TICKET_ID,
              mois_vente: element.MOIS_VENTE,
              products: [
                {
                  libelle: element.LIBELLE,
                  prix: element.PRIX_NET
                }
              ]
            })
          }
        })
      })
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
