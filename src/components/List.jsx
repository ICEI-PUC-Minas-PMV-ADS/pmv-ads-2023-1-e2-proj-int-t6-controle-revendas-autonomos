export const List = ({ children }) => (
  <ul
    role='list'
    className='divide-y divide-gray-100 overflow-hidden rounded-md bg-white ring-1 ring-gray-500/5 drop-shadow-sm sm:rounded-xl'
  >
    {children}
  </ul>
)
