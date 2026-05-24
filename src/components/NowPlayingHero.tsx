export default function NowPlayingHero() {
  return (
    <div className="w-[90vw] md:w-[640px] aspect-video relative overflow-hidden border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-lg mx-auto flex-shrink-0 bg-black">
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/P6aZ4A950z0?rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

