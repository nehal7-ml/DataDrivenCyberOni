import React from 'react'

function BlogPost() {
  return (
    <div>BlogPost</div>
  )
}


async function getData(id:string) {
    const apiUrl =  process.env.HOST
    const res = await fetch(`${apiUrl}/api/blog/${id}`)

    return await res.json() as 

}

export default BlogPost