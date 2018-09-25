import * as React from 'react'
import Greeter, { Gender } from './components/landing-page/greeter'

class App extends React.Component {

  public render() {
    return (
      <div>
        <Greeter name="Jill Smith" gender={Gender.FEMALE} />
        <Greeter name="John Smith" gender={Gender.MALE} />
      </div>
    )
  }
}

export default App
