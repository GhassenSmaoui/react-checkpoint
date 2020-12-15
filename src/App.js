import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import natureImage from "./nature.jpg"

function App() {
  return (
    <div className="App">
      
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

 <h1 className="title red">Your name here</h1>

 <br/>

 <img src={natureImage}/>

 <br/>

 <img src="./wings.jpg"/>

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
      
      
    </div>
  );
}

export default App;
