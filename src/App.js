import React, { Component } from "react";
import "./App.css";
import DjList from "./components/DjList";
import Nav from "./components/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      djs: [],
      searchBox: ""
    };
  }

  componentDidMount() {
    fetch("https://www.jasonbase.com/things/2Rkm")
      .then(res => res.json())
      .then(djs => this.setState({ djs }));
  }

  onSearchChange = e => {
    this.setState({ searchBox: e.target.value });
  };

  render() {
    const { djs, searchBox } = this.state;
    const filteredDjs = djs.filter(dj => {
      return (
        dj.name.toLowerCase().includes(searchBox.toLowerCase()) ||
        dj.genre.toLowerCase().includes(searchBox.toLowerCase())
      );
    });
    return !djs.length ? (
      <h1 className="home text-center ml-auto load">Loading ...</h1>
    ) : (
      <div>
        <Nav searchChange={this.onSearchChange} />
        <DjList djs={filteredDjs} />
      </div>
    );
  }
}

export default App;
