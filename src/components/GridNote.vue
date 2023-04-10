<template>
  <button
    class="mt-7 mx-[14px] w-[180px] border-[1px] border-zinc-400 hover:border-[1.5px] hover:border-[#a3333d] focus:border-[1.5px] focus:border-[#a3333d] rounded-lg bg-transparent"
    @click="getNote(), $emit('givenNote', givenNote), $emit('editNote', edit)"
  >
    <div class="flex w-[170px] top-2 mx-2 mt-1">
      <p
        v-if="title === true"
        class="float-left font-serif font-normal text-zinc-400 dark:text-white"
      >
        title..
      </p>
      <p
        v-else
        class="float-left font-serif font-semibold text-[#2a2b2e] dark:text-white hyphens-auto break-all truncate text-ellipsis"
      >
        {{ givenNote.title }}
      </p>
    </div>
    <div class="flex mx-2 mb-1 w-[170px]">
      <p
        v-if="note === true"
        class="float-left font-serif font-extralight text-zinc-400 dark:text-white"
      >
        note..
      </p>
      <p
        v-else
        class="float-left font-serif font-light text-[#2a2b2e] dark:text-white hyphens-auto break-words truncate text-ellipsis"
      >
        {{ givenNote.note }}
      </p>
    </div>
  </button>
</template>

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const givenNote = ref(props.note);
const note = ref(givenNote.value.note === "" ? true : false);
const title = ref(givenNote.value.title === "" ? true : false);
const edit = ref(false)

const getNote = () => {
  console.log("Title ? ", title.value);
  console.log("Note ? ", note.value);
  edit.value = true 
};
</script>
