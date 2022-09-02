import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"


export const Home: React.FC<any> = (...props) => {
    return (
        <Nav defaultActiveKey="/usestate" as="ul">
            <Nav.Item as="li">
                <Nav.Link as={NavLink} to="/usestate">ToDo example using useState</Nav.Link>
                <Nav.Link as={NavLink} to="/phone">Phone input</Nav.Link>
                <Nav.Link as={NavLink} to="/redux">ToDo example using redux</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}