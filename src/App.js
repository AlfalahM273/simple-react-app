import React from 'react';
import PostPage from './pages/PostPage';
import NotePage from './pages/NotePage';

import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header>
          <h1>
            React Simple App
          </h1>
      </header>
      <table style={{ width: "100%" }} >
        <thead>
          <tr>
            <td style={{ width: "50%" }}>
              <h2>Posts</h2>
            </td>
            <td style={{ width: "50%" }}>
              <h2>Notes</h2>
            </td>
          </tr>
        </thead>
        <tbody style={{ height: "800px" }} >
          <tr>
            <td style={{ padding: "16px", verticalAlign: "top" }} ><PostPage></PostPage></td>
            <td style={{ padding: "16px", verticalAlign: "top" }} ><NotePage></NotePage></td>
          </tr>
        </tbody>
      </table>
    </div>
    </React.Fragment>
  );
}

export default App;
