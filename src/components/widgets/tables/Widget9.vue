<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-1">
      <h3 class="align-items-start flex-column">
        <img id="subimgw2" alt="" src="media/icons/subtittle/signal.svg" />
        <span id="tiw2" class="fw-bolder mb-2 text-dark"
          >Localidades de referencia</span
        >
      </h3>
      <div
        class="card-toolbar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="hover"
      >
        <a
          href="#"
          id="bAddreport"
          class="btn btn-sm btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          Agregar al reporte generado
        </a>
        <a
          href="#"
          class="btn btn-sm btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          Nuevo
        </a>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
        >
          <!--begin::Table head-->
          <thead>
            <tr id="tabDash" class="fw-bolder text-muted">
              <th class="min-w-150px">Intensidad</th>
              <th class="min-w-140px">Referencia</th>
              <th class="min-w-120px">Teléfonos</th>
              <th class="min-w-120px text-center">Reporte</th>
              <th class="min-w-100px text-center">Publicar</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in list" :key="index">
              <tr>
                <td></td>

                <td>
                  <div class="tabw9 pt-2 card-body">
                    <span class="inline-block"
                      >119 km al N de Sta. Maria De Nieva, Condorcanqui -
                      Amazonas</span
                    >
                  </div>
                </td>

                <td>
                  <div class="tabw9 pt-2 card-body">
                    <span>123456789</span>
              
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-content-center form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="tablCheckw9"
                    />
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-content-center form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radiobuttons"
                      id="tablRadiow9"
                      value="option1"
                    />
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!--

                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkbox1"
                    />
                  
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radiobuttons"
                      id="radiobutton1"
                      value="option1"
                    />
                  </div>
                </td>

--></template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-widget-9",
  components: {},
  props: {
    widgetClasses: String,
  },
  methods: {
    getStateStyle(state) {
      if (state === "Pendiente") {
        return {
          color: "#FF0000",
          backgroundColor: "#FFDEDE",
          borderRadius: "15px",
          width: "90px",
          height: "25px",
          display: "inline-block",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "25px",
        };
      } else if (state === "En proceso") {
        return {
          color: "#C7880F",
          backgroundColor: "#FBEBCD",
          borderRadius: "15px",
          width: "90px",
          height: "25px",
          display: "inline-block",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "25px",
        };
      } else if (state === "Finalizado") {
        return {
          color: "#00AB44",
          backgroundColor: "#BAFAD7",
          borderRadius: "15px",
          width: "90px",
          height: "25px",
          display: "inline-block",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "25px",
        };
      } else if (state === "Cancelado") {
        return {
          color: "#DADADA",
          backgroundColor: "#464E5F",
          borderRadius: "15px",
          width: "90px",
          height: "25px",
          display: "inline-block",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "25px",
        };
      }
    },
  },
  setup() {
    const checked = ref(false);

    const list = [
      {
        name: "Ana Simmons",
        skills: "CENSIS",
        date: "20/02/23",
        hour: "11:30:00",
        state: "Pendiente",
        critico: "NO",
      },
      {
        name: "Jessie Clarcson",
        skills: "REDES",
        date: "19/02/23",
        hour: "14:10:00",
        state: "En proceso",
        critico: "SI",
      },
      {
        name: "Lebron Wayde",
        skills: "OTIDG",
        date: "15/02/23",
        hour: "15:20:10",
        state: "Finalizado",
        critico: "SI",
      },
      {
        name: "Natali Goodwin",
        skills: "Mayorazgo",
        date: "15/02/23",
        hour: "10:25:20",
        state: "Cancelado",
        critico: "NO",
      }
    ];

    return {
      list,
      checked,
    };
  },
});
</script>
<style>
#tabDash,
#titabDash {
  color: #000000 !important;
}
.imw9 {
  filter: invert(80%) sepia(39%) saturate(1000%) hue-rotate(186deg)
    brightness(101%) contrast(101%);
}

.btnw9:hover {
  background-color: #b5b5c3;
  color: #0000af;
}

.btnw9:active {
  background-color: #0000ff;
  color: #ffffff;
}
#tablCheckw9[type="checkbox"] {
  background-color: #f3f6f9;
}
#tablCheckw9[type="checkbox"]:checked {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="%230000af" d="M5.5 11.5L2 8l1.5-1.5L5.5 8l5.5-5.5L13 3z"/></svg>');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 20px;
}
#tablRadiow9[type="radio"] {
  background-color: #f3f6f9;
}
#tablRadiow9[type="radio"]:checked {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4" fill="%230000af"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
#bAddreport {
  margin-right: 25px !important;
}
.tabw9 {
  display: flex;
  justify-content: center;

  border: 1px solid rgba(0, 0, 175, 0.34);
  border-radius: 2px;
  background: rgba(0, 0, 175, 0.06);

  height: 80%;
  width: 90%;
}
</style>