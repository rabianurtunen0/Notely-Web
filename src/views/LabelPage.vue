<template>
  <div>
    <SideBar />
    <div
      class="flex h-screen bg-[#eaeaea] dark:bg-[#2a2b2e]"
      :class="notesOfLabelValue ? w - 1 / 2 : w - full"
    >
      <div class="h-[calc(100%-42px)] w-1/2 bg-[#eaeaea] ml-[50px] mt-[42px] pt-[48px] drop-shadow-sm border-r-[1px] border-zinc-300 overflow-scroll">
        <div class="">
          <div id="addLabel" class="">
            <p
              class="font-serif text-sm text-[#2a2b2e] dark:text-white ml-[-268px]"
            >
              New label
            </p>
            <input
              type="text"
              v-model="labelItem"
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
          <div v-if="labelsList.length > 0" id="labels" class="mt-8">
            <add-labels
              v-for="label in labelsList"
              :key="label.name"
              :label="label"
              @save-label="updateLabel"
            >
            </add-labels>
          </div>
        </div>
      </div>
      <div class="h-[calc(100%-42px)] w-1/2 bg-[#eaeaea] mt-[42px]">
      notes  
      </div>
    
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SideBar from "@/components/SideBar.vue";
import AddLabels from "@/components/AddLabels.vue";

const notesOfLabelValue = ref(false);
const labelsList = ref([]);
const labelItem = ref();
const buttons = [
      { color: 'rgb(209 213 219)' },
      { color: 'rgb(156 163 175)' },
      { color: 'rgb(107 114 128)' },
      { color: 'rgb(75 85 99)' },
      { color: 'rgb(55 65 81)' },
      { color: 'rgb(252 165 165)' },
      { color: 'rgb(248 113 113)' },
      { color: 'rgb(239 68 68)' },
      { color: 'rgb(220 38 38)' },
      { color: 'rgb(185 28 28)' },
      { color: 'rgb(253 186 116)' },
      { color: 'rgb(251 146 60)' },
      { color: 'rgb(249 115 22)' },
      { color: 'rgb(234 88 12)' },
      { color: 'rgb(194 65 12)' },
      { color: 'rgb(253 224 71)' },
      { color: 'rgb(250 204 21)' },
      { color: 'rgb(234 179 8)' },
      { color: 'rgb(202 138 4)' },
      { color: 'rgb(161 98 7)' },
      { color: 'rgb(110 231 183)' },
      { color: 'rgb(52 211 153)' },
      { color: 'rgb(16 185 129)' },
      { color: 'rgb(5 150 105)' },
      { color: 'rgb(4 120 87)' },
      { color: 'rgb(125 211 252)' },
      { color: 'rgb(56 189 248)' },
      { color: 'rgb(14 165 233)' },
      { color: 'rgb(2 132 199)' },
      { color: 'rgb(3 105 161)' },
      { color: 'rgb(216 180 254)' },
      { color: 'rgb(192 132 252)' },
      { color: 'rgb(168 85 247)' },
      { color: 'rgb(147 51 234)' },
      { color: 'rgb(126 34 206)' },
      { color: 'rgb(249 168 212)' },
      { color: 'rgb(244 114 182)' },
      { color: 'rgb(236 72 153)' },
      { color: 'rgb(219 39 119)' },
      { color: 'rgb(190 24 93)' },
    ];
const count = 0

const newLabel = () => {
  const colorNumber = Math.floor(Math.random() * buttons.length);
  const color = buttons[colorNumber].color;
  //const color = "#" + ((Math.random() * 16777215) << 0).toString(16);
  if (document.querySelector("#addLabel input").value.length == 0) {
    alert("Hata");
  } 
  else {
    
    console.log(count.valueOf())
    labelsList.value.push({
     
      name: labelItem.value,
      color: color, 
    });
    //console.log('---------->' + labelsList.value.color);
  }
};

const updateLabel = (updatedLabel) =>{
  //find label list to updated label and update also here
  //labelsList.forEach( find locig )
  labelsList.value.forEach(updateLabel)
  
  console.log(labelsList.value.forEach())
  //labelsList.forEach(label.value)
  console.log(updatedLabel)
}
</script>
