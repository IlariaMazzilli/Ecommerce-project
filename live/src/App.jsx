import { Homepage } from "./pages/Homepage";
import { Footer } from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Menu />
      <Homepage />
      <Footer nameApp={"Ecommerce"} />
    </div>
  );
}

export default App;