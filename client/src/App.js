import React from "react";
import "./style.css"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Books from "./pages/Books"
import Add from "./pages/Add"
import Update from "./pages/Update"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// "axios": "^1.3.2", it allow us to make api request through react app
export default App;
