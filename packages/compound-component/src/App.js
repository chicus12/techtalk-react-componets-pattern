import React, { Component } from 'react'
import classNames from 'classnames'

import './App.css'

class Tabs extends Component {
  state = { activeIndex: 0 }

  selectTabIndex(activeIndex) {
    this.setState({ activeIndex })
  }

  renderTabs() {
    return this.props.data.map((tab, index) => {
      const isActive = this.state.activeIndex === index
      const style = classNames('tab', { active: isActive })

      return (
        <div
          key={tab.label}
          className={style}
          onClick={() => this.selectTabIndex(index)}
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
    return (
      <div>
        <div>{this.renderTabs()}</div>
        <div className="panels">{this.renderPanel()}</div>
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
      <Tabs data={tabData} />
    </div>
  )
}

export default App
