<template>
    <div> 
        <SideBar/>
        <div class="h-screen bg-[#eaeaea]"> 
            <div class="flex justify-center items-center"> 
                    <div class="flex static object-center justify-center items-center w-2/3 h-2/3 mx-12">
                        <img src="../assets/images/tasks_picture.svg" class="max-w-lg" />
                    </div>
                </div>
                <div class="justify-center items-center mx-12"> 
                    <h3 class="font-serif mt-6 text-[#2a2b2e]">Welcome to Notely. Notely is an easy way to take notes, create tasks, capture ideas, and more. Just open the app and write your thoughts.</h3> 
                    <h3 class="font-serif font-black mt-2">Start taking tasks now</h3>
                </div>
            </div>
    </div>
</template>

<script setup>

import SideBar from "../components/SideBar.vue"

</script>

<style> 

</style>