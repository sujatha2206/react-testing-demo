import { useEffect, useState } from "react"

export default function PostsComponent(){
    const [userPosts,setUserPosts]=useState();
    const [error,setError]=useState();
    const fetchPosts=async()=>{
        try{
            const posts= await fetch('https://jsonplaceholder.typicode.com/posts');
            if(!posts?.ok){
                throw new Error('failed to fetch posts')
            }
            return posts.json();

        }catch(error){
            console.log(error);
            setError('Error while fetching posts');
        }
    }
    useEffect(()=>{
       fetchPosts().then(res=>{
        setUserPosts(res);
       })
    },[])
    return(
        <div>
        { userPosts && (
                <ul>
                {userPosts?.map(post=> (
                <li key={post?.id}>{post?.title}</li>))}
                
                </ul>
            )
        }
        {error}
        </div>
    )
}