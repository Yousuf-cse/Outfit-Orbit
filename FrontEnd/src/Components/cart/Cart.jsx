import { useState, useEffect } from "react"
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Heart,
  ArrowRight,
  ShoppingBag,
  Truck,
  Shield,
  RotateCcw,
  Tag,
  Gift,
} from "lucide-react"

// Custom Button Component
const Button = ({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  disabled = false,
  onClick,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }
  
  const sizes = {
    default: "h-10 py-2 px-4",
    icon: "h-10 w-10",
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Custom Badge Component
const Badge = ({ children, variant = "default", className = "" }) => {
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  }
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}

// Custom Separator Component
const Separator = ({ className = "" }) => {
  return <div className={`shrink-0 bg-border h-[1px] w-full ${className}`} />
}

export default function CartPage() {
  const [cart, setCart] = useState({ items: [], totalAmount: 0, totalItems: 0 })
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(null)

  // Mock cart data for demonstration
  useEffect(() => {
    setTimeout(() => {
      const mockCart = {
        items: [
          {
            _id: "1",
            product: {
              _id: "p1",
              name: "Premium Linen Shirt",
              images: ["/placeholder.svg?height=300&width=250"],
              category: "Shirts",
              inStock: true,
            },
            quantity: 2,
            size: "L",
            color: { name: "White", value: "#FFFFFF" },
            price: 1899,
          },
          {
            _id: "2",
            product: {
              _id: "p2",
              name: "Casual Polo T-Shirt",
              images: ["/placeholder.svg?height=300&width=250"],
              category: "T-Shirts",
              inStock: true,
            },
            quantity: 1,
            size: "M",
            color: { name: "Navy", value: "#1A237E" },
            price: 899,
          },
          {
            _id: "3",
            product: {
              _id: "p3",
              name: "Formal Black Suit",
              images: ["/placeholder.svg?height=300&width=250"],
              category: "Suits",
              inStock: false,
            },
            quantity: 1,
            size: "L",
            color: { name: "Black", value: "#000000" },
            price: 8999,
          },
        ],
        totalAmount: 13697,
        totalItems: 4,
      }
      setCart(mockCart)
      setLoading(false)
    }, 1000)
  }, [])

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`
  }

  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return

    setUpdating(itemId)
    // Simulate API call
    setTimeout(() => {
      setCart((prev) => ({
        ...prev,
        items: prev.items.map((item) => (item._id === itemId ? { ...item, quantity: newQuantity } : item)),
      }))
      setUpdating(null)
    }, 500)
  }

  const removeItem = async (itemId) => {
    setUpdating(itemId)
    // Simulate API call
    setTimeout(() => {
      setCart((prev) => ({
        ...prev,
        items: prev.items.filter((item) => item._id !== itemId),
      }))
      setUpdating(null)
    }, 500)
  }

  const calculateSubtotal = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const shippingCost = calculateSubtotal() >= 2000 ? 0 : 99
  const discount = 0 // You can add discount logic here
  const finalTotal = calculateSubtotal() + shippingCost - discount

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your cart...</p>
        </div>
      </div>
    )
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <span className="hover:text-cyan-600 cursor-pointer">Home</span>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Shopping Cart</span>
            </div>
          </div>
        </div>

        {/* Empty Cart */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">Continue Shopping</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-cyan-600 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Shopping Cart</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
              <p className="text-gray-600">
                {cart.totalItems} {cart.totalItems === 1 ? "item" : "items"} in your cart
              </p>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span>Free shipping on orders over ₹2,000</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                <span>Easy returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gray-50 rounded-lg overflow-hidden">
                      <img
                        src={item.product.images[0] || "/placeholder.svg"}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.product.name}</h3>
                        <p className="text-sm text-gray-500">{item.product.category}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-red-500 h-8 w-8"
                        onClick={() => removeItem(item._id)}
                        disabled={updating === item._id}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Product Options */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Size:</span>
                        <Badge variant="secondary" className="text-xs">
                          {item.size}
                        </Badge>
                      </div>
                      {item.color && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">Color:</span>
                          <div className="flex items-center gap-1">
                            <div
                              className="w-4 h-4 rounded-full border border-gray-300"
                              style={{ backgroundColor: item.color.value }}
                            ></div>
                            <span className="text-sm text-gray-700">{item.color.name}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Stock Status */}
                    {!item.product.inStock && (
                      <Badge variant="secondary" className="bg-red-100 text-red-700 mb-3">
                        Out of Stock
                      </Badge>
                    )}

                    {/* Price and Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-gray-900">{formatPrice(item.price)}</span>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-8 h-8 rounded-r-none"
                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                            disabled={item.quantity <= 1 || updating === item._id}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                            {updating === item._id ? "..." : item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-8 h-8 rounded-l-none"
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                            disabled={updating === item._id}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500 h-8 w-8">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <span className="text-lg font-bold text-gray-900">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="pt-4">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Continue Shopping
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h3>

              {/* Summary Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({cart.totalItems} items)</span>
                  <span className="font-medium">{formatPrice(calculateSubtotal())}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? <span className="text-green-600">Free</span> : formatPrice(shippingCost)}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-medium text-green-600">-{formatPrice(discount)}</span>
                  </div>
                )}

                <Separator />

                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-xl text-gray-900">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <Button variant="outline" className="w-full justify-start text-gray-600">
                  <Tag className="w-4 h-4 mr-2" />
                  Add promo code
                </Button>
              </div>

              {/* Checkout Button */}
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 mb-4">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Proceed to Checkout
              </Button>

              {/* Trust Indicators */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <RotateCcw className="w-4 h-4 text-blue-500" />
                  <span>30-day return policy</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Gift className="w-4 h-4 text-purple-500" />
                  <span>Free gift wrapping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}