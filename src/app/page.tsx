import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { PlaylistPreview } from './components/PlaylistPreview'
import { AlbumCard } from './components/AlbumCard'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <PlaylistPreview
              imageSrc="/album.jpg"
              title="I am You" 
            />
            <PlaylistPreview
              imageSrc="/album.jpg"
              title="I am You" 
            />
            <PlaylistPreview
              imageSrc="/album.jpg"
              title="I am You" 
            />
            <PlaylistPreview
              imageSrc="/album.jpg"
              title="I am You" 
            />
            <PlaylistPreview
              imageSrc="/album.jpg"
              title="I am You" 
            />
            <PlaylistPreview
              imageSrc="/album.jpg"
              title="I am You" 
            />
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for João Otávio Schonarth</h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <AlbumCard 
              imageSrc="/album.jpg"
              title="Daily Mix 1" 
              description="YNW Melly, Lil Baby, Future and more" 
            />
            <AlbumCard 
              imageSrc="/album.jpg"
              title="Daily Mix 1" 
              description="YNW Melly, Lil Baby, Future and more" 
            />
            <AlbumCard 
              imageSrc="/album.jpg"
              title="Daily Mix 1" 
              description="YNW Melly, Lil Baby, Future and more" 
            />
            <AlbumCard 
              imageSrc="/album.jpg"
              title="Daily Mix 1" 
              description="YNW Melly, Lil Baby, Future and more" 
            />
            <AlbumCard 
              imageSrc="/album.jpg"
              title="Daily Mix 1" 
              description="YNW Melly, Lil Baby, Future and more" 
            />
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}
