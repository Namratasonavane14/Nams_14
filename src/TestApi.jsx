import React, { useState } from 'react'



export const TestApi = () => {

  const [post, setPost] = useState([])

  let fetch_api = ("https://jsonplaceholder.typicode.com/todos")

  fetch(fetch_api).then((response) => response.json())
    .then((data) => setPost(data))
    .catch((error) => console.error(error));

  return (
    <>
      <table border={2}>

        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
        </thead>

        {post.map((data) => {

          return (
            <>
              {/* <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.completed ? "true" : "false"}</p> */}



              <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.completed}</td>
                <td style={{ background: data.completed ? "green" : "red" }}>{data.completed ? "TRUE" : "FALSE"}</td>
              </tr>




            </>
          )
        })


      }
      </table >
    </>
  )

}

export default TestApi;