<template> 
    <div id="sidebar" class=" h-screen fixed w-[50px] bg-[#eaeaea] dark:bg-[#2a2b2e] drop-shadow-md border-r-[1px] border-[#eaeaea] border-r-zinc-300 dark:border-transparent dark:border-r-zinc-500">
      <div class="w-auto">
        <div class="flex items-start ml-1 mb-3">
          <img src="@/assets/images/app-icon.svg" class="h-10 w-10 mt-1.5" />  
        </div>
        <router-link to="/toDoList"> 
          <div
            class="group group/item flex w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:bg-zinc-300 dark:focus:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d] focus:border-l-4 focus:border-[#a3333d]"
          > 
            <button class="ml-1 inline-flex items-center">
              <i class="bi bi-list-check group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3"></i>
            </button> 
          </div>
        </router-link>
        <router-link to="/note"> 
          <div
            class="group group/item flex w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:bg-zinc-300 dark:focus:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d] focus:border-l-4 focus:border-[#a3333d]"
          >
            <button class="ml-1 inline-flex items-center">
              <i class="bi bi-file-earmark-text group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3"></i>
            </button>
          </div>
        </router-link>
        <router-link to="/label"> 
          <div
            class="group group/item flex w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:bg-zinc-300 dark:focus:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d] focus:border-l-4 focus:border-[#a3333d]"
          >
            <button class="ml-1 inline-flex items-center">
                <i class="bi bi-bookmark group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3"></i>
              
              
            </button>
          </div>
        </router-link>
        <router-link to="/archive"> 
          <div
            class="group flex mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:bg-zinc-300 dark:focus:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d] focus:border-l-4 focus:border-[#a3333d]"
          >
            <button class="ml-1 inline-flex items-center">
              <i class="bi bi-archive group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3 mb-1"></i>
              
            </button>
          </div>
        </router-link>
        <router-link to="/trash"> 
          <div
            class="group flex mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:bg-zinc-300 dark:focus:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d] focus:border-l-4 focus:border-[#a3333d]"
          >
            <button class="ml-1 inline-flex items-center">
              <i class="bi bi-trash group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3 mb-1"></i>
              
            </button>
          </div>
        </router-link>
      </div>
      <div class="absolute bottom-0 left-0 w-full">
        <hr
          id="line"
          class="overflow-visible w-auto h-0.5 bg-[#2a2b2e] dark:text-white"
        />
        <router-link to="/settings"> 
          <div
            class="group flex h-10 bottom-0 hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:bg-zinc-300 dark:focus:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d] focus:border-l-4 focus:border-[#a3333d]"
          >
            <button class="ml-1 inline-flex items-center">
              <i class="bi bi-gear group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3 mb-1"></i>
              
            </button>
          </div>
        </router-link>
      </div>
    </div> 
    <div class="absolute top-[13px] right-3">
        <div v-if="theme === true">
          <button class="" @click="changeTheme">
            <i
              class="bi bi-brightness-high-fill text-[#2a2b2e] dark:text-white hover:text-[#a3333d] dark:hover:text-[#a3333d]"
            ></i>
          </button>
        </div>
        <div v-else>
          <button class="" @click="changeTheme">
            <i
              class="bi bi-moon text-[#2a2b2e] dark:text-white hover:text-[#a3333d] dark:hover:text-[#a3333d]"
            ></i>
          </button>
        </div>
      </div>
</template>

<script setup>

import { ref } from "vue";

const addButton = ref(false);
const noteArea = ref(false);
const listArea = ref(false);
const theme = ref(
  localStorage.getItem("color-theme") === "light" ? true : false
);
const task = ref(null);

const changeTheme = () => {
  theme.value = !theme.value;
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
};
const add = () => { 
  addButton.value = !addButton.value;
}
const newNote = () => {
  noteArea.value = !noteArea.value;
  listArea.value = false;
  main.style.display = "none"
};
const newList = () => {
  listArea.value = !listArea.value;
  noteArea.value = false;
  main.style.display = "none"
};
const newAddNote = () => {
  noteArea.value = !noteArea.value;
  main.style.display = "block"
}
const newTask = () => {
  if(document.querySelector('#addTask input').value.length == 0) {
    alert("Hata")
  }
  else {
    document.querySelector('#tasks').innerHTML += `
            <div id="task" class="w-full mt-5 mx-5 border-[1px] border-transparent border-b-zinc-300">
              <input type="checkbox" value="" class="flex float-left mt-1 border-solid rounded-3xl bg-white accent-[#a3333d]">
                <span id="taskname" class="flex float-left ml-4 text-sm">
                    ${document.querySelector('#addTask input').value}
                </span>
                <button id="delete" class="flex float-right">
                  <i class="bi bi-three-dots text-[#2a2b2e] hover:text-[#a3333d]"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll("#delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
  }
}
</script>

<style> 

#task {
  width: calc(100% - 40px)
}
</style>
