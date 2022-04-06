import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Button } from './../Button';

it('renders without crashing', () => {
  const button = document.createElement('button');
  ReactDOM.render(<Button />, button);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button text='Click' />);
  expect(getByTestId('button')).toHaveTextContent('Click');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Button text='Edit' />).toJSON();
  expect(tree).toMatchSnapshot();
});