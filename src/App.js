import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import ReactQueryPage from "./page/ReactQueryPage";
import NormalPage from "./page/NormalPage";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">HomePage</Link>
          <Link className="navbar-brand" to="/react-query">React Query</Link>
          <Link className="navbar-brand" to="/normal-fetch">Normal Fetch</Link>
      </nav>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/react-query" element={<ReactQueryPage />} />
            <Route path="/normal-fetch" element={<NormalPage />} />
        </Routes>
    </div>
  );
}

export default App;
