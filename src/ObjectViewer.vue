<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({ name: "ObjectViewer" })
export default class ObjectViewer extends Vue {
  @Prop()
  value!: any;

  @Prop()
  name?: any;

  get objectValue() {
    return this.value;
  }

  set objectValue(newValue: any) {
    this.$emit("input", newValue);
  }

  onChange(name: string, change: any) {
    const newVal = this.applyType(change, name);
    this.$set(this.objectValue, name, newVal);
    this.objectValue = this.objectValue;
  }
  applyType(newVal: any, name: string) {
    if (typeof this.value[name] == "number" && !isNaN(newVal)) {
      return newVal * 1;
    }
    return newVal;
  }
}
</script>

<template>
  <div class="viewer">
    <span v-if="name" class="name">{{ name }}:</span>
    <div class="props" v-if="typeof value=='object'">
      <div class="array" v-if="Array.isArray(value)">
        [
        <div class="item" v-for="(children,name) in value" :key="name">
          <object-viewer :value="children" />
        </div>]
      </div>
      <template v-else>
        {
        <div class="object">
          <object-viewer
            v-for="(children,name) in value"
            :key="name"
            :value="children"
            :name="name"
            @change="change=> onChange(name,change)"
          />
        </div>}
      </template>
    </div>
    <input v-else :value="objectValue" type="text" @change="v=> $emit('change',v.target.value)" />
  </div>
</template>

<style lang="scss" scoped>
div.viewer {
  flex: 1;
  padding: 2px 15px;
  text-align: start;

  & div.props {
    text-align: start;
  }

  & input[type="text"] {
    margin: 0 5px;
    padding: 5px;

    width: auto;
    &:hover {
      padding: 4px;
      border: solid 1px #ccc;
      background: white;
      border-radius: 3px;
    }
  }
}
span.name {
  display: inline-block;
  min-width: 40px;
}
.object {
  border: dotted thin #cccccc;
  margin: 5px;
}
</style>