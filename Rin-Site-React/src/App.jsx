
import logo from './images/Rin Logo V4 (GitHub).png'
import './App.css'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { FaGithub } from 'react-icons/fa';
import Box from '@mui/material/Box';
import './index.css'

const navigation = [
  { name: 'Invite', href: '#', current: false },
  { name: 'GitHub', href: 'https://github.com/No767/Rin', current: false},
  { name: 'Docs', href: 'https://docs.rinbot.live', current: false },
  { name: 'Status Tracker', href: 'https://status.rinbot.live', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function App() {

  return (
    <div className="App">
      <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden sm:hidden h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div>
        {/* <Button variant="contained" href="https://github.com/No767/Rin" startIcon={<FaGithub />} size="large" sx={{color: 'white', height: 100, width: 250, mx: "auto"}}>Invite</Button> */}
        {/* <Button variant="contained" href="https://github.com/No767/Rin" startIcon={<FaGithub />} size="large" sx={{color: 'white', height: 100, width: 250, mx: "auto"}}>GitHub</Button> */}
    </div>
    <div>
    <p className="text-center text-white text-5xl">Rin</p>
    <p className="text-center text-white text-4xl">A Discord bot focused on obtaining data from third-party services</p>
    </div>
    </div>
  )
}

export default App
