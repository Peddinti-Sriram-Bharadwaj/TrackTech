import './App.css';
import TopLeft from './components/topLeft';
import TopRight from './components/topRight';
import Bottom from './components/bottom';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(new Map());

  const updateState = (newState) => {
    setState(new Map(newState));
  };
  
  return (
    <div style={{ border: '3px solid', flexDirection: 'column', height: '100vh' }}>

        <div style={{ border: '3px solid',display: 'flex', height: '50%' }}>

            <div style={{ border: '3px solid',  width: '50%' }}>
              <TopLeft state = {state} />
            </div>

            <div style={{ border: '3px solid',  width: '50%' }}>
              <TopRight state = {state} updateState={updateState} />
            </div>
            
          </div>

      <div style={{ border: '3px solid', height: '50%' }}>
        <Bottom state = {state}/>
        
      </div>
    </div>
  )
}

export default App;
