import React from "react";
import About from "./About";

const User = () => {
  let users = [
    {
      user: "Akbaro",
      age: 22,
      password: 6666,
    },
    {
      user: "Aktan",
      age: 19,
      password: 5555,
    },
    {
      user: "Usman",
      age: 28,
      password: 7711,
    },
  ];
  return (
    <div>
      <About data={users} />
    </div>
  );
};

export default User;
