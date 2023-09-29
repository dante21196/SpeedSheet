import "./App.css";
import Viewdata from "./Components/Viewdata";
import Stordata from "./Components/Stordata";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function App() {
  function AppRoutes() {
    const location = useLocation();

    return (
      <Routes key={location.pathname}>
        <Route path="/" element={<Viewdata />} />
        <Route exact path="viewdata" element={<Viewdata />} />

        <Route exact path="adddata" element={<Stordata />} />
        <Route path="*" element={<Viewdata />} />
      </Routes>
    );
  }
  return (
    <div className="App bg-warning">
      <Router>
      <br/>
        <h1 className="m-10"><strong>SpeedSheet</strong></h1>
        <h2 className="m-4"><strong>View and enter data right into your google sheet</strong></h2>

        <div className="container">
          <Link to="/" type="button" className="btn btn-dark m-4">
            View Sheet Data
          </Link>
          <Link to="/adddata" type="button" className="btn btn-dark m-4">
            Add Entries
          </Link>
        </div>

        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
