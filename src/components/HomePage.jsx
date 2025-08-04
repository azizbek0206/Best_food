import Header from "./Header"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Home Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
                Best food for
                <span className="block text-orange-500">your taste</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                O'zbek milliy taomlarining eng mazali va sifatli turlarini taqdim etamiz. Har bir taom sevgi va
                g'amxo'rlik bilan tayyorlanadi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Buyurtma berish
                </button>
                <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Menyu ko'rish
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="O'zbek milliy taomlari"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                🔥
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Browse Our Menu</h2>
            <p className="text-lg text-gray-600">Bizning menyu bo'limlarimiz</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Birinchi taomlar", subtitle: "Sho'rva va mastava", icon: "🍲" },
              { title: "Ikkinchi taomlar", subtitle: "Plov va kabob", icon: "🍖" },
              { title: "Salatlar", subtitle: "Yangi va mazali", icon: "🥗" },
              { title: "Shirinliklar", subtitle: "An'anaviy desert", icon: "🍰" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="O'zbek oshpazi"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">100% Halol</p>
                    <p className="text-sm text-gray-600">Sifat kafolati</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                We provide healthy
                <span className="block text-orange-500">food for your family</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Bizning restoran 20 yildan ortiq vaqt davomida O'zbek milliy taomlarini tayyorlash sohasida faoliyat
                yuritib kelmoqda. Har bir taom an'anaviy retseptlar asosida tayyorlanadi.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Yangi va sifatli mahsulotlar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Tajribali oshpazlar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Tez va sifatli xizmat</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Biz haqimizda ko'proq
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
