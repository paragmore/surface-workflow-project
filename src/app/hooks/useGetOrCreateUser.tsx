"use client";

import { v4 as uuidv4 } from "uuid";

export const useGetOrCreateUser = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    const uuid = uuidv4();
    localStorage.setItem("user", uuid);
  }

  return user ?? "";
};
