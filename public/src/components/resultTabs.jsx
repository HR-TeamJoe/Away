import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BookFlight from './BookFlight.jsx';
// import 'react-tabs/style/react-tabs.css';
const googleSearch = `https://www.google.com/#q=`;
const regex = `/[^a-zA-Z]+/g`
//destination.city.summary

// <<<<<<< HEAD
// class ResultTabs extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     console.log('this.props.destinations[0].city.city: ', this.props.destinations[0].city.city)
//     return (
//       <div className="row center-xs">
//         <Tabs className="start-xs col-xs-10 tab-padding">
//           <TabList>
//             {this.props.destinations.map((destination, idx) => {
//               return <Tab key={idx}>{destination.city.city}</Tab>;
//             })}
//           </TabList>
//           {this.props.destinations.map((destination, idx) => {
//             return (
//               <TabPanel key={idx}>
//                 <div>
//                   <div className="resultsListSummary">
//                     <div className="resultsListSummaryHeader">Overview</div>
//                     <div className="resultsListSummaryBody">{destination.city.summary}</div>
//                   </div>
//                   <span className="resultsList tourism">
//                     <h3 className="resultsListHeader">Experiences</h3>
//                     {destination.tourism.results.map((location, locIdx) => {
//                       return <div className="resultsListItem"><a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>{location.name}</a></div>;
//                     })}
//                   </span>
//                   <span className="resultsList hotels">
//                     <h3 className="resultsListHeader">Hotels</h3>
//                     {destination.hotels.results.map((location, locIdx) => {
//                       return <div className="resultsListItem"><a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>{location.name}</a></div>;
//                     })}
//                   </span>
//                   <span className="resultsList restaurants">
//                     <h3 className="resultsListHeader">Restaurants</h3>
//                     {destination.restaurants.results.map((location, locIdx) => {
//                       return <div className="resultsListItem"><a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>{location.name}</a></div>;
//                     })}
//                   </span>
//                 </div>
//               </TabPanel>
//             )
//           })}
//         </Tabs>
//       </div>
//     )
//   }
// }
// =======
var ResultTabs = (props) => (
  <div className="row center-xs">
    <Tabs className="start-xs col-xs-10 tab-padding">
      <TabList>
        {props.destinations.map((destination, idx) => {
          return <Tab key={idx}>{destination.city.city}</Tab>;
        })}
      </TabList>
      {props.destinations.map((destination, idx) => {
        console.log('A destination is: ', destination);
        return (
          <TabPanel key={idx}>
            <div>
              <div className="resultsListSummary">
                <div className="resultsListSummaryHeader">Overview</div>
                <span>
                  <span className="resultsListSummaryBody">{destination.city.summary}</span>
                  <BookFlight startDate={props.startDate} destination={destination}/>
                </span>
              </div>
              <span className="resultsList tourism">
                <h3 className="resultsListHeader">Experiences</h3>
                {destination.tourism.results.map((location, locIdx) => {
                  return <div className="resultsListItem"><a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>{location.name}</a></div>;
                })}
              </span>
              <span className="resultsList hotels">
                <h3 className="resultsListHeader">Hotels</h3>
                {destination.hotels.results.map((location, locIdx) => {
                  return <div className="resultsListItem"><a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>{location.name}</a></div>;
                })}
              </span>
              <span className="resultsList restaurants">
                <h3 className="resultsListHeader">Restaurants</h3>
                {destination.restaurants.results.map((location, locIdx) => {
                  return <div className="resultsListItem"><a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>{location.name}</a></div>;
                })}
              </span>
            </div>
          </TabPanel>
        )
      })}
    </Tabs>
  </div>
);

export default ResultTabs;

//{destination.city.summary}

// ====ATTEMPT to link resultTabs with selected city (code should be in TabList map function)====
// ====ATTEMPT #1====
// return <Tab key={idx} className={this.props.selectedCity===destination.city.city ? 'react-tabs__tab react-tabs__tab--selected' : 'react-tabs__tab'}>{destination.city.city}</Tab>;
// ====ATTEMPT #2====
// if(destination.city.city===this.props.selectedCity) {
//   return <Tab key={idx} className='react-tabs__tab react-tabs__tab--selected'>{destination.city.city}</Tab>
// } else {
//   return <Tab key={idx}>{destination.city.city}</Tab>
// }
