<template>
    <div class="overflow-x-scroll bg-[#eaeaea]">
      <nav class="fixed top-0 w-full overflow-hidden block bg-[#eaeaea] border-b-[1px]">
          <div class="flex h-12 w-12 left-0 top-0">
            <img src="../assets/images/app-icon.svg"/>
            <h1 class="not-italic text-[#2a2b2e] font-serif font-normal mt-3">NOTELY</h1>
          </div>
          <div class="absolute top-3 right-3">
            <ul class="flex divide-x">
              <li>
                <button @click="goLogInPage" class="h-15 w-15 border-2 px-5 border-spacing bg-zinc-50 border-gray-200 hover:border-[#2a2b2e] rounded-lg">
                  <router-link to="/login" class="font-serif font-normal">Log In</router-link>
                </button>
              </li>
              <li>
                <button @click="goSignUpPage" class="h-15 w-15 border-2 px-5 border-spacing bg-zinc-50 border-gray-200 hover:border-[#2a2b2e] rounded-lg">
                    <router-link to="/signup" class="font-serif font-normal">Sign Up</router-link>
                </button>
              </li>
            </ul> 
        </div>
      </nav>
      <div class="flex justify-center mt-20 mb-10">
        <img src="../assets/images/login_page.svg" class="flex object-center static max-w-3xl w-4/5 h-4/5"/>
      </div>
      <div class="">
        <h2 class="text-center text-[#2a2b2e] font-serif font-black mb-1 ">Make your work easier, organize your life</h2>
        <h3 class="text-center text-[#2a2b2e] font-serif mb-5">Join Notely for free. Create and share unlimited notes with your friends.</h3>
        <button class="m-auto bg-[#a3333d] text-center text-[#eaeaea] font-serif w-36 h-9 rounded-xl">
          <router-link to="/login" class="font-serif font-normal">Try Notely</router-link>
        </button>
      </div>
      <div class="w-auto h-96"></div>
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
    name: "StartSeite",
    props: {
    
    },
    methods: {
      goLogInPage() {
        const router = this.$router
        router.push('/login')
      },

      goSignUpPage() {
        this.$router.push({name: 'SignUpPage'});
        this.$router.nav(['/','signup']);

      }
    }
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
  