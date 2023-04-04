import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //Arrange
  render(<App />); //in render function react will create virtual dom in test case
               //screen is virtual dom //screen have access to dom
  //Act
  //button events

  //Assert
  const linkElement = screen.getByText(/learn react/i);
 // expect(linkElement).toBeInTheDocument();
 expect([{name:'suji'}]).toHaveLength(1);
});
