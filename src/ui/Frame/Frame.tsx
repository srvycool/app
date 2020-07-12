import React from 'react';
import styled from 'styled-components';
import { Box, Logo } from '@srvycool/ds';

const StyledLogo = styled(Logo)`
  height: 36px;
`;

const StyledHeader = styled(Box)`
  border-bottom: 1px solid ${(props) => props.theme.colors.grey100};
`;

export const Frame: React.FC = ({ children }) => {
  return (
    <Box display="flex" flexDirection="row">
      <Box width={['100%', '50%']} height="100vh">
        <StyledHeader
          padding="l"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StyledLogo />
        </StyledHeader>
        <Box>{children}</Box>
      </Box>
      <Box
        display={['none', 'block']}
        width="50%"
        height="100vh"
        backgroundColor="grey100"
      />
    </Box>
  );
};
