import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function usePosts() 
{
    const posts = ref([])
    const post = ref([])
    const router = useRouter();

    const getPosts = async () => {
 
        let res = await axios.get('http://127.0.0.1:8000/api/posts')
        posts.value = res.data.data;   
    }

    const getPost = async (id) => {
 
        let res = await axios.get(`http://127.0.0.1:8000/api/posts/${id}`)
        post.value = res.data.data;   
    }

    const storePosts = async (post) => {

        try {
            await axios.post('http://127.0.0.1:8000/api/posts', post)
            await router.push({name: 'posts.index'})
        } catch (error) {
            console.log(error); 
            
        }
        // console.log(post);
        // posts.value = res.data.data;   
    }

    const updatePost = async (id) => {
        // console.log(post)
        try {
            await axios.patch(`http://127.0.0.1:8000/api/posts/${id}`, post.value)
            await router.push({name: 'posts.index'})
        } catch (error) {
            console.log(error); 
            
        }
    }

    const deletePost = async (id) => {
        if(!window.confirm("Are you sure you want to delete this post?")){
            return 
        }
        await destroyPost(id)
        await getPosts()
    }

    const destroyPost = async(id) => {
        await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`)
        posts.value.splice(posts.value.indexOf(id), 1)
    }

    return {
        posts,
        post,
        getPosts,
        getPost,
        deletePost,
        storePosts,
        updatePost
    }
  
}