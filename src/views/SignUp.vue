<template>
  <div class="absolute top-3 right-3">
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
  <div class="overflow-hidden bg-[#eaeaea] dark:bg-[#2a2b2e] h-screen">
    <div class="justify-center m-auto h-24 mt-16 mb-12">
      <img
        class="block justify-center m-auto h-20 w-20 text-center"
        src="../assets/images/app_icon.svg"
      />
      <h1
        class="text-3xl not-italic text-center font-serif text-[#2a2b2e] dark:text-white"
      >
        Sign Up
      </h1>
    </div>
    <div>
      <h5
        class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-214px] mb-1"
      >
        Full Name
      </h5>
      <input
        type="text"
        v-model="fullname"
        
        class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
        placeholder="Enter your full name..."
      />
    </div>
    <div>
      <h5
        class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-190px] mt-6 mb-1"
      >
        Email Address
      </h5>
      <input
        type="text"
        v-model="email"
        class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
        placeholder="Enter your email address..."
      />
    </div>
    <div>
      <h5
        class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-216px] mt-6 mb-1"
      >
        Password
      </h5>
      <input
        type="text"
        v-model="password"
        class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
        placeholder="Enter your password..."
      />
      <!--<i class="bi bi-eye absolute mr-8"></i>-->
    </div>
    <div class="items-center mt-8 mb-1">
      <button
        @click="signUp"
        class="w-72 h-9 items-center bg-[#a3333d] rounded-lg border-2 border-solid border-[#a3333d] text-[#fffdfa] font-serif text-sm"
      >
        Sign up
      </button>
    </div>
    <div class="mt-6">
      <button
        class="inline-flex w-56 h-8 bg-white border-[1px] border-solid rounded-lg border-white font-serif font-normal text-sm mb-2"
      >
        <img
          src="../assets/images/google.svg"
          alt=""
          class="h-5 w-5 ml-8 mr-2 mt-1"
        />
        <label class="mt-1">Continue with Google</label>
      </button>
    </div>
    <div class="inline-flex">
      <h1 class="font-serif font-normal text-sm text-[#2a2b2e] dark:text-white">
        Already have an account?
      </h1>
      <button
        class="ml-1 font-serif font-black text-sm text-[#2a2b2e] dark:text-white"
      >
        <router-link to="/login">Login</router-link>
      </button>
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

<script setup>
import { ref } from 'vue'
import { db } from '../firebase/init'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import { useRouter } from 'vue-router';

const theme = localStorage.getItem("color-theme") === "ligth" ? true : false
const router = useRouter()
const fullname = ref("")
const email = ref("")
const password = ref("")
const errorMessage = ref("")

const changeTheme = () => {
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
};

const signUp = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      /*
      const colRef = collection(db, 'Users')
      const dataObj = {
        fullname: fullname.value,
        email: email.value,
        location: null,
        profilepicture: null,
      }
      const docRef = addDoc(colRef, dataObj)
      console.log(docRef.id)
      */
      const newUser = setDoc(doc(db, 'Users', email.value), {
        fullname: fullname.value,
        email: email.value,
        location: null,
        profilepicture: null,
      })
      console.log(newUser)
      console.log("Successfully registered");
      console.log(data)
      router.push({name: 'LogInPage'})

    })
    .catch((error) => {
      console.log(error.code);
      switch(error.code) {
        case "auth/invalid-email":
          errorMessage.value = "Invalid email";
          alert(errorMessage.value);
          break;
        case "auth/internal-error":
          errorMessage.value = "";
          alert(errorMessage.value);
          break;
        default: 
          errorMessage.value = error.code;
          alert(errorMessage.value);
          break;
      }
    })
};

</script>
