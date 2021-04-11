import React from 'react'
import Calendar from './components/Calendar'



function App () {
  return (
    <div className="App">
      <header>
        <div id="logo">
          <span>
            <b>calendar</b>
          </span>
        </div>
      </header>
      <main>
        <Calendar />
      </main>
    </div>
  );
}

export default App;
