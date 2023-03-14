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
            class="btn btn-primary btn-lg"
            type="button"
            v-bind:style="{ backgroundColor: btncol }"
          >
            Publicar evento
          </button>
        </div>
        <div class="menu-content pt-8 pb-2">
          <img
            class="iMenu"
            src="media/icons/duotune/general/ico_Pub.svg"
            alt=""
          />
          <span class="tiMenu ls-1"> Publicar</span>
          <div class="chMenu  menu-section fs-8 px-3" >
            <div class="d-flex justify-content-between align-items-center">
              <span v-bind:style="{ color: evnt1 }" class="card-title mb-0"
                >Evento</span
              >
              <div class="form-check">
                <input
                  id="imp1"
                  class="form-check-input"
                  type="checkbox"
                  v-model="isChecked1"
                  v-on:change="updateCheckboxes(1)"
                />
              </div>
            </div>
            <div
              class="block d-flex justify-content-between align-items-center"
            >
              <span v-bind:style="{ color: evnt2 }" class="card-title mb-0"
                >Simulacro</span
              >
              <div class="form-check">
                <input
                  id="imp2"
                  class="form-check-input"
                  type="checkbox"
                  v-model="isChecked2"
                  v-on:change="updateCheckboxes(2)"
                />
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span v-bind:style="{ color: evnt3 }" class="card-title mb-0"
                >Simulación</span
              >
              <div class="form-check">
                <input
                  id="imp3"
                  class="form-check-input"
                  type="checkbox"
                  v-model="isChecked3"
                  v-on:change="updateCheckboxes(3)"
                />
              </div>
            </div>
          </div>
          <img
            class="iMenu"
            src="media/icons/duotune/general/ico_Bell.svg"
            alt=""
          />
          <span class="tiMenu ls-1"> Canales</span>
          <div class="menu-item menu-accordion">
            <span class="subTit ls-1"> Gobierno :</span>
            <Btninstitute image="../media/logos/intitutos/ACELDAT.svg" text="DHN (principal)" colcir="#FFDD00"></Btninstitute>
       

          </div>
        </div>
      </div>

      <div class="menu-item">
        <div class="menu-content">
          <div class="separator mx-1 my-4"></div>
        </div>
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
import Btninstitute from "@/components/modals/general/btnInstitute.vue"

export default defineComponent({
  data() {
    return {
      isChecked1: true,
      isChecked2: false,
      isChecked3: false,
      evnt1: "#005AD9",
      evnt2: "#192024",
      evnt3: "#192024",
      btncol: "#005AD9",
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
          break;
        case 2:
          this.isChecked1 = false;
          this.isChecked3 = false;
          this.evnt1 = "#192024";
          this.evnt2 = "#FF0000";
          this.evnt3 = "#192024";
          this.btncol = "#FF0000";
          break;
        case 3:
          this.isChecked1 = false;
          this.isChecked2 = false;
          this.evnt1 = "#192024";
          this.evnt2 = "#192024";
          this.evnt3 = "#FF7A00";
          this.btncol = "#FF7A00";
          break;
        default:
          console.log("vacio");
          break;
      }
    },
  },
  watch: {
    isChecked1(val, old) {
      console.log("new: ", val), console.log("older: ", old);
    },
  },
  name: "kt-menu",
  components: {
    Btninstitute
  },
  setup() {
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
  font-size: 16px !important;
}
.rellenoMenu {
  margin-left: 20px;
}
#cambioslog {
  font-size: 10px;
}
.d-grid {
  width: 195.62px;
  margin: 0 auto; /* Establece los márgenes izquierdo y derecho automáticos para centrar el elemento */
}

#bPub {
  width: 100%; /* Establece el ancho de los botones al 100% del contenedor */
  background-color: #0075ff;
  border-radius: 6px;
}
.tiMenu {
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 24px;
  color: #0000af;
}
.iMenu {
  margin-bottom: 4px;
}
.card-title {
  margin-left: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 15px;

  color: #192024;
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
#subTit{
font-weight: bold !important;
}
</style>

