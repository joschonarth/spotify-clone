import { Library, Search } from "lucide-react";
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
        <button className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <i className="fa-solid fa-house text-xl"/>
          Home
        </button>
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
          imageSrc="/playlist.png"
          playlistName="Top Hits" 
          artistName="João Otávio"
          type="Playlist"
        />
        <PlaylistSidebar
          imageSrc="/album1.jpg"
          playlistName="I AM YOU" 
          artistName="YNW Melly"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album2.jpg"
          playlistName="Drip Harder" 
          artistName="Lil Baby"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album3.jpg"
          playlistName="Just A Matter of Slime" 
          artistName="YNW Melly"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album4.jpg"
          playlistName="Issa Album" 
          artistName="21 Savage"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album5.jpg"
          playlistName="Harder Than Ever" 
          artistName="Lil Baby"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album6.jpg"
          playlistName="Get Rich Or Die Tryin'" 
          artistName="50 Cent"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album7.jpg"
          playlistName="HEROES & VILLAINS" 
          artistName="Metro Boomin"
          type="Album"
        />
      </nav>
    </aside>
  );
}
