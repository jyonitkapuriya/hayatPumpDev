import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/component/navbar';
// import Hero from '@/component/hero';
// import Clients from '@/component/clients';
// import Skills from '@/component/skills';
// import Projects from '@/component/projects';
// import ContactForm from '@/component/contact-form';
import Footer from '@/component/footer';
// import LeafletMap from '@/component/map';

const LeafletMap = dynamic(() => import('@/component/map'), { ssr: false });
const ContactForm = dynamic(() => import('@/component/contact-form'), { ssr: false });
const Projects = dynamic(() => import('@/component/projects'), { ssr: false });
const Skills = dynamic(() => import('@/component/skills'), { ssr: false });
const Clients = dynamic(() => import('@/component/clients'), { ssr: false });
const Hero = dynamic(() => import('@/component/hero'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main className="no-scrollbar expert overflow-scroll">
        <div className="h-screen relative no-scrollbar overflow-scroll w-full">
          <Navbar />
          <Hero />
          <Clients />
          <Skills />
          <Projects />
          <LeafletMap />
          <ContactForm />
          <Footer />
        </div>
      </main>
    </>
  );
}
