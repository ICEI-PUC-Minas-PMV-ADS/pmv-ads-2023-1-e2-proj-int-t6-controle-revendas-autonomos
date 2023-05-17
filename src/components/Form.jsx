export const Form = ({ children, buttons, ...props }) => (
  <form {...props}>
    <div className='border-b border-gray-900/10 pb-12'>
      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        {children}
      </div>
    </div>

    {!!buttons && <FormButtons {...buttons} />}
  </form>
)

const FormButtons = ({ leftSlot, rightSlot }) => (
  <div className='flex items-center justify-end px-4 sm:px-0'>
    <div className='-mt-px flex w-0 flex-1'>{leftSlot}</div>
    <div className='mt-6 flex items-center justify-end gap-x-6'>
      {rightSlot}
    </div>
  </div>
)
