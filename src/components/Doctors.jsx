// Doctors component
function Doctors() {
    const doctors = [
      { name: "Dr. Ayesha Khan", spec: "General Physician", exp: "12 years" },
      { name: "Dr. Imran Ahmed", spec: "Pediatrician", exp: "8 years" },
      { name: "Dr. Sana Malik", spec: "Gynecologist", exp: "10 years" },
      { name: "Dr. Bilal Raza", spec: "Dentist", exp: "6 years" }
    ];
  
    return (
      <section id="doctors" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Expert Doctors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">{doc.name}</h3>
                <p className="text-blue-600 font-medium">{doc.spec}</p>
                <p className="text-gray-500 text-sm mt-1">{doc.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Doctors;