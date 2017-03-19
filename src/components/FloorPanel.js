import React, { Component, PropTypes } from 'react';

import testpanel from '../../public/testpanel.jpeg'

class FloorPanel extends Component {

	render() {
		return (
			<img onClick={this.props.rotatePanel} className={`floorPanel${this.props.direction}`} src={testpanel} />
		);
	}
}

FloorPanel.propTypes = {
	direction: PropTypes.string,
	rotatePanel: PropTypes.func,
}

FloorPanel.defaultProps = {
	direction: 'Up',
}

export default FloorPanel
