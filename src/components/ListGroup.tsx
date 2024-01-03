import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //   let selectedIndex = 0;

  // Hook
  //   useState(-1);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]  variable (selectedIndex)
  // arr[1]  updater function

  //   items = [];

  //use of const directly without any parameter
  const message = items.length === 0 ? <p> No item found </p> : null;

  //use of function to initialize with para
  const getMessage = () => {
    return items.length === 0 ? <p> No item found </p> : null;
  };

  // onClick event handler
  //   const handleClick = (event: MouseEvent) => console.log(event)

  return (
    // Fragment
    <>
      <h1>List</h1>
      {/* {message} */}

      {/* {getMessage()} */}

      {/* {items.length === 0 ? <p> No item found </p> : null} */}

      {items.length === 0 && <p> No item found </p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //pass reference
            // onClick={handleClick}
            onClick={() => {
                setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
