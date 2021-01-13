import { Component } from 'react';
import Clock from './Components/Clock';
import logo from './logo.svg';
import './App.css';

let time = new Date().toLocaleString();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
						<div class="logo">
							<span class="icon fa-clock"></span>
						</div>
						<div class="content">
							<div class="inner">
								<h1>React Clock</h1>
								<p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
								for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
                <p className="App-intro">
                  Hi {this.props.name}
                </p>
                <Clock />
							</div>
						</div>
        </header>
      </div>
    );
  }
}

export default App;
