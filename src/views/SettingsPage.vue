<template>
  <div>
    <SideBar @sidebarSize="getSidebarSize"></SideBar>
    <div
      class="place-content-center items-center h-screen pt-[42px] bg-[#eaeaea] dark:bg-[#2a2b2e] overflow-scroll"
      :class="sidebarSize"
    >
    <div class="flex justify-center mt-6 mb-4">
        <div
          class="flex justify-center items-center w-20 h-20 mx-[5.5px] bg-[#a3333d] rounded-full"
        >
          <img src="../assets/images/person.svg" class="h-10 mb-1" />
        </div>
      </div>
      <div class="m-2">
        <h3
          class="font-serif font-black text-sm text-[#2a2b2e] dark:text-white"
        >
          {{ fullname }}
        </h3>
        <h3
          v-if="location !== null"
          class="font-serif text-xs mt-1 dark:text-white"
        >
          {{ location }}
        </h3>
      </div>
      <div class="md:inline-flex">
      <div class="md:mx-10">
        <div class="mt-12">
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
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-186px] mb-1"
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
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-220px] mb-1"
          >
            Location
          </h5>
          <input
            type="text"
            v-model="location"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="Enter your location..."
          />
        </div>
      </div>
      <div class="mx-10">
        <div class="mt-12">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-189px] mb-1"
          >
            Old Password
          </h5>
          <input
            type="text"
            v-model="oldPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-186px] mb-1"
          >
            New Password
          </h5>
          <input
            type="text"
            v-model="newPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-146px] mb-1"
          >
            New Password Again
          </h5>
          <input
            type="text"
            v-model="newPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
      </div>
      </div>
      <div>
        <div class="items-center mt-8 mb-1">
          <button
            @click="saveInformations"
            class="w-72 h-9 items-center bg-[#a3333d] rounded-lg border-2 border-solid border-[#a3333d] text-[#fffdfa] font-serif text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 
    <div class="flex justify-center mt-6 mb-4">
        <div
          class="flex justify-center items-center w-20 h-20 mx-[5.5px] bg-[#a3333d] rounded-full"
        >
          <img src="../assets/images/person.svg" class="h-10 mb-1" />
        </div>
      </div>
      <div class="m-2">
        <h3
          class="font-serif font-black text-sm text-[#2a2b2e] dark:text-white"
        >
          {{ fullname }}
        </h3>
        <h3
          v-if="location !== null"
          class="font-serif text-xs mt-1 dark:text-white"
        >
          {{ location }}
        </h3>
      </div>
      <div class="md:inline-flex">
      <div class="md:mx-10">
        <div class="mt-12">
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
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-186px] mb-1"
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
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-220px] mb-1"
          >
            Location
          </h5>
          <input
            type="text"
            v-model="location"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="Enter your location..."
          />
        </div>
      </div>
      <div class="mx-10">
        <div class="mt-12">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-189px] mb-1"
          >
            Old Password
          </h5>
          <input
            type="text"
            v-model="oldPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-186px] mb-1"
          >
            New Password
          </h5>
          <input
            type="text"
            v-model="newPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-146px] mb-1"
          >
            New Password Again
          </h5>
          <input
            type="text"
            v-model="newPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
      </div>
      </div>
      <div>
        <div class="items-center mt-8 mb-1">
          <button
            @click="saveInformations"
            class="w-72 h-9 items-center bg-[#a3333d] rounded-lg border-2 border-solid border-[#a3333d] text-[#fffdfa] font-serif text-sm"
          >
            Save
          </button>
        </div>
      </div>
      <div class="mt-4 mb-1">
        <div class="flex justify-center">
          <img src="../assets/images/logout_picture.svg" class="w-40 h-40" />
        </div>
        <div class="justify-center">
          <button
            class="w-28 h-7 ml-4 bg-[#a3333d] rounded-lg border-[1px] border-solid border-[#a3333d] text-[#fffdfa] font-serif text-sm"
          >
            <i class="bi bi-box-arrow-right"></i>
            Log Out
          </button>
        </div>
      </div>
  -->
  <!--
      <div class="flex w-full">
        <div
          class="w-full h-6 mt-7 mx-7 border-b-[1px] border-b-zinc-400"
          :class="
            sidebarSize === 'mt-[145px]'
              ? 'w-[calc(100%-145px)]'
              : 'w-[calc(100%-50px)]'
          "
        >
          <h3
            class="float-left ml-1 font-serif font-black text-sm text-[#2a2b2e] dark:text-white"
          >
            Edit Profile
          </h3>
          <div class="float-right mr-1">
            <button v-if="editProfile" @click="closeEditProfile">
              <i class="bi bi-chevron-up"></i>
            </button>
            <button v-else @click="openEditProfile">
              <i class="bi bi-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
      <div :class="editProfile === true ? 'block' : 'hidden'">
          <button
            class="items-center m-4 w-20 h-20 bg-[#a3333d] rounded-full"
          >
            <img src="../assets/images/person.svg" class="flex  mx-[19px] h-10" />
          </button>
          <h3
            class="font-serif font-black text-sm text-[#2a2b2e] dark:text-white"
          >
            {{ fullname }}
          </h3>
          <h3
            v-if="location !== null"
            class="font-serif text-xs mt-1 dark:text-white"
          >
            {{ location }}
          </h3>
        
        <div class="mt-16">
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
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-186px] mb-1"
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
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-220px] mb-1"
          >
            Location
          </h5>
          <input
            type="text"
            v-model="location"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="Enter your location..."
          />
        </div>
        <div class="items-center mt-8 mb-1">
          <button
            @click="saveInformations"
            class="w-72 h-9 items-center bg-[#a3333d] rounded-lg border-2 border-solid border-[#a3333d] text-[#fffdfa] font-serif text-sm"
          >
            Save
          </button>
        </div>
      </div>
      <div class="flex w-full">
        <div
          class="w-full h-6 mt-12 mx-7 border-b-[1px] border-b-zinc-400"
          :class="
            sidebarSize === 'mt-[145px]'
              ? 'w-[calc(100%-145px)]'
              : 'w-[calc(100%-50px)]'
          "
        >
          <h3
            class="float-left ml-1 font-serif font-black text-sm text-[#2a2b2e] dark:text-white"
          >
            Change Password
          </h3>
          <div class="float-right mr-1">
            <button v-if="changePassword" @click="closeChangePassword">
              <i class="bi bi-chevron-up"></i>
            </button>
            <button v-else @click="openChangePassword">
              <i class="bi bi-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
      <div :class="changePassword === true ? 'block' : 'hidden'">
        <div class="mt-12">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-189px] mb-1"
          >
            Old Password
          </h5>
          <input
            type="text"
            v-model="oldPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-186px] mb-1"
          >
            New Password
          </h5>
          <input
            type="text"
            v-model="newPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-146px] mb-1"
          >
            New Password Again
          </h5>
          <input
            type="text"
            v-model="newPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
        <div class="items-center mt-8 mb-1">
      <button
        @click="savePassword"
        class="w-72 h-9 items-center bg-[#a3333d] rounded-lg border-2 border-solid border-[#a3333d] text-[#fffdfa] font-serif text-sm"
      >
        Save
      </button>
    </div>
      </div>
      <div class="flex w-full">
        <div
          class="w-full h-6 mt-12 mx-7 border-b-[1px] border-b-zinc-400"
          :class="
            sidebarSize === 'mt-[145px]'
              ? 'w-[calc(100%-145px)]'
              : 'w-[calc(100%-50px)]'
          "
        >
          <h3
            class="float-left ml-1 font-serif font-black text-sm text-[#2a2b2e] dark:text-white"
          >
            Log Out
          </h3>
          <div class="float-right mr-1">
            <button v-if="logOut" @click="closeLogOut">
              <i class="bi bi-chevron-up"></i>
            </button>
            <button v-else @click="openLogOut">
              <i class="bi bi-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-4 mb-1" :class="logOut === true ? 'block' : 'hidden'">
        <div class="flex justify-center">
          <img src="../assets/images/logout_picture.svg" class="w-40 h-40" />
        </div>
        <div class="justify-center">
          <button
            class="w-28 h-7 ml-4 bg-[#a3333d] rounded-lg border-[1px] border-solid border-[#a3333d] text-[#fffdfa] font-serif text-sm"
          >
            <i class="bi bi-box-arrow-right"></i>
            Log Out
          </button>
        </div>
      </div>
    -->
  <!-- 
    <div class="fixed w-[72.5px] h-screen bg-[#eaeaea] dark:bg-[#2a2b2e] drop-shadow-md border-r-[1px] border-[#eaeaea] border-r-zinc-300 dark:border-r-zinc-700">
        <div
          class="flex justify-center"
        >
          <div
            class="flex justify-center items-center w-10 h-10 mt-4 bg-[#a3333d] rounded-full"
          >
            <img src="../assets/images/person.svg" class="h-5 mb-1" />
          </div>
        </div>
        <div
          @click="editProfile"
          exact-active-class="border-l-4 border-[#a3333d] bg-zinc-300 dark:bg-zinc-700 text-[#a3333d]"
          class="group group/item flex items-center mt-4 group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white justify-center mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="bi bi-pencil-square group-hover:text-[#a3333d]"></i>
      </div>
        <div
          @click="logOut"
          active-class="!border-l-4 !border-[#a3333d] !bg-zinc-300 dark:!bg-zinc-700 !text-[#a3333d]"
          exact-active-class=""
          class="group group/item flex items-center group-hover:text-[#a3333d] text-[#2a2b2e] dark:text-white justify-center w-auto mb-1 h-10 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:border-l-4 hover:border-[#a3333d]"
        >
          <i class="bi bi-box-arrow-right group-hover:text-[#a3333d]"></i>
    </div>
      </div>
      <div v-if="editprofile"> 
ouıjkhuyhjıyu
      </div>
      <div v-if="logout"> 
fvjhrgktuv
      </div>
  -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import SideBar from "../components/SideBar.vue";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/init";
import { doc, getDoc } from "firebase/firestore";

const sidebarSize = ref("ml-[50px]");
//const bar = ref(false)
//const editprofile = ref(true);
//const changePassword = ref(true);
//const logout = ref(false);
const email = ref();
const fullname = ref();
const profilepicture = ref();
const location = ref();
//const oldPassword = ref();

const getSidebarSize = (value) => {
  console.log(value);
  sidebarSize.value = value;
  console.log(sidebarSize.value);
};

/*
const editProfile = () => {
  editprofile.value = true;
  logout.value = false;
}

const logOut = () => {
  logout.value = true;
  editprofile.value = false;
}

const openEditProfile = () => {
  editProfile.value = true;
};

const closeEditProfile = () => {
  editProfile.value = false;
};

const openChangePassword = () => {
  changePassword.value = true;
};

const closeChangePassword = () => {
  changePassword.value = false;
};

const openLogOut = () => {
  logOut.value = true;
};

const closeLogOut = () => {
  logOut.value = false;
};
*/

//const saveInformations = () => {};

/*
const changeBar = () => {
  bar.value = !bar.value;
};
*/

onMounted(() => {
  getInformation();
});

const getInformation = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user.email;
  console.log(userEmail);
  const querySnapshot = await getDoc(doc(db, "Users", userEmail));
  (email.value = querySnapshot.data().email),
    (fullname.value = querySnapshot.data().fullname),
    (profilepicture.value = querySnapshot.data().profilepicture),
    (location.value = querySnapshot.data().location),
    console.log("Email: ", email.value);
  console.log("Fullname: ", fullname.value);
  console.log("Profile Picture: ", profilepicture.value);
  console.log("Location: ", location.value);
};

