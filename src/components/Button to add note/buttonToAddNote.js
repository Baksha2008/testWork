import React, { Component } from 'react'
import './buttonToAddNote.css'

export class ButtonToAddNote extends Component {
  render() {
    const { addNewNote } = this.props
    return (
      <button onClick={addNewNote} className='buttonToAddNote'>Добавить запись</button>
    )
  }
}
