/* eslint no-console:0, react/no-multi-comp:0 */

import './assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Animate from 'rc-animate';
import velocity from 'velocity-animate';


const Simple = React.createClass({
    getInitialState() {


        return {
            visible: true
        };
    },

    componentDidMount() {

    },
    handleDivClick(e){
        // http://velocityjs.org/#beginAndComplete
        velocity(e.target, {opacity: 0.5}, {
            duration: 1000,
            begin: ()=>{
                console.log('begin!')
            },
            progress: ()=>{
                console.log('progress!')
            },
            complete: ()=>{
                console.log('complete!')
            },
            delay: 3000

        })
    },
    onClick(e) {

        this.setState({
            visible: !this.state.visible
        })

    },

    render() {
        const style = {
            display: !!this.state.visible ? 'block' : 'none',
            width: 100,
            border: '1px solid red',
            padding: 10,
            margin: 10,
        };
        return (<div >
            <p>animate Simple用法： showProp控制子元素显示隐藏的动画效果</p>
            <button onClick={this.onClick}>click me to fade</button>
            <Animate transitionName="fade"
                     showProp='data-show'
                     transitionAppear
                     onEnd={()=>{console.log(2)}}>
                <div style={style}   data-show={this.state.visible}>
                    best of me
                </div>
            </Animate>
            <Animate transitionName="fade">
                {this.state.visible ? (<div key="1" style={style} ></div>) : null}

            </Animate>


            <div onClick={this.handleDivClick} style={{background: 'black', color: 'red'}}>
                Velocity
            </div>
        </div>);
    },
});
ReactDOM.render(
    <Simple/>,
    document.getElementById('__react-content'));
