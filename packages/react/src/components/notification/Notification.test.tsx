import React from 'react';
import { render } from '@testing-library/react';

import Notification from './Notification';

describe('<Notification /> spec', () => {
  it('renders the component', () => {
    const { asFragment } = render(
      <Notification labelText="This is the tool tip label text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </Notification>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('adds className prop to notification classes', () => {
    const { container } = render(
      <Notification labelText="This is the tool tip label text" className="testClass">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </Notification>,
    );
    expect((container.firstChild as HTMLElement).classList.contains('testClass')).toBe(true);
  });
});
