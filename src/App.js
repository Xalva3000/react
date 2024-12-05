import React from "react";
import Header from "./components/Header"
import Image from "./components/Image"
import beaty_pattern from './images/beaty-pattern.jpg'
import Writings from "./components/Writings";

  
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        greeting: "Hello!",
        comeBack: "Plz. Comeback!",
        title: "Текст в заголовок.",
        userData: "",
      }
      this.inputClick = this.inputClick.bind(this)
    }

    render() {
      return (  
          <div>
            <Header title={this.state.title} />
            <h2>{this.state.userData}</h2>
              <input id="main_input" 
              placeholder={this.state.greeting} 
              onChange={event => this.setState({userData: event.target.value})}
              onClick={this.inputClick} 
              onBlur={this.inputBlur}/>
            <Writings/>
            <p>Bye!</p>
            <Image file_name={beaty_pattern}/>
          </div>
        )
    }
    inputClick = () => {document.getElementById("main_input").placeholder = "Теперь вводите..."}
    inputBlur = () => {document.getElementById("main_input").placeholder = this.state.comeBack}
  };

  export default App;