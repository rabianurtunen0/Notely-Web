<template>
  <div>
    <Sidebar/>
    <div class="h-screen bg-[#eaeaea] dark:bg-[#2a2b2e] overflow-scroll" :class="notesOfLabelValue ? w-1/2 : w-full"  >
      <div class="ml-[50px] py-20">
        <div class="">
          <div id="addLabel" class="">
            <p
              class="font-serif text-sm text-[#2a2b2e] dark:text-white ml-[-268px]"
            >
              New label
            </p>
            <input
              type="text"
              ref="label"
              class="w-72 h-9 rounded-lg bg-white border-solid p-2.5 text-sm shadow-sm focus:outline-none placeholder-gray-500"
              placeholder="Enter label name..."
            />
            <button
              id="push"
              @click="newLabel"
              class="mt-2 ml-4 w-9 h-9 bg-[#a3333d] rounded-lg"
            >
              <i class="bi bi-check mb-1 text-white text-xl"></i>
            </button>
          </div>
          <div id="labels" class="mt-8"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Sidebar from "../components/Sidebar.vue";
import NotesOfLabel from "../components/AddLabels.vue";


const notesOfLabelValue = ref(false);

const newLabel = () => {
  return NotesOfLabel;
}

/*
const newLabel = () => {
  const color = "#" + ((Math.random() * 16777215) << 0).toString(16);
  console.log(color);
  if (document.querySelector("#addLabel input").value.length == 0) {
    alert("Hata");
  } else {
    document.querySelector("#labels").innerHTML += `
        <router-link to="/notesOfLabel">
            <button @click="notesOfLabel" id="label" class="flex inline-flex w-[336px] mt-4 mx-4 border-2 border-[#a3333d] rounded-lg p-2 hover:bg-zinc-300">
                <i class="bi bi-bookmark-fill" style="color:${color}"></i>
                <span id="labelname" class="w-full flex float-left ml-4 text-sm">
                    ${document.querySelector("#addLabel input").value}
                </span>
                <i class="bi bi-pencil-square text-[#2a2b2e] dark:text-white right-2"></i>
            </button>
        </router-link>
    `;
  }
};
*/

const notesOfLabel = () => {
    notesOfLabelValue.value = !notesOfLabelValue.value;
};
</script>

<style></style>
