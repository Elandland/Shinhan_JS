import React, { Component, createRef } from 'react'
export default class CBlinkComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        }
        this.intervalRef = createRef();
    }
    componentDidMount() {               //컴포넌트가 처음 랜더링 되고 마운트되고 한번 호출되는 함수
        this.intervalRef.current = setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, 1000)
    }
    componentWillUnmount() {                //컴포넌트가 언마운트 될때(삭제될때) 한번 호출되는 함수
        clearInterval(this.intervalRef.current);
    }
    render() {
        return (
            <div> {this.state.showText ? this.props.text : null}</div>
        )
    }
}