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

    <div
      class="cardw2 card-body pt-1 d-flex align-items-center flex-column flex-md-row"
    >
      <span class="me-auto">Fecha local :</span>
      <input class="impW2 form-control form-control-sm" type="date" />
    </div>
    <div
      class="cardw2 card-body pt-1 d-flex align-items-center flex-column flex-md-row"
    >
      <span class="me-auto">Hora local :</span>
      <input class="impW2 form-control form-control-sm" type="time" />
    </div>
    <div
      class="cardw2 card-body pt-1 d-flex align-items-center flex-column flex-md-row"
    >
      <span class="me-auto">Latitud :</span>
      <input class="impW2 form-control form-control-sm" type="text" />
    </div>
    <div
      class="cardw2 card-body pt-1 d-flex align-items-center flex-column flex-md-row"
    >
      <span class="me-auto">Longitud :</span>
      <input class="impW2 form-control form-control-sm" type="text" />
    </div>
    <div
      class="cardw2 card-body pt-1 d-flex align-items-center flex-column flex-md-row"
    >
      <span class="me-auto">Profundidad (km) :</span>
      <input class="impW2 form-control form-control-sm" type="text" />
    </div>
    <div
      class="cardw2 card-body pt-1 d-flex align-items-center flex-column flex-md-row"
    >
      <span class="me-auto">Magnitud :</span>
      <input
        id="impmagnitud"
        min="1"
        max="10"
        step="0.1"
        v-model="magnitud"
        v-bind:style="{ backgroundColor: w2color, color: 'white' }"
        class="impW2 form-control form-control-sm text-center"
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

export default defineComponent({
  name: "kt-widget-2",
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
    magnitud() {
      this.actualizarFondo();
      this.verificarValor();
    },
  },

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
#cardw2 {
  justify-content: space-between;
  padding: 0 10px;
}
.impW2 {
  width: 55%;
}
#impReport {
  width: 29%;
}
#impmagnitud {
  font-weight: bold;
  font-size: 1.55rem;
}
.reportW2 {
  width: 5px;
  margin-top: 4px;
  margin-right: 1px;
}
#cadbot {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: right;

  color: #464e5f;
  display: flex; /* Establece el contenedor como flexbox */
  justify-content: center; /* Centra horizontalmente el contenido */
  align-items: center;
}

.signalBot {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 175, 0.34);
  border-radius: 2px;
  background: rgba(0, 0, 175, 0.06);
  width: 100%;
  height: 50px;
  font-size: 1.1rem;
}

#proxRep {
  color: #0000af;
  margin-right: 5px;
}
#proxRepNumb {
  color: #0000af;
  font-weight: bold;
  margin-left: 5px;
}
</style>
