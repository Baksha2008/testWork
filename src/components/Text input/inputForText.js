import React, { Component } from 'react'
import './inpurForText.css'

export class TextInput extends Component {
  render() {
    const { getNoteTextInputValue, note } = this.props
    return (
      <input className='textInput' placeholder='Введите текст заметки' type='text' value={note.text} onInput={getNoteTextInputValue} />
    )
  }
}
