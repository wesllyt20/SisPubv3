<template>
  <!--begin::List Widget 5-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-1">
      <h3 class="align-items-start flex-column">
        <img id="subimgw2" alt="" src="media/icons/subtittle/signal.svg" />
        <span id="tiw2" class="fw-bolder mb-2 text-dark">Parámetros Sísmicos</span>
      </h3>
    </div>
    <!--end::Header-->

    <div id="contenedorw2">

      <div class="contenImput row g-3 align-items-center">
        <div class="col-auto">
          <span class="me-auto text-nowrap">N° de Reporte (*) :</span>
        </div>
        <div class="col-auto" style="margin-right: 25px; display: flex; justify-content: space-between;">
          <input id="impReport" type="number" class="form-control form-control-sm" :disabled="isSwitchOn" />
          <div class="form-check form-switch" style="margin: 8px 0px 0px 4px;">
            <input class="reportW2 form-check-input form-switch" type="checkbox" v-model="isSwitchOn" />
          </div>
        </div>
      </div>


      <div class="contenImput row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Fecha Local:</label>
        </div>
        <div class="col-auto" style="margin-right: 25px;">
          <input type="date" class="impwg1 form-control form-control-sm">
        </div>
      </div>



      <div class="contenImput row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">FechHoraa Local:</label>
        </div>
        <div class="col-auto" style="margin-right: 25px;">
          <input type="time" class="impwg1 form-control form-control-sm">
        </div>
      </div>



      <div class="contenImput row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Latitud:</label>
        </div>
        <div class="col-auto" style="margin-right: 25px;">
          <input type="number" class="impwg1 form-control form-control-sm">
        </div>
      </div>



      <div class="contenImput row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Longitud:</label>
        </div>
        <div class="col-auto" style="margin-right: 25px;">
          <input type="number" class="impwg1 form-control form-control-sm">
        </div>
      </div>

      <div class="contenImput row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Profundidad (km):</label>
        </div>
        <div class="col-auto" style="margin-right: 25px;">
          <input type="number" class="impwg1 form-control form-control-sm">
        </div>
      </div>

      <div class="contenImput row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Magnitud:</label>
        </div>
        <div class="col-auto" style="margin-right: 25px;">
          <input id="idMagnitud" min="1" max="10" step="0.1" v-model="magnitud" type="number"
            class="form-control form-control-lg" />
        </div>
      </div>

    </div>



    <!--<template v-for="item in parametrosSismicos" :key="item.divClass">
      <impParameters
      class="cardw2 card-body pt-1 d-flex align-items-center flex-md-row"
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
    </template>-->

    <div class="containerSub">
      <div id="sub1" class="signalBot ">
        <span class="proxRep">Recuerda que: </span>
        <span>Proximo N° de Reporte : </span>
        <span class="proxRep"> 91</span>
      </div>
      <div id="sub2" class="signalBot" style="margin-top: 15px;">
        <span class="inline-block" style="color: #737B80;">Nuevo Registro Manual</span>
      </div>
    </div>
    <!--end: Card Body-->
  </div>
  <!--end: List Widget 5-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";
//import impParameters from "@/components/modals/general/impParameters.vue";

export default defineComponent({
  name: "kt-widget-2",
  components: {
    //impParameters,
  },
  data() {
    return {
      w2color: "#FFFFFF",
      magnitud: 0,
      isSwitchOn: true,
    };
  },
  methods: {
    actualizarFondo() {
      if (this.magnitud >= 1 && this.magnitud <= 4) {
        this.w2color = "#009900";
      } else if (this.magnitud > 4 && this.magnitud <= 7) {
        this.w2color = "#ffdd00";
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

    /*const parametrosSismicos = [
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
      }
      /*,
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
    };*/
  },
});
</script>
<style >
#contenedorw2,
.containerSub {
  margin-left: 25px;
}

.contenImput {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;

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

#idMagnitud {
  background-color: v-bind(w2color);
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #fff;

}

.impwg1 {
  width: 228px;
}

.containerSub {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


}

.signalBot {
  width: 350.26px;
  height: 30px;
  text-align: center;
  mix-blend-mode: normal;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}


#sub1 {
  border: 1px solid rgba(0, 0, 175, 0.34);
  background: rgba(0, 0, 175, 0.06);
  margin: 3px 0px 0px 0px;

}

#sub2 {
  background: #ECECEC;
  border: 1px solid #D8D8D8;

}

.proxRep {
  color: #0000af;
  font-weight: 500;
}
</style>
