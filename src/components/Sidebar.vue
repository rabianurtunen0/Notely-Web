<template>
  <div class="relative">
    <div
      id="smallSidebar"
      class="h-screen w-[50px] bg-[#eaeaea] dark:bg-[#2a2b2e] drop-shadow-md border-r-[1px] border-[#eaeaea] border-r-zinc-300 dark:border-r-zinc-700"
      :class="sidebar ? 'hidden' : 'fixed'"
    >
      <div class="w-auto">
        <div class="flex items-start ml-1 mb-2">
          <img src="@/assets/images/app_icon.svg" class="h-10 w-10 mt-2" />
        </div>
        <router-link
          to="/notes"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white justify-center w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="bi bi-file-earmark-text group-hover:text-[#a3333d]"></i>
        </router-link>
        <router-link
          to="/labels"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white justify-center w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="bi bi-bookmark group-hover:text-[#a3333d]"></i>
        </router-link>
        <router-link
          to="/archive"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white justify-center w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="bi bi-archive group-hover:text-[#a3333d]"></i>
        </router-link>
        <router-link
          to="/trash"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white justify-center w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="bi bi-trash group-hover:text-[#a3333d]"></i>
        </router-link>
        <router-link
          to="/settings"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white justify-center w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="bi bi-gear group-hover:text-[#a3333d]"></i>
        </router-link>
      </div>
      <div class="bg-[#eaeaea] dark:bg-[#2a2b2e] absolute bottom-0 left-0 w-full">
        <hr
          id="line"
          class="overflow-visible w-auto h-[1.5px] bg-[#2a2b2e] dark:text-white"
        />
        <router-link
          to="/"
          v-on:submit="onSubmit"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white justify-center w-auto h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="bi-box-arrow-right group-hover:text-[#a3333d]"></i>
        </router-link>
      </div>
    </div>
    <div
      id="bigSidebar"
      class="h-screen w-[145px] bg-[#eaeaea] dark:bg-[#2a2b2e] drop-shadow-md border-r-[1px] border-[#eaeaea] border-r-zinc-300 dark:border-transparent dark:border-r-zinc-700"
      :class="sidebar ? 'fixed' : 'hidden'"
    >
      <div class="w-auto">
        <div class="flex items-start ml-1 mb-2">
          <img src="@/assets/images/app_icon.svg" class="h-10 w-10 mt-2" />
          <label
            class="inline-flex ml-1 mt-[14.5px] font-serif text-xl text-[#2a2b2e] dark:text-white"
            >NOTELY</label
          >
        </div>
        <router-link
          to="/notes"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i
            class="ml-3 bi bi-file-earmark-text group-hover:text-[#a3333d]"
          ></i>
          <label class="ml-3 text-sm font-serif group-hover:text-[#a3333d]"
            >Notes</label
          >
        </router-link>
        <router-link
          to="/labels"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="ml-3 bi bi-bookmark group-hover:text-[#a3333d]"></i>
          <label class="ml-3 text-sm font-serif group-hover:text-[#a3333d]"
            >Labels</label
          >
        </router-link>
        <router-link
          to="/archive"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="ml-3 bi bi-archive group-hover:text-[#a3333d]"></i>
          <label class="ml-3 text-sm font-serif group-hover:text-[#a3333d]"
            >Archive</label
          >
        </router-link>
        <router-link
          to="/trash"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="ml-3 bi bi-trash group-hover:text-[#a3333d]"></i>
          <label class="ml-3 text-sm font-serif group-hover:text-[#a3333d]"
            >Trash</label
          >
        </router-link>
        <router-link
          to="/settings"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="ml-3 bi bi-gear group-hover:text-[#a3333d]"></i>
          <label class="ml-3 text-sm font-serif group-hover:text-[#a3333d]"
            >Settings</label
          >
        </router-link>
      </div>
      <div class="bg-[#eaeaea] dark:bg-[#2a2b2e] absolute bottom-0 left-0 w-full">
        <hr
          id="line"
          class="overflow-visible w-auto h-0.5 bg-[#2a2b2e] dark:text-white"
        />
        <router-link
          to="/"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white w-auto h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="ml-3 bi bi-box-arrow-right group-hover:text-[#a3333d]"></i>
          <label class="ml-3 text-sm font-serif group-hover:text-[#a3333d]"
            >Log Out</label
          >
        </router-link>
      </div>
    </div>
    <div
      id="navbar"
      class="fixed flex bg-[#eaeaea] dark:bg-[#2a2b2e] h-[42px] drop-shadow-sm border-b-[1px] border-b-zinc-300 dark:border-b-zinc-700"
      :class="
        sidebar
          ? 'ml-[145px] w-[calc(100%-145px)]'
          : 'ml-[50px] w-[calc(100%-50px)]'
      "
    >
      <div class="mt-2">
        <div v-if="sidebar === true">
          <button @click="changeSidebar(), $emit('sidebarSize', 'ml-[50px]')">
            <i
              class="bi bi-chevron-double-left text-zinc-500 dark:text-zinc-300 hover:text-[#a3333d] ml-1"
            ></i>
          </button>
        </div>
        <div v-else>
          <button @click="changeSidebar(), $emit('sidebarSize', 'ml-[145px]')">
            <i
              class="bi bi-chevron-double-right text-zinc-500 dark:text-zinc-300 hover:text-[#a3333d] ml-1"
            ></i>
          </button>
        </div>
      </div>
      <div class="absolute right-[37.5px] top-2">
        <div v-if="view === true">
          <button @click="changeView(), $emit('view', false)">
              <i
                class="bi bi-view-stacked text-[14px] text-[#2a2b2e] dark:text-white hover:text-[#a3333d] dark:hover:text-[#a3333d]"
              ></i>
          </button>
        </div>
        <div v-else>
          <button @click="changeView(), $emit('view', true)">
              <i
                class="bi bi-grid text-[16px] text-[#2a2b2e] dark:text-white hover:text-[#a3333d] dark:hover:text-[#a3333d]"
              ></i>
          </button>
        </div>
      </div>
      <div class="absolute top-2 right-3">
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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sidebar = ref(false);

const changeSidebar = () => {
  sidebar.value = !sidebar.value;
};

const theme = ref(
  localStorage.getItem("color-theme") === "light" ? true : false
);

const view = ref(localStorage.getItem("views") === "list" ? true : false);

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

const changeView = () => {
  view.value = !view.value;
  view.value == true
    ? localStorage.setItem("views", "list")
    : localStorage.setItem("views", "grid");
  return view.value;
};

const onSubmit = (e) => {
  e.preventDefault();
}
</script>
