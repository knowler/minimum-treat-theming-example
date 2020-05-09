import React from 'react';
import ReactDOM from 'react-dom';
import {TreatProvider} from 'react-treat';
import theme from './theme.treat.js';

import {Button} from './Button';

function App() {
  return (
    <TreatProvider theme={theme}>
      <main>
        <Button>Hello</Button>
      </main>
    </TreatProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
