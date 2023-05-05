<template>
  <div>
    <SideBar @view="getView" @sidebarSize="getSidebarSize"></SideBar>
    <div
      class="h-screen place-content-center justify-center bg-[#eaeaea] dark:bg-[#2a2b2e] overflow-scroll"
    >
    <div
          v-if="archiveList.length > 0"
          ref="main"
          class="justify-center place-content-center mt-[70px] mb-[42px]"
          :class="sidebarSize"
        >
          <div v-if="viewValue === true" class="">
            <list-note
              @givenNote="givenNote"
              v-for="note in archiveList"
              :key="note.note"
              :note="note"
            >
            </list-note>
          </div>
          <div v-else class="justify-center place-content-center mt-[70px] mb-[42px]">
            <VueFlexWaterfall
              class="items-center"
              :col="5"
              :col-spacing="15"
              :break-at="{ 1536: 6, 1280: 5, 1024: 4, 768: 3, 500: 2, 350: 1 }"
              :break-by-container="true"
            >
              <grid-note
                @givenNote="givenNote"
                v-for="note in archiveList"
                :key="note.note"
                :note="note"
              >
              </grid-note>
            </VueFlexWaterfall>
          </div>
        </div>
      <div
        v-else
        id="main"
        ref="main"
        class="justify-center place-content-center"
      >
        <div class="flex justify-center mt-16">
          <img
            src="../assets/images/archive_picture.svg"
            class="max-w-xl w-5/6 h-5/6"
          />
        </div>
        <div class="justify-center items-center mx-12">
          <h3 class="font-serif mt-6 text-[#2a2b2e]">
            You don't have archived note or list.
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
import { ref, onMounted } from "vue";
import { db } from "../firebase/init";
import { collection, getDocs, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import ListNote from "../components/ListNote.vue";
import GridNote from '../components/GridNote.vue';
import { VueFlexWaterfall } from "vue-flex-waterfall";


const viewValue = ref(localStorage.getItem("views") === "list" ? true : false);
const sidebarSize = ref("ml-[50px]");
const archiveList = ref([]);

onMounted(() => {
  getNotes();
});

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

const getNotes = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  console.log(userEmail);
  const querySnapshot = await getDocs(
    collection(doc(db, "Users", userEmail), "Archive")
  );
  console.log(querySnapshot);
  querySnapshot.forEach((doc) => {
    archiveList.value.push({
      noteId: doc.data().noteId,
      title: doc.data().title,
      note: doc.data().note,
      date: doc.data().date,
    });
    console.log(doc.id, " => ", doc.data());
  });
  console.log("Arşivlenen notların listesi", archiveList.value);
};
</script>
