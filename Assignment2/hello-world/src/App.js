import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/Functionclick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName = "Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName = "Wonderwoman"></Greet>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName = "Superman"/>
      <Welcome name="Diana" heroName = "Wonderwoman"/>
      <Hello></Hello>

      <Message/>

      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
    </div>
  );
}

export default App;
