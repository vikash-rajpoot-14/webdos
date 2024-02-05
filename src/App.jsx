import Card from "./components/Card";
import Category from "./components/Category";
import Dropdown from "./components/Dropdown/Dropdown";
import Mid from "./components/Dropdown/Mid";
import Header from "./components/Header/Header";
import Properties from "./components/Properties";

function App() {
  return (
    <div>
      <Header />
      <Dropdown />
      <Mid />
      <Category />
      <Card />
      <Properties />
    </div>
  );
}

export default App;
