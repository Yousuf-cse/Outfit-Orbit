import React, { useState } from 'react';
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Custom Badge Component
const Badge = ({ children, className = "", variant = "default" }) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  const variants = {
    default: "bg-gray-100 text-gray-800",
    secondary: "bg-gray-100 text-gray-800"
  };
  
  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Custom Tabs Components
const Tabs = ({ defaultValue, className, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab, setActiveTab });
    }
    return child;
  });
  
  return (
    <div className={className}>
      {childrenWithProps}
    </div>
  );
};

const TabsList = ({ className, children, activeTab, setActiveTab }) => {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab, setActiveTab });
    }
    return child;
  });
  
  return (
    <div className={`flex border-b border-gray-200 ${className}`}>
      {childrenWithProps}
    </div>
  );
};

const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => {
  const isActive = activeTab === value;
  return (
    <button
      className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
        isActive 
          ? 'border-cyan-500 text-cyan-600' 
          : 'border-transparent text-gray-500 hover:text-gray-700'
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, className, children, activeTab }) => {
  if (activeTab !== value) return null;
  
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const product = {
  id: 1,
  name: "Premium Linen Shirt",
  price: 1899,
  originalPrice: 2299,
  rating: 4.8,
  reviews: 156,
  images: [
    "/placeholder.svg?height=600&width=500",
    "/placeholder.svg?height=600&width=500",
    "/placeholder.svg?height=600&width=500",
    "/placeholder.svg?height=600&width=500",
  ],
  colors: [
    { name: "White", value: "#FFFFFF", image: "/placeholder.svg?height=600&width=500" },
    { name: "Light Blue", value: "#E3F2FD", image: "/placeholder.svg?height=600&width=500" },
    { name: "Navy", value: "#1A237E", image: "/placeholder.svg?height=600&width=500" },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  description:
    "Crafted from premium linen, this shirt offers unparalleled comfort and style. Perfect for both casual and semi-formal occasions, featuring a classic fit that flatters all body types.",
  features: [
    "100% Premium Linen Fabric",
    "Classic Collar Design",
    "Button-down Front",
    "Chest Pocket",
    "Machine Washable",
    "Wrinkle Resistant",
  ],
  materials: "100% Linen",
  care: ["Machine wash cold", "Do not bleach", "Tumble dry low", "Iron on medium heat", "Dry clean if needed"],
  category: "Shirts",
  badge: "Bestseller",
  inStock: true,
};

const recommendedProducts = [
  {
    id: 2,
    name: "Cotton Polo Shirt",
    price: 899,
    image: "/placeholder.svg?height=300&width=250",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Casual Denim Shirt",
    price: 1299,
    image: "/placeholder.svg?height=300&width=250",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Formal White Shirt",
    price: 1599,
    image: "/placeholder.svg?height=300&width=250",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Striped Casual Shirt",
    price: 1199,
    image: "/placeholder.svg?height=300&width=250",
    rating: 4.4,
  },
];

function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handlePreviousImage = () => {
    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : product.images.length - 1);
  };

  const handleNextImage = () => {
    setSelectedImage(selectedImage < product.images.length - 1 ? selectedImage + 1 : 0);
  };

  const handleQuantityDecrease = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const renderStars = (rating, size = "w-4 h-4") => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`${size} ${
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const renderColorOptions = () => {
    return product.colors.map((color, index) => (
      <button
        key={index}
        className={`w-12 h-12 rounded-full border-2 transition-all ${
          selectedColor === index ? "border-cyan-500 scale-110" : "border-gray-300 hover:border-gray-400"
        }`}
        style={{ backgroundColor: color.value }}
        onClick={() => setSelectedColor(index)}
        title={color.name}
      />
    ));
  };

  const renderSizeOptions = () => {
    return product.sizes.map((size) => (
      <button
        key={size}
        className={`py-3 px-4 border rounded-lg text-center font-medium transition-colors ${
          selectedSize === size
            ? "border-cyan-500 bg-cyan-50 text-cyan-700"
            : "border-gray-300 hover:border-gray-400"
        }`}
        onClick={() => setSelectedSize(size)}
      >
        {size}
      </button>
    ));
  };

  const renderThumbnails = () => {
    return product.images.map((image, index) => (
      <button
        key={index}
        className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-colors ${
          selectedImage === index ? "border-cyan-500" : "border-transparent hover:border-gray-300"
        }`}
        onClick={() => setSelectedImage(index)}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={`${product.name} ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </button>
    ));
  };

  const renderFeatures = () => {
    return product.features.map((feature, index) => (
      <li key={index} className="flex items-center gap-2 text-gray-600">
        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
        {feature}
      </li>
    ));
  };

  const renderCareInstructions = () => {
    return product.care.map((instruction, index) => (
      <li key={index} className="flex items-center gap-2 text-gray-600">
        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        {instruction}
      </li>
    ));
  };

  const renderRecommendedProducts = () => {
    return recommendedProducts.map((item) => (
      <div key={item.id} className="group cursor-pointer">
        <div className="aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden mb-3">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-medium text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">
          {item.name}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {renderStars(item.rating, "w-3 h-3")}
          </div>
          <span className="text-xs text-gray-600">{item.rating}</span>
        </div>
        <p className="font-semibold text-gray-900">{formatPrice(item.price)}</p>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-cyan-600 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="hover:text-cyan-600 cursor-pointer">Men</span>
            <span className="mx-2">/</span>
            <span className="hover:text-cyan-600 cursor-pointer">{product.category}</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images Section */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="relative aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-cyan-500 text-white">
                  {product.badge}
                </Badge>
              )}

              {/* Image Navigation Controls */}
              {product.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-sm flex items-center justify-center"
                    onClick={handlePreviousImage}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-sm flex items-center justify-center"
                    onClick={handleNextImage}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images Grid */}
            <div className="grid grid-cols-4 gap-3">
              {renderThumbnails()}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isWishlisted ? "text-red-500" : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={toggleWishlist}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                  </button>
                  <button className="w-10 h-10 rounded-full text-gray-400 hover:text-gray-600 flex items-center justify-center">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Product Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Product Pricing */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {discountPercentage}% OFF
                    </Badge>
                  </>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Color: {product.colors[selectedColor].name}
              </h3>
              <div className="flex items-center gap-3">
                {renderColorOptions()}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Size</h3>
                <button className="text-cyan-600 text-sm underline hover:no-underline">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {renderSizeOptions()}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                    onClick={handleQuantityDecrease}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                    onClick={handleQuantityIncrease}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedSize || !product.inStock}
              >
                Buy Now
              </button>
              <button
                className="w-full border border-gray-300 hover:bg-gray-50 py-3 text-lg font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedSize || !product.inStock}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">Easy Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">2 Year Warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {renderFeatures()}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Materials</h4>
                  <p className="text-gray-600 mb-6">{product.materials}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Care Instructions</h4>
                  <ul className="space-y-2">
                    {renderCareInstructions()}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="text-center py-12">
                <p className="text-gray-600">Reviews section coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Recommended Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {renderRecommendedProducts()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;