// import ContactForm from "@/component/contact-form"
import Footer from "@/component/footer"
import Navbar from "@/component/navbar"
import dynamic from "next/dynamic"
const ContactForm = dynamic(() => import('@/component/contact-form'), { ssr: false })


const Contect = () => {
    return (
        <div>
            <Navbar />
            <ContactForm />
            <Footer />
        </div>
    )
}
export default Contect