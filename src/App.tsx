import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App--contain-width">
        <nav>
          <span className="App--nav-group App--nav-logo">
            <a href="#Home">chunky</a>
          </span>
          <span className="App--nav-group App--nav-pages">
            <a href="#Features">Features</a>
            <a href="#Apps">Apps</a>
            <a href="#Pricing">Pricing</a>
            <a href="#Help">Help</a>
          </span>
          <span className="App--nav-group App--nav-actions">
            <a href="#Login" className="App--link-secondary">
              Login
            </a>
            <a href="#GetStarted" className="App--link-primary">
              Get Started
            </a>
          </span>
        </nav>
      </header>
      <main>
        <section className="App--intro">
          <aside>a</aside>
          <div className="App--contain-width">
            <div className="App--intro-column">
              <h1>Give your modded Minecraft experience a silk touch</h1>
              <div className="App--intro-interactive">
                <a href="#UseForFree">Use Chunky for free</a>
                <p>
                  <small>(No credit card required)</small>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
