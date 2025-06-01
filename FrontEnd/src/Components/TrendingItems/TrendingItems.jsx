import React from 'react';
import { Link } from 'react-router-dom';
import card1 from '../../assets/Images/card4.png'
import straightjeans from '../../assets/Images/straightjeans.png'
import warptops from '../../assets/Images/warptops.png'
import politshirts from '../../assets/Images/polotshirts.png'
import overshirts from '../../assets/Images/overshirts.png'
import oversizedshirts from '../../assets/Images/oversizedshirt.png'
import TrendingItem1 from '../../assets/Images/trendingItem3.jpg'
const trendingItems = [
    { id: 1, name: "", image: TrendingItem1, link: "" },
    //  add the link where the page is redirect when it clicked in the link tag, add the imported element name in the name tag and add the id in the id its like 1,2,3....
    { id: 2, name: "", image: straightjeans, link: "" },
    { id: 3, name: "", image: warptops, link: "" },
    { id: 4, name: "", image:  card1, link: "" },
    { id: 5, name: "", image: politshirts , link: "" },
    { id: 6, name: "", image: overshirts, link: "" },
    { id: 7, name: "", image: politshirts , link: "" },
    { id: 8, name: "", image: overshirts, link: "" },
    { id: 9, name: "", image: overshirts, link: "" },
    { id: 10, name: "", image: overshirts, link: "" },
    { id: 11, name: "", image: overshirts, link: "" },
    { id: 12, name: "", image: overshirts, link: "" },
];

const TrendingItems = () => {
    return (
        <div className="text-center p-4 bg-gradient-to-b from-white via-brown- to-white ">
            <h1 className="text-3xl font-bold mb-6">Trending Items</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-0 ml-20 mr-20 shadow-transparent">
                {trendingItems.map(item => (
                    <Link
                        key={item.id}
                        href={item.link}
                        className="bg-white border border-gray-300  overflow-hidden transform transition-transform hover:scale-105"
                    >
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        {/* <div className="p-4">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                        </div> */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TrendingItems;