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
        <div class="group" role="group">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title mb-0">Nombre:</h5>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="isChecked1"
                v-on:change="updateCheckboxes(1)"
              />
            </div>
          </div>
          <div class="block d-flex justify-content-between align-items-center">
            <h5 class="card-title mb-0">Nombre:</h5>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="isChecked2"
                v-on:change="updateCheckboxes(2)"
              />
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title mb-0">Nombre:</h5>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="isChecked3"
                v-on:change="updateCheckboxes(3)"
              />
            </div>
          </div>
        </div>
        <!--FIN CHECKBOX-->

        <div class="menu-content pt-8 pb-2">
          <span class="menu-section text-uppercase fs-8 ls-1"> Titulo</span>

          <div class="menu-item menu-accordion">
            <span class="menu-section rellenoMenu"> Hola que onda:v</span>
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
            >{{ translate("changelog") }} 1.0.0-alpha.1</span
          >
        </a>
      </div>
    </div>
    <!--end::Menu-->
  </div>
</template>

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
  margin-left: 15px;
}
#cambioslog {
  font-size: 10px;
}
</style>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { ScrollComponent } from "@/assets/ts/components/_ScrollComponent";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";
import { asideMenuIcons } from "@/core/helpers/config";
import MainMenuConfig from "@/core/config/MainMenuConfig";

export default defineComponent({
  data() {
    return {
      isChecked1: true,
      isChecked2: false,
      isChecked3: false,
    };
  },
  methods: {
    updateCheckboxes(checkedBoxNumber) {
      if (checkedBoxNumber === 1) {
        this.isChecked2 = false;
        this.isChecked3 = false;
      } else if (checkedBoxNumber === 2) {
        this.isChecked1 = false;
        this.isChecked3 = false;
      } else if (checkedBoxNumber === 3) {
        this.isChecked1 = false;
        this.isChecked2 = false;
      }
    },
  },
  name: "kt-menu",
  components: {},
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

