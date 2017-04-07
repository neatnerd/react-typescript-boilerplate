import H2 from 'components/H2';

import expect = require('expect');
import { shallow } from 'enzyme';
import React = require('react');
import ReactElement = React.ReactElement;

describe('<H2 />', () => {
  it('should render its text', () => {
    const children = 'Text' as any as ReactElement<any>;
    const renderedComponent = shallow(
      <H2>{children}</H2>,
    );
    expect(renderedComponent.contains(children));
  });
});
