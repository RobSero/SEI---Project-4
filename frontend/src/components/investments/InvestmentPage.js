import React from 'react'
import { getOrders, getProfile } from '../../lib/api'
import InvestmentHeader from './InvestmentHeader'
import PieChart from './PieChart'
import DoughnutChart from './DoughnutChart'
import BarChart from './BarChart'
import LoadingSpinner from '../common/LoadingSpinners'
import { loadingTimer } from '../../lib/settings'
import LineChart from './LineChart'
import { notification } from 'antd'
import { WarningOutlined } from '@ant-design/icons'



class InvestmentPage extends React.Component {
  state={
    orderData: null,
    user: null
  }

  async componentDidMount(){
    setTimeout(async()=> {
      try {
        const res = await getOrders()
        const userRes = await getProfile()
      
        this.setState({
          orderData: res.data,
          user: userRes.data
        })
        if (res.data.length === 0) {
          this.openNotification()
        }
      } catch (err){
        console.log(err)
      }
    }, loadingTimer)
  }


  openNotification = () => {
    notification.open({
      message: 'Start investing to see your analysis data',
      description:
        'Once you have begun investing in properties, you will be able to see all your investment data and how you have diversified your portfolio',
      icon: <WarningOutlined style={{ color: '#108ee9' }} />
    })
  };

  render(){
    const { orderData, user } = this.state
    if (!orderData){
      return <LoadingSpinner />
    }
    return (
      <div style={{ overflowY: 'scroll',overflowX: 'hidden', height: '90vh', position: 'relative', width: '100%' }}>
        <div className='shadow' style = {{ backgroundColor: 'white', margin: '15px 30px' }}>
          <InvestmentHeader orders={orderData} user={user} />
        </div>
        {/* Chart Section */}
        <div className='columns is-multiline' style = {{  margin: '15px 30px' }}>
          <div className='column shadow' style = {{ backgroundColor: 'white', textAlign: 'center', marginRight: '5px' }}>
            <PieChart orders={orderData}/>
          </div>
          {/* Bar Chart */}
          <div className='column shadow' style = {{ backgroundColor: 'white', textAlign: 'center', marginLeft: '5px' }}>
            <BarChart orders={orderData} />
          </div>
        </div>
        {/* Line Chart */}
        <div className='columns is-multiline' style = {{  margin: '15px 30px' }}>
          <div className='column shadow' style = {{ backgroundColor: 'white', textAlign: 'center', marginRight: '5px' }}>
            <LineChart orders={orderData}/>
          </div>
          {/* Doughnut Chart */}
          <div className='column shadow' style = {{ backgroundColor: 'white', textAlign: 'center', marginLeft: '5px' }}>
            <DoughnutChart orders={orderData}/>
          </div>
        </div>
      </div>
     
    )
  }
}

export default InvestmentPage