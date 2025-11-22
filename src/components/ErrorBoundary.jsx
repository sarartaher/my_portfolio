import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ errorInfo });
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error is caught
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-red-900 p-4">
          <h1 className="text-3xl font-bold mb-2">Something went wrong.</h1>
          <p className="mb-4">
            {this.state.error && this.state.error.toString()}
          </p>
          <details className="whitespace-pre-wrap text-sm">
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
