import React, { useState, useEffect } from "react"

// Custom UI Components
const Button = ({ children, variant = "default", className = "", disabled = false, onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2"
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground"
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

const Label = ({ children, htmlFor, className = "" }) => {
  return (
    <label htmlFor={htmlFor} className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>
      {children}
    </label>
  )
}

const RadioGroup = ({ children, value, onValueChange, className = "" }) => {
  return (
    <div className={className} role="radiogroup">
      {React.Children.map(children, child => 
        React.cloneElement(child, { groupValue: value, onGroupChange: onValueChange })
      )}
    </div>
  )
}

const RadioGroupItem = ({ value, id, className = "", groupValue, onGroupChange }) => {
  return (
    <input
      type="radio"
      id={id}
      name="radio-group"
      value={value}
      checked={groupValue === value}
      onChange={() => onGroupChange(value)}
      className={`h-4 w-4 rounded-full border border-primary text-primary focus:ring-2 focus:ring-primary ${className}`}
    />
  )
}

const Separator = ({ className = "" }) => {
  return <hr className={`border-0 h-px bg-border ${className}`} />
}

// Icons
const MapPin = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const CreditCard = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
    <line x1="1" y1="10" x2="23" y2="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
  </svg>
)

const Truck = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="1" y="3" width="15" height="13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
    <polygon points="16,8 20,8 23,11 23,16 16,16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
    <circle cx="5.5" cy="18.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
    <circle cx="18.5" cy="18.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
  </svg>
)

const Clock = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
    <polyline points="12,6 12,12 16,14" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
  </svg>
)

const CheckCircle = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ChevronRight = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="9,18 15,12 9,6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
  </svg>
)

const Home = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const Building2 = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const Landmark = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="3" y1="22" x2="21" y2="22" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
    <line x1="6" y1="18" x2="6" y2="11" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
    <line x1="10" y1="18" x2="10" y2="11" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
    <line x1="14" y1="18" x2="14" y2="11" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
    <line x1="18" y1="18" x2="18" y2="11" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
    <polygon points="12,2 20,7 4,7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
  </svg>
)

