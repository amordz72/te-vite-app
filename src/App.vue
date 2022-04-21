<template>
  <div class="container-fluid">
     
<NavbarVue></NavbarVue>
   <router-view />
    
     
  
    </div>
  
</template>



<script>
import NavbarVue from './components/Navbar.vue';
 

export default {
 components:{
NavbarVue
 }
};
</script>
 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.sidebar {
  left: 0;
  top: 50px;
  height: 100vh;
  /* width: 200px;*/
  background: black;
}

.sidebar-sm {
  width: 70px !important;
}

.sidebar a {
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 350 !important;
}

.sidebar a:hover {
  color: coral;
}
.content {
  width: auto;
  margin-top: 60px;
}

@media only screen and (max-width: 768px) {
  .sidebar {
    width: 0 !important;
  }
}
</style>
