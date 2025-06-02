import { Star, ShoppingCart, Heart, Eye, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Classic White Oxford Shirt",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 324,
    purchases: 1250,
    image: "/placeholder.svg?height=300&width=250",
    badge: "Bestseller",
    category: "Formals",
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    price: 2499,
    rating: 4.6,
    reviews: 189,
    purchases: 890,
    image: "/placeholder.svg?height=300&width=250",
    category: "Casual Wears",
  },
  {
    id: 3,
    name: "Premium Cotton T-Shirt",
    price: 799,
    originalPrice: 999,
    rating: 4.7,
    reviews: 456,
    purchases: 2100,
    image: "/placeholder.svg?height=300&width=250",
    badge: "Hot",
    category: "Casual Wears",
  },
  {
    id: 4,
    name: "Formal Black Blazer",
    price: 3999,
    rating: 4.9,
    reviews: 167,
    purchases: 567,
    image: "/placeholder.svg?height=300&width=250",
    category: "Formals",
  },
  {
    id: 5,
    name: "Ethnic Kurta Set",
    price: 1899,
    originalPrice: 2299,
    rating: 4.5,
    reviews: 298,
    purchases: 743,
    image: "/placeholder.svg?height=300&width=250",
    category: "Ethnic Wears",
  },
  {
    id: 6,
    name: "Sports Track Suit",
    price: 2199,
    rating: 4.4,
    reviews: 234,
    purchases: 612,
    image: "/placeholder.svg?height=300&width=250",
    category: "Athleisure",
  },
  {
    id: 7,
    name: "Designer Party Dress",
    price: 4599,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 145,
    purchases: 389,
    image: "/placeholder.svg?height=300&width=250",
    badge: "New",
    category: "Partywear",
  },
  {
    id: 8,
    name: "Winter Wool Sweater",
    price: 1799,
    rating: 4.6,
    reviews: 278,
    purchases: 834,
    image: "/placeholder.svg?height=300&width=250",
    category: "Outerwear",
  },
]

export default function MostBoughtSection() {
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [showAllProducts, setShowAllProducts] = useState(false)

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`
  }

  const formatPurchases = (purchases) => {
    if (purchases >= 1000) {
      return `${(purchases / 1000).toFixed(1)}k+ bought`;
    }
    return `${purchases}+ bought`;
  }

  const getDisplayedProducts = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      // Mobile: show 4 cards initially, all when expanded
      return showAllProducts ? products : products.slice(0, 4)
    }
    // Desktop: show all 8 cards
    return products
  }

  const displayedProducts = getDisplayedProducts()
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const hasMoreProducts = isMobile && products.length > 4

  return (
    <section className="w-full bg-white py-8 sm:py-16 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-3 sm:px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-gray-600 text-xs sm:text-sm font-medium cursor-default">Customer Favorites</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 cursor-default">Most Bought Items</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4 cursor-default">
            Discover what our customers love most. These top-rated pieces have been chosen by thousands of satisfied
            shoppers.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-1 sm:top-3 left-1 sm:left-3">
                    <span
                      className={`px-1 sm:px-2 py-0.5 sm:py-1 text-xs font-semibold rounded-full cursor-default ${
                        product.badge === "Bestseller"
                          ? "bg-cyan-500 text-white"
                          : product.badge === "Hot"
                            ? "bg-red-500 text-white"
                            : "bg-green-500 text-white"
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Quick Actions - Hidden on mobile for better UX */}
                <div
                  className={`absolute top-1 sm:top-3 right-1 sm:right-3 hidden sm:flex flex-col gap-2 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button
                    size="icon"
                    variant="ghost"
                    className="w-8 h-8 bg-white/90 hover:bg-white text-gray-600 rounded-full shadow-sm"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button
                    size="icon"
                    variant="ghost"
                    className="w-8 h-8 bg-white/90 hover:bg-white text-gray-600 rounded-full shadow-sm"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Purchase Count */}
                <div className="absolute bottom-1 sm:bottom-3 left-1 sm:left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-1 sm:px-2 py-0.5 sm:py-1 rounded-full cursor-default">
                    {formatPurchases(product.purchases)}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-2 sm:p-4">
                {/* Category */}
                <div className="text-xs text-gray-500 mb-1 cursor-default">{product.category}</div>

                {/* Product Name */}
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors cursor-default text-sm sm:text-base">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2 sm:mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 cursor-default">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                  <span className="text-sm sm:text-lg font-bold text-gray-900 cursor-default">{formatPrice(product.price)}</span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm text-gray-500 line-through cursor-default">{formatPrice(product.originalPrice)}</span>
                    )}
                    {product.originalPrice && (
                      <span className="text-xs text-green-600 font-semibold cursor-default">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  className={`w-full transition-all duration-300 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium ${
                    hoveredProduct === product.id
                      ? "bg-black hover:bg-gray-800 text-white"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
                >
                  <ShoppingCart className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 inline" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button for Mobile */}
        {hasMoreProducts && (
          <div className="text-center mt-4 sm:hidden">
            <button
              onClick={() => setShowAllProducts(!showAllProducts)}
              className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              {showAllProducts ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show More
                </>
              )}
            </button>
          </div>
        )}

        {/* View All Button - Hidden on mobile when show more functionality is active */}
        <div className={`text-center mt-6 sm:mt-12 ${hasMoreProducts ? 'hidden sm:block' : ''}`}>
          <button
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}