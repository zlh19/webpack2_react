import React,{Component} from 'react'
import './pressButton.scss';

const START_ANGLE = 270 / 360 * 2 * Math.PI
  
const requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();


export default class PressButoon extends Component{
  constructor(props){
    super(props)
    this.state={
      progress: 0
    }
  }

  componentDidMount(){
    this.refs.btn.addEventListener('touchstart', this.onTouchStart.bind(this))
    this.refs.btn.addEventListener('touchend', this.onTouchEnd.bind(this))
    this.refs.btn.addEventListener('touchcancel', this.onTouchEnd.bind(this))
    
    this.ctx = this.refs.canvas.getContext('2d');
    this.al = 0;
    this.start = 4.72;
    this.cw = this.ctx.canvas.width;
    this.ch = this.ctx.canvas.height; 
  }

  onTouchStart (ev) {
    ev.preventDefault()
    this.stop = false
    this.progress = 0
    this.startTime = Date.now()
    this.timer = requestAnimFrame(this.tick.bind(this))
  }
  onTouchEnd (ev) {
    ev.preventDefault()
    this.stop = true
    this.progress = 0
    this.draw(this.progress)
  }
  tick () {
    if (this.stop) {
      return
    }
    const nowTime = Date.now()
    // console.log(nowTime - this.startTime)
    this.progress = (nowTime - this.startTime) / 500 * 100
    
    if (this.progress > 95) {
      this.stop = true
      this.timer = null
      this.progress = 0

      // this.$emit('longpress')
      this.props.longpress()
    }
    this.draw(this.progress)
    requestAnimFrame(this.tick.bind(this))
  }
  
  draw (percent) {
    const ctx = this.ctx, cw = this.cw, ch = this.ch
    // const diff = ((this.al / 100) * Math.PI*2*10).toFixed(2);
    ctx.clearRect(0, 0, this.cw, this.ch);
    if (percent < 1) {
      return;
    }
    const angle = percent / 100 * 2 * Math.PI - 1 / 2 * Math.PI
    
    ctx.lineWidth = 5;
    ctx.fillStyle = '#FFEB3B';
    ctx.strokeStyle = "#FFEB3B";
    ctx.beginPath();
    ctx.arc(45, 45, 40, START_ANGLE, angle, false);
    ctx.stroke();
  }

  render(){
    return (
      <div className="press-button" ref="btn">
        <canvas className="canvas" ref="canvas" width="90" height="90"></canvas>
        <div className="press-button-content">
          {this.props.children}
        </div>  
      </div>
    )
  }
}

