import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  if (!username || !password) {
    const errors: { username?: string; password?: string } = {};
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    throw createError({
      statusCode: 400,
      statusMessage: "Validation error",
      data: errors,
    });
  }

  if (username === "mock" && password === "password") {
    setCookie(event, "isLoggedIn", "true");
    return {
      status: "success",
      message: "Login successful",
    };
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid username or password",
      data: {
        username: "Invalid credentials.",
      },
    });
  }
});
