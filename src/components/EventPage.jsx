import Head from 'next/head';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';

export default function Home() {
    const events = [
        {
            date: '24-08-2024',
            title: 'Hand and Mind Chess',
            subtitle: 'CHESS Tournament',
            location: 'CS/IT BLOCK, GEU',
            image: '/event1.jpg',
        },
        // Add more events as needed
    ];

    return (
        <div>
            <Head>
                <title>Event Showcase</title>
                <meta name="description" content="Showcasing upcoming events" />
            </Head>
            <Hero />
            <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        date={event.date}
                        title={event.title}
                        subtitle={event.subtitle}
                        location={event.location}
                        image={event.image}
                    />
                ))}
            </div>
        </div>
    );
}