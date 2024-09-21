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
        "Good quality bearings, pulleys, brackets, tyres, safety features, gears, and belts used",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On Time Delivery",
      description: "We deliver on time as promised during order",
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
        Key Features
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
