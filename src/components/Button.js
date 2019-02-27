import styled from 'styled-components';

export const Button = styled.button`
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 0.6em 0.9em;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  box-sizing: border-box;
  border: 0;
  border-radius: 0;
  outline: 0;
  transition: color 0.3s ease, background-color 0.3s ease;

  color: ${props => props.theme === 'light' ? '#fff' : '#fefefe'};
  opacity: ${props => props.theme === 'light' ? 1 : 0.7};
  background-color: ${props => props.theme === 'light' ? '#ff4081' : '#676767'};
`;
