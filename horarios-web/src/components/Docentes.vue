<template lang="pug">
div
  <b-jumbotron bg-variant="info" class="jumbo-title" text-variant="white" header="Docentes">
  </b-jumbotron>

  .container
    form(@submit="sub" method="post")
      .row
        .col-sm-4
          .form-group
            label Nombre
            input.form-control(v-model="dNombre")
        .col-sm-4
          .form-group
            label Apellido
            input.form-control(v-model="dApellido")
        .col-sm-2
          label &nbsp;
          .form-group
            button.btn.btn-info(type="submit") Guardar
        .col-sm-2
          label &nbsp;
          .form-group
            span.btn.btn-primary(
              @click="listar"
            ) Listar

  
    table.table
      thead
        tr
          td(width=30) #
          td Nombre
          td Apellidos
          td 
      tbody
        tr
          td s
          td s
          td s
          td
</template>

<script>

import horariosService from '@/services/horariosServices.js'

export default {
  data() {
    return {
      docentes: [],
      dNombre,
      dApellido
    }
  }
  ,
  methods: {
    listar() {
      horariosService.getDocentes()
        .then(res => {
          this.docentes = res
          console.log(res)
        })
    }
  }
}
</script>

