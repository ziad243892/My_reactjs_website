import React, { Component } from 'react'
import './Counter.scss';

 class Counter extends Component {
   constructor() {
     super();
     this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      line: "July, 9, 2022"
    };
   }

   componentDidMount() {
    this.getTimeUntil(this.state.line);
    setInterval(() => this.getTimeUntil(this.state.line), 1000);
  }

  getTimeUntil(line){
    const time = Date.parse(line) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }

  render() {
    return (
      <section className='counter'>
      <div className='counter__date'>
      <p className='text-center'>{this.state.line} (Eid Al-Adha)</p>
      </div>
      <div className='d-flex justify-content-center'>
        <div>
          <p>{this.state.days}</p>
          <p>Days</p>
        </div>
        <div>
          <p>{this.state.hours}</p>
          <p>Hours</p>
        </div>
        <div>
          <p>{this.state.minutes}</p>
          <p>Minutes</p>
        </div>
        <div>
          <p>{this.state.seconds}</p>
          <p>Seconds</p>
        </div>
      </div>
      <div className='counter__footer text-center'><p>All Rights Reserved @ {(new Date().getFullYear())}</p></div>
      </section>
    )
  }
}

export default Counter