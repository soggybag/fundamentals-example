import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Title.css';
import RandomSpace from '../RandomSpace/RandomSpace'

import CounterButtons from '../CounterButtons'
import { CounterContext } from '../CounterProvider'

function Title() {
  const [count] = useContext(CounterContext)
  return (
    <div className="Title">
      <header>
        <h1>SFPOPOS {count}</h1>
        <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>

        <div>
          <NavLink
						className="nav-link"
						activeClassName="nav-link-active"
						exact
						to="/">List</NavLink>

					<NavLink
						className="nav-link"
						activeClassName="nav-link-active"
						to="/about">About</NavLink>

          <RandomSpace />
          <CounterButtons />
        </div>

      </header>
    </div>
  )
}

export default Title
