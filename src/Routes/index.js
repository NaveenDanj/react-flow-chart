import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Navigation = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );


}