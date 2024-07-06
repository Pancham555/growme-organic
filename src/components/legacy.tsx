// import json from "./sidebar.json";
// import "./index.css";
// import { useEffect, useState } from "react";
// // import { useState } from "react";

// // interface departmentProps {
// //   department: string;
// //   subDepartment: string[];
// // }

// interface SelectProps {
//   department: {
//     name: string;
//     selected: boolean;
//   };
//   subDepartment: subDepartmentProps[];
// }

// interface subDepartmentProps {
//   name: string;
//   selected: boolean;
// }

// const Sidebar = () => {
//   const [selected, setSelected] = useState<SelectProps[]>([
//     {
//       department: { name: "customer_service", selected: false },
//       subDepartment: [
//         { name: "support", selected: false },
//         { name: "customer_success", selected: false },
//       ],
//     },
//     {
//       department: { name: "design", selected: false },
//       subDepartment: [
//         { name: "graphic_design", selected: false },
//         { name: "product_design", selected: false },
//         { name: "web_design", selected: false },
//       ],
//     },
//   ]);
//   useEffect(() => {}, []);

//   return (
//     <div>
//       {json.map((d1, i1) => {
//         return (
//           <details key={i1} id="sidebar_details">
//             <summary style={{ display: "flex", gap: "0.2rem" }}>
//               <input
//                 type="checkbox"
//                 name={d1.department.name}
//                 checked={selected[i1].department.selected}
//                 onChange={() =>
//                   setSelected([
//                     {
//                       department: {
//                         name: d1.department.name,
//                         selected: !selected[i1].department.selected,
//                       },
//                       subDepartment: [...selected[i1].subDepartment],
//                     },
//                   ])
//                 }
//               />
//               <span>{d1.department.name}</span>
//               <span>({d1.sub_departments.length})</span>
//             </summary>
//             {d1.sub_departments.map((d2, i2) => {
//               if (selected[i1].department.selected)
//                 return (
//                   <div
//                     className=""
//                     key={i2}
//                     style={{ display: "flex", gap: "0.2rem" }}
//                   >
//                     <input
//                       type="checkbox"
//                       name={d2.name}
//                       checked={selected[i1].subDepartment[i2].selected}
//                       onChange={() =>
//                         setSelected([
//                           {
//                             department: { ...selected[i1].department },
//                             subDepartment: [
//                               ...selected[i1].subDepartment,
//                               {
//                                 name: d2.name,
//                                 selected:
//                                   !selected[i1].subDepartment[i2].selected,
//                               },
//                             ],
//                           },
//                         ])
//                       }
//                     />
//                     <span>{d2.name}</span>
//                   </div>
//                 );
//             })}
//           </details>
//         );
//       })}
//     </div>
//   );
// };

// export default Sidebar;

// // const Sidebar = () => {
// //   return <div>Sidebar</div>;
// // };

// // export default Sidebar;
