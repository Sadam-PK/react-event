import './App.css';
import MyComponent from './Components/MyComponent';
import TextForm from './Components/TextForm';
function App() {
  return (
    <div className="App">
    <MyComponent/>
    <TextForm heading = 'Text Area'/>
    </div>
  );
}

export default App;
