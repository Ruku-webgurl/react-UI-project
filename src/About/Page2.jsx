import React from 'react'

const Page2 = () => {
    const memories = [
        {
            img: 'https://i.pinimg.com/736x/0e/f9/fc/0ef9fcb740198f9a92e17f762c325419.jpg',
            title: 'Summer at the Lake',
            date: 'June 2023',
            caption: 'A warm evening with friends and laughter.'
        },
        {
            img: 'https://i.pinimg.com/736x/f4/13/7d/f4137db7cc4ace01071573aa2eef87ae.jpg',
            title: 'City Nights',
            date: 'September 2022',
            caption: 'Neon lights and late-night walks.'
        },
        {
            img: 'https://i.pinimg.com/736x/e8/6e/03/e86e036f14f71704f0cef9d0cbd9b715.jpg',
            title: 'Mountain Hike',
            date: 'April 2024',
            caption: 'Breath-taking views after a long climb.'
        },
        {
            img: 'https://i.pinimg.com/1200x/dd/46/ab/dd46ab5c684d0470f793e3421a6c104f.jpg',
            title: 'Coffee & Rain',
            date: 'November 2021',
            caption: 'Team Minato.'
        },
        {
            img: 'https://i.pinimg.com/736x/a3/f4/e5/a3f4e55ea0d4af91f0146717fcb98fcd.jpg',
            title: 'Road Trip',
            date: 'July 2020',
            caption: 'obito x Rin x Kakashi'
        }
    ]

    return (
        <div className="min-h-screen w-full bg-gray-700 text-white">
            <div className="max-w-6xl mx-auto p-4 md:p-8">
                <h1 className="text-3xl font-bold mb-4">Memory Diaries</h1>
                <p className="text-gray-200 mb-6">A collection of moments captured in photos. Click any image to view it in full size.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {memories.map((m, i) => (
                        <figure key={i} className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <img src={m.img} alt={m.title} className="w-full h-44 sm:h-56 object-cover" />
                            <figcaption className="p-4 bg-linear-to-t from-black/60 to-transparent absolute bottom-0 left-0 right-0 text-white">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">{m.title}</h3>
                                        <p className="text-sm text-gray-200">{m.date}</p>
                                    </div>
                                </div>
                                <p className="mt-2 text-sm text-gray-100">{m.caption}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page2