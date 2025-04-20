
 export function Hero() {
    return (
      <section className="bg-gradient-to-r from-brand-yellow to-brand-gray py-12 px-4 border-b border-brand-orange px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-5xl font-black text-brand-navy mb-2">India's Leading Online Homeopathy Clinic</h1>
            <p className="text-lg md:text-2xl text-brand-orange font-semibold max-w-xl">World-class homeopathic care brought to your doorstep — Book teleconsultation or visit us in-clinic!</p>
            <div className="mt-6 flex space-x-4">
              <a href="#consult" className="bg-brand-orange text-white font-bold px-6 py-3 rounded shadow-md hover:bg-brand-yellow hover:text-brand-navy transition border-2 border-brand-orange">Book Consultation</a>
              <a href="#faqs" className="bg-white text-brand-orange border-2 border-brand-orange font-bold px-6 py-3 rounded shadow hover:bg-brand-orange hover:text-white transition">How it works</a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
            <img src="https://ext.same-assets.com/4197587327/2657468550.webp" alt="Homeopathy Hero" className="w-full max-w-md rounded-3xl drop-shadow-xl" />
          </div>
        </div>
      </section>
    );
  }