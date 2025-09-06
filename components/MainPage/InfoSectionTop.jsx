const features = [
  {
    name: "Waterproof clothing",
    description:
      "Our durable rainwear is not only a real eye-catcher, but also provides absolutely reliable protection even in the toughest weather conditions.",
    href: "#",
    icon: "/rain.svg",
  },
  {
    name: "Stylish clothing",
    description:
      "We place great importance on giving our rainwear a modern yet timeless look, making it suitable for any occasion.",
    href: "#",
    icon: "/styler.svg",
  },
  {
    name: "For young and old",
    description:
      "Our rainwear is available not only for children and teenagers, but also for adults who value high-quality and stylish rainwear.",
    href: "#",
    icon: "/tape.svg",
  },
];

export default function InfoSectionTop() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl lg:text-left">
          <h2 className="text-base/7 font-semibold text-blue-800">
            About our rainwear
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Modern rainwear for everyone
          </p>
        </div>
        <div className="mx-auto mt-11 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 text-blue-800 font-semibold">
                  <img
                    aria-hidden="true"
                    className="size-7 flex-none text-blue-800"
                    src={feature.icon}
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-900">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
