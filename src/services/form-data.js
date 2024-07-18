import { httpAxios } from "@/helper/httpHelper";

export async function form(formData) {
  const result = await httpAxios
    .post("/api/submit-form", formData)
    .then((response) => response.data);
  return result;
}

export async function ticket(formData) {
  const result = await httpAxios
    .post("/api/raise-ticket", formData)
    .then((response) => response.data);
  return result;
}

export async function newsletter(formData) {
  const result = await httpAxios
    .post("/api/newsletter", formData)
    .then((response) => response.data);
  return result;
}

export async function sendComment(formData) {
  const result = await httpAxios
    .post("/api/send-comment", formData)
    .then((response) => response.data);
  return result;
}

export async function getComments() {
  const result = await httpAxios
    .get("/api/get-comments")
    .then((response) => response.data);
  return result;
}

export async function deleteComment(id) {
  try {
    const result = await httpAxios
      .delete(`/api/delete-comment/${id}`)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function editComment(data) {
  try {
    const result = await httpAxios
      .put("/api/edit-comment", data)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addReply(data) {
  try {
    const result = await httpAxios
      .put("/api/replies/add-reply", data)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteReply(data) {
  try {
    const result = await httpAxios
      .put("/api/replies/delete-reply", data)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
