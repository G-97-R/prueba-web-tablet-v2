function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b0b0b',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '40px',
      }}
    >
      <div>
        <p style={{ color: '#8b5cf6', fontWeight: 700 }}>
          PRUEBA DESDE TABLET
        </p>

        <h1 style={{ fontSize: '56px', margin: '10px 0' }}>
          Mi primera web
        </h1>

        <p
          style={{
            fontSize: '20px',
            color: '#b3b3b3',
            maxWidth: '600px',
          }}
        >
          Esta página fue creada y ejecutada completamente desde una Lenovo
          Idea Tab usando React, Vite y StackBlitz.
        </p>

        <button
          style={{
            marginTop: '24px',
            padding: '14px 24px',
            borderRadius: '10px',
            border: 'none',
            background: '#8b5cf6',
            color: 'white',
            fontSize: '16px',
            fontWeight: 700,
          }}
        >
          Funciona 🚀
        </button>
      </div>
    </main>
  )
}

export default App

