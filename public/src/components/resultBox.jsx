import React from 'react';

class DestinationBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showClickTestComment: false,
      showSyncTestComment: false
    };
  }

  click_Placeholder() {
    this.setState({
      showClickTestComment: !this.state.showClickTestComment
    });
  }

  sync_Placeholder() {
    this.setState({
      showSyncTestComment: !this.state.showSyncTestComment
    });
  }

  onClick() {
    this.click_Placeholder();
    this.sync_Placeholder();
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>{this.props.destination.city}</button>
        <div>
          {this.state.showClickTestComment ? <p>click test</p> : null}
          {this.state.showSyncTestComment ? <p>sync test</p> : null}
        </div>
      </div>
    )
  }
}

module.exports = DestinationBox;
