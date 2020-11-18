import React, { useState, useEffect, useRef } from 'react'
import './DropdownMenu.css'
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg'
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg'
import { ReactComponent as CogIcon } from '../../icons/cog.svg'
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg'
import { CSSTransition } from 'react-transition-group'

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  const calcHeight = el => {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  const DropdownItem = props => (
    <a
      href='#'
      className='menu-item'
      onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
    >
      <span className='icon-button'>{props.leftIcon}</span>
      {props.children}
      <span className='icon-right'>{props.rightIcon}</span>
    </a>
  )

  return (
    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        className='menu-primary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem leftIcon={<BoltIcon />}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu='settings'
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={250}
        className='menu-secondary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu='main' />
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        classNames="menu-secondary"
        unmountOnExit
        timeout={250}
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Butterfly</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    
    </div>
  )
}

export default DropdownMenu
