<template>
    <div>
        <h1>Ejemplo de Slots</h1>
        <SlotComponent>
            <template v-slot:header>
                <h2>Encabezado personalizado {{mensaje}} </h2>
            </template>
            <template v-slot:footer>
                <p>Pie de página personalizado </p>
            </template>
        </SlotComponent>
    </div>
</template>
  
<script>
import SlotComponent from '../components/SlotComponent.vue';

export default {
    name: 'SlotView',
    data() {
        return {
            mensaje: "hola slot"
        }
    },
    components: {
        SlotComponent,
    },
};
</script>
  