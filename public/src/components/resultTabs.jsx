import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

var ResultTabs = (props) => (

  <Tabs>
    <TabList>
      {props.destinations.map((destination, idx) => {
        return <Tab key={idx}>{destination.city.city}</Tab>;
      })}
    </TabList>
    {props.destinations.map((destination, idx) => {
      return (
        <TabPanel key={idx}>
          <span className="resultsList tourism">
            <h3 className="resultsListHeader">Experiences</h3>
            {destination.tourism.results.map((location, locIdx) => {
              return <div className="resultsListItem"><a key={locIdx} href="http://www.google.com">{location.name}</a></div>;
            })}
          </span>
          <span className="resultsList hotels">
            <h3 className="resultsListHeader">Hotels</h3>
            {destination.hotels.results.map((location, locIdx) => {
              return <div className="resultsListItem"><a key={locIdx} href="http://www.google.com">{location.name}</a></div>;
            })}
          </span>
          <span className="resultsList restaurants">
            <h3 className="resultsListHeader">Restaurants</h3>
            {destination.restaurants.results.map((location, locIdx) => {
              return <div className="resultsListItem"><a key={locIdx} href="http://www.google.com">{location.name}</a></div>;
            })}
          </span>          
        </TabPanel> 
      )
    })}
  </Tabs>

);

export default ResultTabs;