import React from 'react';

const ErrorDisplay = ({ message }) => {
    return (
        <div className="error-display">
            <p>Error: {message}</p>
        </div>
    );
};

export default ErrorDisplay;
