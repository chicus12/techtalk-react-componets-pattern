import React from 'react'

const SmallCircle = props => (
  <div>
    <span>Color seleccionado: {props.color}</span>
    {props.colors.map(color => (
      <button key={color} type="button" onClick={() => props.setColor(color)} />
    ))}
  </div>
)

class Circle extends React.Component {
  state = {
    color: 'blue',
    colors: ['green', 'blue', 'yellow', 'red'],
  }

  setColor = color => {
    this.setState({ color })
  }

  render() {
    return <SmallCircle {...this.state} setColor={this.setColor} />
  }
}

export default Circle
