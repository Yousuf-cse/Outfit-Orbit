import { useState, useEffect } from "react"

// Mock icons using SVG
const CheckCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const ShieldCheck = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const AlertCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

// Custom Button component
const Button = ({ children, onClick, className = "", disabled = false, variant = "default" }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50"
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

// Custom Separator component
const Separator = ({ className = "" }) => (
  <hr className={`border-gray-200 ${className}`} />
)

// Mock router functionality
const mockRouter = {
  push: (path) => {
    console.log(`Navigating to: ${path}`)
    alert(`Would navigate to: ${path}`)
  }
}

export default function PaymentPage() {
  const router = mockRouter
  const [loading, setLoading] = useState(true)
  const [paymentStatus, setPaymentStatus] = useState("pending")
  const [processingPayment, setProcessingPayment] = useState(false)
  const [orderDetails, setOrderDetails] = useState(null)

  // Mock order data for demonstration
  useEffect(() => {
    // Simulate API call to get order details
    setTimeout(() => {
      const mockOrder = {
        id: "OD" + Math.floor(100000 + Math.random() * 900000),
        amount: 4995,
        items: 3,
        date: new Date().toISOString(),
        address: {
          fullName: "Rahul Sharma",
          addressLine1: "123 MG Road",
          addressLine2: "Near City Mall",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400001",
          phoneNumber: "9876543210",
        },
        paymentMethod: "razorpay",
      }
      setOrderDetails(mockOrder)
      setLoading(false)

      // Load Razorpay script
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.async = true
      document.body.appendChild(script)
    }, 1000)
  }, [])

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handlePayNow = () => {
    setProcessingPayment(true)

    // Simulate API call to create Razorpay order
    setTimeout(() => {
      if (!orderDetails) return

      const options = {
        key: "rzp_test_yourkeyhere", // Enter your test key here
        amount: orderDetails.amount * 100, // Amount in paise
        currency: "INR",
        name: "Outfit Orbit",
        description: `Payment for order ${orderDetails.id}`,
        image: "/placeholder.svg?height=50&width=50", // Your logo
        order_id: "order_" + Math.random().toString(36).substring(2, 15), // Simulate order ID
        handler: (response) => {
          // Handle successful payment
          handlePaymentSuccess(response)
        },
        prefill: {
          name: orderDetails.address.fullName,
          contact: orderDetails.address.phoneNumber,
        },
        notes: {
          address: "Outfit Orbit Corporate Office",
        },
        theme: {
          color: "#00ACC1", // Cyan color matching the site theme
        },
      }

      if (window.Razorpay) {
        const razorpay = new window.Razorpay(options)
        razorpay.open()
      } else {
        // Simulate payment success for demo purposes
        setTimeout(() => handlePaymentSuccess({}), 1000)
      }
      setProcessingPayment(false)
    }, 1500)
  }

  const handlePaymentSuccess = (response) => {
    // Simulate payment verification
    setTimeout(() => {
      setPaymentStatus("success")
    }, 1000)
  }

  const handleContinueShopping = () => {
    router.push("/")
  }

  const handleViewOrder = () => {
    router.push("/profile/orders")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment details...</p>
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
            <span className="hover:text-cyan-600 cursor-pointer">Checkout</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Payment</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {paymentStatus === "pending" ? (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
              <h1 className="text-xl font-semibold text-gray-900">Complete Your Payment</h1>
            </div>

            {/* Order Details */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order ID</p>
                  <p className="font-medium text-gray-900">{orderDetails?.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Order Date</p>
                  <p className="font-medium text-gray-900">{formatDate(orderDetails?.date || "")}</p>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Payment Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Items ({orderDetails?.items})</span>
                      <span>{formatPrice(orderDetails?.amount || 0)}</span>
                    </div>
                    <div className="flex justify-between font-medium text-gray-900">
                      <span>Total Amount</span>
                      <span>{formatPrice(orderDetails?.amount || 0)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Shipping Address</h3>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-900">{orderDetails?.address.fullName}</p>
                    <p>
                      {orderDetails?.address.addressLine1}
                      {orderDetails?.address.addressLine2 && `, ${orderDetails.address.addressLine2}`}
                    </p>
                    <p>
                      {orderDetails?.address.city}, {orderDetails?.address.state}, {orderDetails?.address.pincode}
                    </p>
                    <p>Phone: {orderDetails?.address.phoneNumber}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Payment Method</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <img src="/placeholder.svg?height=30&width=40" alt="Razorpay" className="h-5 object-contain" />
                    </div>
                    <span className="text-sm text-gray-600">
                      {orderDetails?.paymentMethod === "razorpay"
                        ? "Credit / Debit Card or UPI via Razorpay"
                        : "Cash on Delivery"}
                    </span>
                  </div>
                </div>

                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Secure Payment</p>
                      <p className="text-xs text-gray-600">
                        Your payment information is processed securely. We do not store credit card details nor have
                        access to your payment information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  onClick={handlePayNow}
                  className="w-full bg-black hover:bg-gray-800 text-white py-6 text-lg"
                  disabled={processingPayment}
                >
                  {processingPayment ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3 inline-block"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Pay {formatPrice(orderDetails?.amount || 0)}
                      <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        ) : paymentStatus === "success" ? (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Success Header */}
            <div className="bg-green-50 px-6 py-8 text-center border-b border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
              <p className="text-gray-600">
                Your order #{orderDetails?.id} has been placed successfully and is being processed.
              </p>
            </div>

            {/* Order Details */}
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Order Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order ID</span>
                      <span className="font-medium">{orderDetails?.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order Date</span>
                      <span>{formatDate(orderDetails?.date || "")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method</span>
                      <span>
                        {orderDetails?.paymentMethod === "razorpay" ? "Credit/Debit Card or UPI" : "Cash on Delivery"}
                      </span>
                    </div>
                    <div className="flex justify-between font-medium text-gray-900">
                      <span>Total Amount</span>
                      <span>{formatPrice(orderDetails?.amount || 0)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Shipping Address</h3>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-900">{orderDetails?.address.fullName}</p>
                    <p>
                      {orderDetails?.address.addressLine1}
                      {orderDetails?.address.addressLine2 && `, ${orderDetails.address.addressLine2}`}
                    </p>
                    <p>
                      {orderDetails?.address.city}, {orderDetails?.address.state}, {orderDetails?.address.pincode}
                    </p>
                    <p>Phone: {orderDetails?.address.phoneNumber}</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Order Confirmation</p>
                      <p className="text-xs text-gray-600">
                        A confirmation email has been sent to your registered email address with all the order details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button onClick={handleViewOrder} className="flex-1 bg-black hover:bg-gray-800 text-white">
                  View Order
                </Button>
                <Button onClick={handleContinueShopping} variant="outline" className="flex-1">
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Failed Header */}
            <div className="bg-red-50 px-6 py-8 text-center border-b border-gray-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h1>
              <p className="text-gray-600">
                We couldn't process your payment. Please try again or use a different payment method.
              </p>
            </div>

            <div className="p-6">
              <div className="mt-6">
                <Button onClick={handlePayNow} className="w-full bg-black hover:bg-gray-800 text-white mb-4">
                  Try Again
                </Button>
                <Button onClick={() => router.push("/checkout")} variant="outline" className="w-full">
                  Back to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}