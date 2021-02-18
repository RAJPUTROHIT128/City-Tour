import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import TourList from './component/TourList';
import Navbar from './component/Navbar/Navbar';



export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />   
        <TourList />

      </React.Fragment>
    )
  }
}
