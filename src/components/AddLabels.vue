<template>
    <router-link to="/notesOfLabel">
        <button @click="notesOfLabel" id="label" class="inline-flex w-[336px] mt-4 mx-4 border-2 border-[#a3333d] rounded-lg p-2 hover:bg-zinc-300">
            <i class="bi bi-bookmark-fill" style="color:${color}"></i>
            <span id="labelname" class="w-full flex float-left ml-4 text-sm">
                ${document.querySelector("#addLabel input").value}
            </span>
            <i class="bi bi-pencil-square text-[#2a2b2e] dark:text-white right-2"></i>
        </button>
    </router-link>
</template>

<script setup> 



</script>

LabelItem.vue{
    <!--
    <template>
        <router-link to="/notesOfLabel">
            <button @click="notesOfLabel" id="label" class="flex inline-flex w-[336px] mt-4 mx-4 border-2 border-[#a3333d] rounded-lg p-2 hover:bg-zinc-300">
                <i class="bi bi-bookmark-fill" style="color:${color}"></i>
                <span id="labelname" class="w-full flex float-left ml-4 text-sm">
                    ${document.querySelector("#addLabel input").value}
                </span>
                <i class="bi bi-pencil-square text-[#2a2b2e] dark:text-white right-2"></i>
            </button>
        </router-link>
    </template>
     <script>
        const props = defineProps({
        label: {
            type: Object,
            required: true,
        }
        })
     </script>
    }
    -->
     LabelList.vue{
        <!--
        <template>
            some codes here (labeel name input, add label button etc.) 
            <label-item v-for="item in labels" :key="item" :label="item"></label-item>
        </template>
        <script>
            import LabelItem from './LabelItem.vue'
            
            const labels = ref([
                {
                    name:'label1',
                    color:'#3663f2',
                },
                {
                    name:'label1',
                    color:'#3663f2',
                },
                {
                    name:'label1',
                    color:'#3663f2',
                },
                {
                    name:'label1',
                    color:'#3663f2',
                },
            ])
            const addLabel = (labelName) =>{
                // color code generate
                labels.value.push(
                    {
                        name: labelName,
                        color: //generated color,
                    },
                )
            }
        </script>
        -->
     }
    