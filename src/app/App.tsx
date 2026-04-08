import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ServiceCard } from './components/ServiceCard';

function App() {
  const projects = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1080&auto=format&fit=crop',
      title: 'HealthTrack Mobil Ilovasi',
      tags: ['Mobil Ilova', 'Salomatlik'],
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1080&auto=format&fit=crop',
      title: 'E-Commerce Platformasi',
      tags: ['Veb Dizayn', 'Onlayn Do\'kon'],
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1080&auto=format&fit=crop',
      title: 'Moliya Boshqaruv Paneli',
      tags: ['Dashboard', 'Fintech'],
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1080&auto=format&fit=crop',
      title: 'Sayohat Band Qilish Ilovasi',
      tags: ['Mobil Ilova', 'Turizm'],
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080&auto=format&fit=crop',
      title: 'SaaS Platforma Interfeysi',
      tags: ['Veb Dizayn', 'B2B'],
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1526367790999-0150786486a9?q=80&w=1080&auto=format&fit=crop',
      title: 'Taom Yetkazish Servisi',
      tags: ['Mobil Ilova', 'Restoran'],
    },
  ];

  const services = [
    {
      title: 'Vizual Dizayn',
      description:
        'Brendingizga mos keladigan, foydalanuvchilarni o\'ziga tortadigan piksellar darajasida mukammal va chiroyli interfeyslar yaratish.',
    },
    {
      title: 'Prototiplash',
      description:
        'G\'oyalarni tekshirish va foydalanuvchi yo\'llarini sinab ko\'rish uchun interaktiv prototiplar tayyorlash.',
    },
    {
      title: 'Foydalanuvchi Tadqiqoti',
      description:
        'Ma\'lumotlarga asoslangan dizayn qarorlarini qabul qilish uchun foydalanuvchi ehtiyojlari va muammolarini chuqur o\'rganish.',
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
        <Hero portraitUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1080&auto=format&fit=crop" />
      </div>

      {/* Men Haqimda Section */}
      <section id="about" className="py-24" style={{ padding: '96px 80px' }}>
        <div className="max-w-4xl">
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
            Men Haqimda
          </h2>
          <p
            className="text-xl leading-relaxed"
            style={{ color: '#1A1A1A', opacity: 0.7 }}
          >
            Men foydalanuvchi uchun qulay va vizual jihatdan jozibador bo'lgan interfeyslar yaratuvchi UI/UX dizayneriman. 
            Mening maqsadim — shunchaki chiroyli rasm chizish emas, balki odamlarning muammolarini hal qiladigan raqamli tajribalar yaratish. 
            Startaplar va yirik brendlar uchun mobil ilovalar va veb-platformalar yaratishda tajribaga egaman.
          </p>
        </div>
      </section>

      {/* Tanlangan Ishlar Grid Section */}
      <section id="works" className="py-24" style={{ padding: '96px 80px' }}>
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
            Tanlangan Ishlar
          </h2>
          <p className="text-xl" style={{ color: '#1A1A1A', opacity: 0.6 }}>
            So'nggi vaqtda amalga oshirgan dizayn loyihalarim jamlanmasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Xizmatlar Section */}
      <section id="services" className="py-24" style={{ padding: '96px 80px' }}>
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
            Nimalar qila olaman?
          </h2>
          <p className="text-xl" style={{ color: '#1A1A1A', opacity: 0.6 }}>
            Mening asosiy yo'nalishlarim va xizmatlarim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Bog'lanish & Footer Section */}
      <section
        id="contact"
        className="py-24"
        style={{ padding: '96px 80px', backgroundColor: 'white' }}
      >
        <div className="text-center space-y-8">
          <h2 className="text-5xl font-bold" style={{ color: '#1A1A1A' }}>
            Aloqada bo'ling
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#1A1A1A', opacity: 0.7 }}>
            Sizda biror loyiha bormi yoki shunchaki dizayn haqida suhbatlashmoqchimisiz? 
            Men bilan bog'laning, albatta javob beraman.
          </p>

          <div className="pt-4">
            <a
              href="mailto:dizayner@portfolio.uz"
              className="inline-block px-10 py-4 rounded-xl font-medium text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#3B82F6', color: 'white' }}
            >
              dizayner@portfolio.uz
            </a>
          </div>

          {/* Social Media Ikonkalari uchun joylar */}
          <div className="flex justify-center gap-6 pt-8">
            {['LinkedIn', 'Telegram', 'Behance', 'Instagram'].map((social) => (
              <div
                key={social}
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 cursor-pointer transition-all hover:scale-110"
                style={{ borderColor: '#1A1A1A' }}
                title={`${social} ikonkasi`}
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
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t" style={{ borderColor: '#1A1A1A', opacity: 0.1 }}>
          <p className="text-center" style={{ color: '#1A1A1A', opacity: 0.5 }}>
            © 2026 Portfolio. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;