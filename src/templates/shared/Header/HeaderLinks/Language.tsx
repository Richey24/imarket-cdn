function Language(): JSX.Element {
     return (
          <>
               <div className="header-dropdown">
                    <a href="#">
                         <i className="flag-us flag"></i>ENG
                    </a>
                    <div className="header-menu">
                         <ul>
                              <li>
                                   <a href="#">
                                        <i className="flag-us flag mr-2"></i>ENG
                                   </a>
                              </li>
                              <li>
                                   <a href="#">
                                        <i className="flag-fr flag mr-2"></i>FRA
                                   </a>
                              </li>
                         </ul>
                    </div>
               </div>
               <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                    <a href="#">USD</a>
                    <div className="header-menu">
                         <ul>
                              <li>
                                   <a href="#">EUR</a>
                              </li>
                              <li>
                                   <a href="#">USD</a>
                              </li>
                         </ul>
                    </div>
               </div>
          </>
     );
}

export default Language;
