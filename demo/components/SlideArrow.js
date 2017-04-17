/**
 * Created by dell on 2017/4/12.
 */
import React,{Component} from 'react'

export default class SlideArrow extends Component{
    render(){
        const {curIndex,arrowClick} = this.props;
        return <div className="arrow">
                    <a href="#" className="left" onClick={() => arrowClick(curIndex,"left")}>&lt;</a>
                    <a href="#" className="right" onClick={() => arrowClick(curIndex,"right")}>&gt;</a>
                </div>
    }
}