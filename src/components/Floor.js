import React, { Component } from 'react';
import Upper from './Upper'
import Ground from './Ground'
import Basement from './Basement'

export default class Floor extends Component {

	get floor() {

		if (this.props.view === 'Upper') {

			return <Upper />
		}

		if (this.props.view === 'Basement') {

			return <Basement />
		}

		return <Ground />
	}

	render() {
		return (
			<div className="floorContainer">
				{this.floor}
			</div>
		);
	}
}
