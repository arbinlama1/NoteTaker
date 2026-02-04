import { NavLink } from "react-router-dom"
const Nav = () => {
    return (
        <div className='flex flex-row gap-4 place-content-evenly mb-5'>
            <NavLink
                className={"border hover:border-0 py-2 px-4 rounded-2xl tracking-[2px] font-semibold hover:bg-sky-700"}
                to="/"
            >
                Home
            </NavLink>

            <NavLink
                className={"border hover:border-0 py-2 px-4 rounded-2xl tracking-[2px] font-semibold hover:bg-sky-700"}
                to="/pastes"
            >
                Paste
            </NavLink>
        </div>
    )
}

export default Nav
