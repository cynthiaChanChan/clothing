import React from 'react';

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error">
                    <div className="errorImage"></div>
                    <h2>Sorry this page is broken</h2>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

