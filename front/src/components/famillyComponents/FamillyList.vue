<template>
  <div>
    <h4>Liste des familles</h4>
    <div style="height: 70vh; overflow: auto">
      <q-infinite-scroll>
        <q-list>
          <q-item v-for="famille in famillies" :key="famille">
            <q-item-section>{{famille}}</q-item-section>
          </q-item>
        </q-list>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FamillyList',
  props: ['famillies']
}
</script>

<style scoped>

</style>
