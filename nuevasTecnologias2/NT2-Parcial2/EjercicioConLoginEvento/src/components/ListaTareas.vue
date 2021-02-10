<template>
<NavBar />
<router-view/>
  <section class="src-components-usuarios-registrados">
    <h1>TAREAS </h1>


      <div v-if="datosForm.length" class="table-responsive">
          <table class="table">
            <tr class="bg-success text-white">
              <th>Descripcion</th>
              <th>Fecha</th>
              <th>Persona Asignada</th>
              <th>Email persona Asignada</th>
            </tr>
            <tr
              class="bg-info text-white"
              v-for="(dato, index) in datosForm"
              :key="index"
            >
              <td>{{ dato.descripcion }}</td>
              <td>{{formatearFecha(dato.createdAt) }}</td>
              <td>{{ dato.nombre }}</td>
              <td>{{ dato.email }}</td>
            </tr>
          </table>
          </div>
 <h2 v-else class="alert alert-warning">No se encontraron nuevas tareas</h2>


      <button class="btn btn-success my-3 mr-2" @click="desloguear()">Logout</button>


  </section>

</template>

<script>

  import Filtros from '../Filtros.js'
  import NavBar from './NavBar.vue'

  export default  {
    name: 'src-components-usuarios-registrados',
    mixins : [Filtros],
    props: [],
    components: {
    NavBar 
  },
    mounted () {
      this.getDatosForm()
    },
    data () {
      return {
        url : 'https://5f789e6d66d4960016c49ded.mockapi.io/tareasForm',
        datosForm:[]
      }
    },
    methods: {

      //pedido de los datos almacenados en el backend - GET
      async getDatosForm(){
        try {
      let response= await this.axios(this.url)
      console.log(response.data)
      this.datosForm=response.data;    // cargo el array de datos con los datos del form que viene del backend
        } catch (error) {
          console.log('get error' , error)
        }

      },

        desloguear() {
          this.$router.push('/')
        },


    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-usuarios-registrados {

  }
</style>
