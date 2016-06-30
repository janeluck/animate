/* eslint no-console:0, react/no-multi-comp:0 */

import './assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Animate from 'rc-animate';
import velocity from 'velocity-animate';

const style = {
    background: 'yellow',
    width: 600,
    padding: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
};
const Basic = React.createClass({
    getInitialState() {


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
    onDownClick(e) {

        this.setState({
            divs: this.state.divs.concat((<p style={style}  key={this.state.divs.length+1}>{this.state.divs.length+1}</p>))
        })

    },

    render() {
        const ani = {
            enter: (node, done)=>{
                let ok = false;

                function complete() {
                    if (!ok) {
                        ok = 1;
                        done();
                    }
                }

                node.style.display = 'none';

                velocity(node, 'slideDown', {
                    duration: 1000,
                    complete,
                });
                return {
                    stop() {
                        velocity(node, 'finish');
                        // velocity complete is async
                        complete();
                    },
                };
            },
            leave: (node, done)=>{
                let ok = false;

                function complete() {
                    if (!ok) {
                        ok = 1;
                        done();
                    }
                }

                node.style.display = 'block';

                velocity(node, 'slideUp', {
                    duration: 1000,
                    complete,
                });
                return {
                    stop() {
                        velocity(node, 'finish');
                        // velocity complete is async
                        complete();
                    },
                };
            }

        }
        return (<div >
            <p>animate基础用法： 自定义动画效果</p>
            <button onClick={this.onClick}>click me to slideUp</button>
            <button onClick={this.onDownClick}>click me to slideDown</button>
            <Animate   animation={ani}>
            {this.state.divs}
            </Animate>
        </div>);
    },
});
ReactDOM.render(
    <Basic/>,
    document.getElementById('__react-content'));
