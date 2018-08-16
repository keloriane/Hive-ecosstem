import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';


class TimeUntil extends Component {
    state={
        deadline: 'Sep, 16, 2018',
        days:'0',
        hours:'0',
        minutes:'0',
        seconds:'0'
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            console.log('date passed')
        } else {
            const seconds = Math.floor((time/1000)%60)
            const minutes = Math.floor((time/1000/60)%60)
            const hours = Math.floor((time/(1000*60*60))%24)
            const days = Math.floor(time/(1000*60*60*24))
            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }

    componentDidMount(){
        setInterval(()=>this.getTimeUntil(this.state.deadline),1000)
    }
  render() {
    return (
        <Slide bottom delay={1000} opacity={0}>
      <div className="countdown_wrapper">
        <div className="countdown_top">
            launch premier in
        </div>
        <div className="countdown_bottom">
            <div className="countdown_item">
                <div className="countdown_time">
                    {this.state.days}
                </div>
                <div className="countdown_tag">
                    DAYS
                </div>
               
            </div>
            <div className="countdown_item">
                <div className="countdown_time">
                {this.state.hours}
                </div>
                <div className="countdown_tag">
                    HRS
                </div>
               
            </div>
            <div className="countdown_item">
                <div className="countdown_time">
                {this.state.minutes}
                </div>
                <div className="countdown_tag">
                    MIN
                </div>
               
            </div>
            <div className="countdown_item">
                <div className="countdown_time">
                {this.state.seconds}
                </div>
                <div className="countdown_tag">
                    SEC
                </div>
               
            </div>
        </div>
        
      </div>
      </Slide>
    )
  }
}
export default TimeUntil;