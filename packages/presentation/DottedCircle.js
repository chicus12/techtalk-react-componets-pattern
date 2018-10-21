import React from 'react'

function DottedCircle(AnyCircle) {
  return class Circle extends React.Component {
    state = {
      smarts: 'smarts',
    }

    render() {
      return <AnyCircle {...this.state} />
    }
  }
}

function SmallCircle(props) {
  return <div>{props.smarts}</div>
}

export default DottedCircle(SmallCircle)
