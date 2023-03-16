<template>
   <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      {{text}}
    </label>
</template>
<script lang="ts" setup>


defineProps({
text : {
   type : String,
   required: true
}
})

</script>