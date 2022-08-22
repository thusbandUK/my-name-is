import './App.css';
import React from 'react';
import { Parent } from './components/Parent';
import './components/styles.css';

export class App extends React.Component {
  

  render() {
    return (
      <div>
        
​
        <body>
          <Parent />
            <main id="app"></main>
	          <script src="https://content.codecademy.com/courses/React/react-course-bundle.min.js"></script>
            {/*<script src="/Parent.compiled.js"></script>*/}
        </body>

      </div>)
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/