import * as React from 'react'
import styled from 'styled-components'

export enum Gender {
  MALE,
  FEMALE
}

interface IGreeterProps {
  name: string,
  gender: Gender
}

export default class Greeter extends React.Component<IGreeterProps> {

  public render () {
    const { name, gender } = this.props

    return (
      <GreeterStyled>
        Hello, <Name gender={gender}>{name}</Name>!
      </GreeterStyled>
    )
  }
}

interface IGreeterStyledProps {
  textColor?: string,
  textSize?: number
}

const GreeterStyled = styled.div<IGreeterStyledProps>`
  font-family: sans-serif;
  font-size: 1.25rem;
  color: orange;
  margin: 1rem;
`

interface INameProps {
  gender: Gender
}

const Name = styled.span<INameProps>`
  font-weight: bold;
  text-decoration: underline;
  color: ${({ gender }) =>
    gender === Gender.FEMALE
      ? 'blue'
      : gender === Gender.MALE
        ? 'red'
        : 'black'
  };
`
