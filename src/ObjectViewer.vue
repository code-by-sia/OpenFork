<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({ name: "ObjectViewer" })
export default class ObjectViewer extends Vue {
  @Prop()
  value!: any;

  @Prop()
  name?: any;

  @Prop()
  isOpen?: boolean;

  open = false;

  get objectValue() {
    return this.value;
  }

  set objectValue(newValue: any) {
    this.$emit("input", newValue);
  }

  get isArray() {
    return Array.isArray(this.value);
  }

  get isObject() {
    return typeof this.value === "object";
  }

  get expandable() {
    return this.isArray || this.isObject;
  }

  mounted() {
    this.open = this.isOpen || false;
  }

  onChange(name: string, change: any) {
    const newVal = this.applyType(change, name);
    this.$set(this.objectValue, name, newVal);
    this.objectValue = this.objectValue;
    this.$emit("input", this.objectValue);
    this.$emit("value-changed", this.objectValue);
  }

  onValueChanged() {
    this.$emit("input", this.objectValue);
  }

  copyNameToClipboard() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.name);
    }
  }

  copyValueToClipboard() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(this.objectValue));
    }
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
  <div class="object-viewer">
    <span
      v-if="name"
      class="name"
      @dblclick="copyNameToClipboard()"
      @click="copyValueToClipboard()"
      >{{ name }}:</span
    >
    <div class="props" :class="{ open }" v-if="isObject">
      <i
        v-if="expandable"
        :class="`icon fa fa-${open ? 'minus' : 'plus'}`"
        @click="open = !open"
      ></i>

      <div class="array" v-if="isArray">
        [
        <template v-if="open">
          <div class="item" v-for="(children, name) in value" :key="name">
            <object-viewer :value="children" />
          </div>
        </template>
        <template v-else>
          <div class="place-holder" @click="open = true">...</div>
        </template>
        ]
      </div>
      <template v-else>
        {
        <div class="object" v-if="open">
          <object-viewer
            v-for="(children, name) in value"
            :key="name"
            :value="children"
            :name="name"
            @change="change => onChange(name, change)"
            @value-changed="onValueChanged"
          />
        </div>
        <div class="place-holder" @click="open = true" v-else>
          ...
        </div>
        }
      </template>
    </div>
    <input
      v-else
      :value="objectValue"
      type="text"
      @change="v => $emit('change', v.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
div.object-viewer {
  flex: 1;
  display: flex;
  padding: 2px 15px;
  text-align: start;
  align-content: flex-start;
  align-items: flex-start;

  & div.props {
    text-align: start;
    position: relative;

    i.icon {
      cursor: pointer;
      position: absolute;
      left: -13px;
      top: 4px;
      font-size: 10px;
    }
  }

  & input[type="text"] {
    margin: 0 5px;
    padding: 5px;
    width: auto;
    flex: 1;

    &:hover {
      padding: 4px;
      border: solid 1px #ccc;
      background: white;
      border-radius: 3px;
    }
  }
}

span.name {
  display: inline;

  min-width: 70px;
  margin: auto 14px auto 0;
  font-weight: bold;
  cursor: pointer;

  i.icon {
    position: relative;
    left: -20px;
    top: 16px;
    font-size: 12px;
  }
}

.object {
  border: dotted thin transparent;

  &:hover {
    border: dotted thin #cccccc;
    border-radius: 5px;
  }

  margin: 5px;
  display: none;
}

.place-holder {
  display: inline-block;
  border: solid thin #ccc;
  padding: 0 5px;
  border-radius: 4px;
  cursor: pointer;
  background: lightgoldenrodyellow;

  &:hover {
    background: yellow;
  }
}

.open {
  .object {
    display: block;
  }
}
</style>
