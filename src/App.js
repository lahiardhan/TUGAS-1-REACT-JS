import React, { Component } from "react";
import Header from "./Header"
import Footer from "./Footer"
import MenuUtama from "./Page/MenuUtama"
import MenuProduct from "./Page/MenuProduct"
import MenuKontak from "./Page/MenuKontak"
import MenuTentangKami from "./Page/MenuTentangKami"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    );
  }
}

export default App;
