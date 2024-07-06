import { useState } from "react";
import "./index.css";
function App() {
  const config = [
    {
      label: "customer_service",
      id: 1,
      children: [
        {
          label: "support",
          id: 2,
        },
        {
          label: "customer_success",
          id: 3,
        },
      ],
    },
    {
      label: "design",
      id: 5,
      children: [
        {
          label: "graphic_design",
          id: 6,
        },
        {
          label: "product_design",
          id: 7,
        },
        {
          label: "web_design",
          id: 8,
        },
      ],
    },
  ];

  const [checkBoxItems, setCheckBoxItem] = useState({});

  // @ts-ignore
  const handleChildChange = (event, parentId, childId) => {
    // @ts-ignore
    const isChildChecked = checkBoxItems[childId] === true;
    setCheckBoxItem({
      ...checkBoxItems,
      [childId]: isChildChecked ? false : true,
      [parentId]: !isChildChecked,
    });
  };
  // @ts-ignore
  const ChildBox = ({ child, parentId, childId }) => {
    return (
      <>
        <div style={{ display: "flex", gap: "0.2rem" }}>
          <input
            type="checkbox"
            // @ts-ignore
            checked={checkBoxItems[childId]}
            onChange={(event) => handleChildChange(event, parentId, childId)}
          />
          <label>{child.label}</label>
        </div>
        <br />
        {child.children &&
          // @ts-ignore
          child.children.map((subItem) => (
            // @ts-ignore
            <ChildBox key={subItem.id} child={subItem} /> // Recursive call
          ))}
      </>
    );
  };
  // @ts-ignore
  const handleClick = (event, parentId: number) => {
    const isChecked = event.target.checked;
    const updatedItems = { ...checkBoxItems, [parentId]: isChecked };

    // Check/uncheck all child checkboxes related to this parent
    const parentItem = config.find((item) => item.id === parentId);
    // @ts-ignore
    if (parentItem.children) {
      // @ts-ignore
      parentItem.children.forEach((child) => {
        // @ts-ignore
        updatedItems[child.id] = isChecked;
      });
    }

    setCheckBoxItem(updatedItems);
  };

  return (
    <div
      className="App"
      style={{ padding: "20px", backgroundColor: "#f5f5f5" }}
    >
      {config.map((item, i) => (
        <details key={i} style={{ marginBottom: "10px" }}>
          <summary style={{ display: "flex", gap: "0.2rem" }}>
            <input
              type="checkbox"
              // @ts-ignore
              checked={checkBoxItems[item.id]}
              onChange={(e) => handleClick(e, item.id)}
            />
            <label>{item.label}</label>
            <span>({item.children.length})</span>
          </summary>

          <div style={{ marginLeft: "20px" }}>
            {item.children &&
              item.children.map((subItem, i) => (
                <ChildBox
                  key={i}
                  child={subItem}
                  parentId={item.id}
                  childId={subItem.id}
                />
              ))}
          </div>
        </details>
      ))}
    </div>
  );
}

export default App;
