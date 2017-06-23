import React from 'react';

class BookFlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }

  componentWillMount() {
    var departDate = this.props.startDate.format('YYYY-MM-DD');
    var returnDate = this.props.startDate.add(7, 'days').format('YYYY-MM-DD');
    console.log(departDate, returnDate);

  

    // var base = `https://www.google.com/flights/#search;f=JFK,EWR,LGA;t=DESTINATION;d=DEPART;r=RETURN`;
    var base = `https://www.kayak.com/flights/NYC-DESTINATION/DEPART/RETURN`;

    var targetUrl = base.replace('DESTINATION', this.props.destination.airport)
                        .replace('DEPART', departDate)
                        .replace('RETURN', returnDate);
    this.setState({url: targetUrl});
  }

  render() {
    return (
      <span>
        <a href={this.state.url}>
          <button className="book-flight">Book A Flight</button>
        </a>
      </span>
    )
  }
}

  

export default BookFlight;

//https://www.kayak.com/flights/NYC-SFO/2017-06-23/2017-06-30
//https://www.google.com/flights/#search;f=JFK,EWR,LGA;t=SFO;d=DEPART;r=RETURN

//original
//https://www.google.com/flights/#search;f=JFK,EWR,LGA;t=SFO;d=2017-07-09;r=2017-07-12