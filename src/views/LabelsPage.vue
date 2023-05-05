<template>
  <div>
    <SideBar @view="getView" @sidebarSize="getSidebarSize"></SideBar>
    <div
      class="h-screen bg-[#eaeaea] dark:bg-[#2a2b2e] justify-center place-content-center overflow-scroll"
    >
      <div
        class="h-[calc(100%-42px)] mt-[42px] pt-[48px]"
        :class="[clickLabel ? 'hidden' : 'block']"
      >
        <div id="addLabel" class="">
          <div :class="sidebarSize">
            <p
              class="font-serif text-sm text-[#2a2b2e] dark:text-white ml-[-268px]"
            >
              New label
            </p>
          </div>
          <div :class="sidebarSize">
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
        </div>
        <div v-if="labelsList.length > 0" id="labels" class="mt-8">
          <add-label
            @givenLabel="givenLabel"
            @labelValue="labelValue"
            v-for="label in labelsList"
            :key="label.label"
            :label="label"
            @save-label="updateLabel"
            :class="sidebarSize"
          >
          </add-label>
        </div>
      </div>

      <div
        v-if="clickLabel"
        class="justify-center mt-[42px] h-[calc(100%-42px)]"
        :class="[
          sidebarSize,
          sidebarSize === 'ml-[145px]'
            ? 'w-[calc(100%-145px)]'
            : 'w-[calc(100%-50px)]',
        ]"
      >
        <div class="">
          <button @click="closeLabelNotes" class="float-right mr-8 mt-7">
            <i
              class="bi bi-x text-[20px] text-[#2a2b2e] dark:text-white hover:text-[#a3333d]"
            ></i>
          </button>
          <div class="flex">
            <i
              class="bi bi-bookmark-fill text-2xl mt-7 ml-7"
              :style="{ color: color }"
            ></i>
            <p class="font-serif text-lg text-[#2a2b2e] mt-8 ml-2">
              {{ name }}
            </p>
          </div>
        </div>
        <div class="h-[calc(100%-20px)] w-full">
          <div
            v-if="notesList.length > 0"
            ref="main"
            class="justify-center place-content-center mt-[28px] mb-[42px]"
          >
            <div v-if="viewValue === true" class="">
              <list-note
                @givenNote="givenNote"
                @editNote="editNote"
                v-for="note in notesList"
                :key="note.note"
                :note="note"
              >
              </list-note>
            </div>
            <div v-else class="mt-[70px] mb-[42px] mx-[28px]">
              <VueFlexWaterfall
                class="items-center"
                :col="5"
                :col-spacing="15"
                :break-at="{
                  1536: 6,
                  1500: 5,
                  1280: 4,
                  1024: 3,
                  768: 2,
                  500: 1,
                }"
                :break-by-container="true"
              >
                <grid-note
                  @givenNote="givenNote"
                  @editNote="editNote"
                  v-for="note in notesList"
                  :key="note.note"
                  :note="note"
                >
                </grid-note>
              </VueFlexWaterfall>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SideBar from "@/components/SideBar.vue";
import AddLabel from "@/components/AddLabel.vue";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/init";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  Timestamp,
  orderBy
} from "firebase/firestore";
import GridNote from "../components/GridNote.vue";
import ListNote from "../components/ListNote.vue";

const viewValue = ref(localStorage.getItem("views") === "list" ? true : false);
const sidebarSize = ref("ml-[50px]");
const labelsList = ref([]);
const labelItem = ref();
const labelColor = ref();
const buttons = [
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
];
const name = ref();
const color = ref();
const id = ref();
const count = 0;
const clickLabel = ref(false);
const notesList = ref([]);

onMounted(() => {
  givenLabel();
  givenLabels();
});

const getSidebarSize = (value) => {
  sidebarSize.value = value;
  console.log(sidebarSize.value);
};

const getView = (value) => {
  console.log(value);
  viewValue.value = value;
  console.log(viewValue.value);
};

const newLabel = () => {
  const colorNumber = Math.floor(Math.random() * buttons.length);
  labelColor.value = buttons[colorNumber].color;
  if (document.querySelector("#addLabel input").value.length == 0) {
    alert("Hata");
  } else {
    console.log(count.valueOf());
    labelsList.value.push({
      label: labelItem.value,
      labelColor: labelColor.value,
    });
  }
  saveLabel();
};

const saveLabel = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  console.log(userEmail);
  const docRef = await addDoc(
    collection(doc(db, "Users", userEmail), "Labels"),
    {
      label: labelItem.value,
      labelColor: labelColor.value,
      labelId: "",
      date: Timestamp.now(),
    }
  );
  await updateDoc(doc(doc(db, "Users", userEmail), "Labels", docRef.id), {
    labelId: docRef.id,
  });
  console.log(labelsList.value);
};

/*
const updateLabel = (updatedLabel) => {
  labelsList.value.forEach(updateLabel);
  console.log(labelsList.value.forEach());
  console.log('------------------------->>>>',updatedLabel);
};
*/

const labelValue = (value) => {
  console.log(value);
  clickLabel.value = value;
  getNotesOfLabel();
};

const givenLabel = async (value) => {
  name.value = value.label;
  color.value = value.labelColor;
  id.value = value.labelId;
  console.log(name.value);
  console.log(color.value);
  console.log(id.value);
};

const getNotesOfLabel = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  console.log(userEmail);
  const querySnapshot = await getDocs(
    collection(doc(doc(db, "Users", userEmail), "Labels", id.value), "Notes")
  );
  console.log(querySnapshot);
  querySnapshot.forEach((doc) => {
    notesList.value.push({
      noteId: doc.data().noteId,
      title: doc.data().title,
      note: doc.data().note,
      date: doc.data().date,
    });
    console.log(doc.id, " => ", doc.data());
  });
  console.log("notların listesi", notesList.value);
};

const closeLabelNotes = () => {
  clickLabel.value = false;
  notesList.value = [];
  console.log("buralardaaaaaa -------> ", notesList.value);
};

const givenLabels = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  console.log(userEmail);
  const querySnapshot = await getDocs(
    collection(doc(db, "Users", userEmail), "Labels")
  );
  console.log("labelssssssssss", querySnapshot);
  querySnapshot.forEach((doc) => {
    labelsList.value.push({
      labelId: doc.data().labelId,
      label: doc.data().label,
      labelColor: doc.data().labelColor,
      date: doc.data().date,
    });
    console.log(doc.id, " => ", doc.data());
  });
  console.log("etiketlerin listesi", labelsList.value);
};
</script>
