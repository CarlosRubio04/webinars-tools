import React from 'react'

export const Form = () => {
  return (
    <div className='Form'>
      <form>
        <div className='Form_Input'>
          <input name='email' placeholder='Email' />
        </div>
        <div className='Form_Input'>
          <select name='cargo'>
            <option value='cargo'>Cargo</option>
          </select>
        </div>
      </form>
    </div>
  )
}
