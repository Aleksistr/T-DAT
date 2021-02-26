<template>
  <div style="max-height: 70vh">
    <h4>Liste des clients</h4>
    <div style="max-height: 65vh; overflow: auto">
      <q-infinite-scroll>
        <q-list>
          <q-item v-for="client in list" :key="client">
            <q-item-section>{{client}}</q-item-section>
          </q-item>
        </q-list>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script>
const clientService = require('../../services/clientService')
export default {
  name: 'clientList',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      clientService.getClientList().then((response) => {
        this.list = response
      })
    }
  }
}
</script>

<style scoped>

</style>
