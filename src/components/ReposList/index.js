import {useState} from 'react'
import ReposListItems from '../ReposListItems'
import './index.css'

const ReposList = () => {
  const [username, setUsername] = useState('')

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onSubmitBtn = event => {
    event.preventDefault()
  }

  return (
    <>
      <div className="container">
        <input
          type="text"
          className="search"
          value={username}
          onChange={onChangeUsername}
        />
        <button type="submit" className="submit-btn" onSubmit={onSubmitBtn}>
          Submit
        </button>
      </div>
      <div>
        <ul className="ul-container">
          <ReposListItems />
        </ul>
      </div>
    </>
  )
}

export default ReposList
