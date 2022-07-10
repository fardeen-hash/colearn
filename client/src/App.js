import  './app.css';
import Nav from './components/sideNav.js';
import Auth from './components/Auth';


const App = ()=>{
  return (
    <div >
        <div className='box'>
        <Nav/>
       <div className="box2">
        <h1>HELLO2</h1>
        <Auth/>
       </div>
       <div className="box3">
        <h1>HELLO3</h1>
       </div>
        </div>
    </div>
    
  )
};

export default App;
