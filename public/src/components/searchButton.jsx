import React from 'react';

class SearchButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      isHovered: false,
      classes: 'search-button'
    };
  }

  click(e) {
    console.log('clicked: ', e);
    this.setState({
      isClicked: true,
      classes: 'search-button search-button-clicked'
    });
    this.props.getCityResults(e);
  }

  render() {
    return (
      <div
        role="button"
        className={this.state.classes}
        onClick={this.click.bind(this)}
      >
        Go!
      </div>
    );
  }
}

export default SearchButton;
