import { useRef } from "react";

interface CreateCheckListProps {
  token: string;
}

export default function CreateCheckList({ token }: CreateCheckListProps) {
  const name = useRef<HTMLInputElement>(null);

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await fetch("http://94.74.86.174:8080/api/checklist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: name.current?.value }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h4 className="font-bold">Create Check List</h4>
      <form onSubmit={submitHandler}>
        <div className="pb-4">
          <p>Name</p>
          <input type="text" name="text" className="border" ref={name} />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-3">
          Add Checklist
        </button>
      </form>
    </>
  );
}
