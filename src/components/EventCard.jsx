import Image from 'next/image';

const EventCard = ({ date, title, subtitle, location, image }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src={image} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="text-orange-500">{date}</div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <h4 className="text-lg">{subtitle}</h4>
                <p className="text-gray-600">{location}</p>
                <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded">Explore</button>
            </div>
        </div>
    );
};

export default EventCard;