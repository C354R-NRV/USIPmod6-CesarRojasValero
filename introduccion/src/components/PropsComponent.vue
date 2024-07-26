<template>
    <div>
        <h2>{{nombre}}</h2>
        <h3>{{ message }}</h3>
    </div>
</template>
  
<script>
export default {
    name: 'PropsComponent',
    props: ['message','nombre'],
};
</script>