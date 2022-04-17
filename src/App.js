import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data.js";
import "./App.css";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Header />
      <section>{cards}</section>
    </div>
  );
}

export default App;
