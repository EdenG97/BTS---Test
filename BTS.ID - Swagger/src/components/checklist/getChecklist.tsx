import { SetStateAction, useEffect, useState } from "react";

interface GetChecklistProps {
  token: string;
  setChecklistId: React.Dispatch<SetStateAction<number>>;
}

export default function GetChecklist({
  token,
  setChecklistId,
}: GetChecklistProps) {
  const [list, setList] = useState([
    {
      id: 0,
      items: "",
      name: "",
      checklistCompletionStatus: false,
    },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://94.74.86.174:8080/api/checklist", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        setList(result.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [token]);

  async function deleteHandler(id: number) {
    try {
      await fetch(`http://94.74.86.174:8080/api/checklist/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="my-4">
      <h4 className="font-bold">Check List</h4>
      {list.map((it, idx) => (
        <div key={idx}>
          <p>id: {it.id}</p>
          <p>name: {it.name ? it.name : "no name"}</p>
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="bg-blue-600 text-white px-3"
              onClick={() => deleteHandler(it.id)}
            >
              Delete Checklist
            </button>
            <button
              type="button"
              className="bg-blue-600 text-white px-3"
              onClick={() => setChecklistId(it.id)}
            >
              Get Checklist Item
            </button>
          </div>
        </div>
      ))}
      {list.length === 0 && <p>No Checklist Found</p>}
    </div>
  );
}
