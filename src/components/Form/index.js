import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export const Form = ({ onSubmit }) => {
  const email = useInputValue('')
  const company = useInputValue('')
  const employs = useInputValue('')
  const jobTitle = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      company: company.value,
      jobTitle: jobTitle.value,
      employs: employs.value
    })
  }
  return (
    <div className='Form'>
      <form onSubmit={handleSubmit}>
        <div className='Form_Input'>
          <input {...email} placeholder='Email' />
        </div>
        <div className='Form_Input'>
          <input {...company} placeholder='Nombre de la Empresa' />
        </div>
        <div className='Form_Input'>
          <select {...jobTitle}>
            <option value=''>Seleccione su cargo</option>
            <option value='Director / Gerente de RRHH'>Director / Gerente de RRHH</option>
            <option value='Profesional / Asistente de RRHH'>Profesional / Asistente de RRHH</option>
            <option value='Gerente General / CEO'>Gerente General / CEO</option>
            <option value='Director de Otro Departamento'>Director de Otro Departamento</option>
            <option value='Consultor de RRHH'>Consultor de RRHH</option>
            <option value='Otro'>Otro</option>
          </select>
        </div>
        <div className='Form_Input'>
          <select {...employs}>
            <option value=''>Número de Empleados</option>
            <option value='1-10'>1 - 10</option>
            <option value='11-30'>11 - 30</option>
            <option value='31-50'>31 - 50</option>
            <option value='51-100'>51 - 100</option>
            <option value='101-250'>101 - 250</option>
            <option value='251-500'>251 - 500</option>
            <option value='+500'>+500</option>
          </select>
        </div>
        <div className='Form_Submit'>
          <button type='submit' className='Main-Button'>Enviar</button>
        </div>
      </form>
    </div>
  )
}
