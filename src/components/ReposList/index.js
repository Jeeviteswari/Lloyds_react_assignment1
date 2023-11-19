import {Component} from 'react'
import RepoItem from '../RepoItem'

class ReposList extends Component {
  state = {reposData: []}

  componentDidMount = () => {
    this.getReposData()
  }

  getReposData = async () => {
    const response = await fetch('https://api.github.com/users/gagandatt')
    const data = response.json()
    // console.log(data)

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      avatarUrl: eachItem.avatar_url,
      name: eachItem.name,
      bio: eachItem.bio,
      followers: eachItem.followers,
      following: eachItem.following,
    }))
    // console.log(updatedData)
    this.setState({reposData: updatedData})
  }

  render() {
    const {reposData} = this.state
    return (
      <ul className="ul-container">
        {reposData.map(item => (
          <RepoItem repoData={item} key={item.id} />
        ))}
      </ul>
    )
  }
}
export default ReposList
