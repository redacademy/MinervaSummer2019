import React from 'react';
import ReportDetail from './reportDetails';

class ReportDetailContainer extends React.Component {
  static navigationOptions = {
    title: 'Personal Details',
  };
  render() {
    return <ReportDetail />;
  }
}

export default ReportDetailContainer;
