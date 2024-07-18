import { httpAxios } from "@/helper/httpHelper";
//get all blogs
export async function getAllBlogs() {
  const result = await httpAxios
    .get("/api/getdata")
    .then((response) => response.data);
  return result;
}

export async function getOneBlog(url) {
  const result = await httpAxios
    .post("/api/getBlog", { url })
    .then((response) => response.data);
  return result;
}
