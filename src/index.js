import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    //This is the only time you can directly assign state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setstate!!
        this.setState({ lat: position.coords.latitude});

        //We did not try to change the value of the state directly
        //this.state.lat = position.coords.latitude // This is bad/impossible!
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount() {
    console.log('My component was rendered to the screen');
  }

  componentDidUpdate() {
    console.log('My component was just updated!');
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
