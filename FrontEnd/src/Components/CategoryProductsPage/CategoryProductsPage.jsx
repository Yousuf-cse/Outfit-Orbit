import { useState, useEffect } from "react"
import { Star, Heart, ShoppingCart, Filter, Loader2 } from "lucide-react"

// Custom Button Component
const Button = ({ children, onClick, disabled, variant = "default", size = "default", className = "", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100",
  }
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    icon: "h-10 w-10",
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

// Custom Select Component
const Select = ({ value, onValueChange, children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  )
}

const SelectTrigger = ({ children, className = "" }) => {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}>
      {children}
    </div>
  )
}

const SelectValue = ({ placeholder }) => {
  return <span className="text-gray-500">{placeholder}</span>
}

const SelectContent = ({ children }) => {
  return (
    <div className="absolute top-full left-0 z-50 min-w-full overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-md">
      {children}
    </div>
  )
}

const SelectItem = ({ value, children, onClick }) => {
  return (
    <div
      className="flex cursor-pointer select-none items-center py-1.5 px-2 text-sm hover:bg-gray-100"
      onClick={() => onClick && onClick(value)}
    >
      {children}
    </div>
  )
}

// Custom Badge Component
const Badge = ({ children, className = "", variant = "default" }) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
  const variants = {
    default: "bg-gray-100 text-gray-800",
    secondary: "bg-gray-500 text-white",
  }
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default function CategoryProductsPage() {
  // Mock URL params - in real usage, you'd get these from your router
  const [category] = useState("electronics") // Replace with actual category from URL
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
    hasNextPage: false,
    hasPrevPage: false,
  })
  const [categoryName, setCategoryName] = useState("")
  const [sortBy, setSortBy] = useState("createdAt")
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [showSortDropdown, setShowSortDropdown] = useState(false)

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`
  }

  const fetchProducts = async (page = 1) => {
    try {
      setLoading(true)
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: "12",
        sortBy,
        sortOrder: "desc",
      })

      const response = await fetch(`http://localhost:5000/api/products/${category}?${queryParams}`)
      const data = await response.json()

      if (data.success) {
        setProducts(data.data.products)
        setPagination(data.data.pagination)
        setCategoryName(data.data.category)
      } else {
        setError("Failed to fetch products")
      }
    } catch (err) {
      setError("Error connecting to server")
      console.error("Error fetching products:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (category) {
      fetchProducts()
    }
  }, [category, sortBy])

  const handlePageChange = (newPage) => {
    fetchProducts(newPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "bestseller":
        return "bg-cyan-500 text-white"
      case "new":
        return "bg-green-500 text-white"
      case "sale":
        return "bg-red-500 text-white"
      case "premium":
        return "bg-black text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const handleSortChange = (value) => {
    setSortBy(value)
    setShowSortDropdown(false)
  }

  const getSortLabel = (value) => {
    const labels = {
      createdAt: "Newest First",
      price: "Price: Low to High",
      "-price": "Price: High to Low",
      "-rating": "Highest Rated",
      name: "Name A-Z"
    }
    return labels[value] || "Sort by"
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-cyan-600" />
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => fetchProducts()} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-cyan-600 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{categoryName}</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{categoryName} Collection</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our curated selection of {categoryName.toLowerCase()} products. Quality craftsmanship meets
              modern style.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>{pagination.totalProducts} Products</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <div className="text-sm text-gray-600">
              Showing {products.length} of {pagination.totalProducts} products
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                className="flex h-10 w-48 items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                <span>{getSortLabel(sortBy)}</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showSortDropdown && (
                <div className="absolute top-full left-0 z-50 w-full mt-1 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
                  {[
                    { value: "createdAt", label: "Newest First" },
                    { value: "price", label: "Price: Low to High" },
                    { value: "-price", label: "Price: High to Low" },
                    { value: "-rating", label: "Highest Rated" },
                    { value: "name", label: "Name A-Z" }
                  ].map((option) => (
                    <div
                      key={option.value}
                      className="flex cursor-pointer select-none items-center py-2 px-3 text-sm hover:bg-gray-100"
                      onClick={() => handleSortChange(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={() => setHoveredProduct(product._id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
                  <img
                    src={product.images?.[0] || "https://via.placeholder.com/300x400?text=No+Image"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.badge && (
                      <Badge className={getBadgeColor(product.badge)}>{product.badge}</Badge>
                    )}
                    {!product.inStock && (
                      <Badge variant="secondary" className="bg-gray-500 text-white">
                        Out of Stock
                      </Badge>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div
                    className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
                      hoveredProduct === product._id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                    }`}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-9 h-9 bg-white/90 hover:bg-white text-gray-600 rounded-full shadow-sm backdrop-blur-sm"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProduct === product._id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">Quick View</Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Category */}
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">{product.category}</div>

                  {/* Product Name */}
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
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
                    <span className="text-xs text-gray-600">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                        <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    className={`w-full transition-all duration-300 ${
                      hoveredProduct === product._id
                        ? "bg-black hover:bg-gray-800 text-white"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">No products found in this category.</p>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={!pagination.hasPrevPage}
            >
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {[...Array(pagination.totalPages)].map((_, index) => {
                const page = index + 1
                return (
                  <Button
                    key={page}
                    variant={pagination.currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                )
              })}
            </div>

            <Button
              variant="outline"
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={!pagination.hasNextPage}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}