import React, { Component } from 'react';
import './App.css';
import TabComponent from './Tab';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            triggerType:"click",  //用来定义鼠标的触发类型，是click还是 mouseover
            effect:"default",         //用来定义内容切换效果,是直接切换还是淡入淡出效果
            invoke:2,                 //默认显示第几个tab
            auto:3000                //用来定义tab是否自动切换，当指定了时间间隔，就表示自动切换，且切换时间就是指定时间
        }
    }
  render() {
    return (
        <div>
            <TabComponent {...this.state}/>
        </div>
    );
  }
}

export default App;
