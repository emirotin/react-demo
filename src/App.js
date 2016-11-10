import React, { Component } from 'react';
import Table from './Table'
import './App.css';

const DATA = [
  { name: 'Juan', id: 1, city: 'Cochabamba' },
  { name: 'Eugene', id: 2, city: 'Minsk' },
  { name: 'Carlo', id: 3, city: 'Milano' },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <strong>{this.props.hi}</strong>
        <div>
          <Table
            data={DATA}
            columns={[
              'name',
              'city'
            ]}/>
        </div>
      </div>
    );
  }
}

export default App;
