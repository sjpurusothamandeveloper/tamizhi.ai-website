import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <Router>
      <div >
        <Landing />
      </div>
    </Router>
  );
};

export default App;
