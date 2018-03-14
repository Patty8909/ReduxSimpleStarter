import React, { Component } from 'react';

const App = () => (
  <div>
    <Header />
    <Section />
    <ListaHobbies />
  </div>
)

const Header = () => {
  return (
    <div>
      <h1>About Me</h1>
    </div>
  )
}

const Section = () => {
  return (
    <div>
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in viverra felis. Proin pulvinar nulla erat, at blandit sem rutrum id. Sed laoreet, est varius laoreet pulvinar, diam odio sollicitudin massa, quis posuere leo nulla id magna. Sed diam lectus, lacinia vel massa condimentum, venenatis maximus purus.</p>
      </section>
    </div>
  )
}

const hobbies = [
  { id: 1, text: 'Leer'},
  { id: 2, text: 'Ver películas'},
  { id: 3, text: 'Aprender manualidades'},
  { id: 4, text: 'Cocinar'},
]

const ListaHobbies = () => (
  <ul>
    {hobbies.map(hobbie =>
      <Todo
        key={hobbie.id}
        {...hobbie}
      />
    )}
  </ul>
)

render(
  <App />,
  document.getElementById('root')
)



