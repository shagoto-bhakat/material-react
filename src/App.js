import "./App.css";
import React, { useState } from "react";
import Header from "./header";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./footer";
import Contact from "./contact";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          ></Header>
          <Switch>
            <Route exact path="/home" component={() => <div>Home</div>}></Route>
            <Route
              exact
              path="/services"
              component={() => <div>Services</div>}
            ></Route>
            <Route
              exact
              path="/therevolution"
              component={() => <div>The Revolution</div>}
            ></Route>
            <Route
              exact
              path="/aboutus"
              component={() => <div>About Us</div>}
            ></Route>
            <Route
              exact
              path="/contactus"
              component={() => <div>Contact Us</div>}
            ></Route>
          </Switch>
          <Contact></Contact>
          <Footer
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          ></Footer>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
