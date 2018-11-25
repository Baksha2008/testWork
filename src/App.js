import React, { Component } from 'react';
import { ButtonToAdd } from './components/Button to add/buttonToAdd';
import { ButtonToAddNote } from './components/Button to add note/buttonToAddNote';
import { SearchInput } from './components/Search input/searchInput';
import { Note } from './components/Note/note';
import { TextInput } from './components/Text input/inputForText';
import { TitleInput } from './components/Title input/inputForTitle';

import './App.css'

export class App extends Component {
  state = {
    searchInputValue: '',
    note: {
      title: '',
      text: ''
    },
    arrWithNote: [],
    searchArr: [],
    addFieldToNote: false,
    error: false,
    searchActive: false
  }
  getTitleInputValue = e => {
    this.setState({
      note: {
        title: e.target.value,
        text: this.state.note.text,
      }
    })
  }
  getNoteTextInputValue = e => {
    this.setState({
      note: {
        title: this.state.note.title,
        text: e.target.value
      }
    })
  }
  addNewNote = (e) => {
    if (!this.state.note.title) {
      this.setState({
        error: true
      })
      return
    }
    let newNote = { ...this.state.note }
    this.setState({
      arrWithNote: this.state.arrWithNote.concat(newNote),
      note: {
        title: '',
        text: ''
      },
      error: false
    })
  }
  addNote = () => {
    console.log(this.state.searchInputValue)
    this.setState({
      addFieldToNote: true
    })
  }
  deleteNote = (index) => {
    let arrWithNote = this.state.arrWithNote
    arrWithNote.splice(index, 1)
    this.setState({
      arrWithNote: this.state.arrWithNote
    })
  }
  search = (e) => {
    const value = e.target.value
    this.setState({
      searchInputValue: value,
      searchActive: true
    })
  }
  render() {
    const {
      addFieldToNote,
      arrWithNote,
      error,
      searchInputValue,
      searchActive,
      note
    } = this.state
    return (
      <div className='box'>
        <SearchInput
          search={this.search}
        />
        <div className='App'>
          <Note
            arrWithNote={arrWithNote}
            deleteNote={this.deleteNote}
            searchInputValue={searchInputValue}
            searchActive={searchActive}
          />
          <ButtonToAdd addNote={this.addNote} />
          {
            addFieldToNote ?
              <React.Fragment>
                <TitleInput
                  getTitleInputValue={this.getTitleInputValue}
                  note={note}
                  error={error}
                />
                <TextInput
                  getNoteTextInputValue={this.getNoteTextInputValue}
                  note={note}
                />
                <ButtonToAddNote addNewNote={this.addNewNote} />
              </React.Fragment> :
              null
          }
        </div>
      </div>
    );
  }
}

