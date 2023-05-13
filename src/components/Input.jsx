export const Input = ({ label, name, erro, ...props }) => (
  <>
    {label && (
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-900 drop-shadow-sm'
      >
        {label}
      </label>
    )}
    <div className='mt-2'>
      <input
        name={name}
        id={name}
        className={`block drop-shadow-sm bg-gray-50 w-full rounded-xl border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 placeholder:filter-none  focus:ring-2 focus:ring-inset focus:ring-amber-300/50 sm:text-sm sm:leading-6  ${
          erro ? 'ring-red-300' : ''
        }`}
        {...props}
      />
    </div>
    {erro && <p className='mt-1 text-xs text-red-600'>{erro}</p>}
  </>
)
