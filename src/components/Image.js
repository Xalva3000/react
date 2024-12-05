import React from 'react';


class Image extends React.Component {
    render() {
        return (
            <img src={this.props.file_name}/>
        )
    }
};

export default Image;