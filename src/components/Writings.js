import React from "react";
import Writing from "./Writing";


class Writings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            writings: [
                {
                    id: 1,
                    title: "letter1",
                    briefDescription: "Descr1",
                    paragraphs: [1,2,3]
                },
                {
                    id: 2,
                    title: "letter2",
                    briefDescription: "Descr2",
                    paragraphs: [1,2,3]
                },
            ]
        }
    }



    render() {
        if (this.state.writings.length > 0) {
            return(<div>
                {this.state.writings.map((el) => (
                <Writing key={el.id} writing={el}/>
            ))}
            </div>)
            
        } else {
            return (<div>
                <h3>No writings yet.</h3>
            </div>
            )
        }
    }
}

export default Writings