function Contact() {
  return (
    <div className="container-fluid mt-5 px-5">
      <h1 className="text-success">Contáctanos</h1>
      <p className="mb-4">Puedes escribirnos a contacto@ejemplo.com</p>

      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" rows="4" placeholder="Tu mensaje" />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}

export default Contact
