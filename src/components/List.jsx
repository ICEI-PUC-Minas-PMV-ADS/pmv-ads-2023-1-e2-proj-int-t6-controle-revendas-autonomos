export const List = ({ children }) => (
  <ul
    role='list'
    className='overflow-hidden bg-white divide-y divide-gray-100 rounded-md drop-shadow-sm ring-1 ring-gray-500/5 sm:rounded-xl'
  >
    {children}
  </ul>
)
