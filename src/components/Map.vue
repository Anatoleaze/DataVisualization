<template>
  <div class="container divButtonHaut">
    <button v-on:click="getDataJSON" class="btn btn-outline-primary">
      <i class="meni-icon fa fa-eye fa-lg" style="margin-right:5px;"></i>
      Voir les gares sur la carte
    </button>
  </div>
  <div id="map">
    <l-map v-model="zoom" v-model:zoom="zoom" :center="[47.081012, 2.398782]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />

      <l-marker v-for="elt in data" :key="elt" :lat-lng="[elt[2], elt[1]]">
        <l-popup>{{ elt[3] }}</l-popup></l-marker
      >
    </l-map>
  </div>
  <div class="container divButtonBas">
    <a
      href="/data/objets.json"
      download="Data_Objets"
      class="btn btn-outline-primary export"
      ><i class="menu-icon fa fa-download fa-lg" style="margin-right:10px;"></i>
      Exporter les données en JSON</a
    >
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import {
  LMap,
  LTileLayer,
  LControlLayers,
  LMarker,
  LPopup
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 6,
      data: []
    };
  },
  methods: {
    getDataJSON: function() {
      axios.get("http://localhost:8080/data/gares.json").then(response => {
        for (let i = 0; i <= response.data.features.length / 2; i++) {
          if (response.data.features[i]["geometry"] != null) {
            this.data.push([
              response.data.features[i]["properties"]["departement_libellemin"],
              response.data.features[i]["geometry"]["coordinates"][0],
              response.data.features[i]["geometry"]["coordinates"][1],
              response.data.features[i]["properties"][
                "gare_alias_libelle_noncontraint"
              ]
            ]);
          }
        }
      });
    }
  }
};
</script>

<style scoped>
#map {
  height: 600px;
  width: 680px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 60px;
}

.divButtonHaut {
  margin-top: 45px;
  margin-bottom: 25px;
}
.divButtonBas {
  margin-top: 0px;
  margin-bottom: 5px;
}

.export {
  width: 30%;
  padding: 8px;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 50px;
}
</style>
