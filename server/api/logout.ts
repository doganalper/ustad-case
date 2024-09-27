import { defineEventHandler, getCookie } from "h3";

export default defineEventHandler(async (event) => {
  const isLoggedIn = getCookie(event, "isLoggedIn");

  if (isLoggedIn) {
    deleteCookie(event, "isLoggedIn");
    return { message: "Successfully logged out" };
  } else {
    throw createError({
      statusCode: 400,
      statusMessage: "User is not logged in",
    });
  }
});
