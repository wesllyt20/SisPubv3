<template>
  <!--begin::Menu wrapper-->
  <div
    id="kt_aside_menu_wrapper"
    ref="scrollElRef"
    class="hover-scroll-overlay-y my-5 my-lg-5"
    data-kt-scroll="true"
    data-kt-scroll-activate="{default: false, lg: true}"
    data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
    data-kt-scroll-height="auto"
    data-kt-scroll-offset="0"
    data-kt-scroll-wrappers="#kt_aside_menu"
  >
    <!--begin::Menu-->
    <div
      id="#kt_header_menu"
      class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
      data-kt-menu="true"
    >
      <div class="menu-item">
        <!-- CHECK BOX -->

        <!--FIN CHECKBOX-->
        <div class="d-grid gap-2 col-6 mx-auto">
          <button
            id="bPub"
            class=""
            type="button"
            :class="{ 'btn-custom': true }"
            @click="pubBtn"
          >
            Publicar evento
          </button>
        </div>
        <div class="divMen2 border border-vertical"></div>
        <div class="menu-content pt-4 pb-2">
          <img
            class="iMenu"
            src="media/icons/duotune/general/ico_Pub.svg"
            alt=""
          />
          <span class="tiMenu"> Publicar</span>
          <div class="chMenu menu-section fs-8 px-3">
            <div class="d-flex justify-content-between align-items-center">
              <span id="evento" class="card-title mb-0">Evento</span>
              <div class="form-check mb-2">
                <input
                  id="imp1"
                  class="form-check-input mt-2"
                  type="checkbox"
                  v-model="isChecked1"
                  v-on:change="updateCheckboxes(1)"
                />
              </div>
            </div>
            <div
              class="block d-flex justify-content-between align-items-center"
            >
              <span id="simulacro" class="card-title mb-0">Simulacro</span>
              <div class="form-check mb-2">
                <input
                  id="imp2"
                  class="form-check-input mt-2"
                  type="checkbox"
                  v-model="isChecked2"
                  v-on:change="updateCheckboxes(2)"
                />
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span id="simulacion" class="card-title mb-0">Simulación</span>
              <div class="form-check mb-2">
                <input
                  id="imp3"
                  class="form-check-input mt-2"
                  type="checkbox"
                  v-model="isChecked3"
                  v-on:change="updateCheckboxes(3)"
                />
              </div>
            </div>
          </div>
          <img
            class="iMenu2"
            src="media/icons/duotune/general/ico_Bell.svg"
            alt=""
          />
          <span class="tiMenu"> Canales</span>
          <div class="menu-item menu-accordion">
            <!--GOBIERNO-->
            <div class="mb-5 mt-1">
              <span class="subTit mb-6"> Gobierno :</span>
              <template v-for="item in gob" :key="item.image">
                <Btninstitute
                  class="binst mb-1"
                  :image="item.image"
                  :text="item.text"
                  :colcir="item.colcir"
                ></Btninstitute>
              </template>
            </div>
            <div class="mb-5">
              <!--INSTITUCIONALES-->
              <span class="subTit"> Institucionales :</span>
              <template v-for="item in inst" :key="item.image">
                <Btninstitute
                  class="binst mb-2"
                  :image="item.image"
                  :text="item.text"
                  :colcir="item.colcir"
                ></Btninstitute>
              </template>
            </div>
            <!--PLATAFORMAS-->
            <div class="mb-5">
              <span class="subTit"> Plataformas :</span>
              <template v-for="item in plat" :key="item.image">
                <Btninstitute
                  class="binst mb-2"
                  :image="item.image"
                  :text="item.text"
                  :colcir="item.colcir"
                ></Btninstitute>
              </template>
            </div>
            <!--OTRAS FUENTES-->
            <div class="mb-5">
              <span class="subTit mt-5"> Otras fuentes :</span>
              <template v-for="item in ofuen" :key="item.image">
                <Btninstitute
                  class="binst mb-2"
                  :image="item.image"
                  :text="item.text"
                  :colcir="item.colcir"
                ></Btninstitute>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-item mt-n2">
          <div class="divMen2 border border-vertical"></div>
      </div>
      <div class="menu-item"> 
        <a class="menu-link" href="ingresartexto de actualizaciones">
          <span id="cambioslog" class="menu-title"
            >{{ translate("changelog") }} 3.0.0-alpha.1</span
          >
        </a>
      </div>
    </div>
    <!--end::Menu-->
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { ScrollComponent } from "@/assets/ts/components/_ScrollComponent";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";
import { asideMenuIcons } from "@/core/helpers/config";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import Btninstitute from "@/components/modals/general/btnInstitute.vue";

