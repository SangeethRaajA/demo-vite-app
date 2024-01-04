import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) =>{
  //   console.log(item);
  // }

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItems={handleSelectItem}/> */}
      {/* <Alert text="Hello World"/> */}
      {/* <Alert> Hello <span> World </span> </Alert> */}
      <Button color="secondary" onClick={() => console.log("CLick")}>My Button</Button>
      {/* <Button color="react" onClick={() => console.log("CLick")}>My Button</Button> */}
    </div>
  );
}

export default App;
