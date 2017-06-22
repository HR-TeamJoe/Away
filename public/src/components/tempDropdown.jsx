import React from 'react'

var TempDropdown = (props) => (
		<select onChange={props.changeTemp} value={props.temp}>
			{
				props.options.map((option, i) => {
					return (
						<option key={i} value={option}>{option}</option>
					)
				})
			}
		</select>
)

// TempDropdown.propTypes: {
// 	options: React.PropTypes.any.isRequired,
// }

export default TempDropdown
