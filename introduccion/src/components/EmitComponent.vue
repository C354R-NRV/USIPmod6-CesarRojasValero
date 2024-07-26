<template>
    <div>
        <button @click="sendEvent">Enviar Evento</button>
    </div>
</template>
  
<script>
export default {
    name: 'EmitComponent',
    methods: {
        sendEvent() {
            this.$emit('my-event', [{name:"juan", lastname:"perez"}]);
        }
    }
};
</script>