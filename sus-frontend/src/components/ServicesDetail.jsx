import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ServicesDetail() {
  const { id } = useParams(); // Getting service ID from URL params
  const [serviceDetail, setServiceDetail] = useState(null);
  const [error, setError] = useState(null); // Add error handling

  useEffect(() => {
    fetch(`http://localhost:3333/servicedetails/getServiceDetail/${id}`) // Use the id from useParams
      .then((res) => res.json())
      .then((data) => setServiceDetail(data))
      .catch((err) => {
        console.error('Error fetching service detail:', err);
        setError('Failed to load service details.');
      });
  }, [id]);

  if (error) {
    return <p className="text-center text-red-500">{error}</p>; 
  }

  if (!serviceDetail) {
    return <p className="text-center text-gray-500">Loading service details...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
    
      <div className="w-3/4 ml-auto mr-auto mb-8">
        <img
          src={serviceDetail.serviceImage} 
          alt={serviceDetail.serviceHeading} 
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

  
      <div className="w-3/4 m-auto mb-8">
        <h2 className="text-green-600 text-3xl md:text-4xl font-semibold mb-4">
          {serviceDetail.serviceHeading} 
        </h2>
        <h1 className="text-gray-900 text-2xl md:text-3xl font-bold mb-6">
          {serviceDetail.serviceDetail} 
        </h1>
      </div>

     
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

     
      <div className="w-3/4 border-2 m-auto mb-8">
      <p 
       className=" text-gray-700 mb-12 leading-relaxed">
        {serviceDetail.serviceDescription}
      </p>
      </div>
    </div>
  );
}
