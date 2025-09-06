const features = [
  {
    name: "Reflective elements",
    description: "Reflective elements all over the rainwear",
    imageSrc: "/reflectors-1.jpg",
    imageAlt: "Green cardstock box containing white, beige, and brown cards.",
  },
  {
    name: "Detachable hood",
    description: "Detachable hat, suitable for any situation",
    imageSrc: "/hood.jpg",
    imageAlt: "Green cardstock box open with 50 cards inside.",
  },
  {
    name: "Pleasant to wear",
    description: "So comfortable, you won’t want to take it off.",
    imageSrc: "/fit.jpg",
    imageAlt:
      "Detail of white today card, beige next card, and brown someday card with dot grid.",
  },
  {
    name: "Elastic cuffs",
    description: "Elastic cuffs ensure a secure and comfy fit.",
    imageSrc: "/strap.jpg",
    imageAlt:
      "Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.",
  },
];

export default function ProductDetailsIndex() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl lg:text-left">
          <h2 className="text-base/7 font-semibold text-blue-900">
            About our rainwear
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            What makes us special
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
              <img
                alt={feature.imageAlt}
                src={feature.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
