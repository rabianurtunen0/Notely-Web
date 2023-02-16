<template>
  <div class="flex overflow-hidden bg-[#eaeaea] dark:bg-[#2a2b2e] h-screen">
    <div id="sidebar" class="hidden h-screen max-h-screen w-[301px] bg-[#eaeaea] dark:bg-[#2a2b2e] drop-shadow-md border-r-[1px] border-[#eaeaea] border-r-zinc-300 dark:border-transparent dark:border-r-zinc-700"
    >
      <div class="w-auto">
        <div class="flex items-start ml-2 mb-2">
          <img src="@/assets/images/app-icon.svg" class="h-10 w-10 mt-1.5"/>
          <label class="inline-flex ml-2 mt-[12.5px] font-serif text-xl text-[#2a2b2e] dark:text-white">NOTELY</label>
          <div v-if="sidebar === true">
            <button
              type="button"
              class="absolute block right-0"
              @click="closeDrawer"
            >
            <i class="bi bi-chevron-double-left text-zinc-400 dark:text-white hover:text-[#a3333d] dark:hover:text-[#a3333d]"></i>
            </button>
          </div>
        </div>
        <div class="group group/item flex w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700">
          <button class="inline-flex items-center mr-16">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3" />
            <label
              class="ml-3 text-[#2a2b2e] dark:text-white text-sm font-serif group-hover:text-[#a3333d]"
              >To Do List</label
            >
          </button>
          <button @click="moreList" class="absolute right-7 place-self-center group/edit invisible group-hover/item:visible mb-1">
            <font-awesome-icon icon="fa-solid fa-ellipsis" class="h-3 w-3 text-[#a3333d]" />
          </button>
          <button @click="addList" class="absolute right-3 place-self-center group/edit invisible group-hover/item:visible mb-1">
            <font-awesome-icon icon="fa-solid fa-plus" class="h-3 w-3 text-[#a3333d]"/>
          </button>
        </div>
        <div class="group group/item flex w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700">
          <button class="inline-flex items-center mr-16">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3" />
            <label
              class="ml-3 text-[#2a2b2e] dark:text-white text-sm font-serif group-hover:text-[#a3333d]"
              >Notes</label
            >
          </button>
          <button @click="moreNote" class="absolute right-7 place-self-center group/edit invisible group-hover/item:visible mb-1">
            <font-awesome-icon icon="fa-solid fa-ellipsis" class="h-3 w-3 text-[#a3333d]" />
          </button>
          <button @click="addNote" class="absolute right-3 place-self-center group/edit invisible group-hover/item:visible mb-1">
            <font-awesome-icon icon="fa-solid fa-plus" class="h-3 w-3 text-[#a3333d]"/>
          </button>
        </div>
        <div class="group group/item flex w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700">
          <button class="inline-flex items-center mr-16">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3" />
            <label class="ml-3 text-[#2a2b2e] dark:text-white text-sm font-serif group-hover:text-[#a3333d]">Labels</label>
          </button>
          <button @click="moreLabel" class="absolute right-7 place-self-center group/edit invisible group-hover/item:visible mb-1">
            <font-awesome-icon icon="fa-solid fa-ellipsis" class="h-3 w-3 text-[#a3333d]" />
          </button>
          <button @click="addLabel" class="absolute right-3 place-self-center group/edit invisible group-hover/item:visible mb-1">
            <font-awesome-icon icon="fa-solid fa-plus" class="h-3 w-3 text-[#a3333d]"/>
          </button>
        </div>
        <div id="newLabel" class=" mt-2 mb-2 hidden">
          <button class="inline-flex left-0">
            <font-awesome-icon icon="fa-solid fa-xmark" class="text-[#2a2b2e] dark:text-white mt-1 ml-1" />
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-[#2a2b2e] dark:text-white  mt-1"/>
            <input type="text" class="w-32 h-6 ml-2 border-2 border-solid rounded-md border-zinc-500 bg-transparent"/>
            <font-awesome-icon icon="fa-solid fa-check" class="text-[#2a2b2e] dark:text-white mt-1 ml-1"/>
            <font-awesome-icon icon="fa-solid fa-xmark" class="text-[#2a2b2e] dark:text-white mt-1 ml-1" />
          </button>
        </div>
        <div class="group flex mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700">
          <button class="inline-flex items-center mr-16">
            <font-awesome-icon icon="fa-solid fa-inbox" class="group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3"/>
            <label
              class="ml-3 text-[#2a2b2e] dark:text-white text-sm font-serif group-hover:text-[#a3333d]"
              >Archive</label
            >
          </button>
        </div>
        <div class="group flex mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700">
          <button class="inline-flex items-center mr-16">
            <font-awesome-icon icon="fa-solid fa-trash" class="group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3"/>
            <label
              class="ml-3 text-[] text-[#2a2b2e] dark:text-white text-sm font-serif group-hover:text-[#a3333d]"
              >Trash</label
            >
          </button>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full">
        <hr id="line" class="overflow-visible w-auto h-0.5 bg-[#2a2b2e] dark:text-white" />
        <div class="group flex h-10 bottom-0 hover:bg-zinc-300 dark:hover:bg-zinc-700">
          <button class="settings-btn inline-flex items-center">
            <font-awesome-icon icon="fa-solid fa-gear" class="group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3"/>
            <label
              class="ml-3 text-[#2a2b2e] dark:text-white text-sm font-serif group-hover:text-[#a3333d]"
              >Settings</label
            >
          </button>
        </div>
      </div>
    </div>
    <nav class="relative overflow-hidden block h-[56px] top-0 w-screen border-b-[1px] border-zinc-300 dark:border-zinc-700 "> 
      <div v-if="sidebar === false">
        <button type="button" class="flex" @click="openDrawer">
          <font-awesome-icon icon="fa-solid fa-bars-staggered" class="inline-flex w-5 h-5 mt-[18px] ml-2 text-[#2a2b2e] dark:text-white"/>
        </button>
      </div>
      <div class="absolute top-3 right-9"> 
      <div v-if="theme === true"> 
        <button class="" @click="changeTheme"> 
          <i class="bi bi-brightness-high-fill text-[#2a2b2e] dark:text-white hover:text-[#a3333d] dark:hover:text-[#a3333d]"></i>
        </button>
      </div>
      <div v-else> 
        <button class="" @click="changeTheme"> 
          <i class="bi bi-moon text-[#2a2b2e] dark:text-white hover:text-[#a3333d] dark:hover:text-[#a3333d]"></i>
        </button>
      </div>
    </div> 
    <div class="absolute top-3.5 right-3"> 
      <div v-if="bar === false"> 
        <button class="" @click="openBar"> 
        <font-awesome-icon icon="fa-solid fa-ellipsis" class="text-[#2a2b2e] dark:text-white hover:text-[#a3333d] dark:hover:text-[#a3333d]"/>
      </button>
      </div>
      <div v-else> 
        <button class="" @click="closeBar"> 
        <font-awesome-icon icon="fa-solid fa-ellipsis" class="text-[#2a2b2e] dark:text-white hover:text-[#a3333d] dark:hover:text-[#a3333d]"/>
      </button>
      </div>
    </div> 
    </nav> 
    <div id="bar" class="hidden absolute h-2/3 w-40 bg-zinc-300 dark:bg-zinc-700 right-2 top-[40px] rounded-lg"> 
      <h6 class="absolute left-2 text-sm">Style</h6>
      <div class="group flex mb-1 h-10 mt-12">
          <button class="inline-flex items-center mr-16">
            <font-awesome-icon icon="fa-solid fa-inbox" class="group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3"/>
            <label
              class="ml-3 text-[] text-[#2a2b2e] dark:text-white text-sm font-serif group-hover:text-[#a3333d]"
              >Archive</label
            >
          </button>
        </div>
        <div class="group flex mb-1 h-10">
          <button class="inline-flex items-center mr-16">
            <font-awesome-icon icon="fa-solid fa-share-from-square" class="group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3"/>
            <label
              class="ml-3 text-[] text-[#2a2b2e] dark:text-white text-sm font-serif group-hover:text-[#a3333d]"
              >Share</label
            >
          </button>
        </div>
      <div class="group flex mb-1 h-10">
          <button class="inline-flex items-center mr-16">
            <font-awesome-icon icon="fa-solid fa-trash" class="group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white ml-3"/>
            <label
              class="ml-3 text-[] text-[#2a2b2e] dark:text-white text-sm font-serif group-hover:text-[#a3333d]"
              >Delete</label
            >
          </button>
        </div>
    </div>
    <div class="absolute justify-center mt-40 ml-60 w-80 h-80 "> 
      <img src="../assets/images/addnote_picture.svg"/>
    </div>
    <div class="absolute place-content-center bottom-10 right-16"> 
      <img src="../assets/images/curved_arrow.svg" />
    </div> 
    <div id="noteArea" class="absolute hidden justify-center w-2/3 h-3/4 bg-[#eaeaea] dark:bg-[#2a2b2e] my-20 mx-40 rounded-lg border-[1px] border-zinc-300 dark:border-zinc-700"> 
      <div class="h-11 border-b border-b-zinc-300 dark:border-zinc-700"> 
        <i class="bi bi-arrows-angle-expand absolute right-3 top-2 text-[#2a2b2e] dark:text-white"></i>
      </div>
      <div class="absolute ml-2 mt-2"> 
        <input type="text" class="overflow-visible w-[496px] bg-transparent text-[#2a2b2e] dark:text-white placeholder-[#2a2b2e] dark:placeholder-white" placeholder="Title.."/>
      </div> 
      <div class="absolute ml-2 mt-12"> 
        <input type="text" class="bg-transparent placeholder-[#2a2b2e] dark:placeholder-white" placeholder="Note.."/>
      </div>
    </div>
    <div id="moreList" class="absolute hidden w-1/5 h-1/5 bg-[#eaeaea] dark:bg-[#2a2b2e] place-content-center mt-20 ml-40 rounded-lg border-2 border-zinc-300 dark:border-zinc-700"> 
    </div>
    <div id="moreNote" class="absolute hidden w-1/5 h-1/5 bg-[#eaeaea] dark:bg-[#2a2b2e] place-content-center mt-32 ml-40 rounded-lg border-2 border-zinc-300 dark:border-zinc-700"> 
    </div>
    <div id="moreLabel" class="absolute hidden w-1/5 h-1/5 bg-[#eaeaea] dark:bg-[#2a2b2e] place-content-center mt-48 ml-40 rounded-lg border-2 border-zinc-300 dark:border-zinc-700"> 
    </div>
    <div class="absolute right-5 bottom-5"> 
      <button @click="newNote" class="button inline-block w-[52px] h-[52px] bg-[#a3333d] hover:bg-[#92262f] hover:border-[#92262f] rounded-lg"> 
        <font-awesome-icon icon="fa-solid fa-plus" class="w-6 h-6 text-white"/>
      </button>
    </div> 
  </div>
</template>

<script>
export default {
  name: "NotelyHome",
  data() {
    return {
      password: "",
      sidebar: false,
      theme: true,
      bar: false, 
    };
  },

  props: {},
  methods: {
    openDrawer() {
      document.getElementById("sidebar").style.display = "block";
      this.sidebar = true;
    },
    closeDrawer() {
      document.getElementById("sidebar").style.display = "none";
      this.sidebar = false;
    },
    addList () { 
      document.getElementById("noteArea").style.display = "block";
    },
    moreList () {
      document.getElementById("moreList").style.display = "block";
    },
    addNote() {
      document.getElementById("noteArea").style.display = "block";
    },
    moreNote() {
      document.getElementById("moreNote").style.display = "block";
    },
    addLabel() {
      document.getElementById("newLabel").style.display = "block";
    },
    moreLabel() {
      document.getElementById("moreLabel").style.display = "block";
    },
    changeTheme() {
      this.theme = !this.theme;
      if (localStorage.getItem('color-theme')) {
        if(localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        } 
      } else {
        if(document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
      }
    }, 
    openBar() {
      document.getElementById("bar").style.display = "block";
      this.bar = true;
    }, 
    closeBar() {
      document.getElementById("bar").style.display = "none";
      this.bar = false;
    },
    newNote() {
      document.getElementById("noteArea").style.display = "block";
     
    }
  },
};
</script>
