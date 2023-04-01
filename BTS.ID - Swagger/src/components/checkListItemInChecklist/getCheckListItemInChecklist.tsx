import { useEffect, useState } from "react";

interface GetChecklistItemInChecklistProps {
  token: string;
  checklistId: number;
  checklistItemId: number;
}

export default function GetChecklistItemInChecklist({
  token,
  checklistId,
  checklistItemId,
}: GetChecklistItemInChecklistProps) {
  const [checklistItem, setChecklistItem] = useState([]);

  useEffect(() => {
    if (checklistId > 0 && checklistItemId > 0) {
      (async () => {
        try {
          const response = await fetch(
            `http://94.74.86.174:8080/api/checklist/${checklistId}/item/${checklistItemId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const result = await response.json();
          setChecklistItem(result.data);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [token, checklistId, checklistItemId]);

  return (
    <>
      <h4 className="font-bold">Check List Item</h4>
      {/* {checklistItem.map((it, idx) => (
        <div key={idx}>
          <p>id: {it.id}</p>
          <p>name: {it.name ? it.name : "no name"}</p>
        </div>
      ))} */}
      {/* {checklistItem.length === 0 && <p>No Checklist Item Found</p>} */}
    </>
  );
}
