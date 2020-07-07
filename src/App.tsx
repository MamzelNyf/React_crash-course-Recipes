import React, {Component} from 'react';

import './App.css';
import MealItem from "./components/getList";

class App extends Component{

    render() {

      return (
        <div className="App">
            <MealItem />
        </div>
      );
    }
}
export default App;
