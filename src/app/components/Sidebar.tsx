import { HomeIcon, Library, Search } from "lucide-react";
import { PlaylistSidebar } from "./PlaylistSidebar";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      {/* <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-red-500 rounded-full'/>
        <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
        <div className='w-3 h-3 bg-green-500 rounded-full'/>
      </div> */}
      
      <nav className='space-y-5 mt-2'>
        <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <HomeIcon/>
          Home
        </a>
        <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Search/>
          Search
        </a>
        <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Library/>
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        
        {/* <div className="grid grid-cols-4 gap-2 mb-4">
          <button className="bg-zinc-700 text-white py-1 px-2 text-xs rounded hover:bg-zinc-600">
            Playlists
          </button>
          <button className="bg-zinc-700 text-white py-1 px-2 text-xs rounded hover:bg-zinc-600">
            Podcasts
          </button>
          <button className="bg-zinc-700 text-white py-1 px-2 text-xs rounded hover:bg-zinc-600">
            Albums
          </button>
          <button className="bg-zinc-700 text-white py-1 px-2 text-xs rounded hover:bg-zinc-600">
            Artists
          </button>
        </div> */}

        <PlaylistSidebar
          imageSrc="/album1.jpg"
          playlistName="Top Hits" 
          artistName="Various Artists"
          type="Playlist"
        />
        <PlaylistSidebar
          imageSrc="/album2.jpg"
          playlistName="Top Hits" 
          artistName="Various Artists"
          type="Playlist"
        />
        <PlaylistSidebar
          imageSrc="/album3.jpg"
          playlistName="Top Hits" 
          artistName="Various Artists"
          type="Playlist"
        />
        <PlaylistSidebar
          imageSrc="/album4.jpg"
          playlistName="Top Hits" 
          artistName="Various Artists"
          type="Playlist"
        />
        <PlaylistSidebar
          imageSrc="/album5.jpg"
          playlistName="Top Hits" 
          artistName="Various Artists"
          type="Playlist"
        />
      </nav>
    </aside>
  );
}
