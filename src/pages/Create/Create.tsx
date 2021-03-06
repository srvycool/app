import React from 'react';
import { Frame } from '../../shared/ui/Frame/Frame';
import { Typography, Textarea, RadioButton, Input, Button } from '@srvycool/ds';
import { useMultipleChoiceCreateMutation } from '../../generated/graphql';

export const Create: React.FC = () => {
  const [submit] = useMultipleChoiceCreateMutation({
    variables: {
      question: 'How are you?',
      answers: ['Awesome', 'Great', 'Good'],
    },
  });

  return (
    <Frame>
      <Typography as="h2" variant="heading1" color="grey900" marginBottom="m">
        What's your question?
      </Typography>
      <Textarea marginBottom="xl"></Textarea>
      <Typography as="h2" variant="heading1" color="grey900" marginBottom="m">
        How do you want to receive answers?
      </Typography>
      <RadioButton
        name="answer"
        headline="Multiple Choice"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        marginBottom="m"
        checked={true}
        onChange={() => null}
      />
      <RadioButton
        name="answer"
        headline="Textarea"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        marginBottom="xl"
        onChange={() => null}
      />
      <Typography as="h2" variant="heading1" color="grey900" marginBottom="xs">
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
      <Input label="Answer 4" marginBottom="xl" />
      <Button onClick={() => submit()}>Create</Button>
    </Frame>
  );
};
