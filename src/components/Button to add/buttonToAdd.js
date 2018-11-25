import React, { Component } from 'react'
import './buttonToAdd.css'

export class ButtonToAdd extends Component {
  render() {
    const { addNote } = this.props
    return (
      <div className='button'>
        <button className='buttonToAdd' onClick={addNote}></button>
        <p className='nameButton'>Добавить запись</p>
      </div>
    )
  }
}
