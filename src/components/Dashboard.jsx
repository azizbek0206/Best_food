import { TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react"

const Dashboard = () => {
  const stats = [
    {
      title: "Bugungi buyurtmalar",
      value: "156",
      change: "+12%",
      icon: ShoppingCart,
      color: "bg-blue-500",
    },
    {
      title: "Jami mijozlar",
      value: "2,847",
      change: "+8%",
      icon: Users,
      color: "bg-green-500",
    },
    {
      title: "Bugungi daromad",
      value: "₽45,230",
      change: "+15%",
      icon: DollarSign,
      color: "bg-orange-500",
    },
    {
      title: "Mashhur taom",
      value: "Plov",
      change: "89 ta",
      icon: TrendingUp,
      color: "bg-purple-500",
    },
  ]

  const recentOrders = [
    { id: "#001", customer: "Akmal Karimov", dish: "Plov", amount: "₽850", status: "Tayyor", time: "10:30" },
    {
      id: "#002",
      customer: "Malika Tosheva",
      dish: "Lag'mon",
      amount: "₽650",
      status: "Tayyorlanmoqda",
      time: "10:25",
    },
    { id: "#003", customer: "Bobur Aliev", dish: "Manti", amount: "₽750", status: "Yetkazilmoqda", time: "10:20" },
    { id: "#004", customer: "Nigora Saidova", dish: "Shashlik", amount: "₽950", status: "Tayyor", time: "10:15" },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Tayyor":
        return "bg-green-100 text-green-800"
      case "Tayyorlanmoqda":
        return "bg-yellow-100 text-yellow-800"
      case "Yetkazilmoqda":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bugungi holat va statistika</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-green-500 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">So'nggi buyurtmalar</h2>
            <button className="text-orange-500 hover:text-orange-600 font-medium">Barchasini ko'rish</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-medium text-gray-600">ID</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600">Mijoz</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600">Taom</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600">Summa</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600">Holat</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600">Vaqt</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-2 font-medium text-gray-800">{order.id}</td>
                    <td className="py-3 px-2 text-gray-700">{order.customer}</td>
                    <td className="py-3 px-2 text-gray-700">{order.dish}</td>
                    <td className="py-3 px-2 font-medium text-gray-800">{order.amount}</td>
                    <td className="py-3 px-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-gray-600">{order.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Tezkor amallar</h2>
          <div className="space-y-4">
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all font-medium">
              Yangi taom qo'shish
            </button>
            <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium">
              Buyurtmalarni ko'rish
            </button>
            <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors font-medium">
              Hisobot yaratish
            </button>
            <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Sozlamalar
            </button>
          </div>
        </div>
      </div>

      {/* Popular Dishes Chart */}
      <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Mashhur taomlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { name: "Plov", orders: 89, percentage: 95 },
            { name: "Lag'mon", orders: 67, percentage: 75 },
            { name: "Manti", orders: 54, percentage: 60 },
            { name: "Shashlik", orders: 43, percentage: 48 },
            { name: "Somsa", orders: 38, percentage: 42 },
          ].map((dish, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-lg">{dish.orders}</span>
                </div>
                <h3 className="font-medium text-gray-800">{dish.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${dish.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
