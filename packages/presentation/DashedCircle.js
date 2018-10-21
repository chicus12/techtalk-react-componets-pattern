import React from 'react'

class Circle extends React.Component {
  state = {
    smarts: 'smarts',
  }

  render() {
    return this.props.dashedCircle(this.state)
  }
}

function SmallCircle(props) {
  return <div>{props.smarts}</div>
}

const renderProp = <Circle dashedCircle={state => <SmallCircle {...state} />} />

export default renderProp
