import React from 'react';
import Zoom from 'react-reveal/Zoom';

class ZoomExample extends React.Component {
  render() {
   
    return (
      <h1>
      {this.props.direction?
        <Zoom  left cascade>
          <div>{ this.props.name }</div>
        </Zoom>:
        <Zoom right cascade>
        <div>{ this.props.name }</div>
      </Zoom>
      }
      </h1>
      
      );
  }
}

export default ZoomExample;
 
