import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Categories from "./Categories";
import Category from "./Category";
import Session from "./Session";
import Header from "./Header";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to RP SOI" />} />
        <Route path="diploma" element={<Categories />} >
          <Route path=":catId" element={<Category />} >
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a category from above</h3>} />
        </Route>
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}
