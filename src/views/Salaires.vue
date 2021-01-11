<template>
  <div class="content">
    <div class="animated fadeIn">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <h3>
              Salaires des Agents de la SNCF <br />
              entre 2010 et 2018
            </h3>
            <Bar />
            <a
              href="/data/salaires.json"
              download="Data_Revenu"
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
import Bar from "@/components/Bar.vue";

export default {
  name: "Salaires",
  components: { Bar },
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
}

.export {
  width: 25%;
  margin: auto;
  margin-bottom: 50px;
  padding: 8px;
  margin-bottom: 65px;
}
</style>
