import { SetStateAction, useRef } from "react";

interface LoginProps {
  setToken: React.Dispatch<SetStateAction<string>>;
}

export default function Login({ setToken }: LoginProps) {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = {
      username: username.current!.value,
      password: password.current!.value,
    };

    const response = await fetch("http://94.74.86.174:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setToken(result.data.token);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <p>Username</p>
        <input type="text" name="text" className="border" ref={username} />
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          name="password"
          className="border"
          ref={password}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
