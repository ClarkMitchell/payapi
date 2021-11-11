import { render } from '@testing-library/react';

import SharedCallToAction from './SharedCallToAction';

describe('SharedCallToAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedCallToAction heading="foobar" link={{ url: '/', text: 'home' }} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
