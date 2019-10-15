import React, { Component } from 'react';

import Error from './Error';

interface IProps {}
interface IState {
  hasError: boolean,
}

export const logError = (error: any) => {
  // PSRA log the error to external service
  console.log('Heres the caught error')
  console.log(error);  
}

class ErrorBoundary extends Component<IProps,IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    logError(error);
  }

  render() {
    if (this.state.hasError) {
      return <Error />
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;