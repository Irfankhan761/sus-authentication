import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/services/getServiceCard')  
      .then((res) => res.json())
      .then((data) => {
        
        if (Array.isArray(data)) {
          setServices(data);
        } else if (data.services) {
          setServices(data.services);
        } else {
          setServices([]);
        }
      })
      .catch((err) => {
        console.error('Error fetching services:', err);
        setServices([]);  
      });
  }, []);
  

  return (
    <div className="container mx-auto px-4 py-8">
  
    <h3 className="text-2xl font-semibold text-center text-green-600 mb-4">Services</h3>

    <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
    This is heading
    </h1>
  
    <div className="flex justify-center items-center mb-8">
      <div className="w-1/4 flex items-center">
        <div className="h-px w-full bg-gray-300"></div>
        <div className="h-3 w-3 bg-green-600 rounded-full ml-2"></div>
      </div>
      <div className="h-4 w-4 bg-green-600 rounded-full mx-2"></div>
      <div className="h-4 w-4 bg-green-600 rounded-full mx-2"></div>
      <div className="h-4 w-4 bg-green-600 rounded-full mx-2"></div>
      <div className="w-1/4 flex items-center">
        <div className="h-3 w-3 bg-green-600 rounded-full mr-2"></div>
        <div className="h-px w-full bg-gray-300"></div>
      </div>
    </div>
  

    <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eius
      minus. Reiciendis quia maxime quo ex! Tempora minus ullam molestiae, id,
      reiciendis officia, est labore vel eum error iusto maiores?
    </p>
  
 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.length > 0 ? (
        services.map((service) => (
          <div
            key={service.id}
            className="service-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.heading}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{service.heading}</h2>
              <p className="text-gray-600 mb-4">{service.paragraph}</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
  <Link to={`/servicesDetail/${service.id}`}>Read more</Link> {/* Pass the correct service ID */}
</button>

            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No services available</p>
      )}
    </div>
  </div>
  
  );
}  
