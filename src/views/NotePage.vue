<template>
    <div> 
        <SideBar/>
        <div id="home" class="h-screen mb-[42px] bg-[#eaeaea] justify-center items-center place-content-center" :class="sidebarChange ? 'pl-[145px]' : 'pl-[50px]'"> 
            <div id="main" ref="main" class="justify-center items-center place-content-center"> 
                <div class="flex justify-center items-center"> 
                    <div class="flex static object-center justify-center items-center w-2/3 h-2/3 mx-12">
                        <img src="../assets/images/addnote_picture.svg" class="max-w-lg" />
                    </div>
                </div>
                <div class="justify-center items-center mx-12"> 
                    <h3 class="font-serif mt-6 text-[#2a2b2e]">Welcome to Notely. Notely is an easy way to take notes, create tasks, capture ideas, and more. Just open the app and write your thoughts.</h3> 
                    <h3 class="font-serif font-black mt-2">Start taking notes now</h3>
                </div>
            </div>
            <div class="flex items-center justify-center place-content-center pt-20" :class="noteArea ? 'flex' : 'hidden'">
                <div id="noteArea" class="w-5/6 h-3/4 bg-[#eaeaea] dark:bg-[#2a2b2e] rounded-lg border-[1px] border-zinc-300 dark:border-zinc-500">
                    <div class="h-9 border-b border-b-zinc-300 dark:border-zinc-500">
                        <i class="bi bi-arrows-angle-expand float-right mr-2 mt-1 text-[#2a2b2e] dark:text-white"></i>
                        <div class="h-[23px] w-[1px]  border-l-[1px] float-right mr-3 mt-1.5 border-l-zinc-600"></div>
                        <i class="bi bi-share float-right mr-3 mt-1 text-[#2a2b2e] dark:text-white"></i>
                        <i class="bi bi-trash float-right mr-3 mt-1 text-[#2a2b2e] dark:text-white"></i>
                        <i class="bi bi-archive float-right mr-3 mt-1 text-[#2a2b2e] dark:text-white"></i>
                        <i class="bi bi-bookmark float-right mr-3 mt-1 text-[#2a2b2e] dark:text-white"></i>
                    </div>
                    <div class="w-full flex flex-col">
                        <div class="mt-2 px-2 w-full">
                            <input
                              type="text"
                              class="px-2 py-1 w-full justify-center overflow-visible bg-transparent font-black font-serif text-[#2a2b2e] dark:text-white placeholder-zinc-700 dark:placeholder-zinc-300 border-transparent focus:outline-none"
                              placeholder="Title.."
                            />
                        </div>
                        <div class="mt-2 px-2 w-full">
                            <textarea
                              type="text"
                              cols="59"
                              rows="23"
                              class="px-2 py-1 bg-transparent w-full font-serif text-[#2a2b2e] dark:text-white placeholder-zinc-700 dark:placeholder-zinc-300 border-transparent focus:outline-none"
                              placeholder="Note.."
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full pt-10" :class="listArea ? 'flex' : 'hidden'">
                <div class="w-full h-10"> 
                    <div class="px-2 w-full">
                        <input
                          type="text"
                          class="px-2 py-1 mt-2 w-full justify-center overflow-visible bg-transparent font-black font-serif text-[#2a2b2e] dark:text-white placeholder-zinc-700 dark:placeholder-zinc-300 focus:outline-none border-[1px] border-b-[#a3333d]"
                          placeholder="Title.."
                        />
                    </div>
                </div>  
                <div id="addTask" class="inline-flex px-4">
                    <button id="push" @click="newTask"> 
                        <font-awesome-icon icon="fa-solid fa-plus" class="w-3 h-3 text-[#2a2b2e] dark:text-white hover:text-[#a3333d] text-2xl ml-1 mt-1"/>
                    </button> 
                    <input
                      type="text"
                      ref="task"
                      class="w-full ml-2 mt-1 bg-transparent font-serif text-[#2a2b2e] text-sm dark:text-white placeholder-zinc-700 dark:placeholder-zinc-300 placeholder:text-sm border-transparent focus:outline-none"
                      placeholder="Add a new task.."
                    />
                </div>
                <div id="tasks" class="flex flex-col"></div>
            </div>
            <div id="actionButtons"> 
                <div class=""> 
                    <div> 
                        <button v-if="addButton === true" @click="newList" class="absolute h-9 w-9 right-[30px] bottom-[132px] rounded-2xl bg-white transition ease-in-out delay-150 hover:scale-110 hover:bg-zinc-300 duration-300"> 
                            <i class="bi bi-list-check text-[#a3333d]"></i>
                        </button>
                        <button v-if="addButton === true" @click="newNote" class="absolute h-9 w-9 right-[30px] bottom-[86px] mt-10 rounded-2xl bg-white transition ease-in-out delay-150 hover:scale-110 hover:bg-zinc-300 duration-300"> 
                            <i class="bi bi-file-earmark-text text-[#a3333d]"></i>
                        </button>
                    </div>
                    <div ref="input" class="absolute right-5 bottom-5">
                        <button v-if="noteArea === true"
                          @click="newAddNote" 
                          class="button inline-block w-[52px] h-[52px] bg-[#a3333d] hover:bg-[#92262f] hover:border-[#92262f] rounded-lg"
                        >
                            <font-awesome-icon icon="fa-solid fa-check" class="w-6 h-6 mt-1 text-white"/>
                        </button>
                        <button v-else
                          @click="add"
                          class="button inline-block w-[52px] h-[52px] bg-[#a3333d] hover:bg-[#92262f] hover:border-[#92262f] rounded-lg animate-bounce"
                        >
                            <font-awesome-icon icon="fa-solid fa-plus" class="w-6 h-6 mt-1 text-white"/>
                        </button>
                    </div>
                </div> 
            </div>
        </div>   
    </div>
</template>

<script setup>

import { ref } from "vue";
import SideBar from "../components/SideBar.vue";
import { defineProps} from "vue";

defineProps({
  sidebar: {
    type: Object,
    required: true,
  },
});


const addButton = ref(false);
const noteArea = ref(false);
const listArea = ref(false);
const main= ref()
const task = ref(null);
const sidebarChange = ref(
  localStorage.getItem("sidebar-size") === "big" ? true : false
);


const add = () => { 
  addButton.value = !addButton.value;
}
const newNote = () => {
  noteArea.value = !noteArea.value;
  listArea.value = false;
  main.value.style.display = "none"
};
const newList = () => {
  listArea.value = !listArea.value;
  noteArea.value = false;
  main.value.style.display = "none"
};
const newAddNote = () => {
  noteArea.value = !noteArea.value;
  main.value.style.display = "block"
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