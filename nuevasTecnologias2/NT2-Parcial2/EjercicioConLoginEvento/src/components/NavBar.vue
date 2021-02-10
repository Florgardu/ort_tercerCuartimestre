<template>

  <section class="src-components-nav-bar">

<nav class="navbar navbar-expand-lg navbar-dark bg-info" >
   <router-link to="/">
  <a class="navbar-brand" href="#">Inicio</a>
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav" >
      
      <li class="nav-item" >
          <router-link to="/formulario">
        <a class="nav-link" href="#">Formulario</a>
          </router-link>
      </li>

      <li class="nav-item">
      <router-link to="/listaTareas">
        <a class="nav-link" href="#">Lista Tareas</a>
      </router-link>
      </li>

      
    </ul>
  </div>
</nav>





  </section>

</template>

<script>

  export default  {
    name: 'src-components-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-nav-bar {

  }
</style>
