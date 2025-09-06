export default function SubPageHeader({ headline, text }) {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
      <img
        alt=""
        src="/images/Swiper-1.jpg"
        className="absolute inset-0 -z-10 size-full object-cover opacity-20"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
            {headline}
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-700 sm:text-xl/8 dark:text-gray-400">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
