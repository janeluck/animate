/* eslint no-console:0, react/no-multi-comp:0 */

import './assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Animate from 'rc-animate';

const Basic = React.createClass({
    getInitialState() {

        const style = {
            background: 'yellow',
            width: 600,
            padding: 20,
            marginLeft: 'auto',
            marginRight: 'auto'
        };
        return {
            divs: [(<p style={style}  key={1}>1</p>),
                (<p style={style} key={2}>2</p>),
                (<p style={style} key={3}>3</p>),
                (<p style={style} key={4}>4</p>),
                (<p style={style} key={5}>5</p>),
                (<p style={style}  key={6}>6</p>)]
        };
    },

    componentDidMount() {

    },
    onClick(e) {

        this.setState({
            divs: this.state.divs.slice(0, this.state.divs.length - 1)
        })

    },

    render() {

        return (<div >
            <p>animate基础用法： 子元素移除时的fade效果</p>
            <button onClick={this.onClick}>click me to fade</button>
            <Animate transitionName="fade">
            {this.state.divs}
            </Animate>
        </div>);
    },
});
ReactDOM.render(
    <Basic/>,
    document.getElementById('__react-content'));
