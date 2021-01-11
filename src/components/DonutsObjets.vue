<template>
  <div class="container">
    <apexchart
      type="donut"
      :options="options"
      :series="options.series"
      style="text-align: left;"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";

export default {
  name: "DonutObjet",
  components: {
    apexchart: VueApexCharts
  },
  data() {
    let listNb = new Map();
    let listLabel = [];
    let pourcen = [];
    let all = 0;
    let res = {};
    axios
      .get("http://localhost:8080/data/objets.json")
      .then(response => {
        response.data.forEach(elt => {
          if (elt.fields.gc_obo_nature_c !== undefined) {
            all += 1;
            if (listNb.has(elt.fields.gc_obo_nature_c)) {
              listNb.set(
                elt.fields.gc_obo_nature_c,
                listNb.get(elt.fields.gc_obo_nature_c) + 1
              );
            } else {
              listNb.set(elt.fields.gc_obo_nature_c, 1);
            }
          }
        });
        let tmp = new Map();
        for (let [key, val] of listNb) {
          tmp.set(key, (val / all) * 100);
        }
        let sortMap = new Map([...tmp.entries()].sort((a, b) => a[1] > b[1]));
        for (let [key, val] of sortMap) {
          pourcen.push(val);
          listLabel.push(key);
        }
      })
      .finally(
        (res = {
          options: {
            responsive: [
              {
                breakpoint: 250,
                options: {
                  chart: {
                    width: 10
                  },
                  legend: {
                    position: "bottom"
                  }
                }
              }
            ],
            plotOptions: {
              pie: {
                customScale: 0.8
              }
            },
            series: pourcen,
            labels: listLabel
          }
        })
      );
    return res;
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
  margin: auto;
  margin-bottom: 50px;
  padding: 8px;
  margin-top: 20px;
}

.apexcharts-legend {
  text-align: left;
}
</style>
