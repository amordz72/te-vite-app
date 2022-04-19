<template>
  <div class="container-fluid">
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
         <li class="nav-item">
            <router-link class="nav-link" to="/auth" v-if="!isLogin"
              >Auth
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout" v-if="isLogin">logout </a>
          </li>
    
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
   
    </div>
  </div>
</nav>
    <router-view />
  </div>
</template>
<script>
import router from "./router";
import app from "./firebase/index";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth(app);

export default {
  computed: {
    isLogin: function () {
      return this.$store.state.isLogin;
    },
    userLogin: function () {
      return this.$store.state.user;
    },
  },
  methods: {
    onAuthStateChanged: function () {
      var me = this;
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //    const uid = user.uid;
          me.$store.dispatch("set_user", user); //
          router.push("/"); //
          // ...
        } else {
          me.$store.dispatch("destroy_user"); //

          router.push("/auth"); //
        }
      });
    },
    logout: async function () {
      var me = this;

      await signOut(auth)
        .then(() => {
          //   router.push('/auth')   me.$store.dispatch("destroy_user");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
  mounted() {
    this.onAuthStateChanged();
  },
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
</style>
