
<template>
    <div>
      <slot name="header"></slot>
      <p>Contenido del componente hijo</p>
      <slot name="footer"></slot>
    </div>
  </template>
  
  <script>
  export default {
      name: 'SlotComponent',
  };
  </script>