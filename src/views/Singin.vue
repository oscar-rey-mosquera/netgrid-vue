<template>
   <Center>
  <Form @submit.prevent="submit">
    <div class="mb-4">
      <InputLabel text="Email"/>
      <Input type="text" placeholder="Email" name="email" required v-model="formLogin.email"/>
    </div>
    <div class="mb-6">
      <InputLabel text="Password"/>
      <Input type="password" name="password" placeholder="Password" required v-model="formLogin.password"/>
    </div>
     <Button text="Login" type="submit" class="bg-blue-500"/>
  </Form>
  <router-link to="/singup">
       Registrarse
    </router-link>
</Center>
</template>

<script lang="ts" setup>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import InputLabel from '@/components/InputLabel.vue'
import Form from '@/components/Form.vue'
import Center from '@/components/Center.vue'
import { login } from '@/services/auth-service'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const formLogin = ref({email : '', password: ''})
const router = useRouter()

const submit =  async () => {
 const user = await login(formLogin.value)

 if(!user) return

 router.push({ name: 'profile' })

}
 
</script>
