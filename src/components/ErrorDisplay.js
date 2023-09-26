import React from 'react';
import { Alert, Stack } from '@mui/material';

const ErrorDisplay = ({ message }) => {
    return (
        <Stack sx={{ width: '100%', marginTop: "10vw"}} spacing={2}>
            <Alert variant="filled" severity="error" style={{fontSize: "150%" }}>
                {message}
            </Alert>
        </Stack>
    );
}

export default ErrorDisplay;