const features = [
  {
    name: "Responsible production",
    description:
      "Our PU rainwear, with an impressive water column of 8,000 mm, is waterproof and durable, making it ideal for any weather. With two options – an unlined version and a fleece-lined version for extra comfort and warmth in cooler conditions – you’ll always find the perfect choice for your child.",
    imageSrc: "/images/Production.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Refined details",
    description:
      "The rainwear consists of a jacket with a smooth-running zipper that makes it easy to put on and take off. The dungarees feature adjustable shoulder straps and side buttons to easily adjust the width, ensuring a perfect fit throughout the day. In addition, the trousers have elasticated leg ends to keep them in place, as well as an interchangeable silicone foot strap for added safety and comfort.",
    imageSrc: "/images/Anzug.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AboutMoreDetails() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-6 pb-24 sm:px-6 sm:pb-32 lg:max-w-7xl lg:px-8">
        <div className="space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 !== 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 !== 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <img
                  alt={feature.imageAlt}
                  src={feature.imageSrc}
                  className="aspect-video w-full rounded-lg bg-gray-100 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
