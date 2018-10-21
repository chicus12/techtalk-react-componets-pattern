import React, { Component } from 'react'
import classNames from 'classnames'

import './App.css'

class Tabs extends Component {
  static defaultProps = {
    tabsPlacement: 'top',
    disabled: [],
  }

  state = { activeIndex: 0 }

  selectTabIndex(activeIndex) {
    this.setState({ activeIndex })
  }

  renderTabs() {
    return this.props.data.map((tab, index) => {
      const isActive = this.state.activeIndex === index
      const isDisabled = this.props.disabled.indexOf(index) !== -1
      const style = classNames('tab', {
        active: isActive,
        disabled: isDisabled,
      })

      return (
        <div
          key={tab.label}
          onClick={isDisabled ? null : () => this.selectTabIndex(index)}
          className={style}
        >
          {tab.label}
        </div>
      )
    })
  }

  renderPanel() {
    const tab = this.props.data[this.state.activeIndex]
    return <div>{tab.content}</div>
  }

  render() {
    const tabs = <div key="tabs">{this.renderTabs()}</div>

    const panels = (
      <div key="panel" className="panels">
        {this.renderPanel()}
      </div>
    )
    return (
      <div>
        {this.props.tabsPlacement === 'top' ? [tabs, panels] : [panels, tabs]}
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
      <Tabs data={tabData} tabsPlacement="top" disabled={[1]} />
    </div>
  )
}

export default App
