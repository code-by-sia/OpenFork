<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ObjectViewer from "./ObjectViewer.vue";

@Component({
  name: "viewer",
  components: {
    ObjectViewer
  }
})
export default class Viewer extends Vue {
  @Prop()
  value!: string;

  get root(): any {
    if (!this.value) return {};
    return JSON.parse(this.value);
  }

  set root(newValue: any) {
    this.$emit("input", JSON.stringify(newValue, null, 2));
  }
}
</script>

<template>
  <div class="viewer">
    <object-viewer key-name="root" v-model="root" is-open="true" />
  </div>
</template>

<style lang="scss" scoped>
div.viewer {
  font-family: sans-serif;
  font-size: 14px;
  display: flex;
  flex: 1;
  padding: 10px;
  background: white;
}
</style>
