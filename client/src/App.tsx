import * as React from 'react';

import Greeter from './components/landing-page/greeter'

class App extends React.Component {

  public render() {
    return (
      <div>
        <Greeter name="John Smith" />
      </div>
    )
  }
}

export default App
