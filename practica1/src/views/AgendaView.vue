<template>
    <div class="contenedor">
        <h1>{{ titulo }}</h1>
        <br>
        <label for="search">Buscar: </label>
        <input type="text" id="search" @input="filtrar()" v-model="search" placeholder="Name, Email, phone.">
        <br>
        <br>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Country</th>
                    <th>City</th>
                    <th></th>
                </tr>
                <tr>
                    <th><input type="text" v-model="agendaNuevoObj.id"></th>
                    <th><input type="text" v-model="agendaNuevoObj.name"></th>
                    <th><input type="text" v-model="agendaNuevoObj.email"></th>
                    <th><input type="text" v-model="agendaNuevoObj.address"></th>
                    <th><input type="text" v-model="agendaNuevoObj.phone"></th>
                    <th><input type="text" v-model="agendaNuevoObj.country"></th>
                    <th><input type="text" v-model="agendaNuevoObj.city"></th>
                    <th><button @click="guardaNuevo()">Nuevo</button></th>
                </tr>
                <tr v-if="indexParaEditar !== null">
                    <th><input type="text" v-model="agendaEditarObj.id"></th>
                    <th><input type="text" v-model="agendaEditarObj.name"></th>
                    <th><input type="text" v-model="agendaEditarObj.email"></th>
                    <th><input type="text" v-model="agendaEditarObj.address"></th>
                    <th><input type="text" v-model="agendaEditarObj.phone"></th>
                    <th><input type="text" v-model="agendaEditarObj.country"></th>
                    <th><input type="text" v-model="agendaEditarObj.city"></th>
                    <th><button @click="guardaEdicion()">Guardar</button></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(agenda, index) in agendas" :key="agenda.id">
                    <td>{{ agenda.id }}</td>
                    <td>{{ agenda.name }}</td>
                    <td>{{ agenda.email }}</td>
                    <td>{{ agenda.address }}</td>
                    <td>{{ agenda.phone }}</td>
                    <td>{{ agenda.country }}</td>
                    <td>{{ agenda.city }}</td>
                    <td>
                        <button @click="eliminarAgenda(index)">Eliminar</button>
                        <button @click="editarAgenda(agenda, index)">Editar</button>
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
            titulo: 'Registro agenda',
            agendaNuevoObj: {
                id: "",
                name: "",
                email: "",
                address: "",
                phone: "",
                country: "",
                city: ""
            },
            agendaEditarObj: {
                id: "",
                name: "",
                email: "",
                address: "",
                phone: "",
                country: "",
                city: ""
            },
            indexParaEditar: null,
            agendasBack:[],
            agendas: [
                {
                    id: 1,
                    name: "Alice Johnson",
                    email: "alice.johnson@example.com",
                    address: "123 Maple Street",
                    phone: "123-456-7890",
                    country: "USA",
                    city: "New York"
                },
                {
                    id: 2,
                    name: "Bob Smith",
                    email: "bob.smith@example.com",
                    address: "456 Oak Avenue",
                    phone: "987-654-3210",
                    country: "Canada",
                    city: "Toronto"
                },
                {
                    id: 3,
                    name: "Carol White",
                    email: "carol.white@example.com",

                    address: "789 Pine Road",
                    phone: "555-123-4567",
                    country: "UK",
                    city: "London"
                },
                {
                    id: 4,
                    name: "David Brown",
                    email: "david.brown@example.com",
                    address: "321 Elm Street",
                    phone: "444-555-6666",
                    country: "Australia",
                    city: "Sydney"
                },
                {
                    id: 5,
                    name: "Emily Davis",
                    email: "emily.davis@example.com",
                    address: "654 Spruce Lane",
                    phone: "333-444-5555",
                    country: "USA",
                    city: "Los Angeles"
                }
            ]
        }
    },
    mounted() { 
        this.agendasBack = [...this.agendas];
    },
    components: {
        // Registro de componentes que se utilizaran.
    },
    methods: { 
        guardaNuevo() {
            this.agendas.push(Object.assign({}, this.agendaNuevoObj));
            this.agendasBack = [...this.agendas];
        },
        eliminarAgenda(index) {
            this.agendas.splice(index, 1);
            this.agendasBack = [...this.agendas];
        },
        guardaEdicion() {
            this.agendas[this.indexParaEditar] = Object.assign({}, this.agendaEditarObj);
            this.indexParaEditar = null;
            this.agendasBack = [...this.agendas];
        },
        editarAgenda(agenda, index) {
            this.indexParaEditar = index;
            this.agendaEditarObj = Object.assign({}, agenda);
        },
        filtrar() {  
            const searchValue = this.search; 
            console.log("en filtro"); 
            console.log(searchValue); 
            if (searchValue || searchValue == '') {                
                this.agendas = this.agendasBack.filter(item =>
                    (item.name || '').toLowerCase().includes(searchValue.toLowerCase()) ||
                    (item.email || '').toLowerCase().includes(searchValue.toLowerCase()) ||
                    (item.phone || '').toLowerCase().includes(searchValue.toLowerCase())
                );
            } else {
                console.log("reponiendo"); 
                this.agendas = [...this.agendasBack]; // Restaurar datos completos
            }
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
</script>

<style scope>
h1 {
    color: #42b983; 
}

.contenedor {
    text-align: left !important;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
    text-align: left;
}
</style>