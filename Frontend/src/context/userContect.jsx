import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ROOT_URL } from "../utils/rootURL";
import { getCookie } from "../utils/cookie";
import { Email } from "../components/Icons";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
    coverImage: "",
    username: "",
    fullname: "",
    email : ""
  });

  const token = getCookie("accessToken"); // 👈 read token from cookie

  // save user data (used in login/register)
  const loginUser = (userData) => {
    setUser(userData);
  };

  // fetch user profile
  const fetchCurrentUser = async () => {
    if (loading || !token) return; // 👈 skip if already loading or no token

    try {
      setLoading(true);
      const res = await axios.get(`${ROOT_URL}/users/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data?.success) {
        setUser({
          avatar: res.data.data.avatar,
          coverImage: res.data.data.coverImage,
          fullname: res.data.data.fullname,
          username: res.data.data.username,
          email : res.data.data.email
        });
      }
    } catch (error) {
      console.error(
        "❌ failed to get profile :",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  // fetch user once on mount
  useEffect(() => {
    fetchCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // clear user on logout
  // const logoutUser = () => {
    // setUser({
    //   avatar: "",
    //   coverImage: "",
    //   username: "",
    //   fullname: "",
    // });
  // };

  return (
    <UserContext.Provider
      value={{ user, setUser ,  loginUser, fetchCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
