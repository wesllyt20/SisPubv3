<template>
    <div class="d-grid w-100">
  <button id="btnints" type="button" class="btn btn-outline-secondary  d-flex">
    <img id="imgInts" class="text-start" alt="" :src="image" />
    <span id="btnTex" class="text-start">{{ text }}</span>
    <span class="circulo ms-auto" v-bind:style="{ backgroundColor: colcir }" ></span>
  </button>
</div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "btnInstitute",
  props: {
    text: String,
    image: String,
    colcir: String,
  },
});
</script>
  
  <style>
#btnints {
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  padding: 4px;
  
 
}

#btnTex {
  color: #005ad9;
  font-size: 12px;
  text-decoration: underline;
  padding-right: 1px;
}
#imgInts2 {
    justify-content: flex-end
}
.circulo {
     width: 20px;
     height: 20px;
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     
}
</style>
  