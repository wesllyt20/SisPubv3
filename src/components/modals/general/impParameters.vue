<template>
  <div :class="divClass">
    <span :class="spanClass">{{ descripcion }}</span>
    <input
      :id="impId"
      :v-model="impVmodel"
      :class="inpClass"
      :type="tipo"
      :min="min"
      :max="max"
      :step="step"
    />
  </div>
</template>
    
    <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "impParameters",
  props: {
    divClass: String,
    spanClass: String,
    descripcion: String,
    impId: String,
    impVmodel: String,
    inpClass: String,
    tipo: String,
    min: String,
    max: String,
    step: String,
  },
});

</script>
    
