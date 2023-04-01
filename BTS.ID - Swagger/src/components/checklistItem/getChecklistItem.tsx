import { useEffect, useState } from "react";

interface GetChecklistItemProps {
  token: string;
  checklistId: number;
}

export default function GetChecklistItem({
  token,
  checklistId,
}: GetChecklistItemProps) {
  const [listItem, setListItem] = useState([
    {
      id: 0,
      name: "",
    },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://94.74.86.174:8080/api/checklist/${checklistId}/item`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result = await response.json();
        setListItem(result.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [token, checklistId]);

  return (
    <>
      <h4 className="font-bold">Check List Item</h4>
      {listItem.map((it, idx) => (
        <div key={idx}>
          <p>id: {it.id}</p>
          <p>name: {it.name ? it.name : "no name"}</p>
        </div>
      ))}
      {listItem.length === 0 && <p>No Checklist Item Found</p>}
    </>
  );
}
