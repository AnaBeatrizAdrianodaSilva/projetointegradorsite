import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <label htmlFor="name" id='name'>Name:</label>
        <input id='name' name='name' type='text' />

        <label id='email'>Email:</label>
        <input id='email' name='email' type='email' />

        <label id='senha'>Senha:</label>
        <input id='senha' name='senha' type='password' />
      </form>
    </div>
  );
}

export default App;
