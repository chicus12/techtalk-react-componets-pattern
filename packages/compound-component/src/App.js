import React, { Component } from 'react'
import classNames from 'classnames'

import './App.css'

class Tabs extends Component {
  static Header = ({ children, activeIndex, onSelect }) => (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: index === activeIndex,
          onSelect: () => onSelect(index),
        })
      )}
    </div>
  )

  static Tab = ({ children, onSelect, isActive, disabled }) => {
    const style = classNames('tab', { active: isActive, disabled })
    return (
      <div className={style} onClick={disabled ? null : onSelect}>
        {children}
      </div>
    )
  }

  static Panels = ({ children, activeIndex }) => (
    <div className="panels">
      {React.Children.toArray(children)[activeIndex]}
    </div>
  )

  static Panel = ({ children }) => {
    console.log('here')
    return <div>{children}</div>
  }

  state = { activeIndex: 0 }

  selectTabIndex = activeIndex => {
    this.setState({ activeIndex })
  }

  render() {
    return (
      <div>
        {this.props.children({ ...this.state, onSelect: this.selectTabIndex })}
      </div>
    )
  }
}

const App = () => {
  const tabData = [
    {
      label: 'Tacos',
      content: <p>Tacos son deliciosos</p>,
    },
    {
      label: 'Burritos',
      content: <p>Algunas veces un burrito es lo que realmente necesitas</p>,
    },
    {
      label: 'Coconut Korma',
      content: <p>Puede ser la mejor opción</p>,
    },
  ]

  return (
    <div>
      <Tabs>
        {({ activeIndex, onSelect }) => (
          <>
            <Tabs.Header activeIndex={activeIndex} onSelect={onSelect}>
              <Tabs.Tab>Tacos</Tabs.Tab>
              <Tabs.Tab disabled>Burritos</Tabs.Tab>
              <Tabs.Tab>Coconut Korma</Tabs.Tab>
            </Tabs.Header>
            <Tabs.Panels activeIndex={activeIndex}>
              <Tabs.Panel>
                <p>Tacos son deliciosos</p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p>Algunas veces un burrito es lo que realmente necesitas</p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p>Puede ser la mejor opción</p>
              </Tabs.Panel>
            </Tabs.Panels>
          </>
        )}
      </Tabs>
    </div>
  )
}

export default App
