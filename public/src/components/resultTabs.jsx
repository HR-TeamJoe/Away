import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BookFlight from './BookFlight.jsx';

const googleSearch = 'https://www.google.com/#q=';
const regex = '/[^a-zA-Z]+/g';

const ResultTabs = props => (
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
                {destination.tourism.results.map((location, locIdx) => (
                  <div className="resultsListItem">
                    <a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>
                      {location.name}
                    </a>
                  </div>
                ))}
              </span>
              <span className="resultsList hotels">
                <h3 className="resultsListHeader">Hotels</h3>
                {destination.hotels.results.map((location, locIdx) => (
                  <div className="resultsListItem">
                    <a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>
                      {location.name}
                    </a>
                  </div>
                ))}
              </span>
              <span className="resultsList restaurants">
                <h3 className="resultsListHeader">Restaurants</h3>
                {destination.restaurants.results.map((location, locIdx) => (
                  <div className="resultsListItem">
                    <a key={locIdx} href={googleSearch + location.name.replace(regex, '+')}>
                      {location.name}
                    </a>
                  </div>
                ))}
              </span>
            </div>
          </TabPanel>
        );
      })}
    </Tabs>
  </div>
);

export default ResultTabs;
