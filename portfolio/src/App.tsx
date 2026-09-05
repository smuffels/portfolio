

function App() {

  return (
     <div className="flex flex-col min-h-screen">
      <header>Header</header>
      <main className="flex-1 flex flex-col">
        <section className="flex-1 flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">Bereich 1 hier</section>
        <section className="flex-1 flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">Bereich 2 hier</section>
        <section className="flex-1 flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">Bereich 3 hier</section>
      </main>
      
      <footer>Footer</footer>
    </div>
  );
}

export default App
