<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import  {ref, onMounted} from 'vue'
import axios from 'axios'
import usePosts from '@/composables/posts.js';

const {posts, getPosts, deletePost} = usePosts()

onMounted(getPosts)


</script>

<template>


  <div class="grid grid-cols-1 gap-2 mt-2 p-4">
    <h1>Posts</h1>

    <!-- <router-link class="" to="/test">Click here</router-link> -->
    <router-link class="w-20 bg-blue-500 text-white rounded px-4 py-2" :to="{name: 'posts.create'}">Create</router-link>

    <!-- {{ posts }} -->
    <!-- <button class="bg-blue-500 text-white hover:bg-blue-900 rounded py-2 px-4">Create</button> -->
     <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr >
            <th scope="col" class="px-6 py-3 text-start text-sm uppercase">#</th>
            <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Id</th>
            <th scope="col" class="px-6 py-3 text-start text-sm uppercase">User</th>
            <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Title</th>
            <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Date</th>
            <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Edit</th>
            <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Delete</th>
          </tr>
        </thead>

        <tbody>
          <tr class="hover-me" v-for="(post, index) in posts" :key="post.id">
            <td class="px-6 py-3 text-start text-sm">{{index+1}}</td>
            <td class="px-6 py-3 text-start text-sm">{{post.id}}</td>
            <td class="px-6 py-3 text-start text-sm">Ionut</td>
            <td class="px-6 py-3 text-start text-sm">{{ post.title }}</td>
            <td class="px-6 py-3 text-start text-sm">{{ post.created_at }}</td>
            <td><router-link :to="{name: 'posts.edit', params: {id: post.id}}" class="bg-yellow-500 text-white font-bold rounded px-4 py-2 hover:bg-yellow-700">Edit</router-link></td>
            <td><button @click="deletePost(post.id)" class="bg-red-500 text-white font-bold rounded px-4 py-2 hover:bg-red-700">Delete</button></td>
          </tr>
        </tbody>
     </table>
  </div>
  

</template>

<style scoped>

.hover-me:hover {
  color: #706eeb;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
