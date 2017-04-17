/**
 * Created by dell on 2017/4/12.
 */
import React,{Component} from 'react'
import SlideList from './SlideList.js'
import SlideCount from './SlideCount.js'
import SlideArrow from './SlideArrow.js'

export default class SlideApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgArr:['images/fj01.jpg','images/fj02.jpg','images/fj03.jpg','images/fj04.jpg'],
            curIndex: 0
        };
        this.count = this.state.imgArr.length;
        this.time = null;
        this.transition = "all 0.6s linear";
    }
    componentDidMount(){
        this.doAuto();
    }
    doAuto(){
        this.time = setInterval(() => {
            this.setImgShow(1,null);
        },3500);
    }
    setImgShow(n,type){
        let _n = 0;
        switch (type){
            case null:
                _n = this.state.curIndex + n;
                break;
            case 'circle':
                _n = n;
                break;
            case 'right':
                _n = this.state.curIndex + 1;
                break;
            case 'left':
                _n = this.state.curIndex - 1;
        }

        if(_n > this.count-1){
            _n = _n - this.count;
        }
        if(_n < 0){
            _n = this.count - 1;
        }

        this.setState({curIndex: _n})
    }
    clearAnimate(){
        clearInterval(this.time);
        this.time = null;
    }
    render(){
        const {imgArr,curIndex} = this.state;
        return <div className="box"
                    onMouseOver={this.clearAnimate.bind(this)}
                    onMouseOut={this.doAuto.bind(this)}
                >
                    <SlideList imgArr={imgArr} curIndex={curIndex} transition={this.transition}/>
                    <SlideCount length={imgArr} curIndex={curIndex} onCircleClick={this.setImgShow.bind(this)}/>
                    <SlideArrow curIndex={curIndex} arrowClick={this.setImgShow.bind(this)}/>
                </div>
    }
}