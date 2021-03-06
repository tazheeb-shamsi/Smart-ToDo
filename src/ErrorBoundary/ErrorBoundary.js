import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hasError && prevState.hasError === this.state.hasError) {
      this.setState({ hasError: false, caughtMessage: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}> className="error-container">
          <h1>There is an error</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
