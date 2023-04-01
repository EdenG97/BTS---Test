import { useRef } from "react";

interface CreateCheckListItemProps {
  token: string;
  checklistId: number;
}

export default function CreateCheckListItem({
  token,
  checklistId,
}: CreateCheckListItemProps) {
  const itemName = useRef<HTMLInputElement>(null);

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await fetch(
        `http://94.74.86.174:8080/api/checklist/${checklistId}/item`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ itemName: itemName.current?.value }),
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h4 className="font-bold">Create Check List Item</h4>
      <form onSubmit={submitHandler}>
        <div className="pb-4">
          <p>Item Name</p>
          <input type="text" name="text" className="border" ref={itemName} />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-3">
          Add Checklist
        </button>
      </form>
    </>
  );
}
