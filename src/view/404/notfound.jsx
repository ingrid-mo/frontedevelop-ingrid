import { NavLink } from "react-router-dom"
import './notfound.css'
const Notfound = () => {
  return (
   <section className="notfound">
      <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-7e72a.appspot.com/o/Slide%204_3%20-%201.png?alt=media&token=1073da1d-8425-41d7-a15b-df970da20564" alt="404 pagina no encontrada" />
      <NavLink to="/SobreMi" className="button_volver">
             Sobre mi
            </NavLink>
            </section>
  )
}

export default Notfound
