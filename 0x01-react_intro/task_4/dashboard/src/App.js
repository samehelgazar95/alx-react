import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  const fullYear = getFullYear();
  const footerCopy = getFooterCopy(true);

  return (
    <div className="App">
      <header className="app-header">
        <img src="./logo.jpg" alt="school-dashboard" />
        <h1>School dashboard</h1>
      </header>

      <main className="app-body">
        <p>Login to access the full dashboard</p>
        <section className="form-section">
          <form className="form">
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="email" id="password" />
            </div>
            <button type="submit">OK</button>
          </form>
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Copyright {fullYear} - {footerCopy}
        </p>
      </footer>
    </div>
  );
}

export default App;
