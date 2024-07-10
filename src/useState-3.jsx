import react,{useState} from 'react';

const App = () => {

  const[image,setImage] = useState(true)

  const imageChange = () => {
    setImage(!image)
  }
  
  return(
    <section>
    <button onClick={imageChange}>{image?"Show Actress":"Show Actor"}</button>
      {
        image? <img src="http://surl.li/enebvq" alt='actor image'/ > : <img src="http://surl.li/fdoiss" alt='actress image'/ >
      }
    </section>
  )
}

export default App;