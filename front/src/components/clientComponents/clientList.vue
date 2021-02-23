<template>
  <list
    :title="'Liste des clients'"
    :display-columns="displayColumns"
    :data="clientList"
    :row-key="'clientId'"
  ></list>
</template>

<script>
import List from 'components/shared/list'
export default {
  name: 'clientList',
  components: { List },
  data () {
    return {
      displayColumns: [
        { name: 'name', label: 'Nom du client' },
        { name: 'clientId', label: 'Id du client' }
      ],
      clientList: [
        {
          name: 'Jean',
          clientId: '132'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
