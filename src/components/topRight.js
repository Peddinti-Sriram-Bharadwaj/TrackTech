import React, { useState } from 'react';


    function TopRight({ state,updateState }) {
        const [inputValue, setInputValue] = useState('');

        const handleInputChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleAddLines = () => {
            const lines = inputValue.split('\n');
            lines.forEach((line) => {
              if (state.has(line)) {
                state.set(line, state.get(line) + 1);
              } else {
                state.set(line, 1);
              }
            });
            console.log(state)
            updateState(new Map(state));
            setInputValue('');
          };

        return (
            <div>
                <textarea value={inputValue} onChange={handleInputChange} />
                <button onClick={handleAddLines}>Add Lines</button>
            </div>
        );
    }

    export default TopRight;
