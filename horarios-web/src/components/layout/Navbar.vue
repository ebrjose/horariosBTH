<template lang="pug">
  b-navbar(toggleable='md', type='fixed', variant='light')
    b-navbar-toggle(target='nav_collapse')
    b-navbar-brand(href='#')
      img.logo(src='../../assets/logo.png', alt='')
    b-collapse#nav_collapse(is-nav='')
      b-navbar-nav.m-auto
        b-nav-item(to='/') Inicio
        b-nav-item(to='docentes') Docentes
        b-nav-item(to='aulas') Aulas
        b-nav-item(to='materias') Materias
        b-nav-item(to='horarios') Horarios
      b-navbar-nav
        b-nav-item(href='#') Salir
</template>

<style lang="stylus" scope>
.logo
  width 50px
a.nav-link
  color #333
  font-weight medium
  font-size 20px
</style>

