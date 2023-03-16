<template>
 <div class="bg-white shadow-md rounded flex flex-col pointer justify-center max-w-xs mb-2 p-2" >
        <div class="w-24 mr-2">
        <img :src="character.image" />
      </div>
      {{character.name}}

      <div>
        <slot />
      </div>

      </div>
</template>
<script lang="ts" setup>

defineProps({
 character : {
     type : Object,
     required: true
 }
})


</script>