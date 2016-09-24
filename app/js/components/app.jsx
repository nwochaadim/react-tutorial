import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render(){
    return <div>
                HelloWorld to the People of Africa and Nigeria.
           </div>
  }
}

render(<App/>, document.getElementById('container'));