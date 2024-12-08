import React from "react";
import Writing from "./Writing";


class Writings extends React.Component {




    render() {
        if (this.props.writings.length > 0) {
            return(<div>
                {this.props.writings.map((el) => (
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