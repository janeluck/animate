/* eslint no-console:0, react/no-multi-comp:0 */

import './assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Animate from 'rc-animate';

const Simple = React.createClass({
    getInitialState() {


        return {
            visible: true
        };
    },

    componentDidMount() {

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
            <p>animate基础用法： 子元素移除时的fade效果</p>
            <button onClick={this.onClick}>click me to fade</button>
            <Animate transitionName="fade"
                     showProp='data-show'
                     onEnd={()=>{alert(2)}}>
                <div style={style}   data-show={this.state.visible}>
                    best of me
                </div>
            </Animate>
            <Animate transitionName="fade">
                {this.state.visible ? (<div key="1" style={style} data-show={this.state.visible}></div>) : null}

            </Animate>
        </div>);
    },
});
ReactDOM.render(
    <Simple/>,
    document.getElementById('__react-content'));
