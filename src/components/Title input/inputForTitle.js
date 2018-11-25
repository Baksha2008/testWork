import React, { Component } from 'react'
import './inputForTitle.css'

export class TitleInput extends Component {
  render() {
    const { getTitleInputValue, error, note } = this.props
    return (
      <React.Fragment>
        <input className='titleInput' placeholder='Введите заголовок' type='text' value={note.title} onInput={getTitleInputValue} />
        {error ? <span className='errorMessage'>Заполните это поле</span> : null}
      </React.Fragment>
    )
  }
}
