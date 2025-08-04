"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Search, Filter } from "lucide-react"

const MenuManagement = () => {
  const [dishes, setDishes] = useState([
    {
      id: 1,
      name: "Plov",
      nameUz: "Plov",
      category: "Asosiy taomlar",
      price: 850,
      image: "/placeholder.svg?height=100&width=100",
      status: "Mavjud",
      description: "An'anaviy o'zbek plovi",
    },
    {
      id: 2,
      name: "Lag'mon",
      nameUz: "Lag'mon",
      category: "Asosiy taomlar",
      price: 650,
      image: "/placeholder.svg?height=100&width=100",
      status: "Mavjud",
      description: "Uy tayyorlangan lag'mon",
    },
    {
      id: 3,
      name: "Manti",
      nameUz: "Manti",
      category: "Asosiy taomlar",
      price: 750,
      image: "/placeholder.svg?height=100&width=100",
      status: "Tugagan",
      description: "Bug'da pishirilgan manti",
    },
    {
      id: 4,
      name: "Shashlik",
      nameUz: "Shashlik",
      category: "Grill",
      price: 950,
      image: "/placeholder.svg?height=100&width=100",
      status: "Mavjud",
      description: "Qo'y go'shtidan shashlik",
    },
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [editingDish, setEditingDish] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")

  const categories = ["Barchasi", "Asosiy taomlar", "Grill", "Salatlar", "Ichimliklar", "Shirinliklar"]

  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch =
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.nameUz.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Barchasi" || dish.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status) => {
    return status === "Mavjud" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
  }

  const AddEditModal = ({ dish, onClose, onSave }) => {
    const [formData, setFormData] = useState(
      dish || {
        name: "",
        nameUz: "",
        category: "Asosiy taomlar",
        price: "",
        description: "",
        status: "Mavjud",
      },
    )

    const handleSubmit = (e) => {
      e.preventDefault()
      onSave(formData)
      onClose()
    }

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
          <h2 className="text-xl font-bold mb-4">{dish ? "Taomni tahrirlash" : "Yangi taom qo'shish"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nomi (Inglizcha)</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nomi (O'zbekcha)</label>
              <input
                type="text"
                value={formData.nameUz}
                onChange={(e) => setFormData({ ...formData, nameUz: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategoriya</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {categories.slice(1).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Narx (₽)</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number.parseInt(e.target.value) })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tavsif</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Holat</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="Mavjud">Mavjud</option>
                <option value="Tugagan">Tugagan</option>
              </select>
            </div>
            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all font-medium"
              >
                Saqlash
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Bekor qilish
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  const handleSave = (formData) => {
    if (editingDish) {
      setDishes(dishes.map((dish) => (dish.id === editingDish.id ? { ...formData, id: editingDish.id } : dish)))
    } else {
      setDishes([...dishes, { ...formData, id: Date.now() }])
    }
  }

  const handleDelete = (id) => {
    if (confirm("Bu taomni o'chirishni xohlaysizmi?")) {
      setDishes(dishes.filter((dish) => dish.id !== id))
    }
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Menyu boshqaruvi</h1>
        <p className="text-gray-600">Taomlarni qo'shish, tahrirlash va o'chirish</p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Taom qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full md:w-64"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all font-medium flex items-center space-x-2"
          >
            <Plus size={20} />
            <span>Yangi taom</span>
          </button>
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img src={dish.image || "/placeholder.svg"} alt={dish.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-800">{dish.nameUz}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(dish.status)}`}>
                  {dish.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{dish.category}</p>
              <p className="text-gray-600 text-sm mb-3">{dish.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-orange-500">₽{dish.price}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setEditingDish(dish)
                      setShowAddModal(true)
                    }}
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(dish.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <AddEditModal
          dish={editingDish}
          onClose={() => {
            setShowAddModal(false)
            setEditingDish(null)
          }}
          onSave={handleSave}
        />
      )}
    </div>
  )
}

export default MenuManagement
