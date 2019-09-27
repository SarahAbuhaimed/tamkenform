import React , {Component} from 'react';
import RegionSelect from 'react-region-flag-select';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

class App extends Component {

  state = {
    forms : []
  }

changeHandler = (e) => {
  let data = {...this.state}
  data[e.target.name] = e.target.value
  this.setState(data)
}
 

submitHandler = (e) => {   

  axios.post('/',{ 
  name : this.state.name,
  age : this.state.age,
  country : this.state.country,
  city : this.state.city
  })
    .then( response => {
      console.log(response)
    let data = {...this.state}
    data.persons.push(response.data.persons)
    this.setState(data)
    alert("add successfully");
    })
    .catch(err=>{
      console.log("submitHandler",err);
      
    })
}
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
    <input type="text" name="name" placeholder="your name" className="App-label" onChange={this.changeHandler}/>
    <input type="text" name="age" placeholder="your age" className="App-label" onChange={this.changeHandler}/>
  <RegionSelect 
            handleChange={this.handleChangeMethod}
            onChange={this.changeHandler}
            isState={false} 
            isPhoneCode={false} 
         />  
<br />


<Button variant="dark" onClick={this.submitHandler} >Submit</Button>
</form>

      
    </div>
 );
}
}

export default App;
