import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    //This is the only time you can directly assign state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setstate!!
        this.setState({ lat: position.coords.latitude});

        //We did not try to change the value of the state directly
        //this.state.lat = position.coords.latitude // This is bad/impossible!
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat}</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
