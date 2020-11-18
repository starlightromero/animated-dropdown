import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as CaretIcon } from './icons/caret.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import Navbar from './Components/Navbar/Navbar'
import NavItem from './Components/NavItem/NavItem'
import DropdownMenu from './Components/DropdownMenu/DropdownMenu'

const App = () => (
  <Navbar>
    <NavItem icon={<PlusIcon />} />
    <NavItem icon={<BellIcon />} />
    <NavItem icon={<MessengerIcon />} />
    <NavItem icon={<CaretIcon />}>
      <DropdownMenu />
    </NavItem>
  </Navbar>
)

export default App
