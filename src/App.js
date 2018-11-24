import React, { Component } from 'react';

import Header from './components/headerComponents/header.js';
import Footer from './components/footerComponents/footer.js';
import Homepage from './components/pages/homePage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       
	   <Header />
	   
	 
	   
	   <Homepage />
	   
	   
	   <Footer />
	   
      </div>
    );
  }
}

export default App;
