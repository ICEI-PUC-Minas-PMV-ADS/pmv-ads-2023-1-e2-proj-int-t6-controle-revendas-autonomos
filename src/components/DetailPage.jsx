export const DetailPage = ({ children, title, subtitle }) => (
  <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:px-8'>
    <div className='md:flex md:items-center md:justify-between'>
      <div className='min-w-0 flex-1'>
        {title && <Title title={title} />}
        {subtitle && <Subtitle subtitle={subtitle} />}
        {children}
      </div>
    </div>
  </div>
)

const Title = ({ title }) => (
  <h2 className='text-xl font-bold leading-7 text-gray-600 drop-shadow-sm sm:truncate sm:text-2xl sm:tracking-tight'>
    {title}
  </h2>
)

const Subtitle = ({ subtitle }) => (
  <p className='mt-2 text-sm text-gray-500 sm:text-base'>{subtitle}</p>
)
