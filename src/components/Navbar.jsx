'use client'

import { LoginProfileButton } from './LoginButton'
import { classNames } from '@/utils/class-names'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Estoque', href: '/estoque' },
]

const Navbar = () => {
  const currentPathname = usePathname()

  const isLoginPage = currentPathname.includes('/login')

  const activeNavMenu =
    navigation.find(
      (nav) => nav.href !== '/' && currentPathname.includes(nav.href)
    ) || navigation[0]

  return (
    <Disclosure as='nav' className='bg-white shadow-sm'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <MobileMenuButton open={open} activeNavMenu={activeNavMenu} />
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <Logo />
                <MenuItems activeNavMenu={activeNavMenu} />
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {isLoginPage || <LoginProfileButton />}
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
  <div className='flex flex-shrink-0 items-center contrast-[0.25]'>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      className='h-8 w-auto '
      src='https://cdn-icons-png.flaticon.com/512/4947/4947506.png'
      alt='Ícone controle de estoque'
    />
  </div>
)

const MobileMenuButton = ({ open }) => (
  <Disclosure.Button className='inline-flex items-center justify-center rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:ring-offset-2'>
    {open ? (
      <XMarkIcon className='block h-6 w-6' />
    ) : (
      <Bars3Icon className='block h-6 w-6' />
    )}
  </Disclosure.Button>
)

const MenuItems = ({ activeNavMenu }) => (
  <div className='relative z-0 hidden flex-1 items-center justify-center px-2 sm:absolute sm:inset-0 sm:ml-6 sm:flex sm:space-x-8'>
    {navigation.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className={classNames(
          item.href === activeNavMenu.href
            ? ' border-amber-200 text-gray-900'
            : ' border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
          'inline-flex items-center border-b-2 p-2 text-sm font-medium drop-shadow-sm'
        )}
      >
        {item.name}
      </Link>
    ))}
  </div>
)

const MobileMenuItems = () => (
  <div className='space-y-1 pb-4 pt-2'>
    {navigation.map((item) => (
      <Disclosure.Button
        key={item.name}
        as={Link}
        href={item.href}
        className={classNames(
          item.href === activeNavMenu.href
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

export { Navbar }
