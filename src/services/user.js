import { httpAxios } from "../helper/httpHelper";
export async function signup(formData) {
  try {
    const result = await httpAxios
      .post("/api/signup", formData)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function login(formData) {
  try {
    const result = await httpAxios
      .post("/api/login", formData)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function currentUser(data) {
  const result = await httpAxios
    .post("/api/currentUser", { data })
    .then((response) => response.data);
  return result;
}

export async function sendOtp(data) {
  const result = await httpAxios
    .post("/api/send-email-otp", data)
    .then((response) => response.data);
  return result;
}

export async function verifyOtp(data) {
  const result = await httpAxios
    .post("/api/verify-email-otp", data)
    .then((response) => response.data);
  return result;
}
