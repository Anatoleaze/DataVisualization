<template>
  <div class="content">
    <div class="animated fadeIn">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <h3>Objets perdus</h3>
            <DonutsObjets />
            <a
              href="/data/objets.json"
              download="Data_Objets"
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
import DonutsObjets from "@/components/DonutsObjets.vue";
export default {
  name: "Objets",
  components: {
    DonutsObjets
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
  width: 25%;
  padding: 8px;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 50px;
}
</style>