export default defineComponent({
  data() {
    return {
      isChecked1: true,
      isChecked2: false,
      isChecked3: false,
      evnt1: "#005AD9",
      nigg1: "500",
      evnt2: "#192024",
      nigg2: "400",
      evnt3: "#192024",
      nigg3: "400",
      btncol: "#005AD9",
      btnhov: "rgba(0, 90, 217, 0.8)",
    };
  },
  methods: {
    updateCheckboxes(checkedBoxNumber) {
      switch (checkedBoxNumber) {
        case 1:
          this.isChecked2 = false;
          this.isChecked3 = false;
          this.evnt1 = "#005AD9";
          this.evnt2 = "#192024";
          this.evnt3 = "#192024";
          this.btncol = "#005AD9";
          this.nigg1 = "500";
          this.nigg2 = "400";
          this.nigg3 = "400";
          this.btnhov = "rgba(0, 90, 217, 0.8)";
          break;
        case 2:
          this.isChecked1 = false;
          this.isChecked3 = false;
          this.evnt1 = "#192024";
          this.evnt2 = "#FF0000";
          this.evnt3 = "#192024";
          this.btncol = "#FF0000";
          this.nigg1 = "400";
          this.nigg2 = "500";
          this.nigg3 = "400";
          this.btnhov = "rgba(255, 0, 0, 0.8)";
          break;
        case 3:
          this.isChecked1 = false;
          this.isChecked2 = false;
          this.evnt1 = "#192024";
          this.evnt2 = "#192024";
          this.evnt3 = "#FF7A00";
          this.btncol = "#FF7A00";
          this.nigg1 = "400";
          this.nigg2 = "400";
          this.nigg3 = "500";
          this.btnhov = "rgba(255, 122, 0, 0.8)";
          break;
        default:
          console.log("vacio");
          break;
      }
    },

    pubBtn() {
      if (this.isChecked1) {
        console.log("soy check 1");
      } else if (this.isChecked2) {
        console.log("soy check 2");
      } else if (this.isChecked3) {
        console.log("soy check 3");
      } else if (this.isChecked3 === false) {
        console.log("VACIO BRO");
      }
    },
  },
  name: "kt-menu",
  components: {
    Btninstitute,
  },
  setup() {
    const gob = [
      {
        text: "DHN (principal)",
        image: "../media/logos/intitutos/DHN.svg",
        colcir: "#009900",
      },
      {
        text: "DHN (alterno)",
        image: "../media/logos/intitutos/DHN.svg",
        colcir: "#009900",
      },
      {
        text: "INDECI",
        image: "../media/logos/intitutos/INDECI.svg",
        colcir: "#FF3D00",
      },
    ];

    const inst = [
      {
        text: "Facebook - IGP",
        image: "../media/logos/intitutos/FACE.svg",
        colcir: "#009900",
      },
      {
        text: "Facebook - CENSIS",
        image: "../media/logos/intitutos/FACE.svg",
        colcir: "#009900",
      },
      {
        text: "Twitter - IGP",
        image: "../media/logos/intitutos/TW.svg",
        colcir: "#009900",
      },
      {
        text: "Twitter - CENSIS",
        image: "../media/logos/intitutos/TW.svg",
        colcir: "#009900",
      },
      {
        text: "App Sismos",
        image: "../media/logos/intitutos/APPCELL.svg",
        colcir: "#009900",
      },
      {
        text: "Último Sismo",
        image: "../media/logos/intitutos/IGP.svg",
        colcir: "#009900",
      },
      {
        text: "ACELDAT-Perú",
        image: "../media/logos/intitutos/ACELDAT.svg",
        colcir: "#009900",
      },
      {
        text: "Correo",
        image: "../media/logos/intitutos/GMAIL.svg",
        colcir: "#FFDD00",
      },
      {
        text: "IGP Api",
        image: "../media/logos/intitutos/IGP_API.svg",
        colcir: "#009900",
      },
    ];
    const plat = [
      {
        text: "PIDE",
        image: "../media/logos/intitutos/PIDE.svg",
        colcir: "#009900",
      },
      {
        text: "IDEP",
        image: "../media/logos/intitutos/IDEP.svg",
        colcir: "#009900",
      },
      {
        text: "Gob.pe",
        image: "../media/logos/intitutos/ESCUDO.svg",
        colcir: "#009900",
      },
    ];
    const ofuen = [
      {
        text: "SASPe | Indeci",
        image: "../media/logos/intitutos/SASPE.svg",
        colcir: "#FFDD00",
      },
      {
        text: "Rimac",
        image: "../media/logos/intitutos/RIMAC.svg",
        colcir: "#FFDD00",
      },
      {
        text: "Test IGP",
        image: "../media/logos/intitutos/IGPTest.svg",
        colcir: "#009900",
      },
    ];

    const { t, te } = useI18n();
    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      ScrollComponent.reinitialization();
      MenuComponent.reinitialization();
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
    });

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    return {
      hasActiveChildren,
      MainMenuConfig,
      asideMenuIcons,
      translate,
      gob,
      inst,
      plat,
      ofuen,
    };
  },
});
</script>

