import { Box, Divider } from '@mui/material';
import { LinearChart } from '../componentes/LinearChart';
import { LinearChart_1 } from '../componentes/LinearChart_1';

export const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <Box sx={{ my: 3 }}>
                <LinearChart />
            </Box>
            <Divider />
            <Box sx={{ mt: 4 }}>
                <LinearChart_1 />
            </Box>
        </>
    );
};
