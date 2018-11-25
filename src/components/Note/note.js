import React, { Component } from 'react'
import moment from 'moment'
import './note.css'

export class Note extends Component {
  render() {
    let { arrWithNote, deleteNote, searchInputValue, searchActive } = this.props
    if (!searchInputValue) {
      searchActive = false
    }
    const filteredNote = arrWithNote.filter(elem => {
      if (elem.title.includes(searchInputValue) || elem.text.includes(searchInputValue)) {
        return elem
      }
    })
    console.log(filteredNote)
    return (

      <ul>
        {!filteredNote[0] && searchActive ? <h1 className='errorNote'>По запросу ничего нет :(</h1> : null}
        {
          !arrWithNote[0] ? <h1 className='errorNote'>Записей пока нет :(</h1> : filteredNote.map((elem, i) =>
            <li key={i} >
              <div className='listItem'>
                <div className='noteBox'>
                  <h1 className='title'>{elem.title}</h1>
                  <p className='noteText'>{elem.text}</p>
                  <p className='date'>{moment().format('ll')}</p>
                </div>
                <button className='deleteButton' onClick={() => deleteNote(i)} />
              </div>
            </li>
          )
        }
      </ul>
    )
  }
}
