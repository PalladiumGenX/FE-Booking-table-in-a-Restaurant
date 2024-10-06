import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;