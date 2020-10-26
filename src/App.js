import React from "react";
import './App.css';
import Header from "./components/Header";
import PostComponent from "./components/PostComponent"
import { Provider } from "react-redux";
import configStore from "./store"


const store = configStore()
class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <div>
          <Header />
          <PostComponent />
        </div>
        </Provider>
    )
  }
}

export default App;