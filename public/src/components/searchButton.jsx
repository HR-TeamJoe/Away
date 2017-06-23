import React from 'react';
import classnames from 'classnames';

class SearchButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      isHovered: false,
      classes: 'search-button'
    }
  }

  hover(e) {
    console.log('hovered: ', e);
  }

  click(e) {
    console.log('clicked: ', e);
    this.setState({
      isClicked: true,
      classes: 'search-button search-button-clicked'
    });
    //this.props.getCityResults(e);
  }

  render() {
    // if ( this.state.isClicked ) {

    // }

    return (
      <div className={this.state.classes} onClick={this.click.bind(this)}>Go!</div>
    )
  }
}

export default SearchButton;
