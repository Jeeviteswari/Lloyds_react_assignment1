import {Component} from 'react'
import './index.css'

class RepoItem extends Component {
  render() {
    const {name, bio, followers, following} = this.state
    return (
      <>
        <div className="container">
          <img src="" alt="author" />
          <div>
            <h1>{name}</h1>
            <p>{bio}</p>
            <p>{followers}</p>
            <p>{following}</p>
          </div>
        </div>
      </>
    )
  }
}
export default RepoItem
