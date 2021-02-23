<template>
  <q-page>
    <div class="row" style="height: 45vh !important;">
      <div class="col-6">
        <client-list/>
      </div>
      <div class="col-6">test</div>
    </div>
    <div class="row" style="height: 45vh !important;">
      <div class="col-6">Test</div>
      <div class="col-6">Test</div>
    </div>
  </q-page>
</template>

<script>
import ClientList from 'components/clientComponents/clientList'
export default {
  name: 'PageIndex',
  components: { ClientList }
}
</script>
