import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ai-guild/">AI Guild</Link></li>
          <li><Link to="/creative-freelancers-guild/">Creative Freelancers Guild</Link></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
