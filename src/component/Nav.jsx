import { NavLink } from "react-router-dom"
const Nav = () => {
    return (
        <div className='flex flex-row gap-4'>
            <NavLink
                to="/"
            >
                Home
            </NavLink>

            <NavLink
                to="/pastes"
            >
                Paste
            </NavLink>
        </div>
    )
}

export default Nav
