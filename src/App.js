import React from 'react'
import logo from './logo.svg'
import './App.css'
import { messaging } from './push-notification'

class App extends React.PureComponent {
  componentDidMount () {

    messaging
      .requestPermission()
      .then(async function () {
        const token = await messaging.getToken()
        console.log('token: ', token)
      })
      .catch(function (err) {
        console.log('Unable to get permission to notify.', err)
      })
    navigator.serviceWorker.addEventListener('message', message => {
      console.log(message)
      let myMessage = message.data['firebase-messaging-msg-data'].data.message
      console.log(myMessage)
      alert(myMessage)
    })
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
