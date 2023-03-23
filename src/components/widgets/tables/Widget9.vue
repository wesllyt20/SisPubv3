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
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
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
                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <a href="#" class="text-dark fw-bolder text-hover-primary fs-6">{{ item.name }}</a>

                      <span class="text-muted fw-bold text-muted d-block fs-7">{{ item.skills }}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <a href="#" class="text-dark fw-bolder text-hover-primary d-block fs-6">{{ item.date }}</a>
                  <span class="text-muted fw-bold text-muted d-block fs-7">{{
                    item.hour
                  }}</span>
                </td>

                <td :style="{
                  color: item.critico === 'SI' ? 'red' : '#00A3FF',
                  fontWeight: 'bold',
                }">
                  {{ item.critico }}
                </td>
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

-->

</template>

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
          lineHeight: "25px"
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
          lineHeight: "25px"
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
          lineHeight: "25px"
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
          lineHeight: "25px"
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
      },
      {
        name: "Kevin Leonard",
        skills: "CENVUL",
        date: "11/02/23",
        hour: "16:05:10",
        state: "Finalizado",
        critico: "NO",
      },
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
  color: #0000AF !important;
}
.imw9{
  filter: invert(80%) sepia(39%) saturate(1000%) hue-rotate(186deg) brightness(101%) contrast(101%)
}

.btnw9:hover {
  background-color: #b5b5c3;
  color: #0000AF;
}

.btnw9:active {
  background-color: #0000FF;
  color: #FFFFFF;
}
</style>