<style lang="scss">
.aside-menu .menu .menu-sub .menu-item a a.menu-link {
  padding-left: calc(0.75rem + 25px);
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 0 0 100%;
  transition: none;
  outline: none !important;
}

.aside-menu .menu .menu-sub .menu-sub .menu-item a a.menu-link {
  padding-left: calc(1.5rem + 25px);
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 0 0 100%;
  transition: none;
  outline: none !important;
}
#headingText {
  color: #0000af;
  font-size: 14px !important;
}

#cambioslog {
  font-size: 10px;
}
.d-grid {
  width: 195.62px;
  margin: 0 auto;
}

#bPub {
  width: 195.62px;
  height: 40px;
  border-radius: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #e5eaee;
}

.btn-custom:hover,
.btn-custom:focus,
.btn-custom:active,
.btn-custom.active {
  background-color: v-bind(btnhov);
  border-color: v-bind(btnhov);
}

.btn-custom {
  background-color: v-bind(btncol);
  border-color: v-bind(btncol);
}

#evento {
  color: v-bind(evnt1);
  font-weight: v-bind(nigg1);
}
#simulacro {
  color: v-bind(evnt2);
  font-weight: v-bind(nigg2);
}
#simulacion {
  color: v-bind(evnt3);
  font-weight: v-bind(nigg3);
}

.tiMenu {
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: #0000af;
  margin-left: 4px;
}

.chMenu {
  margin-bottom: 12px;
}

.iMenu {
  margin-bottom: 3px;
  margin-left: 10px;
  width: 10px;
  height: 12px;
}
.iMenu2 {
  margin-bottom: 1px;
  margin-left: 10px;
  width: 10px;
  height: 12px;
}

.binst {
  margin-left: 10px;
}

.card-title {
  margin-left: 17px;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 15px;

  color: #192024;
}
#imp1,
#imp2,
#imp3 {
  width: 16.13px;
  height: 14px;
  mix-blend-mode: normal;
  border-radius: 2px;
}
#imp1:checked {
  background-color: #0075ff;
  border-color: #0075ff;
}
#imp2:checked {
  background-color: #ff0000;
  border-color: #ff0000;
}
#imp3:checked {
  background-color: #ff7a00;
  border-color: #ff7a00;
}
.subTit {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  margin-left: 10px;
}
.divMen2 {
  margin-top: 10px;
  margin-left: 33px;
  margin-right: 33px;

  border-width: 1px !important;
  border-style: solid !important;
  border-color: #e5eaee !important;
  line-height: 36px;
}
</style>

