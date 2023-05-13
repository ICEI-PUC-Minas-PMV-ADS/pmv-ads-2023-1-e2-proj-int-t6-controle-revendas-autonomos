'use client'

import { NumericFormat } from 'react-number-format'
import { useState } from 'react'

const MoneyInput = ({ label, name, defaultValue = '', erro, ...props }) => {
  const valorInicialNumerico =
    defaultValue === '' ? null : parseFloat(defaultValue.replace(',', '.'))
  const [value, setValue] = useState(valorInicialNumerico)

  return (
    <>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-800 drop-shadow-sm'
      >
        {label}
      </label>

      <div className='relative mt-2'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <span className='text-gray-500 sm:text-sm drop-shadow-sm'>R$</span>
        </div>

        <CurrencyInput
          id={name}
          label={label}
          name={name}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          erro={erro}
          {...props}
        />
      </div>

      {erro && <p className='mt-1 text-xs text-red-600'>{erro}</p>}
    </>
  )
}

const CurrencyInput = ({ label, name, value, onChange, erro, ...props }) => {
  const handleValueChange = (values) => {
    const { floatValue } = values
    onChange(floatValue)
  }

  return (
    <NumericFormat
      id={name}
      name={name}
      value={value}
      thousandSeparator='.'
      decimalSeparator=','
      decimalScale={2}
      fixedDecimalScale
      prefix=''
      allowNegative={false}
      onValueChange={handleValueChange}
      {...props}
      className={`block bg-gray-50 shadow-sm  w-full rounded-xl border-0 py-1.5 pl-9 pr-12 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-300/50 sm:text-sm sm:leading-6 invalid:border-red-600 ${
        erro ? 'ring-red-300' : ''
      }`}
    />
  )
}

export { MoneyInput }
