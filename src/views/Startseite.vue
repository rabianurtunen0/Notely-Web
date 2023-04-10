<template>
  <div class="bg-[#eaeaea] dark:bg-[#2a2b2e]">
    <nav
      class="fixed top-0 w-full h-[43px] overflow-hidden block bg-[#eaeaea] dark:bg-[#2a2b2e] border-b-[1px] border-zinc-200 dark:border-zinc-700"
    >
      <div class="flex h-10 w-10 left-0 top-0">
        <img src="../assets/images/app_icon.svg" />
        <h1
          class="ml-1 mt-[7.5px] font-serif text-xl text-[#2a2b2e] dark:text-white"
        >
          NOTELY
        </h1>
      </div>
      <div class="absolute top-[7.5px] right-10">
        <router-link to="/login">
          <button
            class="w-20 mr-1 bg-zinc-50 border-[1px] rounded-lg border-zinc-200 hover:border-[#a3333d]"
          >
            <h3 class="font-serif font-normal text-sm">Log In</h3>
          </button>
        </router-link>
        <router-link to="/signup">
          <button
            class="w-20 bg-zinc-50 border-[1px] rounded-lg border-zinc-200 hover:border-[#a3333d]"
          >
            <h3 class="font-serif font-normal text-sm">Sign Up</h3>
          </button>
        </router-link>
      </div>
      <div class="absolute top-[7px] right-3">
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
    </nav>
    <div class="h-screen place-content-center justify-center pt-10 sm:pt-1">
      <div class="flex justify-center mt-16">
        <img
          src="../assets/images/startseite_picture.svg"
          class="max-w-xl w-5/6 h-5/6"
        />
      </div>
      <div class="mt-10">
        <h2
          class="text-center text-[#2a2b2e] dark:text-white font-serif font-black mb-1"
        >
          Make your work easier, organize your life
        </h2>
        <h3
          class="text-center text-[#2a2b2e] dark:text-white font-serif mb-5 px-5"
        >
          Join Notely for free. Create and share unlimited notes with your
          friends.
        </h3>
        <router-link to="/login">
          <button class="m-auto bg-[#a3333d] w-36 h-8 rounded-xl">
            <h3 class="text-center text-white font-serif font-normal">
              Try Notely
            </h3>
          </button>
        </router-link>
      </div>
    </div>
    <div
      class="waves fixed bottom-0 left-0 w-screen overflow-hidden leading-none"
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="relative block w-[calc(100%+1.3px)] h-[200px]"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="fill-[#a3333d]"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartSeite",
  data() {
    return {
      theme: localStorage.getItem("color-theme") === "ligth" ? true : false,
      themeToggleDarkIcon: document.getElementById("theme-toggle-dark-icon"),
      themeToggleLightIcon: document.getElementById("theme-toggle-light-icon"),
    };
  },
  methods: {
    changeTheme() {
      this.theme = !this.theme;
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
    },
  },
};
</script>
