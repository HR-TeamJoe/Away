import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
const googleSearch = `https://www.google.com/#q=`;
const regex = `/[^a-zA-Z]+/g`
var testSummary = `New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.`
//destination.city.summary

var ResultTabs = (props) => (
  <div >
    <Tabs >
      <TabList>
        {props.destinations.map((destination, idx) => {
          return <Tab key={idx}>{destination.city.city}</Tab>;
        })}
      </TabList>
      {props.destinations.map((destination, idx) => {
        return (
          <TabPanel key={idx} >
            <div>
              <div>Overview</div>
              <div>{destination.city.summary}</div>
            </div>
            <div >
            <span >
              <h3>Experiences</h3>
              {destination.tourism.results.map((location, locIdx) => {
                return <div><a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>{location.name}</a></div>;
              })}
            </span>
            <span >
              <h3>Hotels</h3>
              {destination.hotels.results.map((location, locIdx) => {
                return <div><a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>{location.name}</a></div>;
              })}
            </span>
            <span >
              <h3>Restaurants</h3>
              {destination.restaurants.results.map((location, locIdx) => {
                return <div><a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>{location.name}</a></div>;
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