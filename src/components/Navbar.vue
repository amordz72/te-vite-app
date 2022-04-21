<template>
   <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <!-- Navbar Brand-->
        <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
        <!-- Sidebar Toggle-->
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
                class="fas fa-bars"></i></button>
        <!-- Navbar Search-->
        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..."
                    aria-describedby="btnNavbarSearch" />
                <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i
                        class="fas fa-search"></i></button>
            </div>
        </form>
        <!-- Navbar-->
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#!">Settings</a></li>
                    <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#!">Logout</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
import router from "../router";
import app from "../firebase/index";
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
    sbToggle: function () {
      var element = document.getElementById("sidebar");

      element.classList.toggle("sidebar-sm");
      var sidebar_ul = document.getElementById("sidebar-ul");
      sidebar_ul.classList.toggle("d-none");
    },
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

</style>