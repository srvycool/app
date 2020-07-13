import React from 'react';
import { Box, Logo } from '@srvycool/ds';

export const Frame: React.FC = ({ children }) => {
  return (
    <Box
      paddingTop={['m', 'm', 'xl']}
      paddingX={['m', 'm', 'xxl']}
      marginBottom="xl"
      maxWidth="720px"
    >
      <Box marginBottom="xl">
        <Logo />
      </Box>
      {children}
    </Box>
  );
};
