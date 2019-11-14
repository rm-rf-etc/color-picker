import React from 'react';
import colorBucket from './bucket';
import { useBucket } from 'weir.react';
import { SketchPicker } from 'react-color';
import './App.css';

const { setColor1 } = colorBucket.methods;

function App() {
  const { color1 = '0,0,0' } = useBucket(colorBucket, 'color1');

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: `rgb(${color1})` }}>
        <SketchPicker color={`rgb(${color1})`} onChange={setColor1} />
      </header>
    </div>
  );
}

export default App;
