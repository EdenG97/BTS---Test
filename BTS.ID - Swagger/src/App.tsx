import "./App.css";
import { useState } from "react";
import Auth from "./components/auth/auth";
import GetChecklist from "./components/checklist/getChecklist";
import CreateCheckList from "./components/checklist/createCheckList";
import GetChecklistItem from "./components/checklistItem/getChecklistItem";
import CreateCheckListItem from "./components/checklistItem/createCheckListItem";
import GetChecklistItemInChecklist from "./components/checkListItemInChecklist/getCheckListItemInChecklist";

function App() {
  const [token, setToken] = useState("");
  const [checklistId, setChecklistId] = useState(0);
  const [checklistItemId, setChecklistItemId] = useState(0);

  return (
    <div>
      <Auth setToken={setToken} />
      {token && (
        <>
          <div className="border my-3">
            <CreateCheckList token={token} />
            <GetChecklist token={token} setChecklistId={setChecklistId} />
          </div>
          <div className="border my-3">
            <CreateCheckListItem token={token} checklistId={checklistId} />
            <GetChecklistItem token={token} checklistId={checklistId} />
          </div>
          <div>
            <GetChecklistItemInChecklist
              token={token}
              checklistId={checklistId}
              checklistItemId={checklistItemId}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