/*
<div class="flex w-full">
        <div
          class="w-full h-6 mt-7 mx-7 border-b-[1px] border-b-zinc-400"
          :class="
            sidebarSize === 'mt-[145px]'
              ? 'w-[calc(100%-145px)]'
              : 'w-[calc(100%-50px)]'
          "
        >
          <h3
            class="float-left ml-1 font-serif font-black text-sm text-[#2a2b2e] dark:text-white"
          >
            Edit Profile
          </h3>
          <div class="float-right mr-1">
            <button v-if="editProfile" @click="closeEditProfile">
              <i class="bi bi-chevron-up"></i>
            </button>
            <button v-else @click="openEditProfile">
              <i class="bi bi-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
      <div :class="editProfile === true ? 'block' : 'hidden'">
          <button
            class="items-center m-4 w-20 h-20 bg-[#a3333d] rounded-full"
          >
            <img src="../assets/images/person.svg" class="flex  mx-[19px] h-10" />
          </button>
          <h3
            class="font-serif font-black text-sm text-[#2a2b2e] dark:text-white"
          >
            {{ fullname }}
          </h3>
          <h3
            v-if="location !== null"
            class="font-serif text-xs mt-1 dark:text-white"
          >
            {{ location }}
          </h3>
        
        <div class="mt-16">
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
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-186px] mb-1"
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
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-220px] mb-1"
          >
            Location
          </h5>
          <input
            type="text"
            v-model="location"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="Enter your location..."
          />
        </div>
        <div class="items-center mt-8 mb-1">
          <button
            @click="saveInformations"
            class="w-72 h-9 items-center bg-[#a3333d] rounded-lg border-2 border-solid border-[#a3333d] text-[#fffdfa] font-serif text-sm"
          >
            Save
          </button>
        </div>
      </div>
      <div class="flex w-full">
        <div
          class="w-full h-6 mt-12 mx-7 border-b-[1px] border-b-zinc-400"
          :class="
            sidebarSize === 'mt-[145px]'
              ? 'w-[calc(100%-145px)]'
              : 'w-[calc(100%-50px)]'
          "
        >
          <h3
            class="float-left ml-1 font-serif font-black text-sm text-[#2a2b2e] dark:text-white"
          >
            Change Password
          </h3>
          <div class="float-right mr-1">
            <button v-if="changePassword" @click="closeChangePassword">
              <i class="bi bi-chevron-up"></i>
            </button>
            <button v-else @click="openChangePassword">
              <i class="bi bi-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
      <div :class="changePassword === true ? 'block' : 'hidden'">
        <div class="mt-12">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-189px] mb-1"
          >
            Old Password
          </h5>
          <input
            type="text"
            v-model="oldPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-186px] mb-1"
          >
            New Password
          </h5>
          <input
            type="text"
            v-model="newPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
        <div class="mt-6">
          <h5
            class="font-serif font-black text-xs text-[#2a2b2e] dark:text-white ml-[-146px] mb-1"
          >
            New Password Again
          </h5>
          <input
            type="text"
            v-model="newPassword"
            class="w-72 h-9 rounded-lg bg-white border-[1px] border-solid border-white p-2.5 text-sm shadow-sm focus:outline-none focus:border-[#a3333d] focus:ring-1 focus:ring-[#a3333d] placeholder-gray-500"
            placeholder="########"
          />
        </div>
        <div class="items-center mt-8 mb-1">
      <button
        @click="savePassword"
        class="w-72 h-9 items-center bg-[#a3333d] rounded-lg border-2 border-solid border-[#a3333d] text-[#fffdfa] font-serif text-sm"
      >
        Save
      </button>
    </div>
      </div>
      <div class="flex w-full">
        <div
          class="w-full h-6 mt-12 mx-7 border-b-[1px] border-b-zinc-400"
          :class="
            sidebarSize === 'mt-[145px]'
              ? 'w-[calc(100%-145px)]'
              : 'w-[calc(100%-50px)]'
          "
        >
          <h3
            class="float-left ml-1 font-serif font-black text-sm text-[#2a2b2e] dark:text-white"
          >
            Log Out
          </h3>
          <div class="float-right mr-1">
            <button v-if="logOut" @click="closeLogOut">
              <i class="bi bi-chevron-up"></i>
            </button>
            <button v-else @click="openLogOut">
              <i class="bi bi-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-4 mb-1" :class="logOut === true ? 'block' : 'hidden'">
        <div class="flex justify-center">
          <img src="../assets/images/logout_picture.svg" class="w-40 h-40" />
        </div>
        <div class="justify-center">
          <button
            class="w-28 h-7 ml-4 bg-[#a3333d] rounded-lg border-[1px] border-solid border-[#a3333d] text-[#fffdfa] font-serif text-sm"
          >
            <i class="bi bi-box-arrow-right"></i>
            Log Out
          </button>
        </div>
      </div>
*/

