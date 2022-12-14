import React from 'react';
import {Box, Header, Illustration} from '@adminjs/design-system'

const DashboardComponent: React.FC = () => {
    return (
        <>
            <Box bg="grey100" p="xxl"><Illustration variant="Rocket"/></Box>
            <Box flex flexGrow={1} alignItems={'center'} justifyContent={'center'}>
                <Header.H1>Auto Sto</Header.H1>
            </Box>
        </>

    );
};

export default DashboardComponent;
