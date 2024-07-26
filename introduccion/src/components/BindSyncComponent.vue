
<template>
    <div>
      <input type="text" v-model="internalValue" />
    </div>
  </template>
  
  <script>
  export default {
      name: 'BindSyncComponent',
      props: ['value'],
      computed: {
          internalValue: {
              get() {
                  return this.value;
              },
              set(newValue) {
                  this.$emit('update:value', newValue);
              }
          }
      }
  };
  </script>
  
  