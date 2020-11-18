import React, { useState, useEffect, useRef } from 'react'
import './NavItem.css'

const NavItem = props => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  let classes = 'icon-button'

  if (open) {
    classes = 'icon-button icon-button-active'
  }

  return (
    <li className='nav-item' ref={node}>
      <a href='#' className={classes} onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

export default NavItem
