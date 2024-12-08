import React from "react";
import Header from "./components/Header"
import Image from "./components/Image"
import beaty_pattern from './images/beaty-pattern.jpg'
import Writings from "./components/Writings";
import AddWriting from "./components/AddWriting";
  
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        greeting: "Hello!",
        comeBack: "Plz. Comeback!",
        title: "Текст в заголовок.",
        userData: "",
        writings: [
            {
                id: 1,
                title: "letter1",
                briefDescription: "Descr1",
                paragraphs: "bvfgbsdfgbsdfgb",
            },
            {
                id: 2,
                title: "letter2",
                briefDescription: "Descr2",
                paragraphs: "bvfgbsdfgbsdfgb",
            },
        ]
      }
      this.inputClick = this.inputClick.bind(this)
      this.AddWriting = this.AddWriting.bind(this)
    }

    render() {
      return (  
          <div>
            <Header title={this.state.title} />
            <main>
              <h2>{this.state.userData}</h2>
              <input id="main_input" 
              placeholder={this.state.greeting} 
              onChange={event => this.setState({userData: event.target.value})}
              onClick={this.inputClick} 
              onBlur={this.inputBlur}/>
              <Writings writings={this.state.writings}/>
              <p>Bye!</p>
              <Image file_name={beaty_pattern}/>
            </main>
            <aside>
              <AddWriting onAdd={this.AddWriting}/>
            </aside>
          </div>
        )

    }
    inputClick = () => {document.getElementById("main_input").placeholder = "Теперь вводите..."}
    inputBlur = () => {document.getElementById("main_input").placeholder = this.state.comeBack}
    AddWriting = (writing) => {
      const id = this.state.writings.length + 1
      this.setState({writings: [...this.state.writings, {id, ...writing}]})
    }
  };

  export default App;