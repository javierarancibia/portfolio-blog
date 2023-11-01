import Navbar from "@/components/Navbar"
import ContactComponent from "./ContactComponent"

export default async function Page() { 
    return (
        <Navbar>
            <ContactComponent />
        </Navbar>
    ) 
}