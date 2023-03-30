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

    <div class="cardw2 card-body pt-1 d-flex align-items-center flex-md-row">
      <span class="me-auto text-nowrap">N° de Reporte (*) :</span>
      <input
        id="impReport"
        type="number"
        class="form-control form-control-sm"
      />
      <div class="form-check form-switch ms-auto">
        <input class="reportW2 form-check-input form-switch" type="checkbox" />
      </div>
    </div>

    <template v-for="item in parametrosSismicos" :key="item.divClass">
      <impParameters
        :divClass="item.divClass"
        :spanClass="item.spanClass"
        :descripcion="item.descripcion"
        :impId="item.impId"
        :impVmodel="item.impVmodel"
        :inpClass="item.inpClass"
        :tipo="item.tipo"
        :min="item.min"
        :max="item.max"
        :step="item.step"
      ></impParameters>
    </template>


    <div
      class="cardw2 card-body pt-1 d-flex align-items-center flex-column flex-md-row"
    >
      <span class="me-auto">Magnitud :</span>
      <input
        id="idMagnitud"
        min="1"
        max="10"
        step="0.1"
        v-model="magnitud"
        type="number"
      />
    </div>


    <div class="container">
      <div class="signalBot pt-1">
        <span id="proxRep">Recuerda que: </span>
        <span>Proximo N° de Reporte : </span>
        <span id="proxRepNumb"> 91</span>
      </div>
    </div>
    <br />
    <div class="container">
      <div class="signalBot">
        <span class="inline-block">Nuevo Registro Manual</span>
      </div>
    </div>
    <br />
    
    <!--end: Card Body-->
  </div>
  <!--end: List Widget 5-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";
import impParameters from "@/components/modals/general/impParameters.vue";

export default defineComponent({
  name: "kt-widget-2",
  components: {
    impParameters,
  },
  data() {
    return {
      w2color: "#FFFFFF",
      magnitud: 0,
    };
  },
  methods: {
    actualizarFondo() {
      if (this.magnitud >= 1 && this.magnitud <= 4) {
        this.w2color = "#009900";
      } else if (this.magnitud > 4 && this.magnitud <= 7) {
        this.w2color = "#FFDD00";
      } else if (this.magnitud > 7 && this.magnitud <= 10) {
        this.w2color = "#FF3D00";
      }
    },
    verificarValor() {
      if (this.magnitud > 10) {
        this.magnitud = 10;
      }
    },
  },
  watch: {
    magnitud(val) {
      this.actualizarFondo();
      this.verificarValor();
      console.log(val)
    },
  },

  props: {
    widgetClasses: String,
  },
  setup() {
    onMounted(() => {
      MenuComponent.reinitialization();
    });

    const parametrosSismicos = [
      {
        divClass: "impContenedor",
        spanClass: "spanClass",
        descripcion: "Hora local:",
        impId: "idhLocal",
        impVmodel: "hoLocal",
        inpClass: "inpClass",
        tipo: "date",
        min: "2023/mm/dd",
        max: "2023/mm/dd",
        step: "",
      },
      {
        divClass: "impContenedor",
        spanClass: "spanClass",
        descripcion: "Latitud:",
        impId: "idlatitud",
        impVmodel: "latitud",
        inpClass: "inpClass",
        tipo: "number",
        min: "",
        max: "",
        step: "",
      },
      {
        divClass: "impContenedor",
        spanClass: "spanClass",
        descripcion: "Longitud:",
        impId: "idLongitud",
        impVmodel: "longitud",
        inpClass: "inpClass",
        tipo: "number",
        min: "",
        max: "",
        step: "",
      },
      {
        divClass: "impContenedor",
        spanClass: "spanClass",
        descripcion: "Profundidad (km):",
        impId: "idProfundidad",
        impVmodel: "profundidad",
        inpClass: "inpClass",
        tipo: "number",
        min: "",
        max: "",
        step: "100",
      },
      {
        divClass: "impContenedor",
        spanClass: "spanClass",
        descripcion: "Magnitud:",
        impId: "idMagnitud",
        impVmodel: "magnitud",
        inpClass: "inpClassMagnitud",
        tipo: "number",
        min: "1",
        max: "10",
        step: "0.1",
      },
    ];
    return {
      parametrosSismicos,
    };
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
  font-weight: 400 !important;
}
#subimgw2 {
  margin-bottom: 6px;
  max-width: 22px;
  max-height: 22px;
}

.form-check {
  margin-left: auto;
}
#idMagnitud{
  background-color: v-bind(w2color);
  color: 'white'
}
</style>
