import {Component} from 'react'

class ReposListItems extends Component {
  componentDidMount = () => {
    this.getReposData()
  }

  getReposData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = response.json()
    // console.log(data)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      avatarUrl: eachItem.avatar_url,
    }))
    console.log(updatedData)
  }

  render() {
    return (
      <ul>
        <li>Hello World</li>
      </ul>
    )
  }
}
export default ReposListItems
