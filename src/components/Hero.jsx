// Hero component
function Hero() {
    return (
      <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 w-full">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SmartMed Clinic</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Where AI Meets Healthcare</p>
          <p className="max-w-3xl mx-auto mb-10 text-lg opacity-85">
            We reduce doctor workload by 70% with AI chatbots, automated follow-ups, and smart scheduling.
          </p>
          <div className="space-x-4">
            <a href="#book" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
              Book Appointment
            </a>
            <a href="#case-study" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
              See How It Works
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;