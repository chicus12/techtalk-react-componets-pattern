import React, { Component } from 'react'

import * as styles from './styles'

class Tabs extends Component {
  state = { activeIndex: 0 }

  selectTabIndex(activeIndex) {
    this.setState({ activeIndex })
  }

  renderTabs() {
    return this.props.data.map((tab, index) => {
      const isActive = this.state.activeIndex === index
      const style = isActive
        ? { ...styles.tab, ...styles.activeTab }
        : styles.tab

      return (
        <div
          key={tab.label}
          style={style}
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
        <div style={styles.tabList}>{this.renderTabs()}</div>
        <div style={styles.tabPanels}>{this.renderPanel()}</div>
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
