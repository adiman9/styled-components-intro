import React, { useState } from 'react';
import { Card, CardImage, CardFooter } from './components/Card';
import { Container } from './components/Layout.js';
import { Button } from './components/Button.js';

function App(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <Container>
      <Card
        theme={theme}
      >
        <CardImage imgsrc="https://placekitten.com/600/350" />
        <CardFooter>
          <Button
            onClick={toggleTheme}
            theme={theme}
          >
            {theme}
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default App;
