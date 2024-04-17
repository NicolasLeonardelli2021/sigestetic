import React from 'react'


const NavBar = () => {
  return (
    <>
        <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
            <li>
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Roma Beauty</div>
                </a>

                <hr className="sidebar-divider my-0"/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Clientes</span>
                </a>
            </li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item">
           <a className="nav-link" href="">
               <i className="fas fa-fw fa-tachometer-alt"></i>
               <span>Turnos</span>
           </a>
       </li>
       <li className="nav-item">
           <a className="nav-link" href="">
               <i className="fas fa-fw fa-tachometer-alt"></i>
               <span>Usuarios</span>
           </a>
       </li>

       <li className="nav-item">
           <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
               <i className="fas fa-fw fa-wrench"></i>
               <span>Configuración</span>
           </a>
           <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
               <div className="bg-white py-2 collapse-inner rounded">
                   <h6 className="collapse-header">Agregar Configuracines</h6>
                   <a className="collapse-item" href="">Usuarios</a>
                   <a className="collapse-item" href="">Tratamientos</a>
                   <a className="collapse-item" href="">Zonas</a>
                   <a className="collapse-item" href="">Promos</a>
                   <a className="collapse-item" href="">Horarios</a>
               </div>
           </div>
       </li>


       <hr className="sidebar-divider"/>

        <hr className="sidebar-divider d-none d-md-block"/>

        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>



        </ul>


    </>
  )
}

export default NavBar