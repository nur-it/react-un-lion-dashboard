import Cookies from "js-cookie";

const useAuth = () => {
  const isAuth = Cookies.get("accessToken")
    ? JSON.parse(Cookies.get("accessToken"))
    : localStorage.getItem("accessToken")
      ? JSON.parse(localStorage.getItem("accessToken"))
      : null;

  return { isAuth };
};

export default useAuth;
