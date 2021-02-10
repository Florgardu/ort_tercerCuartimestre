<template>

    <section class="src-components-formulario">
        <div class="jumbotron">
            <h2> Login</h2>
            <hr>

            <!-- formulario con el evento submit(apretar botón) llama a metodo enviar  -->
            <form novalidate autocomplete="off" @submit.prevent="validar()">

                <!-- Ingreso de descripcion de Tarea-->
                <div class="form-group">
                    <label for="nombre"> Ingrese nombre </label>
                    <input type="text" id="nombre" class="form-control" v-model="$v.f.nombre.$model">
                </div>


                <!-- cartel de validación Tarea -->

                <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                </div>

                <!-- ingreso de contrasena -->
                <div class="form-group">
                    <label for="contrasena"> Ingrese contrasena </label>
                    <input type="text" id="contrasena" class="form-control" v-model="$v.f.contrasena.$model">
                </div>

                <!-- cartel de validación nombre -->
                <div v-if="$v.f.contrasena.$error && $v.f.contrasena.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.contrasena.required.$invalid">Este campo es requerido</div>

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
  required,

 
} from '@vuelidate/validators'


// FUNCION VALIDADORA
 // function validarEspacios(value) {
//    return !value.includes(' ')
//  }

export default {
  name: 'src-components-formulario',
  props: [],

  mounted() {

  },
  data() {
    return {
      f: this.resetCasillas(),
      esValido:false
    }
  },
  // acá valido los campos de f (formulario)
  validations: {
    f: {
      nombre: {
        required,
      
      },
      contrasena: {
        required,

      },

    }
  },

  methods: {


    // SUBMIT DEL FORMULARIO
    async validar() {
            this.$v.$touch()
            if(!this.$v.$invalid) {
              if (this.f.nombre=="root" && this.f.contrasena==123) {
                console.log("ok")
                this.esValido=true;
                this.$router.push('/NavBar')
              }
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
        nombre: '',
        contrasena: '',
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
