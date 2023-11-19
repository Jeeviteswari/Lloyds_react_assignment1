import {Component} from 'react'
import ReposList from '../ReposList'

import './index.css'

class Github extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">Github Repos Page</h1>
        <ReposList />
      </div>
    )
  }
}
export default Github
