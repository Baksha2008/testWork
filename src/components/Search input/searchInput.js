import React, { Component } from 'react'
import './searchInput.css'

export class SearchInput extends Component {
  render() {
    const { search } = this.props
    return (
      <input className='searchInput' placeholder='Что вы ищите?' type='search' onInput={search} />
    )
  }
}
