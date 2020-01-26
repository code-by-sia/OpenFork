<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({ name: "Editor" })
export default class Editor extends Vue {
  private regex = /((?<![\\])['"])((?:.(?!(?<![\\])\1))*.?)\1/g;

  @Prop({ required: true })
  value!: string;
  editMode = false;

  get text() {
    return this.value;
  }

  set text(newValue: string) {
    this.$emit("input", newValue);
  }

  get lines() {
    return this.text.split("\n");
  }

  formatLine(v: string) {
    v = v.replace(/ /g, "&nbsp");
    let items = this.regex[Symbol.match](v);
    if (items == null) {
      return v;
    }
    for (const item of items) {
      v = v.replace(item, `<span class='str'>${item}</span>`);
    }
    return v;
  }
}
</script>

<template>
  <div class="editor">
    <textarea v-if="editMode" v-model="text" @blur="editMode = false" />
    <div class="rendered" @dblclick="editMode = true" v-else>
      <div class="lines">
        <div class="line" v-for="(line, index) in lines" :key="index">
          {{ index + 1 }}
        </div>
      </div>
      <div class="content">
        <span
          :key="index"
          class="line"
          v-for="(line, index) in lines"
          v-html="formatLine(line)"
        ></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.editor {
  display: flex;
  flex: 1;
  border: solid;
  background: white;
  textarea {
    width: 100%;
    resize: none;
    outline: none;
    margin: 10px;
  }

  div {
    display: flex;

    &.rendered {
      display: flex;
      flex-direction: row;
      width: 100%;
      text-align: left;
      font-size: 14px;
      line-height: 1.5em;

      & .lines {
        flex-direction: column;
        border-right: dotted thin;
        padding: 10px;
        line-height: 22px;
        box-shadow: -2px 0 4px 0 #eeeeee inset;
      }

      & .content {
        padding: 10px 5px;
        flex: 1;
        flex-direction: column;
        & .line {
          border-bottom: solid thin transparent;
          &:hover {
            background: #ffd;
            border-bottom: dotted thin #ccc;
          }
          & span.str {
            color: #0b2785;
            font-weight: bold;
            font-style: italic;
          }
        }
      }
      overflow: auto;
      overflow-wrap: break-spaces;
    }
  }
}
</style>
