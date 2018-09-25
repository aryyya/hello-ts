import * as React from 'react'

interface IProps {
  name: string
}

class Greeter extends React.Component<IProps> {

  public render () {
    const { name } = this.props

    return (
      <div>
        Hello, {name}!
      </div>
    )
  }
}

export default Greeter
