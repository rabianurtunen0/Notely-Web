<template>
  <div class="absolute top-3 right-3"> 
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
  <div class="overflow-hidden bg-[#eaeaea] dark:bg-[#2a2b2e] h-screen">
    <div class="justify-center m-auto h-24 mt-28 mb-20">
        <img class=" block justify-center m-auto h-20 w-20 text-center" src="../assets/images/app-icon.svg"/> 
        <h1 class="text-3xl not-italic text-center font-serif text-[#2a2b2e] dark:text-white">Sign Up</h1>
    </div>
    <div>
        <h5 class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-214px] mt-12 mb-1">Full Name</h5>
        <input type="text" class="w-72 h-9 rounded-lg bg-white border-2 border-solid border-[#a3333d] p-2.5 text-sm shadow-sm focus:border-2
      focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500" placeholder="Enter your full name..."/>
      </div>
    <div>
        <h5 class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-190px] mt-6 mb-1">Email Address</h5>
        <input type="text" class="w-72 h-9 rounded-lg bg-white border-2 border-solid border-[#a3333d] p-2.5 text-sm shadow-sm focus:border-2
      focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500" placeholder="Enter your email address..."/>
      </div>
      <div> 
        <h5 class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-216px] mt-6 mb-1">Password</h5>
        <input type="text" class="w-72 h-9 rounded-lg bg-white border-2 border-solid border-[#a3333d] p-2.5 text-sm shadow-sm focus:border-2
      focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500" placeholder="Enter your password..."/>
      </div>
      <div class="items-center mt-8 mb-1">
        <button class="w-72 h-9 items-center bg-[#a3333d] rounded-lg border-2 border-solid border-[#a3333d] text-[#fffdfa] font-serif text-sm">Sign up</button>
      </div>
      <div class="mt-6"> 
        <button class="inline-flex w-56 h-8 bg-white border-2 border-solid rounded-lg border-white font-serif font-normal text-sm mb-2">
          <img src="../assets/images/google.svg" alt="" class="h-5 w-5 ml-8 mr-2 mt-1">
          <label class="mt-1">Continue with Google</label>
        </button>
      </div>
    <div class="inline-flex"> 
      <h1 class="font-serif font-normal text-sm text-[#2a2b2e] dark:text-white">Already have an account?</h1>
      <button class="ml-1 font-serif font-black text-sm text-[#2a2b2e] dark:text-white">
        <router-link to="/login">Login</router-link>
      </button>
    </div>
    <div class="waves">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
      return {
        theme: localStorage.getItem('color-theme') === 'ligth' ? true : false,
      };
    },
    methods: {
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
    },

};
</script>

<style>
.waves {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }
  
  .waves svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 200px;
  }
  
  .waves .shape-fill {
    fill: #a3333d;
  }

</style>