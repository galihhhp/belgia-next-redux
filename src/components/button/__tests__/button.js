import Button from 'components/button';
import { render } from '@testing-library/react';

test('Button renders correctly', () => {
  const { container } = render(<Button type="primary">Submit</Button>);

  expect(container).toMatchSnapshot();
});