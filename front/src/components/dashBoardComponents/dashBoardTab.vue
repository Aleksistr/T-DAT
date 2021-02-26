<template>
 <div class="row justify-center" style="height: 80vh">
   <client-list
    class="col-6"
   />
   <famillyrepartition-chart
    class="col-6"
   />
 </div>
</template>

<script>
import ClientList from 'components/clientComponents/clientList'
import FamillyrepartitionChart from 'components/famillyComponents/FamillyrepartitionChart'
export default {
  name: 'dashBoardTab',
  components: {
    FamillyrepartitionChart,
    ClientList
  }
}
</script>

<style scoped>

</style>
