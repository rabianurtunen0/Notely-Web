<template>
  <div>
    <SideBar @view="getView" @sidebarSize="getSidebarSize"></SideBar>
    <div
      id="home"
      class="h-screen bg-[#eaeaea] dark:bg-[#2a2b2e] justify-center place-content-center overflow-scroll"
    >
      <div
        class=""
        :class="[
          edit === true ? 'hidden sm:block w-1/2 float-left' : 'w-screen',
          sidebarSize === 'ml-[145px]' && edit === true
            ? 'w-[calc(50%+42.5px)]'
            : '',
        ]"
      >
        <div
          v-if="notesList.length > 0"
          ref="main"
          class="justify-center place-content-center mt-[70px] mb-[42px]"
          :class="sidebarSize"
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
              :break-at="{ 1536: 6, 1500: 5, 1280: 4, 1024: 3, 768: 2, 500: 1 }"
              :break-by-container="true"
            >
              <grid-note
                @givenNote="givenNote"
                @editNote="editNote"
                v-for="note in notesList"
                :key="note.note"
                :note="note"
                :style="{
                  height:
                    heightValues[
                      Math.floor(Math.random() * heightValues.length)
                    ],
                }"
              >
              </grid-note>
            </VueFlexWaterfall>
          </div>
        </div>
        <div
          v-else
          ref="main"
          class="justify-center place-content-center mt-[70px] mb-[21px]"
          :class="sidebarSize"
        >
          <div class="flex justify-center mt-16">
            <img
              src="../assets/images/note_picture.svg"
              class="max-w-xl w-5/6 h-5/6"
            />
          </div>
          <div class="justify-center items-center mx-12">
            <h3 class="font-serif mt-6 text-[#2a2b2e] dark:text-white">
              Welcome to Notely. Notely is an easy way to take notes, capture
              ideas, and more. Just open the app and write your thoughts.
            </h3>
            <h3 class="font-serif font-black mt-2 dark:text-white">
              Start taking notes now
            </h3>
          </div>
        </div>
      </div>
      <div
        v-if="edit === true"
        ref="changingBar"
        class="fixed right-0 mt-[70px] mb-[42px] mr-7 bg-[#eaeaea] dark:bg-[#2a2b2e] sm:w-[calc(50%-28px)] h-[calc(100%-112px)] border-[1px] border-[#a3333d] dark:border-zinc-500 rounded-lg"
        :class="
          sidebarSize === 'ml-[145px]'
            ? 'w-[calc(100%-201px)] sm:w-[calc(50%-70.5px)]'
            : 'w-[calc(100%-106px)] sm:w-[calc(50%-28px)]'
        "
      >
        <div
          class="w-full h-9 border-b border-b-[#a3333d] dark:border-zinc-500"
        >
          <button @click="changeNote" class="float-right mr-2 mt-[4.5px]">
            <i
              class="bi bi-check-square-fill text-[#a3333d] dark:text-white hover:text-[#a3333d]"
            ></i>
          </button>
          <div
            class="h-[23px] w-[1px] border-l-[1px] float-right mr-3 mt-1.5 border-l-zinc-600"
          ></div>
          <button @click="shareChangeNote" class="float-right mr-3 mt-1">
            <i
              class="bi bi-share text-[#2a2b2e] dark:text-white hover:text-[#a3333d]"
            ></i>
          </button>
          <button @click="trashChangeNote" class="float-right mr-3 mt-1">
            <i
              class="bi bi-trash text-[#2a2b2e] dark:text-white hover:text-[#a3333d]"
            ></i>
          </button>
          <button @click="archiveChangeNote" class="float-right mr-3 mt-1">
            <i
              class="bi bi-archive text-[#2a2b2e] dark:text-white hover:text-[#a3333d]"
            ></i>
          </button>
          <button @click="addLabelChangeNote" class="float-right mr-3 mt-1">
            <i
              class="bi bi-bookmark text-[#2a2b2e] dark:text-white hover:text-[#a3333d]"
            ></i>
          </button>
          <button @click="closeChangeNote" class="float-left ml-1 mt-[1px]">
            <i
              class="bi bi-x text-[20px] text-[#2a2b2e] dark:text-white hover:text-[#a3333d]"
            ></i>
          </button>
        </div>
        <div
          v-if="edit === true && label === true"
          class="w-full h-28 border-b border-b-[#a3333d] dark:border-zinc-500"
        ></div>
        <div class="mt-2 px-2 w-full">
          <input
            type="text"
            v-model="changedTitle"
            class="px-2 py-1 w-full justify-center overflow-visible bg-transparent font-black font-serif text-[#2a2b2e] dark:text-white placeholder-zinc-700 dark:placeholder-zinc-300 border-transparent focus:outline-none"
            placeholder="Title.."
          />
        </div>
        <div class="mt-2 px-2 w-full h-[calc(100%-96px)]">
          <textarea
            type="text"
            v-model="changedNote"
            class="h-full min-h-[50px] px-2 py-1 bg-transparent w-full font-serif text-[#2a2b2e] dark:text-white placeholder-zinc-700 dark:placeholder-zinc-300 border-transparent focus:outline-none"
            placeholder="Note.."
          ></textarea>
        </div>
      </div>
      <div
        class="w-full place-content-center"
        :class="noteArea ? 'flex' : 'hidden'"
      >
        <div
          id="noteArea"
          class="fixed h-[calc(100%-112px)] bg-[#eaeaea] mt-[70px] mb-[28px] dark:bg-[#2a2b2e] rounded-lg border-[1px] border-zinc-400 dark:border-zinc-500"
          :class="
            sidebarSize === 'ml-[145px]'
              ? 'w-[calc(100%-201px)] ml-[173px] mr-[28px]'
              : 'w-[calc(100%-106px)] ml-[78px] mr-[28px]'
          "
        >
          <div class="h-9 border-b border-b-zinc-400 dark:border-zinc-500">
            <button @click="addNote" class="float-right mr-2 mt-[4.5px]">
              <i
                class="bi bi-check-square-fill text-[#a3333d] dark:text-white hover:text-[#a3333d]"
              ></i>
            </button>
            <div
              class="h-[23px] w-[1px] border-l-[1px] float-right mr-3 mt-1.5 border-l-zinc-600"
            ></div>
            <button @click="shareNote" class="float-right mr-3 mt-1">
              <i
                class="bi bi-share text-[#2a2b2e] dark:text-white hover:text-[#a3333d]"
              ></i>
            </button>
            <button @click="trashNote" class="float-right mr-3 mt-1">
              <i
                class="bi bi-trash text-[#2a2b2e] dark:text-white hover:text-[#a3333d]"
              ></i>
            </button>
            <button @click="archiveNote" class="float-right mr-3 mt-1">
              <i
                class="bi bi-archive text-[#2a2b2e] dark:text-white hover:text-[#a3333d]"
              ></i>
            </button>
            <button @click="addLabelNote" class="float-right mr-3 mt-1">
              <i
                class="bi bi-bookmark text-[#2a2b2e] dark:text-white hover:text-[#a3333d]"
              ></i>
            </button>
            <button @click="closeNote" class="float-left ml-1 mt-[1px]">
              <i
                class="bi bi-x text-[20px] text-[#2a2b2e] dark:text-white hover:text-[#a3333d]"
              ></i>
            </button>
          </div>
          <div class="w-full h-full flex flex-col">
            <div class="mt-2 px-2 w-full">
              <input
                ref="addNoteTextArea"
                type="text"
                v-model="title"
                class="px-2 py-1 w-full justify-center overflow-visible bg-transparent font-black font-serif text-[#2a2b2e] dark:text-white placeholder-zinc-700 dark:placeholder-zinc-300 border-transparent focus:outline-none"
                placeholder="Title.."
              />
            </div>
            <div class="mt-2 px-2 w-full h-[calc(100%-96px)]">
              <textarea
                type="text"
                v-model="note"
                class="px-2 py-1 bg-transparent w-full h-full font-serif text-[#2a2b2e] dark:text-white placeholder-zinc-700 dark:placeholder-zinc-300 border-transparent focus:outline-none"
                placeholder="Note.."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div
        ref="input"
        class="flex fixed right-[14px] bottom-[14px]"
        :class="noteArea ? 'hidden' : 'flex'"
      >
        <button
          @click="add"
          class="button inline-block w-[52px] h-[52px] bg-[#a3333d] hover:bg-[#92262f] hover:border-[#92262f] rounded-lg"
        >
          <font-awesome-icon
            icon="fa-solid fa-plus"
            class="w-6 h-6 mt-1 text-white"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { onMounted, ref } from "vue";
