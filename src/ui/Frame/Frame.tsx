import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Logo,
  LogoSymbol,
  Typography,
  Textarea,
  RadioButton,
  Input,
  Button,
} from '@srvycool/ds';

const StyledLogo = styled(Logo)`
  height: 36px;
`;

const StyledHeader = styled(Box)`
  border-bottom: 1px solid ${(props) => props.theme.colors.grey100};
`;

const StyledFooter = styled(Box)`
  border-top: 1px solid ${(props) => props.theme.colors.grey100};
`;

export const Frame: React.FC = ({ children }) => {
  return (
    <Box display="flex" flexDirection="row">
      <Box width={['100%', '100%', '50%']} height="100vh" overflow="auto">
        <StyledHeader
          padding="l"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom="xl"
        >
          <StyledLogo />
        </StyledHeader>
        <Box paddingX={['m', 'm', 'xxl']} marginBottom="xl">
          <Typography variant="heading1" color="grey900" marginBottom="m">
            What's your question?
          </Typography>
          <Textarea marginBottom="xl"></Textarea>
          <Typography variant="heading1" color="grey900" marginBottom="m">
            How do you want to receive answers?
          </Typography>
          <RadioButton
            name="answer"
            headline="Multiple Choice"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            marginBottom="m"
            checked={true}
          />
          <RadioButton
            name="answer"
            headline="Textarea"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            marginBottom="xl"
          />
          <Typography variant="heading1" color="grey900" marginBottom="xs">
            Multiple Choice
          </Typography>
          <Typography
            variant="subtitle"
            color="grey800"
            marginBottom="m"
            display="block"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Input label="Answer 1" marginBottom="m" />
          <Input label="Answer 2" marginBottom="m" />
          <Input label="Answer 3" marginBottom="m" />
          <Input label="Answer 4" />
          {children}
        </Box>
        <StyledFooter
          padding="l"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button>Create</Button>
        </StyledFooter>
      </Box>
      <Box
        display={['none', 'none', 'flex']}
        width="50%"
        height="100vh"
        backgroundColor="grey100"
        justifyContent="center"
        alignItems="center"
        padding="xl"
      >
        <Box maxWidth="300px" width="100%">
          <LogoSymbol fill="grey200" />
        </Box>
      </Box>
    </Box>
  );
};
