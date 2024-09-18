"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useGetOrCreateUser = (getOnly = true) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const ISSERVER = typeof window === "undefined";
    if (ISSERVER) return "";
    if (!window.localStorage) return "";
    const userLocal = localStorage.getItem("user");
    if (!userLocal && !getOnly) {
      const uuid = uuidv4();
      localStorage.setItem("user", uuid);
    }
    setUser(userLocal ?? "");
  }, []);

  return user;
};
