import React, { Component } from 'react'
import classNames from 'classnames'

import './App.css'

class Tabs extends Component {
  static TabsList = ({ children, onSelect, activeIndex }) =>
    React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        isActive: activeIndex === index,
        onSelect: () => onSelect(index),
      })
    )

  static Tab = ({ children, isActive, onSelect, disabled }) => {
    const classes = classNames('tab', { active: isActive, disabled })
    return (
      <div className={classes} onClick={disabled ? null : onSelect}>
        {children}
      </div>
    )
  }

  static Panels = ({ children, activeIndex }) => (
    <div className="panels">
      {React.Children.toArray(children)[activeIndex]}
    </div>
  )

  static Panel = ({ children, ...props }) => {
    console.log('genious')
    return <div {...props}>{children}</div>
  }

  static defaultProps = {
    tabsOnBottom: false,
    disabled: [],
  }

  state = { activeIndex: 0 }

  selectTabIndex = activeIndex => {
    this.setState({ activeIndex })
  }

  render() {
    const { children } = this.props
    const { activeIndex } = this.state

    return React.Children.map(children, child =>
      React.cloneElement(child, {
        onSelect: this.selectTabIndex,
        activeIndex,
      })
    )
  }
}

const TabsCompose = ({ tabs }) => (
  <div>
    <Tabs>
      <Tabs.TabsList>
        {tabs.map(tab => (
          <Tabs.Tab key={tab.label}>{tab.label}</Tabs.Tab>
        ))}
      </Tabs.TabsList>
      <Tabs.Panels>
        {tabs.map(tab => (
          <Tabs.Panel key={tab.label}>{tab.content}</Tabs.Panel>
        ))}
      </Tabs.Panels>
    </Tabs>
  </div>
)

const App = () => {
  const tabData2 = [
    {
      label: 'Tacos2',
      content: <p>Tacos son deliciosos</p>,
    },
    {
      label: 'Burritos2',
      content: <p>Algunas veces un burrito es lo que realmente necesitas</p>,
    },
    {
      label: 'Coconut Korma2',
      content: <p>Puede ser la mejor opción</p>,
    },
  ]

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
      <TabsCompose tabs={tabData} />
      <TabsCompose tabs={tabData2} />
    </div>
  )
}

export default App
