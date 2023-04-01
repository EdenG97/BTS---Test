import { SetStateAction, useState } from "react";
import Login from "./login";
import Register from "./register";

interface AuthProps {
  setToken: React.Dispatch<SetStateAction<string>>;
}

export default function Auth({ setToken }: AuthProps) {
  return (
    <div className="flex gap-6">
      <div>
        <Login setToken={setToken} />
      </div>
      <div>
        <Register />
      </div>
    </div>
  );
}
