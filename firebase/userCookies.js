import cookies from "js-cookie";

export const getUserFromCookie = () => {
  const cookie = cookies.get("auth");
  console.log(cookie);
  if (!cookie) {
    return;
  }
  return cookie;
};

export const setUserCookie = (user) => {
  cookies.set("auth", user, {
    // firebase id tokens expire in one hour
    // set cookie expiry to match
    expires: 1 / 24,
  });
};

export const removeUserCookie = () => cookies.remove("auth");
