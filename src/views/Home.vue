<template>
  <div id="home">
    <b-container class="wrapper">
      <b-row style="height: 100%">
        <b-col cols="8">
          <p>Drag one element here to get started!!</p>
          <draggable
            class="dragArea list-group"
            :list="list2"
            group="people"
            @change="log"
          >
            <div
              @click="elementSelected(element)"
              class="list-group-items m-1"
              v-for="element in list2"
              :id="element.id"
              :key="element.id"
            >
              <label class="mb-1">{{ element.label }}</label>
              <component :is="element.type" :ref="element.id" />
            </div>
          </draggable>
        </b-col>
        <b-col class="menu" cols="4 p-3">
          <draggable
            class="dragArea list-group"
            :list="list1"
            :group="{ name: 'people', pull: 'clone', put: false }"
            :clone="cloneDog"
            @change="log"
          >
            <FormElement
              class="mb-3"
              v-for="(el, i) in list1"
              :key="i"
              :elementText="el.text"
              :elementType="el.type"
            />
          </draggable>
          <div v-if="selectedElement.type === 'BaseInput'">
            <BaseInput :label="'Label'" v-model="labelValue" />
            <button class="btn btn-login" @click="save">Save</button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FormElement from "@/components/FormElement";
import BaseInput from "@/components/BaseInput";
import BaseTextarea from "@/components/BaseTextarea";
import draggable from "vuedraggable";
let idGlobal = 8;

export default {
  name: "Home",
  components: {
    FormElement,
    draggable,
    BaseInput,
    BaseTextarea,
  },
  data() {
    return {
      list1: [
        { text: "Text Field", id: 1, type: "BaseInput" },
        { text: "Long Text", id: 2, type: "BaseTextarea" },
      ],
      list2: [],
      selectedElement: { id: null, type: null },
      labelValue: "",
    };
  },
  computed: {
    currentProperties: function () {
      if (this.selectedElement.type === "BaseInput") {
        return { label: "Please enter your Label" };
      }
      return "";
    },
  },
  methods: {
    log: function (evt) {
      window.console.log(evt);
    },
    cloneDog({ text, type }) {
      return {
        id: idGlobal++,
        text,
        type,
        label: "",
        isRequired: true,
      };
    },
    elementSelected(element) {
      this.labelValue = "";
      const elID = this.selectedElement.id;
      if (elID && elID !== element.id) {
        const previousEl = document.getElementById(elID);
        previousEl.classList.remove("border-blue-selected");
      }
      if (elID !== element.id) {
        this.selectedElement = {
          type: element.type,
          id: element.id,
        };
        const el = document.getElementById(element.id);
        el.classList.add("border-blue-selected");
      }
      console.log(this.selectedElement);
    },
    save() {
      for (let i = 0; i < this.list2.length; i++) {
        if (this.list2[i].id === this.selectedElement.id) {
          this.list2[i].label = this.labelValue;
          this.labelValue = "";
          // TODO: Add a watcher for when selectedElement changes remove class
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  height: 100%;
}

.wrapper {
  border: 1px solid rgba(0, 0, 0, 0.5);
  height: 100%;
}

.list-group-items {
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 15px;
  cursor: pointer;
}

.border-blue-selected {
  border: 3px solid blue;
}
</style>