import SideBar from "../components/SideBar.vue";
import { db } from "../firebase/init";
import { VueFlexWaterfall } from "vue-flex-waterfall";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  Timestamp,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

import GridNote from "../components/GridNote.vue";
import ListNote from "../components/ListNote.vue";
//import { vOnClickOutside } from "@vueuse/components";

const viewValue = ref(localStorage.getItem("views") === "list" ? true : false);
const sidebarSize = ref("ml-[50px]");
const addButton = ref(false);
const noteArea = ref(false);
const main = ref();
const changingBar = ref();
const notesList = ref([]);
const title = ref("");
const note = ref("");
const edit = ref(false);
const getNote = ref([]);
const changedTitle = ref();
const changedNote = ref();
const addNoteTextArea = ref();
const heightValues = ref(["200px", "250px", "300px", "350px", "400px"]);
const label = ref(false);

const getView = (value) => {
  console.log(value);
  viewValue.value = value;
  console.log(viewValue.value);
};

const getSidebarSize = (value) => {
  console.log(value);
  sidebarSize.value = value;
  console.log(sidebarSize.value);
};

const givenNote = (value) => {
  console.log(value);
  getNote.value[0] = value.noteId;
  getNote.value[1] = value.title;
  getNote.value[2] = value.note;
  getNote.value[3] = value.date;
  console.log(getNote.value);
  changedTitle.value = value.title;
  changedNote.value = value.note;
};

