import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ROOT_URL } from "../utils/rootURL";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
    coverImage: "",
    username: "",
    fullname: "",
  });

  // save user data (used in login/register)
  const loginUser = (userData) => {
    setUser(userData);
  };

  useEffect(() => {
    fetchCurrentUser()
  })
  // fetch user profile
  const fetchCurrentUser = async () => {
    if (loading) return;
    try {
      setLoading(true);
      const res = await axios.get(`${ROOT_URL}/users/current-user`);

      if (res.data?.success) {
        setUser({
          avatar: res.data.user.avatar,
          coverImage: res.data.user.coverImage,
          fullname: res.data.user.fullname,
          username: res.data.user.username,
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

  // clear user on logout
  const logoutUser = () => {
    setUser({
      avatar: "",
      coverImage: "",
      username: "",
      fullname: "",
    });
  };

  return (
    <UserContext.Provider
      value={{ user, loginUser, fetchCurrentUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