/*
 <!--
      <div
        class="w-[155px] h-full px-2 bg-red-400"
        :class="bar ? 'fixed' : 'hidden'"
      >
      <div class="float-right">
        <div v-if="bar === true">
          <button @click="changeBar()">
            <i
              class="bi bi-chevron-double-left text-zinc-500 dark:text-zinc-300 hover:text-[#a3333d] ml-1"
            ></i>
          </button>
        </div>
        <div v-else>
          <button @click="changeBar()">
            <i
              class="bi bi-chevron-double-right text-zinc-500 dark:text-zinc-300 hover:text-[#a3333d] ml-1"
            ></i>
          </button>
        </div>
      </div>
        <button
          class="justify-center w-20 h-20 mt-[28px] bg-[#a3333d] rounded-full"
        >
          <img src="../assets/images/person.svg" class="flex h-10 mb-2" />
        </button>
        <div class="justify-center items-center">
          <h3 class="font-serif font-black mt-6 text-[#2a2b2e] dark:text-white">
            {{ fullname }}
          </h3>
          <h3 class="font-serif mt-2 dark:text-white">
            Start taking notes now
          </h3>
        </div>
      </div>
      <div
        class="w-[50px] h-full px-2 bg-red-400"
        :class="bar ? 'hidden' : 'fixed'"
      >
      <div class="float-right">
        <div v-if="bar === true">
          <button @click="changeBar()">
            <i
              class="bi bi-chevron-double-left text-zinc-500 dark:text-zinc-300 hover:text-[#a3333d] ml-1"
            ></i>
          </button>
        </div>
        <div v-else>
          <button @click="changeBar()">
            <i
              class="bi bi-chevron-double-right text-zinc-500 dark:text-zinc-300 hover:text-[#a3333d] ml-1"
            ></i>
          </button>
        </div>
      </div>
        <button
          class="justify-center w-10 h-10 mt-[14px] bg-[#a3333d] rounded-full"
        >
          <img src="../assets/images/person.svg" class="flex h-5 mb-2" />
        </button>
       
      </div>
*/
</script>

<style></style>
