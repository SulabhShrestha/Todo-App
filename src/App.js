import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <Router>
        <TodoProvider>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </TodoProvider>
      </Router>
    </div>
  );
}

export default App;
