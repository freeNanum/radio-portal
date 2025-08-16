// Copyright (c) 2024 Jaehong Park
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import React from 'react';
import './App.css';
import { stations } from './stations';
import backgroundImage from './background.jpg';
import stationLogo from './station-logo.svg';

function App() {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div className="App" style={appStyle}>
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
              <img src={stationLogo} alt={``} className="station-logo" />
              <span>{station.name}</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;