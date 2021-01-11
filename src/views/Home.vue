<template>
  <div class="content">
    <div class="animated fadeIn">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <Map />
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
import Map from "@/components/Map.vue";

export default {
  name: "Home",
  components: {
    Map
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
  max-width: 70%;
  margin-left: 370px;
}

.footer {
  margin-left: 285px;
}
</style>
