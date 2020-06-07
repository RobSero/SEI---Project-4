import React from 'react'
import Sidebar from '../common/Sidebar'

class DashboardPage extends React.Component {
  state={

  }

  render(){
    return (
      
      <div className="columns no-column-margin">
        <Sidebar />
        <div className="column is-four-fifths main-section ">
            One Full Width Column
        </div>
      </div>
      
    )
  }
}

export default DashboardPage