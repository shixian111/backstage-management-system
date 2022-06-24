<template>
  <div id="mapDisplay">
    <div id="map"></div>
  </div>
</template>
<script>
// import mapData from "./龙华区.json";
import { Scene, PolygonLayer, LineLayer, PointLayer,CanvasLayer  } from "@antv/l7";
import { GaodeMap,Mapbox } from "@antv/l7-maps";
export default {
  data() {
    return {
        data:[
        {
          x:114.063077,
          y:22.687383
        }
        ]
    };
  },
  created() {
   
  },
  mounted(){
    this.mapLoad();
  },
  methods: {
    mapLoad(){
     const scene = new Scene({
      id: "map",
      map: new GaodeMap({
        center: [114.063077,22.687383],
        pitch: 0,
        zoom: 81,
        plugin: ['AMap.ToolBar', 'AMap.LineSearch'],
      }),
    });
    console.log("scene",scene);
    const pointLayer = new PointLayer({ zIndex: 2 })
      .source(this.data)
      .shape("circle")
      .size("mag", [1, 25])
      .color("mag", ["#5B8FF9", "#5CCEA1"])
      .style({
        opacity: 0.3,
        strokeWidth: 1,
      });
   console.log("pointLayer",pointLayer);
     scene.addLayer(pointLayer);
    }
  },
  components: {},
};
</script>
<style lang="scss" scoped>
#mapDisplay {
}
</style>