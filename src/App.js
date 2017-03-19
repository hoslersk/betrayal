import React, { Component } from 'react';

import Floor from './components/Floor'

import './App.css';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			floor: 'Ground'
		}

		this.changeFloor = this.changeFloor.bind(this)
	}

	changeFloor(event) {
		this.setState({floor: event.target.name})
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					Betrayal
				</div>
				<button name="Upper" onClick={this.changeFloor}>Upper</button>
				<button name="Ground" onClick={this.changeFloor}>Ground</button>
				<button name="Basement" onClick={this.changeFloor}>Basement</button>
				<Floor view={this.state.floor} />
			</div>
		);
	}
}

export default App;
