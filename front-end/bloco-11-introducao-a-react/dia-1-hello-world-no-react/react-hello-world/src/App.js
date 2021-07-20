import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromises = ['Study', 'Study', 'Study', 'Estudo, mas em português', 'Study'];

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {compromises.map((compromise) => Task(compromise))}
        </ul>
      </header>
    </div>
  );
}

export default App;
