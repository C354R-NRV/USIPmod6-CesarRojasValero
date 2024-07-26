<template>
    <div>
        <h1>{{ titulo }}</h1>
        <table>
            <thead>
                <tr>
                    <th>placa</th>
                    <th>propietario</th>
                    <th>telefono</th>
                    <th>tipo</th>
                    <th>color</th>
                    <th></th>
                </tr>
                <tr>
                    <th><input type="text" v-model="vehiculoNuevoObj.placa"></th>
                    <th><input type="text" v-model="vehiculoNuevoObj.propietario"></th>
                    <th><input type="text" v-model="vehiculoNuevoObj.telefono"></th>
                    <th><input type="text" v-model="vehiculoNuevoObj.tipo"></th>
                    <th><input type="text" v-model="vehiculoNuevoObj.color"></th>
                    <th><button @click="guardaNuevo()">Nuevo</button></th>
                </tr>
                <tr v-if="indexParaEditar !== null">
                    <th><input type="text" v-model="vehiculoEditarObj.placa"></th>
                    <th><input type="text" v-model="vehiculoEditarObj.propietario"></th>
                    <th><input type="text" v-model="vehiculoEditarObj.telefono"></th>
                    <th><input type="text" v-model="vehiculoEditarObj.tipo"></th>
                    <th><input type="text" v-model="vehiculoEditarObj.color"></th>
                    <th><button @click="guardaEdicion()">Guardar</button></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(vehiculo, index) in vehiculos" :key="vehiculo.placa">
                    <td>{{vehiculo.placa}}</td>
                    <td>{{vehiculo.propietario}}</td>
                    <td>{{vehiculo.telefono}}</td>
                    <td>{{vehiculo.tipo}}</td>
                    <td>{{vehiculo.color}}</td>
                    <td>
                        <button @click="eliminarVehiculo(index)">Eliminar</button>
                        <button @click="EditarVehiculo(vehiculo, index)">Editar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'MiComponente',
    data() {
        return {
            titulo: 'Registro parqueo',
            vehiculoNuevoObj: { 
                placa: "", 
                propietario: "", 
                telefono: "", 
                tipo: "", 
                color: "" 
            },
            vehiculoEditarObj: { 
                placa: "", 
                propietario: "", 
                telefono: "", 
                tipo: "", 
                color: "" 
            },  
            indexParaEditar:null, 
            vehiculos: [
                { placa: "ABC123", propietario: "Juan Perez", telefono: "555-1234", tipo: "Sedán", color: "Rojo" },
                { placa: "DEF456", propietario: "María García", telefono: "555-5678", tipo: "Camioneta", color: "Azul" },
                { placa: "GHI789", propietario: "Carlos Hernández", telefono: "555-9101", tipo: "SUV", color: "Negro" },
                { placa: "JKL012", propietario: "Ana Rodríguez", telefono: "555-1123", tipo: "Deportivo", color: "Blanco" },
                { placa: "MNO345", propietario: "Luis Martínez", telefono: "555-1415", tipo: "Convertible", color: "Verde" },
                { placa: "PQR678", propietario: "Elena López", telefono: "555-1617", tipo: "Coupé", color: "Amarillo" },
                { placa: "STU901", propietario: "Roberto González", telefono: "555-1819", tipo: "Hatchback", color: "Gris" },
                { placa: "VWX234", propietario: "Laura Fernández", telefono: "555-2021", tipo: "Minivan", color: "Morado" },
                { placa: "YZA567", propietario: "Miguel Torres", telefono: "555-2223", tipo: "Pickup", color: "Naranja" },
                { placa: "BCD890", propietario: "Patricia Gómez", telefono: "555-2425", tipo: "Sedán", color: "Azul" },
                { placa: "EFG123", propietario: "Fernando Ramírez", telefono: "555-2627", tipo: "SUV", color: "Rojo" },
                { placa: "HIJ456", propietario: "Gloria Navarro", telefono: "555-2829", tipo: "Deportivo", color: "Negro" },
                { placa: "KLM789", propietario: "Santiago Ruiz", telefono: "555-3031", tipo: "Convertible", color: "Blanco" },
                { placa: "NOP012", propietario: "Isabel Jiménez", telefono: "555-3233", tipo: "Coupé", color: "Verde" },
                { placa: "QRS345", propietario: "Andrés Moreno", telefono: "555-3435", tipo: "Hatchback", color: "Amarillo" },
                { placa: "TUV678", propietario: "Clara Sánchez", telefono: "555-3637", tipo: "Minivan", color: "Gris" },
                { placa: "WXY901", propietario: "Antonio Vargas", telefono: "555-3839", tipo: "Pickup", color: "Morado" },
                { placa: "ZAB234", propietario: "Adriana Castillo", telefono: "555-4041", tipo: "Sedán", color: "Naranja" },
                { placa: "CDE567", propietario: "Ricardo Ortega", telefono: "555-4243", tipo: "SUV", color: "Azul" },
                { placa: "FGH890", propietario: "Gabriela Luna", telefono: "555-4445", tipo: "Deportivo", color: "Rojo" }

            ]
        }
    },
    components: {
        // Registro de componentes que se utilizaran.
    },
    methods: {
        // métodos que se pueden llamar desde la plantilla o desde otras partes del componente.
        guardaNuevo(){
            this.vehiculos.push(Object.assign({}, this.vehiculoNuevoObj));
        },
        eliminarVehiculo(index){
            this.vehiculos.splice(index,1);
        },
        guardaEdicion(){
            this.vehiculos[this.indexParaEditar] = Object.assign({},this.vehiculoEditarObj);
            this.indexParaEditar = null;
        },
        EditarVehiculo(vehiculo, index){
            this.indexParaEditar = index;
            this.vehiculoEditarObj = Object.assign({},vehiculo);
        }
    },
    computed: {
        // propiedades computadas que dependen de otras propiedades reactivas
    },
    props: {
        // propiedades que el componente puede recibir.
    },
    emits: [] // los eventos personalizados que el componente puede emitir.
}
</script >

<style scope>
h1 {
    color: #42b983;
}
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
}
th {
    background-color: #f2f2f2;
    text-align: left;
}
</style>