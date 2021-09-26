import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'


import {
  // Selectors.
  selectcreatedPatients,
  selectName,
  selectDirecction,
  selectDentist,
  selectDistributor,
  selectSex,
  // Actions.
  createPatients,
  changeFormValue,
  deleteCard
} from '../../../features/cardSlice'


import './Patients.scss'
import DataList from '../DataList'

export function Patients() {
  const dispatch = useDispatch()

  const createdPatients = useSelector(selectcreatedPatients)
  const name = useSelector(selectName)
  const direcction = useSelector(selectDirecction)
  const dentist = useSelector(selectDentist)
  const distributor = useSelector(selectDistributor)
  const sex = useSelector(selectSex)

  const [startDate, setStartDate] = useState(new Date())

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createPatients())
  }
  function handleChangeInput(ev) {
    dispatch(
      changeFormValue({
        name: ev.target.name,
        value: ev.target.value,
      })
    )
  }
  function deleteTask(name, direcction, dentist, distributor ) {
    dispatch(deleteCard(name, direcction, dentist, distributor))
  }

  const options = [
    {
      label: "Femenino", value: "fem",
    },
    {
      label: "masculino", value: "masc",
    },  
  ]
  
  return (
    <>
    <div>
      <div className='header'>
        <p className='header__text'>Listado de pacientes</p>
      </div>
      
      <div className='headText'>
        <FontAwesomeIcon icon={faAddressCard} className='headText__icon'/>
        <h3>Listado de pacientes</h3>
        <p>Visualización de pacientes</p>
      </div>
      <div className="cardContent">
        <form onSubmit={handleSubmit} className="CardInput">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={name}
            onChange={handleChangeInput} />

          <input
            type="text"
            name="distributor"
            placeholder="Clinica"
            value={distributor}
            onChange={handleChangeInput} />

          <input
            type="text"
            name="direcction"
            placeholder="Objetivo Tratamiento"
            value={direcction}
            onChange={handleChangeInput} />

          <DatePicker
          className='DatePicker'
            name="dentist"
            // value={dentist}
            selected={startDate} 
            onChange={(date) => setStartDate(date)}
          />
          
          {/* <input
            type="text"
            name="sex"
            placeholder="Sexo"
            value={sex}
            onChange={handleChangeInput} /> */}
         
            <select className='sexSelect'>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          

          <div className="CardInput__buttons">
            <button
              type="submit"
              onClick={() => (createPatients())}
              className="CardInput__add-button"
            >
              Guardar
            </button>

          </div>
        </form>
      </div>

      <DataList />

      <form onSubmit={handleSubmit} className="PatientsInput"></form>
      {createdPatients[0] ? (
        <table width='90%'>
          <tr className="cardPatient">
            <td className="cardPatient__name"> {createdPatients[0]}</td>
            <td >{createdPatients[1]}</td>
            <td >{createdPatients[2]}</td>
            <td >{createdPatients[3]}</td>
            <button type="submit" onClick={() => (deleteTask(0, 4))}
              className="CardInput__delete-button">Eliminar</button>
          </tr>
        </table>) : null}
      {createdPatients[4] ? (
         <table width='90%'>
         <tr className="cardPatient">
           <td className="cardPatient__name"> {createdPatients[4]}</td>
           <td >{createdPatients[5]}</td>
           <td >{createdPatients[6]}</td>
           <td >{createdPatients[7]}</td>
           <button type="submit" onClick={() => (deleteTask(4, 4))}
             className="CardInput__delete-button">Eliminar</button>
         </tr>
       </table>) : null}
      {createdPatients[8] ? (
         <table width='90%'>
         <tr className="cardPatient">
           <td className="cardPatient__name"> {createdPatients[8]}</td>
           <td >{createdPatients[9]}</td>
           <td >{createdPatients[10]}</td>
           <td >{createdPatients[11]}</td>
           <button type="submit" onClick={() => (deleteTask(8, 4))}
             className="CardInput__delete-button">Eliminar</button>
         </tr>
       </table>) : null}
      {createdPatients[12] ? (
        <table width='90%'>
        <tr className="cardPatient">
          <td className="cardPatient__name"> {createdPatients[12]}</td>
          <td >{createdPatients[13]}</td>
          <td >{createdPatients[14]}</td>
          <td >{createdPatients[15]}</td>
          <button type="submit" onClick={() => (deleteTask(12, 4))}
            className="CardInput__delete-button">Eliminar</button>
        </tr>
      </table>) : null}
      {createdPatients[16] ? (
        <table width='90%'>
        <tr className="cardPatient">
          <td className="cardPatient__name"> {createdPatients[16]}</td>
          <td >{createdPatients[17]}</td>
          <td >{createdPatients[18]}</td>
          <td >{createdPatients[19]}</td>
          <button type="submit" onClick={() => (deleteTask(16, 4))}
            className="CardInput__delete-button">Eliminar</button>
        </tr>
      </table>) : null}
      {createdPatients[20] ? (
        <table width='90%'>
        <tr className="cardPatient">
          <td className="cardPatient__name"> {createdPatients[20]}</td>
          <td >{createdPatients[21]}</td>
          <td >{createdPatients[22]}</td>
          <td >{createdPatients[23]}</td>
          <button type="submit" onClick={() => (deleteTask(20, 4))}
            className="CardInput__delete-button">Eliminar</button>
        </tr>
      </table> ) : null}
      {createdPatients[24] ? (
        <table width='90%'>
        <tr className="cardPatient">
          <td className="cardPatient__name"> {createdPatients[24]}</td>
          <td >{createdPatients[25]}</td>
          <td >{createdPatients[26]}</td>
          <td >{createdPatients[27]}</td>
          <button type="submit" onClick={() => (deleteTask(24, 4))}
            className="CardInput__delete-button">Eliminar</button>
        </tr>
      </table>) : null}
      {createdPatients[28] ? (
        <table width='90%'>
        <tr className="cardPatient">
          <td className="cardPatient__name"> {createdPatients[28]}</td>
          <td >{createdPatients[29]}</td>
          <td >{createdPatients[30]}</td>
          <td >{createdPatients[31]}</td>
          <button type="submit" onClick={() => (deleteTask(28, 4))}
            className="CardInput__delete-button">Eliminar</button>
        </tr>
      </table>) : null}
      {createdPatients[32] ? (
        <table width='90%'>
        <tr className="cardPatient">
          <td className="cardPatient__name"> {createdPatients[32]}</td>
          <td >{createdPatients[33]}</td>
          <td >{createdPatients[34]}</td>
          <td >{createdPatients[35]}</td>
          <button type="submit" onClick={() => (deleteTask(32, 4))}
            className="CardInput__delete-button">Eliminar</button>
        </tr>
      </table>) : null}
      {createdPatients[36] ? (
        <table width='90%'>
        <tr className="cardPatient">
          <td className="cardPatient__name"> {createdPatients[36]}</td>
          <td >{createdPatients[37]}</td>
          <td >{createdPatients[38]}</td>
          <td >{createdPatients[39]}</td>
          <button type="submit" onClick={() => (deleteTask(36, 4))}
            className="CardInput__delete-button">Eliminar</button>
        </tr>
      </table>) : null}
      {createdPatients[40] ? (
        <table width='90%'>
        <tr className="cardPatient">
          <td className="cardPatient__name"> {createdPatients[40]}</td>
          <td >{createdPatients[41]}</td>
          <td >{createdPatients[42]}</td>
          <td >{createdPatients[43]}</td>
          <button type="submit" onClick={() => (deleteTask(40, 4))}
            className="CardInput__delete-button">Eliminar</button>
        </tr>
      </table>) : null}
    </div>
    </>
  )
}
