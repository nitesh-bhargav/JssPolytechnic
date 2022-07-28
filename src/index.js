import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Mahavidyapeetha from "./components/About/Mahavidyapeetha/Mahavidyapeetha";
import Jsspolytechnic from "./components/About/Jsspolytechnic/Jsspolytechnic";
import "./components/styles/pfc-stylecd2e.css";
import "./components/styles/style20b9.css";
import "./components/styles/tcy-front-style.min8a54.css";
import "./components/styles/style.mincd2e.css";
import Contact from "./components/contact/Contact";
import Program from "./components/programs/Program";
import Ncc from "./components/Activities/NCC/Ncc";
import Nss from "./components/Activities/NSS/Nss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} /> */}
          {/* </Route> */}
        </Route>
        <Route
          path="/about/Mahavidyapeetha"
          element={<Mahavidyapeetha />}
        ></Route>
        <Route
          path="/about/Jsspolytechnic"
          element={<Jsspolytechnic />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/program" element={<Program />}></Route>
        <Route path="/Ncc" element={<Ncc />}></Route>
        <Route path="/Nss" element={<Nss />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
