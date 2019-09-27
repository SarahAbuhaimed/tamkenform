import React , {Component} from 'react';
import RegionSelect from 'react-region-flag-select';
import './App.css';
import Button from 'react-bootstrap/Button';


class App extends Component {

 
  handleChangeMethod=(data)=>{
    console.log('Result',data);
}
render() {
    return (
        
    <div className="App">
       
      <header className="header">
       <h3>Sarah Abuhaimed</h3>
        
        </header>
       
        <form className="App-body" >
        <h2>
         Tamken Form
        </h2>
    <input type="text" name="name" placeholder="your name" className="App-label"/>
    <input type="text" name="age" placeholder="your age" className="App-label"/>
  <RegionSelect 
            handleChange={this.handleChangeMethod}
            isState={false} 
            isPhoneCode={false} 
         />  
<br />


<Button variant="dark">Submit</Button>
</form>

      
    </div>
 );
}
}

export default App;
