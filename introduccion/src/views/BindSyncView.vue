<template>
    <div>
      <h1>Ejemplo de v-bind.sync</h1>
      <BindSyncComponent v-bind:value.sync="parentValue" />
      <p>Valor en el padre: {{ parentValue }}</p>
    </div>
  </template>
  
  <script>
  import BindSyncComponent from '../components/BindSyncComponent.vue';
  
  export default {
      name: 'BindSyncView',
      components: {
          BindSyncComponent,
      },
      data() {
          return {
              parentValue: 'Valor inicial desde el padre',
          };
      },
  };
  </script>
  