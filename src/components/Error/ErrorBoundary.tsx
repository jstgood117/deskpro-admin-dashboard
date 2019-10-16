import React, { Component } from 'react';

import Error from './Error';
import { appDebug } from '../../logging';

interface IProps {}
interface IState {
  hasError: boolean,
}

export const logError = (error: any) => {
  // TODO log the error to external service
  appDebug(`Admin app error: ${error}`);  
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