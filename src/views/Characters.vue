<template>
    <Center>
     
     <div class="flex">
      <router-link to="/characters" class="mr-2">
       Personajes
    </router-link>
    <router-link to="/profile" class="mr-2">
       profile
    </router-link>
    <button @click="logout">logout</button>
     </div>

      <div v-if="data && !view">
      <div
      v-for="character in data.results" :key="character">
     <CharacterCard :character="character"  @click="() => viewCharacter(character)"/>
     </div>
    
     <div>
      <button @click="() => load(data.info.prev)">prev</button>
      <button @click="() => load(data.info.next)" class="ml-2">next</button>
    </div>
    
     </div>


     <div v-if="!data && !view">
      <button @click="() => load()">reload</button>
     </div>

     <div v-if="view">
        <CharacterCard :character="dataview">
         especie : {{ dataview.species }}
         stado : {{ dataview.status }}
        </CharacterCard>
      <button @click="() => viewCharacter()">atras</button>
     </div>
     
   </Center>
 </template>
 
 <script lang="ts" setup>
 import Center from '@/components/Center.vue'
 import CharacterCard from '@/components/CharacterCard.vue'
 import { characters, Character } from '@/services/rick-morty-service'
 import {ref, onMounted} from 'vue'
 import { useRouter } from 'vue-router'

const data = ref()

const dataview = ref<Character | null>()

const view = ref(false)

const router = useRouter()


const load = async (next? : string) => {
  data.value = await characters(next)
}

onMounted(async () => {
  load()
})

const viewCharacter = (character? : Character) => {
   
  dataview.value = character
  view.value = !view.value
}

const logout = () => {
  localStorage.clear()
  router.push({ name : 'singin'})
}
  
 </script>
 