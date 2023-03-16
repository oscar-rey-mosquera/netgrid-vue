<template>
    <Center>
   <Form @submit.prevent="submit">
    <div class="mb-6">
       <InputLabel text="Nombre"/>
       <Input type="text" 
       name="nombre" 
       placeholder="Nombre" 
       required 
       v-model="profileForm.name"/>
     </div>
     <div class="mb-4">
       <InputLabel text="Email"/>
       <Input type="text" placeholder="Email" name="email" required v-model="profileForm.email"/>
     </div>

     <div class="mb-4">
       <InputLabel text="Dirección"/>
       <Input type="text" placeholder="Dirección" name="address" required v-model="profileForm.address"/>
     </div>

     <div class="mb-4">
       <InputLabel text="Ciudad"/>
       <Input type="text" placeholder="ciudad" name="ciudad" required v-model="profileForm.city"/>
     </div>

     <div class="mb-4">
       <InputLabel text="Fecha de cumpleaños"/>
       <Input type="date" placeholder="Fecha de cumpleaños" name="birthdate" required v-model="profileForm.brithdate"/>
     </div>

     <div class="mb-6">
       <InputLabel text="Password actual"/>
       <Input type="password" name="password" placeholder="Password" required v-model="profileForm.current_password"/>
     </div>

     <div class="mb-6">
       <InputLabel text="Password nueva"/>
       <Input type="password" name="password" placeholder="Password" required v-model="profileForm.new_password"/>
     </div>
      <Button text="Actualizar profile" type="submit" class="bg-blue-500"/>
   </Form>
   <router-link to="/characters">
        ver personajes
     </router-link>
 </Center>
 </template>
 
 <script lang="ts" setup>
 import Button from '@/components/Button.vue'
 import Input from '@/components/Input.vue'
 import InputLabel from '@/components/InputLabel.vue'
 import Form from '@/components/Form.vue'
 import Center from '@/components/Center.vue'
 import { user, profile } from '@/services/auth-service'
 import { ref , onMounted } from 'vue'
 
 const profileForm = ref({
    email : '', 
    new_password: '',
    name : '',
    current_password: '',
    address: '',
    city : '',
    brithdate: ''
})

onMounted( async () => {
   const userData = await user()
   if(!userData) return

   profileForm.value = {...profileForm.value, ...userData.data}
})
 
 const submit = () => {
    profile(profileForm.value)
 }
  
 </script>
 