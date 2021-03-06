import {Component} from '../Component/Component'
import App from '../App'

class Link extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(e) {
    e.preventDefault()
    const {to} = this.props
    window.history.replaceState({}, null, '#/'+to)
  }
  render() {
    const {to, children} = this.props
    return App.createElement('a', {
      href: to,
      onclick: (e) => this.handleClick,
      ...this.props,
    }, ...children)
  }
}

export {Link}
