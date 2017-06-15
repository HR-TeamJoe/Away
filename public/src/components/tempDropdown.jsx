import React from 'react'

class TempDropdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState(
			{value: e.target.value}
		)
	}

	render() {
		return (
			<div>
				<select onChange={this.handleChange} value={this.state.value}>
					{this.props.options.map((option, i) => {
						return (
							<option key={i} value={option}>{option}</option>
						)
					})}
				</select>
			</div>
		)
	}
}

// TempDropdown.propTypes: {
// 	options: React.PropTypes.any.isRequired,
// }

export default TempDropdown