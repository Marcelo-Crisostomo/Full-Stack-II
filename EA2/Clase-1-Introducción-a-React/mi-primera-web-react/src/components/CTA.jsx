import { Link } from 'react-router-dom'

function CTA() {
  return (
    <div className="text-center my-5">
      <h2 className="fw-semibold">¿Listo para contactarnos?</h2>
      <p className="text-muted">Haz clic abajo y empieza tu camino con React</p>
      <Link className="btn btn-warning text-dark px-4 py-2 mt-3" to="/contacto">
        Ir a Contacto
      </Link>
    </div>
  )
}

export default CTA
