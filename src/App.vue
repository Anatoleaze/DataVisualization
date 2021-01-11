<template>
  <aside id="left-panel" class="left-panel">
    <nav class="navbar navbar-expand-sm navbar-default">
      <div id="main-menu" class="main-menu collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/" style="margin-top: 20px;"
              ><i
                class="menu-icon fa fa-map-marker fa-2x"
                style="margin-top: -2px;width: 30px;color:white;"
              ></i
              >Gares</router-link
            >
          </li>
          <li>
            <router-link to="/objets" style="margin-top: 10px;"
              ><i
                class="menu-icon fa fa-key fa-2x"
                style="margin-top: -2px;width: 30px;color:white;"
              ></i
              >Objets</router-link
            >
          </li>
          <li>
            <router-link to="/salaires" style="margin-top: 10px;"
              ><i
                class="menu-icon fa fa-eur fa-2x"
                style="margin-top: -2px;width: 30px;color:white;"
              ></i
              >Salaires</router-link
            >
          </li>
          <li>
            <router-link to="/incidents" style="margin-top: 10px;"
              ><i
                class="menu-icon fa fa-exclamation-triangle fa-2x"
                style="margin-top: -2px;width: 38px;color:white;padding-right:40px;"
              ></i
              >Incidents</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </aside>

  <div id="right-panel" class="right-panel">
    <header id="header" class="header">
      <div class="top-left">
        <div class="navbar-header">
          <a class="navbar-brand" href="/"
            ><img
              src="../public/img/favicon.png"
              alt="Logo"
              style="width: 25px;"
            />
            DataVisualization</a
          >
          <a class="navbar-brand hidden" href="/"
            ><img
              src="../public/img/favicon.png"
              alt="Logo"
              style="width: 35px;margin-right:6px;"
            />DataVisualization</a
          >
        </div>
      </div>
    </header>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
export default {
  name: "App",
  components: {},
  methods: {}
};
</script>

<style scoped>
ul {
  width: 60%;
  margin: auto;
}

nav {
  margin-top: 20px;
}

.navbar .navbar-nav li :hover {
  color: black;
}
</style>
