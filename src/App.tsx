import React from 'react';
import './App.css';
import { stations } from './stations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>한국 라디오 포털</h1>
      </header>
      <main className="App-main">
        <div className="station-list">
          {stations.map(station => (
            <a
              key={station.id}
              href={station.url}
              target="_blank"
              rel="noopener noreferrer"
              className="station-link"
              style={{ backgroundColor: station.bgColor }}
            >
              <img src={station.logoUrl} alt={``} className="station-logo" />
              <span>{station.name}</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
