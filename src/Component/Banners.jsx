import {
  CheckCircle,
  Clock,
  Truck,
  Zap,
  HeadphonesIcon,
  Shield,
  Users2,
  Utensils,
  Tractor,
  Hammer,
  Cog,
} from "lucide-react";

export default function FeaturesComponent() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Warranty",
      description: "1 Year/12 Months warranty offered",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Delivery",
      description: "All India delivery is available",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Powerful Performance",
      description: "Known for its exceptional power",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Subsidy Availability",
      description: "Subsidy is available on certain models",
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Customer Service",
      description: "24/7 service provided to customers",
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      title: "Quality Materials",
      description: "High-quality iron used in construction",
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Durable Components",
      description:
        "Good quality bearings, pulleys, brackets, tyres, gears, and belts used",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On Time Delivery",
      description: "We deliver on time as promised",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Certification",
      description: "ISI, ISO, and government verified",
    },
    {
      icon: <Tractor className="h-6 w-6" />,
      title: "Tractor Compatibility",
      description: "Does not load the tractor",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-6 sm:px-8 lg:px-12 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        Why KISAN Agriculture?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg hover:shadow-lg transition-shadow duration-300 border border-green-600"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-green-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';

// const FeaturesComponent = () => {
//   const features = [
//     {
//       title: 'High Efficiency',
//       description: 'Our thresher machines are designed to deliver maximum output with minimal effort.',
//     },
//     {
//       title: 'Durable Build',
//       description: 'Built with premium materials to ensure long-lasting performance.',
//     },
//     {
//       title: 'Affordable Pricing',
//       description: 'Get the best value for your money with our competitively priced products.',
//     },
//     {
//       title: 'After-Sales Support',
//       description: 'Reliable support to assist you with any queries or issues.',
//     },
//   ];

//   return (
//     <section className="bg-gray-100 py-12 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">Why Choose Us?</h2>
//         <p className="text-gray-700 mb-10 text-base md:text-lg leading-relaxed">
//           Discover why our thresher machines are the preferred choice for farmers and agricultural professionals.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <FaCheckCircle className="text-green-600 text-3xl mb-4 mx-auto" />
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
//               <p className="text-gray-600 text-sm md:text-base leading-relaxed">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesComponent;
