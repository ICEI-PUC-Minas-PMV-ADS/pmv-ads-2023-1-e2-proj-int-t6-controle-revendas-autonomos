export const PageHeader = ({ children, title, subtitle }) => (
  <header className='md:flex md:items-center md:justify-between'>
    <div className='min-w-0 flex-1'>
      {title && <PageTitle>{title}</PageTitle>}
      {subtitle && <PageSubtitle>{subtitle}</PageSubtitle>}
    </div>
    {children}
  </header>
)

const PageTitle = ({ children }) => (
  <h1 className='text-2xl font-bold leading-7 text-gray-600 drop-shadow-sm sm:truncate sm:text-3xl sm:tracking-tight'>
    {children}
  </h1>
)

const PageSubtitle = ({ children }) => (
  <p className='text-md mt-3 text-gray-500'>{children}</p>
)
