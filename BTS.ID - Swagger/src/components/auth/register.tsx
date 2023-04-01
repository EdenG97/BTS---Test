import { useRef } from "react";

export default function Register() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = {
      username: username.current!.value,
      email: email.current!.value,
      password: password.current!.value,
    };

    await fetch("http://94.74.86.174:8080/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
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
      <div>
        <p>Email</p>
        <input type="email" name="email" className="border" ref={email} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
