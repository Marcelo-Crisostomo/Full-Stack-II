import CTA from '../components/CTA'

function Home() {
  return (
    <div className="container-fluid mt-5 px-5">
      <h1 className="text-primary display-4 fw-bold">
        Bienvenido a React + Bootstrap 👋
      </h1>
      <p className="lead">
        Esta es tu primera clase de React. Estás creando una web con múltiples páginas,
        componentes reutilizables y diseño moderno.
      </p>
      <CTA />
    </div>
  )
}

export default Home
