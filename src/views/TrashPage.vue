<template>
  <div>
    <SideBar />
    <div
      class="h-screen place-content-center justify-center bg-[#eaeaea] pl-[25px] pb-20 pt-10 sm:pt-1 overflow-scroll"
    >
      <div id="main" ref="main" class="justify-center place-content-center">
        <div class="flex justify-center mt-16">
          <img
            src="../assets/images/trash_picture.svg"
            class="max-w-xl w-5/6 h-5/6"
          />
        </div>
        <div class="justify-center items-center mx-12">
          <h3 class="font-serif mt-6 text-[#2a2b2e]">
            You don't have deleted note or list.
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
</script>

<style></style>
