<template>
  <!--begin::List Widget 5-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-1">
      <h3 class="align-items-start flex-column">
        <img id="subimgw2" alt="" src="media/icons/subtittle/signal.svg" />
        <span id="tiw2" class="fw-bolder mb-2 text-dark"
          >Parámetros Sísmicos</span
        >
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div id="cardw2" class="card-body pt-1">
      <a class="fw-bolder">N° de Reporte (*) :</a>
      <input type="number"  class="form-control"/>
      <div class="form-check form-switch">
        <input
          class="form-check-input form-switch"
          type="checkbox"
        />
      </div>
    </div>
    <div id="cardw2" class="card-body pt-1">
      <a class="fw-bolder">Fecha local :</a>
      <input type="date"  class="form-control"/>
    </div>
    <div id="cardw2" class="card-body pt-1">
      <a class="fw-bolder">Hora local :</a>
      <input class="form-control form-control-sm" type="text"  >
    </div>
    <div id="cardw2" class="card-body pt-1">
      <a class="fw-bolder">Latitud :</a>
      <input class="form-control form-control-sm" type="text"  >
    </div>
    <div id="cardw2" class="card-body pt-1">
      <a class="fw-bolder">Longitud :</a>
      <input class="form-control form-control-sm" type="text"  >
    </div>
    <div id="cardw2" class="card-body pt-1">
      <a class="fw-bolder">Profundidad (km) :</a>
      <input class="form-control form-control-sm" type="text"  >
    </div>
    <div id="cardw2" class="card-body pt-1">
      <a class="fw-bolder">Magnitud :</a>
      <input class="form-control form-control-sm" type="text"  >
    </div>
    <!--end: Card Body-->
  </div>
  <!--end: List Widget 5-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";

export default defineComponent({
  name: "kt-widget-5",
  props: {
    widgetClasses: String,
  },
  components: {},
  setup() {
    onMounted(() => {
      MenuComponent.reinitialization();
    });
  },
});
</script>
<style>
.timeline-label:before {
  content: "";
  position: absolute;
  left: 1px;
  width: 3px;
  top: 0;
  bottom: 0;
  background-color: #00a3ff;
}
#tiw2 {
  color: #0000af !important;
  margin-left: 2px;
  font-size: 20px;
  font-weight: 300 !important;
}
#subimgw2 {
  margin-bottom: 6px;
  max-width: 22px;
  max-height: 22px;
}
.form-check {
  margin-left: auto;
}
#cardw2{
  
  justify-content: space-between;
  padding: 0 10px;
}


</style>
