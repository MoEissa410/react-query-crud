export async function fetchPosts() {
  const response = await fetch("http://localhost:3000/posts");
  return response.json();
}

export async function fetchPost(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  return response.json();
}

export async function createPost(newPost) {
  const response = await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  return response.json();
}

export async function updatePost(updatedPost) {
  const response = await fetch(
    `http://localhost:3000/posts/${updatedPost.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    }
  );
  return response.json();
}

export async function deletePost(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
  return response.json();
}

// import axios from 'axios';

// export async function fetchPosts() {
//   return await axios.get('http://localhost:3000/posts');
// }

// export async function fetchPost(id) {
//   return await axios.get(`http://localhost:3000/posts/${id}`);
// }

// export async function createPost(newPost) {
//   return await axios.post('http://localhost:3000/posts', {
//     post: newPost
//   });
// }

// export async function updatePost(updatedPost) {
//   return await axios.put(`http://localhost:3000/posts/${updatedPost.id}`, {
//     post: updatedPost
//   });
// }

// export async function deletePost(id) {
//   return await axios.delete(`http://localhost:3000/posts/${id}`);
// }