const editNote = (value) => {
  console.log(value);
  edit.value = value;
};

const getNotes = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  console.log(userEmail);
  const querySnapshot = await getDocs(
    collection(doc(db, "Users", userEmail), "Notes")
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

onMounted(() => {
  getNotes();
});

const add = () => {
  addButton.value = !addButton.value;
  noteArea.value = !noteArea.value;
  main.value.style.display = "none";
  changingBar.value.style.display = "none";
};

const addNote = () => {
  noteArea.value = !noteArea.value;
  main.value.style.display = "block";
  edit.value = false;
  console.log("Title: " + title.value);
  console.log("Note: " + note.value);
  if (title.value == "" && note.value == "") {
    console.log("alanlar boş");
  } else {
    addData();
  }
};

const addData = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  console.log(userEmail);
  const docRef = await addDoc(
    collection(doc(db, "Users", userEmail), "Notes"),
    {
      title: title.value,
      note: note.value,
      noteId: "",
      date: Timestamp.now(),
    }
  );
  await updateDoc(doc(doc(db, "Users", userEmail), "Notes", docRef.id), {
    noteId: docRef.id,
  });
  title.value = "";
  note.value = "";
};

const shareNote = () => {};

const trashNote = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  const docRef = await addDoc(doc(doc(db, "Users", userEmail), "Trash"), {
    title: title.value,
    note: note.value,
    noteId: "",
    date: Timestamp.now(),
  });
  await updateDoc(doc(doc(db, "Users", userEmail), "Trash", docRef.id), {
    noteId: docRef.id,
  });
  title.value = "";
  note.value = "";
  noteArea.value = false;
};

const archiveNote = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  const docRef = await addDoc(doc(doc(db, "Users", userEmail), "Archive"), {
    title: title.value,
    note: note.value,
    noteId: "",
    date: Timestamp.now(),
  });
  await updateDoc(doc(doc(db, "Users", userEmail), "Archive", docRef.id), {
    noteId: docRef.id,
  });
  title.value = "";
  note.value = "";
  noteArea.value = false;
};

const addLabelNote = () => {};

const closeNote = () => {
  noteArea.value = false;
  main.value.style.display = "block";
  changingBar.value.style.display = "block";
  title.value = "";
  note.value = "";
};

const closeChangeNote = () => {
  edit.value = false;
  label.value = false;
};

/*
const closeAddNote = () => {
  //v-on-click-outside="closeAddNote"
  noteArea.value = false;
  main.value.style.display = "block";
  changingBar.value.style.display = "block";
  console.log("Title: " + title.value);
  console.log("Note: " + note.value);
  if (title.value == "" && note.value == "") {
    console.log("alanlar boş");
  } else {
    addData();
  }
};
*/

const changeNote = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  await updateDoc(doc(doc(db, "Users", userEmail), "Notes", getNote.value[0]), {
    title: changedTitle.value,
    note: changedNote.value,
  });
  edit.value = false;
  console.log("değiştirildi");
};
/*
const closeChangeNote = () => {
  edit.value = false;
  console.log(editNote.value)
  editNote.value = false
}
*/

const shareChangeNote = () => {};

const trashChangeNote = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  console.log(getNote.value);
  await deleteDoc(doc(doc(db, "Users", userEmail), "Notes", getNote.value[0]));
  await setDoc(doc(doc(db, "Users", userEmail), "Trash", getNote.value[0]), {
    title: changedTitle.value,
    note: changedNote.value,
    noteId: getNote.value[0],
    date: getNote.value[3],
  });
  edit.value = false;
};

const archiveChangeNote = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  await deleteDoc(doc(doc(db, "Users", userEmail), "Notes", getNote.value[0]));
  await setDoc(doc(doc(db, "Users", userEmail), "Archive", getNote.value[0]), {
    title: changedTitle.value,
    note: changedNote.value,
    noteId: getNote.value[0],
    date: getNote.value[3],
  });
  edit.value = false;
};

const addLabelChangeNote = () => {
  label.value = !label.value;
  console.log(label.value);
};
</script>