export default function CheckoutPage() {
  const [cart, setCart] = useState({ items: [], totalAmount: 0, totalItems: 0 })
  const [loading, setLoading] = useState(true)
  const [addresses, setAddresses] = useState([])
  const [selectedAddressId, setSelectedAddressId] = useState("")
  const [deliveryMethod, setDeliveryMethod] = useState("standard")
  const [paymentMethod, setPaymentMethod] = useState("razorpay")
  const [step, setStep] = useState(1)
  const [processingOrder, setProcessingOrder] = useState(false)

  // Mock data for demonstration
  useEffect(() => {
    setTimeout(() => {
      const mockCart = {
        items: [
          {
            _id: "1",
            product: {
              _id: "p1",
              name: "Premium Linen Shirt",
              images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=250&h=300&fit=crop"],
              category: "Shirts",
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
              images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=250&h=300&fit=crop"],
              category: "T-Shirts",
            },
            quantity: 1,
            size: "M",
            color: { name: "Navy", value: "#1A237E" },
            price: 899,
          },
        ],
        totalAmount: 4697,
        totalItems: 3,
      }

      const mockAddresses = [
        {
          id: "addr1",
          fullName: "Rahul Sharma",
          phoneNumber: "9876543210",
          addressLine1: "123 MG Road",
          addressLine2: "Near City Mall",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400001",
          country: "India",
          addressType: "home",
          isDefault: true,
        },
        {
          id: "addr2",
          fullName: "Rahul Sharma",
          phoneNumber: "9876543210",
          addressLine1: "456 Tech Park",
          addressLine2: "Whitefield",
          city: "Bangalore",
          state: "Karnataka",
          pincode: "560066",
          country: "India",
          addressType: "work",
        },
      ]

      setCart(mockCart)
      setAddresses(mockAddresses)
      setSelectedAddressId(mockAddresses[0].id)
      setLoading(false)
    }, 1000)
  }, [])

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`
  }

  const calculateSubtotal = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const shippingCost = deliveryMethod === "express" ? 199 : calculateSubtotal() >= 2000 ? 0 : 99
  const taxAmount = Math.round(calculateSubtotal() * 0.18) // 18% GST
  const finalTotal = calculateSubtotal() + shippingCost + taxAmount

  const handleAddressSelect = (addressId) => {
    setSelectedAddressId(addressId)
  }

  const handleContinueToPayment = () => {
    if (!selectedAddressId) {
      alert("Please select a delivery address")
      return
    }
    setStep(2)
  }

  const handlePlaceOrder = async () => {
    setProcessingOrder(true)
    // Simulate API call
    setTimeout(() => {
      setProcessingOrder(false)
      alert("Order placed successfully! Redirecting to payment...")
    }, 1500)
  }

  const getSelectedAddress = () => {
    return addresses.find((addr) => addr.id === selectedAddressId)
  }

  const getAddressIcon = (type) => {
    switch (type) {
      case "home":
        return <Home className="w-5 h-5" />
      case "work":
        return <Building2 className="w-5 h-5" />
      default:
        return <Landmark className="w-5 h-5" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading checkout...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom Styles */}
      <style jsx>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        input[type="radio"] {
          appearance: none;
          width: 1rem;
          height: 1rem;
          border: 2px solid #d1d5db;
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }
        input[type="radio"]:checked {
          border-color: #0891b2;
          background-color: #0891b2;
        }
        input[type="radio"]:checked::after {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .bg-primary { background-color: #000; }
        .text-primary-foreground { color: #fff; }
        .hover\\:bg-primary\\/90:hover { background-color: rgba(0, 0, 0, 0.9); }
        .border-input { border-color: #d1d5db; }
        .hover\\:bg-accent:hover { background-color: #f3f4f6; }
        .hover\\:text-accent-foreground:hover { color: #374151; }
        .bg-border { background-color: #e5e7eb; }
        .focus-visible\\:outline-none:focus-visible { outline: none; }
        .focus-visible\\:ring-2:focus-visible { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); }
      `}</style>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-cyan-600 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="hover:text-cyan-600 cursor-pointer">Cart</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Checkout</span>
          </div>
        </div>
      </div>

      {/* Checkout Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                <MapPin className="w-4 h-4" />
              </div>
              <span className={`ml-2 hidden sm:inline ${step >= 1 ? "text-gray-900 font-medium" : "text-gray-500"}`}>
                Address
              </span>
            </div>

            <div className={`w-12 sm:w-24 h-1 mx-2 ${step >= 2 ? "bg-cyan-600" : "bg-gray-200"}`}></div>

            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                <CreditCard className="w-4 h-4" />
              </div>
              <span className={`ml-2 hidden sm:inline ${step >= 2 ? "text-gray-900 font-medium" : "text-gray-500"}`}>
                Payment
              </span>
            </div>

            <div className={`w-12 sm:w-24 h-1 mx-2 ${step >= 3 ? "bg-cyan-600" : "bg-gray-200"}`}></div>

            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className={`ml-2 hidden sm:inline ${step >= 3 ? "text-gray-900 font-medium" : "text-gray-500"}`}>
                Confirmation
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Delivery Address */}
            {step === 1 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Delivery Address</h2>

                {/* Saved Addresses */}
                <div className="space-y-4 mb-8">
                  <h3 className="font-medium text-gray-700">Saved Addresses</h3>

                  <RadioGroup value={selectedAddressId} onValueChange={handleAddressSelect}>
                    <div className="grid gap-4">
                      {addresses.map((address) => (
                        <div
                          key={address.id}
                          className={`relative flex items-start p-4 rounded-lg border ${
                            selectedAddressId === address.id ? "border-cyan-600 bg-cyan-50" : "border-gray-200"
                          }`}
                        >
                          <RadioGroupItem value={address.id} id={address.id} className="mt-1" />
                          <div className="ml-3 flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <Label htmlFor={address.id} className="font-medium text-gray-900">
                                {address.fullName}
                              </Label>
                              <div className="flex items-center">
                                <span
                                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    address.addressType === "home"
                                      ? "bg-blue-100 text-blue-800"
                                      : address.addressType === "work"
                                        ? "bg-purple-100 text-purple-800"
                                        : "bg-gray-100 text-gray-800"
                                  }`}
                                >
                                  {getAddressIcon(address.addressType)}
                                  <span className="ml-1 capitalize">{address.addressType}</span>
                                </span>
                                {address.isDefault && <span className="ml-2 text-xs text-gray-500">Default</span>}
                              </div>
                            </div>
                            <div className="text-sm text-gray-600 mb-1">{address.phoneNumber}</div>
                            <div className="text-sm text-gray-600">
                              {address.addressLine1}
                              {address.addressLine2 && `, ${address.addressLine2}`}, {address.city}, {address.state},{" "}
                              {address.pincode}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>

                  <Button variant="outline" className="mt-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    Add New Address
                  </Button>
                </div>

                {/* Delivery Options */}
                <div className="space-y-4 mb-8">
                  <h3 className="font-medium text-gray-700">Delivery Options</h3>

                  <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                    <div className="grid gap-4">
                      <div
                        className={`relative flex items-start p-4 rounded-lg border ${
                          deliveryMethod === "standard" ? "border-cyan-600 bg-cyan-50" : "border-gray-200"
                        }`}
                      >
                        <RadioGroupItem value="standard" id="standard" className="mt-1" />
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="standard" className="font-medium text-gray-900">
                              Standard Delivery
                            </Label>
                            <span className="font-medium text-gray-900">
                              {calculateSubtotal() >= 2000 ? "Free" : formatPrice(99)}
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <Truck className="w-4 h-4 mr-2" />
                            <span>Delivery in 4-5 business days</span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`relative flex items-start p-4 rounded-lg border ${
                          deliveryMethod === "express" ? "border-cyan-600 bg-cyan-50" : "border-gray-200"
                        }`}
                      >
                        <RadioGroupItem value="express" id="express" className="mt-1" />
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="express" className="font-medium text-gray-900">
                              Express Delivery
                            </Label>
                            <span className="font-medium text-gray-900">{formatPrice(199)}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>Delivery in 1-2 business days</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <Button onClick={handleContinueToPayment} className="w-full bg-black hover:bg-gray-800 text-white">
                  Continue to Payment
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {/* Step 2: Payment Method */}
            {step === 2 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Method</h2>

                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div
                    className={`relative flex items-start p-4 rounded-lg border ${
                      paymentMethod === "razorpay" ? "border-cyan-600 bg-cyan-50" : "border-gray-200"
                    }`}
                  >
                    <RadioGroupItem value="razorpay" id="razorpay" className="mt-1" />
                    <div className="ml-3 flex-1">
                      <Label htmlFor="razorpay" className="font-medium text-gray-900">
                        Credit / Debit Card or UPI
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay securely using your credit/debit card or UPI via Razorpay
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-6 w-10 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                        <div className="h-6 w-10 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                        <div className="h-6 w-10 bg-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">UPI</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative flex items-start p-4 rounded-lg border ${
                      paymentMethod === "cod" ? "border-cyan-600 bg-cyan-50" : "border-gray-200"
                    }`}
                  >
                    <RadioGroupItem value="cod" id="cod" className="mt-1" />
                    <div className="ml-3 flex-1">
                      <Label htmlFor="cod" className="font-medium text-gray-900">
                        Cash on Delivery
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">Pay when your order is delivered</p>
                    </div>
                  </div>
                </RadioGroup>

                <div className="flex items-center justify-between mt-8">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back to Delivery
                  </Button>
                  <Button
                    onClick={handlePlaceOrder}
                    className="bg-black hover:bg-gray-800 text-white"
                    disabled={processingOrder}
                  >
                    {processingOrder ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Place Order
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h3>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {cart.items.map((item) => (
                  <div key={item._id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-50 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.images[0] || "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=250&h=300&fit=crop"}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{item.product.name}</h4>
                      <p className="text-xs text-gray-500">
                        Size: {item.size} {item.color && `• Color: ${item.color.name}`}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                        <span className="text-sm font-medium text-gray-900">{formatPrice(item.price)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Price Details */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cart.totalItems} items)</span>
                  <span className="font-medium">{formatPrice(calculateSubtotal())}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? <span className="text-green-600">Free</span> : formatPrice(shippingCost)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (18% GST)</span>
                  <span className="font-medium">{formatPrice(taxAmount)}</span>
                </div>

                <Separator className="my-3" />

                <div className="flex justify-between text-base">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-gray-900">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              {/* Delivery Info */}
              {step === 2 && selectedAddressId && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Delivery Details</h4>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">{getSelectedAddress()?.fullName}</p>
                    <p>
                      {getSelectedAddress()?.addressLine1}
                      {getSelectedAddress()?.addressLine2 && `, ${getSelectedAddress()?.addressLine2}`}
                    </p>
                    <p>
                      {getSelectedAddress()?.city}, {getSelectedAddress()?.state}, {getSelectedAddress()?.pincode}
                    </p>
                    <p>Phone: {getSelectedAddress()?.phoneNumber}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}