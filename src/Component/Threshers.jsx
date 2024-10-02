const threshers = [
  {
    productId: "single-fan",
    modelNumber: "SFX-1100", // Added field
    ModelName: "Single Fan Thresher",
    details: {
      description: "A basic thresher model with a single fan system, suitable for small-scale operations.",
      specification: {
        capacity: "500 kg/hour",
        power: "5 HP",
        weight: "300 kg",
        dimensions: "1500 x 800 x 1200 mm"
      },
      features: [
        "Compact design",
        "Easy to operate",
        "Low maintenance"
      ],
      relatedModels: ["DoubleFan", "SingleFanWithElevator"],
      imageUrl: "" // Updated to empty
    },
    productAds: [
      {
        title: "Single Fan Thresher - Compact and Efficient",
        description: "Ideal for small farms and efficient crop processing.",
        url: "https://example.com/single-fan-ad"
      }
    ]
  },
  {
    productId: "single-fan-with-elevator",
    modelNumber: "SFX-E1100", // Added field
    ModelName: "Single Fan Thresher with Elevator",
    details: {
      description: "A single fan thresher model equipped with an elevator for easier material handling.",
      specification: {
        capacity: "500 kg/hour",
        power: "5 HP",
        weight: "350 kg",
        dimensions: "1600 x 850 x 1250 mm"
      },
      features: [
        "Elevator for easy loading",
        "Compact and user-friendly",
        "Low power consumption"
      ],
      relatedModels: ["SingleFan", "DoubleFanWithElevator"],
      imageUrl: "" // Updated to empty
    },
    productAds: [
      {
        title: "Single Fan with Elevator - Easy Handling",
        description: "Features an elevator for easy loading and unloading.",
        url: "https://example.com/single-fan-elevator-ad"
      }
    ]
  },
  {
    productId: "double-fan",
    modelNumber: "DFX-2100", // Added field
    ModelName: "Double Fan Thresher",
    details: {
      description: "An advanced thresher model with a double fan system for enhanced performance.",
      specification: {
        capacity: "800 kg/hour",
        power: "7.5 HP",
        weight: "450 kg",
        dimensions: "1700 x 900 x 1300 mm"
      },
      features: [
        "High efficiency",
        "Robust construction",
        "Dual fan system for better separation"
      ],
      relatedModels: ["SingleFan", "ThreeFan", "DoubleFanWithElevator"],
      imageUrl: "" // Updated to empty
    },
    productAds: [
      {
        title: "Double Fan Thresher - Enhanced Performance",
        description: "Perfect for larger operations requiring greater efficiency.",
        url: "https://example.com/double-fan-ad"
      }
    ]
  },
  {
    productId: "double-fan-with-elevator",
    modelNumber: "DFX-E2100", // Added field
    ModelName: "Double Fan Thresher with Elevator",
    details: {
      description: "An enhanced thresher model with a double fan system and an elevator for efficient material handling.",
      specification: {
        capacity: "800 kg/hour",
        power: "7.5 HP",
        weight: "500 kg",
        dimensions: "1800 x 950 x 1350 mm"
      },
      features: [
        "Elevator for smooth operation",
        "Dual fan system for better separation",
        "Durable and reliable"
      ],
      relatedModels: ["DoubleFan", "ThreeFanWithElevator"],
      imageUrl: "" // Updated to empty
    },
    productAds: [
      {
        title: "Double Fan with Elevator - Efficient Handling",
        description: "Combines double fan performance with convenient elevator functionality.",
        url: "https://example.com/double-fan-elevator-ad"
      }
    ]
  },
  {
    productId: "three-fan",
    modelNumber: "TFX-3100", // Added field
    ModelName: "Three Fan Thresher",
    details: {
      description: "A high-capacity thresher model with a three fan system for large-scale operations.",
      specification: {
        capacity: "1200 kg/hour",
        power: "10 HP",
        weight: "600 kg",
        dimensions: "1900 x 1000 x 1400 mm"
      },
      features: [
        "Maximum efficiency",
        "Heavy-duty design",
        "Triple fan system for superior performance"
      ],
      relatedModels: ["DoubleFan", "ThreeFanWithElevator"],
      imageUrl: "" // Updated to empty
    },
    productAds: [
      {
        title: "Three Fan Thresher - Maximum Capacity",
        description: "Ideal for high-volume threshing with superior performance.",
        url: "https://example.com/three-fan-ad"
      }
    ]
  },
  {
    productId: "three-fan-with-elevator",
    modelNumber: "TFX-E3100", // Added field
    ModelName: "Three Fan Thresher with Elevator",
    details: {
      description: "A top-of-the-line thresher model with three fans and an elevator for maximum efficiency and ease of use.",
      specification: {
        capacity: "1200 kg/hour",
        power: "10 HP",
        weight: "650 kg",
        dimensions: "2000 x 1050 x 1450 mm"
      },
      features: [
        "Elevator for easy loading",
        "Triple fan system for superior performance",
        "Designed for heavy-duty operations"
      ],
      relatedModels: ["ThreeFan", "DoubleFanWithElevator"],
      imageUrl: "" // Updated to empty
    },
    productAds: [
      {
        title: "Three Fan with Elevator - Top Performance",
        description: "Offers superior efficiency with three fans and an integrated elevator.",
        url: "https://example.com/three-fan-elevator-ad"
      }
    ]
  }
];

const imageUrls = [
  'https://imgur.com/xIrBAGR.png',
  'https://imgur.com/Bu6SVhp.png',
  'https://imgur.com/AMlx4in.png',
  'https://imgur.com/koUbuBT.png',
  'https://imgur.com/A2q7uo6.png',
  'https://imgur.com/ofXOY8A.png',
];

// Update the imageUrl in the threshers array
threshers.forEach((thresher, index) => {
  if (index < imageUrls.length) {
    thresher.details.imageUrl = imageUrls[index];
  }
});

export default threshers;
