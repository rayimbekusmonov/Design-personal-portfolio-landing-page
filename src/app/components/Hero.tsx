interface HeroProps {
  portraitUrl: string;
}

export function Hero({ portraitUrl }: HeroProps) {
  return (
    <section className="pt-32 pb-24" style={{ padding: '0 80px' }}>
      <div className="mx-auto grid grid-cols-12 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="col-span-7 space-y-6">
          <h1
            className="text-7xl font-bold leading-tight tracking-tight"
            style={{ color: '#1A1A1A' }}
          >
            Crafting Digital
            <br />
            Experiences That
            <br />
            <span style={{ color: '#3B82F6' }}>Inspire</span>
          </h1>
          <p
            className="text-xl leading-relaxed max-w-xl"
            style={{ color: '#1A1A1A', opacity: 0.7 }}
          >
            Hi, I'm Jane Doe — a UI/UX Designer passionate about creating
            intuitive, user-centered designs that blend aesthetics with
            functionality. With 5+ years of experience, I help brands tell
            their stories through thoughtful design.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#works"
              className="px-8 py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#3B82F6', color: 'white' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-xl font-medium border-2 transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{
                borderColor: '#1A1A1A',
                color: '#1A1A1A',
                backgroundColor: 'transparent',
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Side - Portrait */}
        <div className="col-span-5 flex justify-center">
          <div
            className="relative overflow-hidden"
            style={{
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              border: '8px solid #3B82F6',
            }}
          >
            <img
              src={portraitUrl}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
