<template>
       <button class=" w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :type="type">
        {{ text }}
      </button>
</template>
<script lang="ts" setup>

defineProps({
    text : {
        type : String,
        required: true
    },
    type : {
        type : String,
        default: 'button'
    }
})

</script>