import { FaTractor } from "react-icons/fa" // Agriculture-related icon

const Component=()=> {
  const features = [
    "Large Sieve Area for Optimum Grain Cleaning.",
    "Faster Unloading System.",
    "High Ground Clearance.",
    "Good working in the light Wet and Soft Fields.",
    "Long Length thresher rotor for complete threshing.",
    "Best quality V-belts, Bearings and accessories used.",
    "Can operate with any tractor above 39 HP.",
    "Heavy Duty Axles.",
    "Highly Fuel Efficient.",
    "Superior Chain Drives.",
  ]

  return (
    <div className="container mx-auto px-4 py-8 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-green-600 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <FaTractor className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
              <p className="text-base text-green-900">{feature}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default  Component;