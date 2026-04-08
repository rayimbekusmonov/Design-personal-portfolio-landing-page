import { Header } from './components/Header';

import { Hero } from './components/Hero';

import { ProjectCard } from './components/ProjectCard';

import { ServiceCard } from './components/ServiceCard';



function App() {

  const projects = [

    {

      id: 1,

      imageUrl: 'https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1NTc2OTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',

      title: 'HealthTrack App',

      tags: ['Mobile App', 'Health & Fitness'],

    },

    {

      id: 2,

      imageUrl: 'https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc3NTYwNTUxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',

      title: 'E-Commerce Platform',

      tags: ['Web Design', 'E-Commerce'],

    },

    {

      id: 3,

      imageUrl: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMHByb3RvdHlwZSUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NzU2MjA1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',

      title: 'Finance Dashboard',

      tags: ['Web Design', 'Dashboard'],

    },

    {

      id: 4,

      imageUrl: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1NTYyMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',

      title: 'Travel Booking App',

      tags: ['Mobile App', 'Travel'],

    },

    {

      id: 5,

      imageUrl: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRlc2lnbiUyMG1vZGVybnxlbnwxfHx8fDE3NzU2MjA1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',

      title: 'SaaS Platform UI',

      tags: ['Web Design', 'SaaS'],

    },

    {

      id: 6,

      imageUrl: 'https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc3NTYwNTUxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',

      title: 'Food Delivery App',

      tags: ['Mobile App', 'Food & Beverage'],

    },

  ];



  const services = [

    {

      title: 'Visual Design',

      description:

        'Creating stunning, pixel-perfect interfaces that capture brand identity and engage users through thoughtful color, typography, and layout.',

    },

    {

      title: 'Prototyping',

      description:

        'Building interactive prototypes to validate ideas, test user flows, and bring concepts to life before development begins.',

    },

    {

      title: 'User Research',

      description:

        'Conducting in-depth research and usability testing to understand user needs, behaviors, and pain points for data-driven design decisions.',

    },

  ];



  return (

    <div

      className="min-h-screen"

      style={{

        backgroundColor: '#FAFAFA',

        fontFamily: 'Inter, sans-serif',

      }}

    >

      <Header />



      {/* Hero Section */}

      <div style={{ paddingTop: '80px' }}>

        <Hero portraitUrl="https://images.unsplash.com/photo-1771072428050-1492abb58f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwd29tYW58ZW58MXx8fHwxNzc1NjIwNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />

      </div>



      {/* About Section */}

      <section id="about" className="py-24" style={{ padding: '96px 80px' }}>

        <div className="max-w-4xl">

          <h2 className="text-5xl font-bold mb-6" style={{ color: '#1A1A1A' }}>

            About Me

          </h2>

          <p

            className="text-xl leading-relaxed"

            style={{ color: '#1A1A1A', opacity: 0.7 }}

          >

            I'm a passionate UI/UX designer who believes great design is invisible.

            With a background in both visual design and psychology, I create

            experiences that not only look beautiful but also solve real problems

            for real people. My work spans mobile apps, web platforms, and design

            systems for startups and established brands alike.

          </p>

        </div>

      </section>



      {/* Projects Grid Section */}

      <section id="works" className="py-24" style={{ padding: '96px 80px' }}>

        <div className="mb-12">

          <h2 className="text-5xl font-bold mb-4" style={{ color: '#1A1A1A' }}>

            Selected Works

          </h2>

          <p className="text-xl" style={{ color: '#1A1A1A', opacity: 0.6 }}>

            A showcase of my recent design projects

          </p>

        </div>



        <div className="grid grid-cols-2 gap-8">

          {projects.map((project) => (

            <ProjectCard

              key={project.id}

              imageUrl={project.imageUrl}

              title={project.title}

              tags={project.tags}

            />

          ))}

        </div>

      </section>



      {/* Services Section */}

      <section id="services" className="py-24" style={{ padding: '96px 80px' }}>

        <div className="mb-12">

          <h2 className="text-5xl font-bold mb-4" style={{ color: '#1A1A1A' }}>

            What I Do

          </h2>

          <p className="text-xl" style={{ color: '#1A1A1A', opacity: 0.6 }}>

            My core competencies and design services

          </p>

        </div>



        <div className="grid grid-cols-3 gap-8">

          {services.map((service, index) => (

            <ServiceCard

              key={index}

              title={service.title}

              description={service.description}

            />

          ))}

        </div>

      </section>



      {/* Contact & Footer Section */}

      <section

        id="contact"

        className="py-24"

        style={{ padding: '96px 80px', backgroundColor: 'white' }}

      >

        <div className="text-center space-y-8">

          <h2 className="text-5xl font-bold" style={{ color: '#1A1A1A' }}>

            Get in Touch

          </h2>

          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#1A1A1A', opacity: 0.7 }}>

            Have a project in mind or just want to chat about design? I'd love to

            hear from you.

          </p>



          <div className="pt-4">

            <a

              href="mailto:hello@janedoe.design"

              className="inline-block px-10 py-4 rounded-xl font-medium text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"

              style={{ backgroundColor: '#3B82F6', color: 'white' }}

            >

              hello@janedoe.design

            </a>

          </div>



          {/* Social Media Placeholders */}

          <div className="flex justify-center gap-6 pt-8">

            <div

              className="w-12 h-12 rounded-full flex items-center justify-center border-2 cursor-pointer transition-all hover:scale-110"

              style={{ borderColor: '#1A1A1A' }}

              title="LinkedIn icon placeholder"

            >

              <div

                className="border-2"

                style={{

                  width: '24px',

                  height: '24px',

                  borderColor: '#3B82F6',

                  borderStyle: 'dashed',

                  borderRadius: '4px',

                }}

              />

            </div>

            <div

              className="w-12 h-12 rounded-full flex items-center justify-center border-2 cursor-pointer transition-all hover:scale-110"

              style={{ borderColor: '#1A1A1A' }}

              title="Dribbble icon placeholder"

            >

              <div

                className="border-2"

                style={{

                  width: '24px',

                  height: '24px',

                  borderColor: '#3B82F6',

                  borderStyle: 'dashed',

                  borderRadius: '4px',

                }}

              />

            </div>

            <div

              className="w-12 h-12 rounded-full flex items-center justify-center border-2 cursor-pointer transition-all hover:scale-110"

              style={{ borderColor: '#1A1A1A' }}

              title="Behance icon placeholder"

            >

              <div

                className="border-2"

                style={{

                  width: '24px',

                  height: '24px',

                  borderColor: '#3B82F6',

                  borderStyle: 'dashed',

                  borderRadius: '4px',

                }}

              />

            </div>

            <div

              className="w-12 h-12 rounded-full flex items-center justify-center border-2 cursor-pointer transition-all hover:scale-110"

              style={{ borderColor: '#1A1A1A' }}

              title="Twitter icon placeholder"

            >

              <div

                className="border-2"

                style={{

                  width: '24px',

                  height: '24px',

                  borderColor: '#3B82F6',

                  borderStyle: 'dashed',

                  borderRadius: '4px',

                }}

              />

            </div>

          </div>

        </div>



        {/* Footer */}

        <div className="mt-24 pt-8 border-t" style={{ borderColor: '#1A1A1A', opacity: 0.1 }}>

          <p className="text-center" style={{ color: '#1A1A1A', opacity: 0.5 }}>

            © 2026 Jane Doe. All rights reserved.

          </p>

        </div>

      </section>

    </div>

  );

}



export default App;

