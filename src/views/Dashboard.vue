<template>
  <!--begin::Dashboard-->
  <div class="row gy-2 g-xl-2 mt-2">
    <div class="col-xxl-3">
      <MixedWidget2
        widget-classes="card-xl-stretch mb-xl-8"
        widget-color="danger"
        chart-height="200"
        stroke-color="#cb1e46"
      ></MixedWidget2>
    </div>
    <div class="col-xxl-6">
      <TableWidget9
        widget-classes="card-xxl-stretch mb-5 mb-xl-8"
      ></TableWidget9>
    </div>
    <div class="col-xxl-3">
      <ListWidget5 widget-classes="card-xl-stretch mb-xl-8"></ListWidget5>
    </div>
  </div>

  <div class="row gy-2 g-xl-2">
    <!--ACTIVIDADES-->
    <div class="col-xxl-3">
      <ListWidget2 widget-classes="card-xl-stretch mb-xl-8"></ListWidget2>
    </div>

    <!--CALENDARIO-->
    <div class="col-xxl-6">
      <ListWidget1 widget-classes="card-xxl-stretch mb-5 mb-xl-8"></ListWidget1>
    </div>
    <div class="col-xxl-3">
      <ListWidget6 widget-classes="card-xl-stretch mb-xl-8"></ListWidget6>
    </div>
  </div>

  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import ListWidget1 from "@/components/widgets/lists/Widget1.vue";
import ListWidget2 from "@/components/widgets/lists/Widget2.vue";
import ListWidget6 from "@/components/widgets/lists/Widget6.vue";
import ListWidget5 from "@/components/widgets/lists/Widget5.vue";
import MixedWidget2 from "@/components/widgets/mixed/Widget2.vue";
import TableWidget9 from "@/components/widgets/tables/Widget9.vue";

export default defineComponent({
  name: "dashboard",
  components: {
    TableWidget9,
    ListWidget1,
    ListWidget2,
    ListWidget5,
    ListWidget6,
    MixedWidget2,
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Dashboard");
    });
  },
});
</script>
