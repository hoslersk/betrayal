import React, { Component } from 'react';

import Floor from './components/Floor'
import FloorPanel from './components/FloorPanel'

import './App.css';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			floor: 'Ground',
			panelOrientation: 'Up',
		}

		this.changeFloor = this.changeFloor.bind(this)
		this.rotatePanel = this.rotatePanel.bind(this)
	}

	changeFloor(event) {
		this.setState({floor: event.target.name})
	}

	rotatePanel() {
		if (this.state.panelOrientation === 'Up') {
			this.setState({panelOrientation: 'Right'})
		}
		if (this.state.panelOrientation === 'Right') {
			this.setState({panelOrientation: 'Down'})
		}
		if (this.state.panelOrientation === 'Down') {
			this.setState({panelOrientation: 'Left'})
		}
		if (this.state.panelOrientation === 'Left') {
			this.setState({panelOrientation: 'Up'})
		}
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
				<FloorPanel direction={this.state.panelOrientation} rotatePanel={this.rotatePanel} />
			</div>
		);
	}
}

export default App;
