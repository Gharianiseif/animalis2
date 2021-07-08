import React from 'react';
import {Dropdown, Nav, Navbar, Button} from "react-bootstrap";
import "./navbarb.css"; 
import {Link} from "react-router-dom";

const Navbarb = ({setMotsCle}) => {
    return (
        <Navbar  bg="link" variant="link" className="navbarb" >
                 
          <Nav className=" menu">
                   <Link to="/"> <Button className="fondBouton" variant="success" onClick={()=>setMotsCle('')}>Accueil</Button></Link>
            
                    <Dropdown>
                    <Dropdown.Toggle className="fondBouton" variant="success" id="dropdown-basic">
                        Annimeaux
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="sousMenu">
                       <Dropdown.Item className="menuItem" >  <Link className="menuItem1" to="/chien"> chien </Link></Dropdown.Item>


                      <Dropdown.Item className="menuItem">   <Link className="menuItem1" to="/chat">Chat</Link></Dropdown.Item>
                        <Dropdown.Item className="menuItem"><Link className="menuItem1" to="/poisson"> poisson</Link> </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle className="fondBouton" variant="success" id="dropdown-basic">
                            Aliments
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="sousMenu">
                            <Dropdown.Item className="menuItem"><Link className="menuItem1" to="/croquette"> croquette </Link></Dropdown.Item>
                            <Dropdown.Item className="menuItem"><Link className="menuItem1" to="/pate"> pate </Link></Dropdown.Item>
                          
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                    <Dropdown.Toggle className="fondBouton" variant="success" id="dropdown-basic">
                        Accessoires
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="sousMenu">
                            <Dropdown.Item className="menuItem"><Link className="menuItem1" to="/jouet"> jouet </Link></Dropdown.Item>
                            <Dropdown.Item className="menuItem"><Link className="menuItem1" to="/laisse">laisse </Link> </Dropdown.Item>
                          
                        </Dropdown.Menu>
                    </Dropdown>
                
                    


                    



             
         
        
        </Nav>
       
</Navbar>

        

    
    );
}

export default Navbarb;
