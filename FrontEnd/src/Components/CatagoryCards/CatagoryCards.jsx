import React from 'react';

const categories = [
    { id: 1, name: "Casual Wears", link: "#category1" },
    { id: 2, name: "Formals", link: "#category2" },
    { id: 3, name: "Ethnic Wears", link: "#category3" },
    { id: 4, name: "Athleisure", link: "#category4" },
    { id: 5, name: "Partywear", link: "#category5" },
    { id: 6, name: "Activewear", link: "#category6" },
    { id: 7, name: "Outerwear", link: "#category7" },
    { id: 8, name: "Teens Special", link: "#category8" },
];

const CategoryCards = () => {
    return (
        <div className="max-w-6xl mx-auto text-center p-4">
            <h1 className="text-3xl font-bold mb-6">Shop by Category</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map(category => (
                    <a
                        key={category.id}
                        href={category.link}
                        className="bg-gradient-to-br from-white via-gray-100 to-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                    >
                        {category.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CategoryCards;