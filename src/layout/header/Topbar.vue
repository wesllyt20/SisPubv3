<template>
  <div
    class="d-flex align-items-stretch flex-shrink-0"
    id="kt_header_user_menu_toggle"
  >
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <span class="svg-icon svg-icon-1">
        <div class="d-flex flex-column">
          <div class="fw-bolder text-muted d-flex align-items-center fs-5">
            María Rosa
          </div>

          <a class="text-dark fw-bolder fs-3 align-right">OTIDG</a>
        </div>
      </span>
    </div>
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <div
        class="cursor-pointer symbol symbol-30px symbol-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <span class="svg-icon svg-icon-1">
          <div id="img-container">
            <img src="media/icons/duotune/general/vector.svg" />
          </div>
        </span>
      </div>
      <KTUserMenu></KTUserMenu>
    </div>

    <!--end::Heaeder menu toggle-->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

//import KTQuickLinksMenu from "@/layout/header/partials/QuickLinksMenu.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";

export default defineComponent({
  name: "topbar",
  components: {
    KTUserMenu,
  },
});
</script>
<style>
.align-right {
  text-align: right;
}
#img-container {
  box-sizing: border-box;
  width: 42.03px;
  height: 40px;
  background: #ffffff;
  border: 1px solid rgba(25, 32, 36, 0.6);
  border-radius: 6px;
  display: flex; /* Establece el contenedor como flexbox */
  justify-content: center; /* Centra horizontalmente el contenido */
  align-items: center; 
}
</style>

