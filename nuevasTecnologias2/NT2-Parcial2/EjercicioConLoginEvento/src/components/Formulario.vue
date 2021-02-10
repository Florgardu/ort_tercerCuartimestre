<template>
<NavBar />
<router-view/>
    <section class="src-components-formulario">
        <div class="jumbotron">
            <h2> Formulario Tareas</h2>
            <hr>

            <!-- formulario con el evento submit(apretar botón) llama a metodo enviar  -->
            <form novalidate autocomplete="off" @submit.prevent="enviar()">

                <!-- Ingreso de descripcion de Tarea-->
                <div class="form-group">
                    <label for="descripion"> Ingrese descripción de tarea </label>
                    <input type="text" id="descripcion" class="form-control" v-model="$v.f.descripcion.$model">
                </div>

                <!-- cartel de validación Tarea -->

                <div v-if="$v.f.descripcion.$error && $v.f.descripcion.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.descripcion.required.$invalid">Este campo es requerido</div>
                  <div v-if="$v.f.descripcion.minLength.$invalid">Este campo debe tener al menos {{$v.f.descripcion.minLength.$params.length}} caracteres</div>
                    <div v-if="$v.f.descripcion.maxLength.$invalid">Este campo debe tener máximo {{$v.f.descripcion.maxLength.$params.max}} caracteres</div>
                </div>

                <!-- ingreso de dato nombre persona asignada -->
                <div class="form-group">
                    <label for="nombre"> Nombre de la persona a asignada a tarea </label>
                    <input type="text" id="nombre" class="form-control" v-model="$v.f.nombre.$model">
                </div>

                <!-- cartel de validación nombre -->
                <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>

                </div>

                <!-- ingreso de dato email persona asignada-->
                <div class="form-group">
                    <label for="email"> Email </label>
                    <input type="text" id="email" class="form-control" v-model.trim="$v.f.email.$model">
                </div>

                <!-- cartel de validación email -->
                <div v-if="$v.f.email.$error && $v.f.email.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.email.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.email.email.$invalid">Este campo tiene que ser un email valido</div>
                </div>

                <!-- Botón de envio -->
                <div class="form-group">
                    <input type="submit" class="btn btn-success mt-4" value="Enviar" :disabled="$v.$invalid">
                </div>
            </form>
        </div>
    </section>

</template>

<script>

import {
  email,
  required,
  minLength, 
  maxLength
 
} from '@vuelidate/validators'

  import NavBar from './NavBar.vue'

// FUNCION VALIDADORA
 // function validarEspacios(value) {
//    return !value.includes(' ')
//  }

export default {
  name: 'src-components-formulario',
  props: [],
  mounted() {

  },
   components: {
    NavBar 
  },
  data() {
    return {
      f: this.resetCasillas(),
      url: 'https://5f789e6d66d4960016c49ded.mockapi.io/tareasForm'

    }
  },
  // acá valido los campos de f (formulario)
  validations: {
    f: {
      descripcion: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(50)
      },
      nombre: {
        required,

      },
      email: {
        required,
        email
      }
    }
  },

  methods: {

    //Envio los datos del formulario al backend con AXIOS- POST
    async sendDatosForm(datos) {
      try {
        let response = await this.axios.post(this.url, datos, {
          'content-type': 'application/json'
        })
        console.log(response.data)
      } catch (error) {
          console.log('HTTP POST ERROR', error)
      }
    },

    // SUBMIT DEL FORMULARIO
    async enviar() {
            this.$v.$touch()
            if(!this.$v.$invalid) {
              let form = this.f
              console.log(form)
           await this.sendDatosForm(form)
              this.f = this.resetCasillas()
              this.$v.$reset()
            } else {
              this.f = this.resetCasillas()
              this.$v.$reset()
            }
        },

    // REINICIO DE LOS DATOS- PONE EN BLANCO LAS CASILLAS COMPLETADAS 
    resetCasillas() {
      return {
        descripcion: '',
        nombre: '',
        email: ''
      }
    }

  },
  computed: {

  }
}

</script>

<style scoped lang="css">

  .jumbotron {
    background-color: rgb(25, 184, 144);
    color: white;
  }

  hr {
    background-color: #ddd;
  }

  .btn {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  .btn:hover {
    color: white;
    background-color: rgb(216, 95, 15);
  }

</style>
