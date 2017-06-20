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
          <span className="tourism">
            {destination.tourism.results.map((location, locIdx) => {
              return <div><a key={locIdx} href="http://www.google.com">{location.name}</a></div>;
            })}
          </span>
          <span className="restaurants">
            {destination.restaurants.results.map((location, locIdx) => {
              return <div><a key={locIdx} href="http://www.google.com">{location.name}</a></div>;
            })}
          </span>
          <span className="hotels">
            {destination.hotels.results.map((location, locIdx) => {
              return <div><a key={locIdx} href="http://www.google.com">{location.name}</a></div>;
            })}
          </span>
        </TabPanel> 
      )
    })}
  </Tabs>

);

export default ResultTabs;