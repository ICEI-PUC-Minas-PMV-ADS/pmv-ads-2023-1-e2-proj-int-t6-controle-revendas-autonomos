'use client'

import { classNames } from '@/utils/class-names'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LoginButton } from './LoginButton'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Estoque', href: '/estoque/produtos', current: true },
  { name: 'Perfil', href: '#', current: false },
]

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-white shadow-sm'>
      {({ open }) => (
        <>
          <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative flex justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <MobileMenuButton open={open} />
              </div>
              <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
                <Logo />
                <MenuItems />
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <LoginButton />
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <MobileMenuItems />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

const Logo = () => (
  <div className='flex items-center flex-shrink-0 contrast-[0.25]'>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      className='w-auto h-8 '
      src='https://cdn-icons-png.flaticon.com/512/4947/4947506.png'
      alt='Ícone controle de estoque'
    />
  </div>
)

const MobileMenuButton = ({ open }) => (
  <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-xl hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300/50'>
    {open ? (
      <XMarkIcon className='block w-6 h-6' />
    ) : (
      <Bars3Icon className='block w-6 h-6' />
    )}
  </Disclosure.Button>
)

const MenuItems = () => (
  <div className='relative z-0 items-center justify-center flex-1 hidden px-2 sm:flex sm:absolute sm:inset-0 sm:ml-6 sm:space-x-8'>
    {navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={classNames(
          item.current
            ? ' text-gray-900 border-amber-200'
            : ' text-gray-500 hover:border-gray-300 hover:text-gray-700 border-transparent',
          'inline-flex border-b-2 drop-shadow-sm items-center p-2 text-sm font-medium'
        )}
      >
        {item.name}
      </a>
    ))}
  </div>
)

const MobileMenuItems = () => (
  <div className='pt-2 pb-4 space-y-1'>
    {navigation.map((item) => (
      <Disclosure.Button
        key={item.name}
        as='a'
        href={item.href}
        className={classNames(
          item.current
            ? 'border-amber-1000 bg-amber-100 text-amber-700'
            : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
          'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
        )}
      >
        {item.name}
      </Disclosure.Button>
    ))}
  </div>
)
