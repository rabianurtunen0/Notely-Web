<template>
  <div v-if="label" class="relative">
    <button
      @click="
        notesOfLabel,
          $emit('givenLabel', givenLabel),
          $emit('labelValue', labelValue)
      "
      id="label"
      class="inline-flex w-[336px] mt-4 mx-4 border-2 border-[#a3333d] rounded-lg p-2 hover:bg-zinc-300"
    >
      <div>
        <button v-if="edit" @click="deleteNote">
          <i class="bi bi-trash hover:text-[#a3333d]"></i>
        </button>
        <button v-else @click.stop="notesOfLabel" @click="selectColor">
          <i
            ref="labelColor"
            class="bi bi-bookmark-fill"
            :style="{ color: givenLabel.labelColor }"
          ></i>
        </button>
      </div>
      <div
        v-if="colorBar"
        v-on-click-outside="closeBar"
        @click.stop="notesOfLabel"
        id="colorBar"
        ref="colorBar"
        class="absolute z-10 block bg-[#eaeaea] w-64 h-32 mt-3 ml-2 pt-[17px] border-[1px] border-zinc-300 rounded-lg"
      >
        <button
          v-for="(button, index) in buttons"
          :key="index"
          :ref="'button-' + index"
          @click="changeColor(index, button.color)"
          class="ml-1 mr-1 w-4 h-4 rounded-full border-[1px] border-black"
          :style="{ backgroundColor: button.color }"
        ></button>
      </div>
      <div v-if="edit" class="w-full flex float-left ml-2 mt-[2px] text-sm">
        <input
          type="text"
          v-model="labelName"
          class="w-[calc(100%-12px)] pl-2 bg-[#eaeaea] dark:bg-[#2a2b2e] border-[1px] border-[#a3333d] rounded-lg focus:outline-none focus:border-[#a3333d]"
        />
      </div>
      <div v-else class="w-full flex float-left ml-2 pl-2 mt-[2px] text-sm">
        <span id="labelname">
          {{ labelName }}
        </span>
      </div>
      <div>
        <button v-if="edit" @click="editLabel">
          <i
            class="bi bi-check-square-fill text-[#a3333d] dark:text-white hover:text-[#a3333d]"
          ></i>
        </button>
        <button v-else @click="editLabel">
          <i
            class="bi bi-pencil-square text-[#2a2b2e] dark:text-white right-2 hover:text-[#a3333d]"
          ></i>
        </button>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";
import { vOnClickOutside } from "@vueuse/components";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/init";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

const props = defineProps({
  label: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["saveLabel"]);
const givenLabel = ref(props.label);
const labelValue = ref(true);

const labelColor = ref();
const colorBar = ref(false);
const buttons = ref([
  { color: "rgb(209 213 219)" },
  { color: "rgb(156 163 175)" },
  { color: "rgb(107 114 128)" },
  { color: "rgb(75 85 99)" },
  { color: "rgb(55 65 81)" },
  { color: "rgb(252 165 165)" },
  { color: "rgb(248 113 113)" },
  { color: "rgb(239 68 68)" },
  { color: "rgb(220 38 38)" },
  { color: "rgb(185 28 28)" },
  { color: "rgb(253 186 116)" },
  { color: "rgb(251 146 60)" },
  { color: "rgb(249 115 22)" },
  { color: "rgb(234 88 12)" },
  { color: "rgb(194 65 12)" },
  { color: "rgb(253 224 71)" },
  { color: "rgb(250 204 21)" },
  { color: "rgb(234 179 8)" },
  { color: "rgb(202 138 4)" },
  { color: "rgb(161 98 7)" },
  { color: "rgb(110 231 183)" },
  { color: "rgb(52 211 153)" },
  { color: "rgb(16 185 129)" },
  { color: "rgb(5 150 105)" },
  { color: "rgb(4 120 87)" },
  { color: "rgb(125 211 252)" },
  { color: "rgb(56 189 248)" },
  { color: "rgb(14 165 233)" },
  { color: "rgb(2 132 199)" },
  { color: "rgb(3 105 161)" },
  { color: "rgb(216 180 254)" },
  { color: "rgb(192 132 252)" },
  { color: "rgb(168 85 247)" },
  { color: "rgb(147 51 234)" },
  { color: "rgb(126 34 206)" },
  { color: "rgb(249 168 212)" },
  { color: "rgb(244 114 182)" },
  { color: "rgb(236 72 153)" },
  { color: "rgb(219 39 119)" },
  { color: "rgb(190 24 93)" },
]);
const edit = ref(false);
const labelName = ref(givenLabel.value.label);
const label = ref(true);

const selectColor = () => {
  colorBar.value = !colorBar.value;
};

const closeBar = () => {
  colorBar.value = false;
};

const changeColor = async (index, color) => {
  givenLabel.value.labelColor = color;
  emit("saveLabel", givenLabel.value);
  colorBar.value = true;
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  console.log(userEmail);
  await updateDoc(
    doc(doc(db, "Users", userEmail), "Labels", givenLabel.value.labelId),
    {
      labelColor: color,
    }
  );

};

const notesOfLabel = () => {
  labelValue.value = true;
};

const editLabel = async () => {
  labelValue.value = false;
  edit.value = !edit.value;
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  await updateDoc(doc(doc(db, "Users", userEmail), "Labels", givenLabel.value.labelId), {
    label: labelName.value
  });
  console.log(labelName.value)
};

const deleteNote = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  await deleteDoc(doc(doc(db, "Users", userEmail), "Labels", givenLabel.value.labelId));
  label.value = false;

}
</script>
