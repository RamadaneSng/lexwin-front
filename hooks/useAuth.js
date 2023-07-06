import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import axios from "../lib/axios";
import { useEffect, useState } from "react";

export const useAuth = ({ middleware, redirectIfAuth } = {}) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  //user
  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    axios.get("/api/user").then((response) => response.data)
  );

  //csrf
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  //login
  const login = async ({ setErrors, ...props }) => {
    setErrors([]);

    await csrf();

    axios
      .post("/api/login", props)
      .then(() => mutate() && router.push("/admin/dashboard"))
      .catch((error) => {
        if (error.response.status != 422) throw error;

        setErrors(Object.values(error.response.data.errors).flat());
        console.log(error.response.data.errors);
      });
  };

  //register

  const register = async ({ setErrors, ...props }) => {
    setErrors([]);

    await csrf();

    axios
      .post("/api/register", props)
      .then(() => mutate() && router.push("/login"))
      .catch((error) => {
        if (error.response.status != 422) throw error;

        setErrors(Object.values(error.response.data.errors).flat());
        console.log(error.response.data.errors);
      });
  };

  const logout = async () => {
    await axios.post("/api/logout");

    mutate(null);

    router.push("/admin/auth");
  };

  useEffect(() => {
    if (user || error) {
      setIsLoading(false);
    }

    if (middleware == "guest" && user) router.push("/admin/dashboard");
    if (middleware == "auth" && !user && error) router.push("/admin/auth");
  }, [user, error]);

  return {
    user,
    csrf,
    login,
    register,
    logout,
    isLoading,
  };
};

export default useAuth;
