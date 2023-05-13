export const Form = ({ children, buttons, ...props }) => (
  <form {...props}>
    <div className='pb-12 border-b border-gray-900/10'>
      <div className='grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6'>
        {children}
      </div>
    </div>

    {!!buttons && <FormButtons {...buttons} />}
  </form>
)

const FormButtons = ({ leftSlot, rightSlot }) => (
  <div className='flex items-center justify-end px-4 sm:px-0'>
    <div className='flex flex-1 w-0 -mt-px'>{leftSlot}</div>
    <div className='flex items-center justify-end mt-6 gap-x-6'>
      {rightSlot}
    </div>
  </div>
)
