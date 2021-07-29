import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { push } from 'connected-react-router'
import * as style from './style'

const Header = () => {
  const [state, setState] = useState(false)
  return (
    <style.Head>
      <style.Wrapper>
        <style.List>
          <style.ListItem>
            <Link to="/">a</Link>
          </style.ListItem>
          <style.ListItem>
            <Link to="/">b</Link>
          </style.ListItem>
          <style.ListItem>
            <Link to="/">c</Link>
          </style.ListItem>
        </style.List>
      </style.Wrapper>
    </style.Head>
  )
}

export default Header
