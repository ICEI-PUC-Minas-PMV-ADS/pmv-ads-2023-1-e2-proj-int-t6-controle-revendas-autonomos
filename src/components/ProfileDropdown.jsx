'use client'
import { classNames } from '@/utils/class-names'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const ProfileDropdown = ({ signOut }) => (
  <Menu as='div' className='relative ml-3'>
    <div>
      <Menu.Button className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300/50'>
        <svg
          className='w-10 h-10 p-2 rounded-full stroke-gray-600 hover:stroke-gray-700 hover:bg-gray-100 hover:drop-shadow-sm'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.25}
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
          />
        </svg>
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter='transition ease-out duration-200'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      <Menu.Items className='absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white shadow-lg rounded-xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
        <Menu.Item>
          {({ active }) => (
            <a
              href='#'
              className={classNames(
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700'
              )}
            >
              Seu Perfil
            </a>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <button
              onClick={() => signOut()}
              className={classNames(
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700'
              )}
            >
              Sair
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
)
export { ProfileDropdown }
