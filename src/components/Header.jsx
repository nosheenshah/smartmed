// Header component
function Header() {
    return (
      <header className="bg-white shadow-md sticky top-0 z-50 w-full">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">SmartMed</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition">Doctors</a>
            <a href="#book" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">Book Appointment</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;