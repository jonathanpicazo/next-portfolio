import React, { useState, useRef, useEffect } from 'react';
import { useFullscreen } from 'react-use';
import { twMerge } from 'tailwind-merge';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import { FaPlay, FaPause } from 'react-icons/fa';
import { Button } from '~/components/elements';

import ReactPlayer from 'react-player';

type DemoPlayerProps = {
  url: string;
};

const DemoPlayer: React.FC<DemoPlayerProps> = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
  const playerWrapperRef = useRef<HTMLDivElement>(null);
  const handlePlayPause = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    setPlaying(!playing);
  };
  const handleVideoClick = (evt: React.MouseEvent) => {
    handlePlayPause(evt);
  };
  useEffect(() => {
    if (playing) {
      setShowControls(false);
    } else {
      setShowControls(true);
    }
  }, [playing]);

  const handleFullScreen = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    setIsFullScreen(!isFullScreen);
  };
  const isFullscreen = useFullscreen(playerWrapperRef, isFullScreen, {
    onClose: () => setIsFullScreen(false),
  });

  const iconStyles = 'flex items-center justify-center';

  return (
    <div className="flex-1">
      <div
        className="aspect-w-16 aspect-h-9 relative min-h-[200px]"
        ref={playerWrapperRef}
        onClick={(evt) => handleVideoClick(evt)}
        onKeyDown={(evt) => handleVideoClick(evt as any)} // Add keyboard listener
        tabIndex={0}
        role="button"
      >
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          loop={playing} // Loop the video when playing
          width="100%"
          height="100%"
          onClickPreview={(evt) => evt.stopPropagation()}
          muted
        />
        {!playing && showControls && (
          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transform">
            <FaPlay
              className="text-6xl text-dracula-purple"
              onClick={handleVideoClick}
            />
          </div>
        )}
        {isFullscreen && (
          <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-black bg-opacity-50 p-2">
            <Button onClick={handlePlayPause} variant="secondary">
              {playing ? (
                <FaPause className={iconStyles} />
              ) : (
                <FaPlay className={iconStyles} />
              )}
            </Button>
            <Button onClick={handleFullScreen} variant="secondary">
              <MdFullscreenExit className={twMerge(iconStyles, 'text-lg')} />
            </Button>
          </div>
        )}
      </div>
      <div className="flex justify-center gap-3.5 pt-3">
        <div>
          <Button
            className="flex h-12 w-12 items-center justify-center rounded-full px-3 py-3"
            variant="secondary"
            onClick={handlePlayPause}
          >
            {playing ? (
              <FaPause className={iconStyles} />
            ) : (
              <FaPlay className={iconStyles} />
            )}
          </Button>
        </div>
        <div>
          <Button
            className="flex h-12 w-12 items-center justify-center rounded-full px-3 py-3 text-3xl"
            variant="secondary"
            onClick={(evt) => handleFullScreen(evt)}
          >
            {isFullScreen ? (
              <MdFullscreenExit className={iconStyles} />
            ) : (
              <MdFullscreen className={iconStyles} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoPlayer;
