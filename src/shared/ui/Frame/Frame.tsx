import React from 'react';
import { Box, Logo } from '@srvycool/ds';

export const Frame: React.FC = ({ children }) => {
  return (
    <Box padding={['m', 'm', 'xl']} maxWidth="680px">
      <Box marginBottom="xl">
        <Logo />
      </Box>
      {children}
    </Box>
  );
};
