<template lang="pug">
  b-navbar(toggleable='md', type='fixed', variant='light')
    b-navbar-toggle(target='nav_collapse')
    b-navbar-brand(href='#')
      img.logo(src='../../assets/logo.png', alt='')
    b-collapse#nav_collapse(is-nav='')
      b-navbar-nav.m-auto
        b-nav-item(href='#') Usuarios
        b-nav-item(href='#') Salas
        b-nav-item(href='#') Reservar
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

