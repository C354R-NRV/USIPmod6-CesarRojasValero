

<template>
    <div>
        <h1>Ejemplo de Props</h1>
        <div>
            <input type="text" v-model="alias">
        </div>
        <PropsComponent :message="parentMessage" :nombre="alias" />
    </div>
</template>
  
<script>
import PropsComponent from '../components/PropsComponent.vue';

export default {
    name: 'PropsView',
    components: {
        PropsComponent,
    },
    data() {
        return {
            parentMessage: 'Mensaje desde el componente padre vue 3',
            alias:"Daza"
        };
    },
};
</script>