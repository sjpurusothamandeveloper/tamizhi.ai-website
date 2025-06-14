import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router> {/* Wrap the entire component inside Router */}
      <Routes>
        <Route
          path="/tamizhi.ai-website"
          element={<Landing />}
        >
        </Route>
        <Route
          path="/contact"
          element={<ContactUs />}
        />
      </Routes>
    </Router>
  );
};

export default App;
