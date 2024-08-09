import "./App.css";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <Home />

        <Footer />
      </div>
    </>
  );
}

export default App;
