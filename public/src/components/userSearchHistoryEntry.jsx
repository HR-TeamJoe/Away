import React from 'react';
import { Table } from 'semantic-ui-react';

const UserSearchHistoryEntry = (props) => {
  const mappedCities = props.searchEntry.cities.map((city) => city.city);
  const formattedCities = mappedCities.join(' / ');

  return (
    <Table.Row
      className="userSearchHistoryEntry-row"
      onClick={e => props.doHistoricalSearch(e, props.searchEntry)}
    >
      <Table.Cell className="searchTemp">{props.searchEntry.searchTemp}</Table.Cell>
      <Table.Cell className="searchDate">{props.searchEntry.searchDate}</Table.Cell>
      <Table.Cell className="formattedCities">{formattedCities}</Table.Cell>
    </Table.Row>
  );
};

module.exports = UserSearchHistoryEntry;
