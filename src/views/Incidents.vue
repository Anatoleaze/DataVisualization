<template>
  <div class="content">
    <div class="animated fadeIn">
      <div class="row">
        <div class="col-9 div">
          <div class="card">
            <h3>Incidents survenus entre 2018 et 2020</h3>
            <div class="container contentGraph">
              <DonutIncident />
            </div>
            <a
              href="/data/incidents.json"
              download="Data_Incidents"
              class="btn btn-outline-primary export"
              ><i
                class="menu-icon fa fa-download fa-lg"
                style="margin-right:10px;"
              ></i>
              Exporter les données en JSON</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="clearfix"></div>
  <footer class="site-footer">
    <div class="footer-inner bg-white">
      <div class="row">
        <div class="container text-center footer">
          Copyright &copy; {{ date }} DataVisualization
          <br />
          Designed by <a href="#">Anatole Aze</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import DonutIncident from "@/components/DonutIncident.vue";

export default {
  name: "Incidents",
  components: {
    DonutIncident
  },
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>
<style scoped>
.card {
  max-width: 80%;
  margin-left: auto;
}

.footer {
  margin-left: 285px;
}

h3 {
  padding-top: 50px;
  padding-bottom: 20px;
}

.export {
  width: 35%;
  margin: auto;
  margin-bottom: 50px;
  padding: 8px;
  margin-top: 20px;
}

.div {
  margin: auto;
}
.contentGraph {
  text-align: left;
}
</style>
