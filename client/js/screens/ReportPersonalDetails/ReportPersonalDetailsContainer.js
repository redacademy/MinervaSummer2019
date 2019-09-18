import React from 'react';
import ReportPersonalDetails from './ReportPersonalDetails';

class ReportPersonalDetailsContainer extends React.Component {
  static navigationOptions = {
    title: 'Report Details',
  };
  render() {
    return <ReportPersonalDetails />;
  }
}

export default ReportPersonalDetailsContainer;
