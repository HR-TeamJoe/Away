import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
const googleSearch = `https://www.google.com/#q=`;
const regex = `/[^a-zA-Z]+/g`
var testSummary = `New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.`
//destination.city.summary

var ResultTabs = (props) => (
  <div className="row center-xs">
    <Tabs className="start-xs col-xs-10">
      <TabList>
        {props.destinations.map((destination, idx) => {
          return <Tab key={idx}>{destination.city.city}</Tab>;
        })}
      </TabList>
      {props.destinations.map((destination, idx) => {
        return (
          <TabPanel key={idx}>
            <div>
              <div className="resultsListSummary">
                <div className="resultsListSummaryHeader">Overview</div>
                <div className="resultsListSummaryBody">{destination.city.summary}</div>
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