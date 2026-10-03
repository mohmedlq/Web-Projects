import {Routes, Route } from "react-router-dom";
import Home from "../Home";
import ContactsList from "../Components/ContactsList";
import AddUpdateContact from "../Components/AddUpdateContact";
import NavBar from "../NavBar";
import ContactCard from "../Components/ContactCard";
export default function Router()
{
    return(
        <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contacts" element={<ContactsList/>}/>
            <Route path="/addNew" element={<AddUpdateContact/>}/>
            <Route path="/contacts/:id/edit" element={<AddUpdateContact />} />
            <Route path="/contacts/:id" element={<ContactCard/>}/>
        </Routes>
        </>
        
    )
}