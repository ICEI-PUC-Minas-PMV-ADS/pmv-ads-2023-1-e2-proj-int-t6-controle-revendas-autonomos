import Link from 'next/link'
import { forwardRef } from 'react'

const Button = forwardRef(function Button(
  { variant = 'secondary', href, fullWidth, ...props },
  ref
) {
  const styles = {
    primary:
      'text-amber-600 bg-amber-100 hover:bg-amber-200 focus-visible:outline-amber-600',
    secondary:
      'leading-6 text-gray-500 hover:bg-gray-50 focus-visible:outline-amber-600',
    destructive:
      'text-red-800 bg-red-100 hover:bg-red-200 disabled:bg-red-900 disabled:text-red-300 focus-visible:outline-red-600',
  }

  const className = `transition ease-out inline-flex justify-center w-full px-3 py-2 text-sm font-semibold rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rop-shadow-sm z-0 ${
    styles[variant]
  } ${fullWidth || 'sm:w-auto'}`

  return (
    <>
      {href ? (
        <Link ref={ref} href={href} className={className} {...props} />
      ) : (
        <button ref={ref} className={className} {...props} />
      )}
    </>
  )
})

export { Button }
