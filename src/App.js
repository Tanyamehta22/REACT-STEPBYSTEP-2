import React from "react";
import { CommonContext } from "./CommonContext";
import UpdateButton from "./component/Updatebutton";
import Footer from "./component/Footer";
class App extends React.Component {
  constructor() {
    super();

    this.updateColor = (color) => {
      this.setState({
        color: color,
      });
    };

    this.state = {
      color: "green",
      updateColor: this.updateColor,
    };
  }

  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Header />
        <CommonContext.Consumer>
          {({ color }) => (
            <h1 style={{ backgroundColor: color }}>
              <h1 className="footer">COMPLETE AND EASY EXAMPLE FOR CONTEXT API</h1>
            </h1>
          )}
        </CommonContext.Consumer>
        
        <Main />
        <UpdateButton />
        <Footer />
      </CommonContext.Provider>
    );
  }
}
export default App;
