import Card from './components/Card'
import Header from './components/Header'
import Hero from './components/Hero'
import data from './data'

function App() {
  // let events = Data

  let eventComponents = data.map(item =>
      <Card 
        key={item.id}
        {...item}
      /> 
  );


  return ( 
    <div className='main-container'>
      <Header />
      <Hero />
      <section className='cards-list'> 
        {eventComponents}
      </section>
    </div>
  )
}

export default App
