

<template>
    <div>
        <h1>Ejemplo de Emitir Eventos</h1>
        <EmitComponent @my-event="handleEvent($event)" />
        <p>{{ eventMessage[0].name }} {{eventMessage[0].lastname}}</p>
    </div>
</template>
  
<script>
import EmitComponent from '../components/EmitComponent.vue';

export default {
    name: 'EmitView',
    components: {
        EmitComponent,
    },
    data() {
        return {
            eventMessage: [{name:'', lastname:''}],
        };
    },
    methods: {
        handleEvent(message) {
            this.eventMessage = message;
        },
    },
};
</script>