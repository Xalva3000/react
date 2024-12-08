import React from "react";


class AddWriting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            briefDescription: "",
            paragraphs: ""
        }
    }

    render() {
        return (
            <form>
                <input placeholder="title" onChange={(e) => this.setState({title: e.target.value})}></input>
                <input placeholder="briefDescription" onChange={(e )=> this.setState({briefDescription: e.target.value})}></input>
                <textarea placeholder="paragraphs" onChange={(e) => this.setState({paragraphs: e.target.value})}></textarea>
                <button type="button" onClick={() => this.props.onAdd(
                    {
                        title: this.state.title,
                        briefDescription: this.state.briefDescription,
                        paragraphs: this.state.paragraphs,
                    }
                )}>Add</button>
            </form>
        )
    }
}

export default AddWriting;