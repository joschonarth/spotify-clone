import Image from "next/image";

interface AlbumCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export function AlbumCard({ imageSrc, title, description }: AlbumCardProps) {
    return (
        <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src={imageSrc} className='w-full' width={120} height={120} alt={title}/>
            <strong className='font-semibold'>{title}</strong>
            <span className='text-sm text-zinc-400'>{description}</span>
        </a>
    )
}
