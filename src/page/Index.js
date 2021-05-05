import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { cid: 1, title: '文章1' },
                { cid: 2, title: '文章2' },
                { cid: 3, title: '文章3' },
            ]
        };
        // 使用history实现重定向
        this.props.history.push('/home/');
    }
    render() {
        return (
            <div>
                {/* 
                标签重定向
                    <Redirect to='/home' /> 
                */}
                <h2>11</h2>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={item.cid}>
                                    <Link to={'/list/' + item.cid}> {item.title}</Link>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>

        );
    }
}

export default Index;