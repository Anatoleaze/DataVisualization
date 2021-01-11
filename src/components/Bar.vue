<template>
  <div class="container">
    <apexchart
      width="800"
      type="bar"
      :options="options"
      :series="options.series"
    ></apexchart>
  </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";

export default {
  name: "Bar",
  components: {
    apexchart: VueApexCharts
  },
  data() {
    let cadre = [];
    let execution = [];
    let conduite = [];
    let res = {};
    axios
      .get("http://localhost:8080/data/salaires.json")
      .then(response => {
        response.data.forEach(elt => {
          let cat = elt["fields"]["qualification"];
          let remuneration = elt["fields"]["remuneration_moyenne"];
          if (cat === "H") {
            cadre.push(remuneration);
          }
          if (
            cat === "D" &&
            elt["fields"]["contrat_de_travail"] === "Agents au statut"
          ) {
            execution.push(remuneration);
          }
          if (cat === "TB (agents de conduite)") {
            conduite.push(remuneration);
          }
        });
      })
      .finally(
        (res = {
          options: {
            xaxis: {
              categories: [
                2010,
                2011,
                2012,
                2013,
                2014,
                2015,
                2016,
                2017,
                2018
              ],
              title: { text: "Années" }
            },
            yaxis: {
              title: {
                text: "Salaires en €"
              }
            },
            chart: {
              toolbar: {
                show: true
              }
            },
            dataLabels: {
              enabled: false
            },
            series: [
              {
                name: "Cadres",
                data: cadre
              },
              {
                name: "Agents de Conduite",
                data: conduite
              },
              {
                name: "Agents d'exucution",
                data: execution
              }
            ]
          }
        })
      );

    if (res != {}) {
      return res;
    }
  }
};
</script>

<style scoped>
div {
  width: 70%;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
