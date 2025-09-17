import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api/Api';

const FetchOld = () => {

  const [posts, setPosts] = useState([]);

  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      console.log("Response Older AXIOS Data", res )
      res.status === 200 ? setPosts(res.data) : [];
    } catch (error) {
      console.log(error)
      return [];
    }
  }


  useEffect(() => {
    getPostData();
  },[]);

  return (
    <div className='my-12  flex flex-col items-center' >
    <div>FetchOld</div>
    <ul  >
      {posts?.map((curElem) => {
        const { id, title, body } = curElem;
        return (
          <li className='border p-2 shadow-sm my-4' key={id} >
           <p>{title}</p>
           <p>{body}</p>
          </li>
        )
      })}
    </ul>
    </div>
  )
}

export default FetchOld