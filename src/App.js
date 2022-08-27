import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
       <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink 
                className={({isActive})=> isActive ? 'bg-light text-dark nav-link' : 'nav-link' }
                style={({isActive}) => isActive ? {borderRadius:'5px'} : {}} 
                to="/formqlsv">FormQLSV <span className="visually-hidden">(current)</span></NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input className="form-control me-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
      <div style={{ minHeight: 800 }}>
        <Outlet />
      </div>
    </div>
  )
}

export default App;
