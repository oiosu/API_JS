import { Component } from "../core/su";

export default class TheHeader extends Component {
    constructor() {
        super({
            tagName: 'header'
        })
    }
    render() {
        this.el.innerHTML = /* HTML */`
        <a href="#/">Main!</a> 
        <a href="#/about">About!</a>
        `
    }
}