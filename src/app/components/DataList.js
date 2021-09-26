import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const patientsList = [
  {
    "id" : 1,
    "name":"katherine Hughes",
    "clinic":"Clínica dental",
    "treatment":"Revisión",
    "state":"Finalizado"
  },
  {
      "id" : 2,
      "name":"Pamela Car",
      "clinic":"Clínica dental",
      "treatment":"Funda",
      "state":"Pendiente"
  },
  {
      "id" : 3,
      "name":"Patricia Smith",
      "clinic":"Clínica dental",
      "treatment":"Ortodoncia",
      "state":"Cancelado"
  },
  {
      "id" : 4,
      "name":"Terry Gray",
      "clinic":"Clínica dental",
      "treatment":"Implante",
      "state":"Finalizado"
  },
  {
      "id" : 5,
      "name":"Brittany Simmons",
      "clinic":"Clínica dental",
      "treatment":"Ortodoncia",
      "state":"Finalizado"
  },
  {
      "id" : 6,
      "name":"Peter Parker",
      "clinic":"Clínica dental",
      "treatment":"Limpieza",
      "state":"Pendiente"
  },
  {
      "id" : 7,
      "name":"Thom Jones",
      "clinic":"Clínica dental",
      "treatment":"Revisión",
      "state":"Pendiente"
  }
]

const completeTask = 'Finalizado'
const todoTask = 'Pendiente'
const cancelTask = 'Cancelado'



export default function DataList() {
  const options = [
    {
      label: "Finalizado", value: "complete",
    },
    {
      label: "Pendiente", value: "todo",
    },
    {
      label: "Cancelado", value: "cancel",
    },
  ]
  const [search, setSearch]= useState("");

  const handleChange=e=>{
    setSearch(e.target.value);
    filter(e.target.value);
  }

  const filter=(searchElement)=>{
    patientsList.filter((element) => {
      element.name.toString().toLowerCase().includes(searchElement.toLowerCase())
    });
  }

  return (
    <>
    <div className="containerInput">
      <input className="containerInput__inputSearch"
        value={search}
        placeholder="Búsqueda por Nombre"
        onChange={handleChange} />
      <button className="containerInput__button">
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </div>

    <div className="container xl-5">
        <div className="row">
          <div className="col-xl-4">

            <table width='90%'>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Clínica</th>
                  <th scope="col">Objetivo Tratamiento</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>

                {patientsList.map(item => (
                  <tr key={item.id} className="cardPatient">
                    <td className="cardPatient__name">
                      <FontAwesomeIcon icon={faUserCircle} className="cardPatient__icon"/> 
                      {item.name}
                    </td>
                    <td>{item.clinic}</td>
                    <td>{item.treatment}</td>
                    <td className={`class_0
                      ${item.state === completeTask ? 'complete' : null}
                      ${item.state === todoTask ? 'todo' : null}
                      ${item.state === cancelTask ? 'cancel' : null}
                      `}>{item.state} </td>

                    <td>
                      <select>
                        {options.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      </>
  )
}