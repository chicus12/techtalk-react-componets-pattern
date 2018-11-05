import React, { Component, createContext } from 'react'
import classNames from 'classnames'

import './App.css'

const TabContext = createContext()

function TabConsumer(props) {
  return (
    <TabContext.Consumer {...props}>
      {context => {
        if (!context) {
          throw new Error(
            `Tab.Consumer cannot be rendered outside the Tab component`
          )
        }
        return props.children(context)
      }}
    </TabContext.Consumer>
  )
}

const Header = ({ children }) => <div>{children}</div>

const Tab = ({ children, disabled, tab }) => (
  <TabConsumer>
    {({ activeIndex, selectTabIndex }) => {
      const style = classNames('tab', { active: activeIndex === tab, disabled })
      return (
        <div
          className={style}
          onClick={disabled ? null : () => selectTabIndex(tab)}
        >
          {children}
        </div>
      )
    }}
  </TabConsumer>
)

const Panels = ({ children }) => (
  <TabConsumer>
    {({ activeIndex }) => (
      <div className="panels">
        {React.Children.toArray(children).filter(
          ({ props }) => props.panel === activeIndex
        )}
      </div>
    )}
  </TabConsumer>
)

const Panel = ({ children }) => <div>{children}</div>

class Tabs extends Component {
  selectTabIndex = activeIndex => {
    this.setState({ activeIndex })
  }

  state = { activeIndex: 1, selectTabIndex: this.selectTabIndex }

  render() {
    return (
      <TabContext.Provider value={this.state}>
        {this.props.children}
      </TabContext.Provider>
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
        <Header>
          <Tab tab={1}>Tacos</Tab>
          <Tab tab={2}>Burritos</Tab>
          <Tab tab={3}>Coconut Korma</Tab>
        </Header>
        <Panels>
          <Panel panel={1}>
            <p>Tacos son deliciosos</p>
          </Panel>
          <Panel panel={2}>
            <p>Algunas veces un burrito es lo que realmente necesitas</p>
          </Panel>
          <Panel panel={3}>
            <p>Puede ser la mejor opción</p>
          </Panel>
        </Panels>
      </Tabs>
    </div>
  )
}

export default App
