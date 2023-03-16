<template>
      <input 
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
      :type="type" 
      :placeholder="placeholder"
      :required="required"
      :name="name"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      />
</template>
<script lang="ts" setup>

defineProps({
 placeholder : {
     type : String,
     required: true
 },
 type : {
     type : String,
     required: true
 },
 name : {
     type : String,
     default : ''
 },
 required : Boolean,
 modelValue: {
        type: String,
        required: true,
    }
})

defineEmits(['update:modelValue']);

</script>