import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Franchise from "./Components/Franchise";
import Membership from "./Components/Membership";
import Greted from "./Components/Greted";
import Programs from "./Components/Programs";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import JoinUsToday from "./Components/Membership/";

function App() {
  return (
    <Switch>
      <Header />
      <Navbar />

      <Route path="/" exact component={Greted} />
      <Route path="/franchise" component={Franchise} />
      <Route path="/membership" component={Membership} />
      <Route path="/programs" component={Programs} />
      <Route path="/contact-us" component={Contact} />
      <Route path="/join-us-today" component={JoinUsToday} />
    </Switch>
  );
}

export default App;
