/**
 * Created by dell on 2017/4/12.
 */
import React,{Component} from 'react'

export default class SlideList extends Component{
    render(){
        const {imgArr,curIndex,transition} = this.props;
        return <ul className="imgList">
                    {
                        imgArr.map((item,i) =>
                                <li key={i} style={{zIndex: curIndex==i ? 2 : 1,transition:transition,opacity:curIndex==i ? 1 : 0}}>
                                    <img src={item} alt="" />
                                </li>
                        )
                    }
                </ul>
    }
};