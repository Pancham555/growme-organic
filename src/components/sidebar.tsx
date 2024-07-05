import json from "./sidebar.json";
import "./index.css";
// import { useState } from "react";

// interface departmentProps {
//   department: string;
//   subDepartment: string[];
// }

const Sidebar = () => {
  // const [selected, setSelected] = useState<departmentProps[]>();
  return (
    <div>
      {json.map((d1, i1) => {
        return (
          <details key={i1} id="sidebar_details">
            <summary style={{ display: "flex", gap: "0.2rem" }}>
              <input type="checkbox" name={d1.department} id="" />
              <span>{d1.department}</span>
              <span>({d1.sub_departments.length})</span>
            </summary>
            {d1.sub_departments.map((d2, i2) => {
              return (
                <div
                  className=""
                  key={i2}
                  style={{ display: "flex", gap: "0.2rem" }}
                >
                  <input type="checkbox" name={d2} id="" />
                  <span>{d2}</span>
                </div>
              );
            })}
          </details>
        );
      })}
    </div>
  );
};

export default Sidebar;

// const Sidebar = () => {
//   return <div>Sidebar</div>;
// };

// export default Sidebar;
