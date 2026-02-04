import { Routes, Route } from 'react-router-dom'
import Home from '../component/Home'
import ViewPage from '../component/ViewPage'
import Page from '../component/Page'

const MyRouter = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/pastes"} element={<Page />} />
                <Route path={"/pastes/pasteId"} element={<ViewPage />} />
            </Routes>
        </>
    )
}

export default MyRouter
