import React from 'react';
import { Table } from 'semantic-ui-react';
import moment from 'moment';

const UserSearchHistoryEntry = (props) => {
  const mappedCities = props.searchEntry.cities.map((city) => city.city);
  const formattedCities = mappedCities.join(' / ');
  const formattedDate = moment(props.searchEntry.searchDate).format('ddd MMM DD YYYY');

  return (
      <Table.Row
        className="userSearchHistoryEntry-row"
        onClick={e => props.doHistoricalSearch(e, props.searchEntry)}
      >
        <Table.Cell className="searchTemp">{props.searchEntry.searchTemp}</Table.Cell>
        <Table.Cell className="searchDate">{formattedDate}</Table.Cell>
        <Table.Cell className="formattedCities">{formattedCities}</Table.Cell>
      </Table.Row>
  );
};

module.exports = UserSearchHistoryEntry;
