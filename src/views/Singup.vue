<template>
  <Center>
 <Form @submit.prevent="submit">
   <div class="mb-4">
     <InputLabel text="Nombre"/>
     <Input type="text" name="nombre" placeholder="nombre" required v-model="formRegister.name"/>
   </div>
   <div class="mb-4">
     <InputLabel text="Email"/>
     <Input type="text" name="email" placeholder="Email" required v-model="formRegister.email"/>
   </div>
   <div class="mb-6">
     <InputLabel text="Password"/>
     <Input type="password" placeholder="Password" name="password" required v-model="formRegister.password"/>
   </div>
    <Button text="Registrarse" type="submit" class="bg-blue-500"/>
 </Form>
  <router-link to="/">
       Login
    </router-link>
</Center>
</template>

<script lang="ts" setup>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import InputLabel from '@/components/InputLabel.vue'
import Form from '@/components/Form.vue'
import Center from '@/components/Center.vue'
import { register } from '@/services/auth-service'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const formRegister = ref({name: '', email : '', password: ''})

const router = useRouter()

const submit = async () => {
  const user = await register(formRegister.value)

  if(!user) return 

  router.push({ name: 'profile' })

  
  
}

</script>
