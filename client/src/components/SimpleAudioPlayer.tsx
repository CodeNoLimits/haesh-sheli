import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Download, Volume2, VolumeX, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/contexts/LanguageContext';
import { Howl } from 'howler';

interface SimpleAudioPlayerProps {
  audioUrl: string;
  title: string;
  author?: string;
  className?: string;
}

export function SimpleAudioPlayer({ audioUrl, title, author, className = '' }: SimpleAudioPlayerProps) {
  const { currentLanguage } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [seek, setSeek] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const howlRef = useRef<Howl | null>(null);

  // Initialiser Howler
  useEffect(() => {
    if (!audioUrl) return;

    const howl = new Howl({
      src: [audioUrl],
      html5: true,
      preload: true,
      onload: () => {
        setDuration(howl.duration());
        setIsLoading(false);
      },
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onend: () => {
        setIsPlaying(false);
        setSeek(0);
      },
      onseek: () => setSeek(howl.seek()),
    });

    howlRef.current = howl;

    return () => {
      howl.unload();
    };
  }, [audioUrl]);

  // Mettre à jour la position
  useEffect(() => {
    if (!howlRef.current) return;

    const interval = setInterval(() => {
      if (howlRef.current && isPlaying) {
        setSeek(howlRef.current.seek());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (!howlRef.current) return;

    if (isPlaying) {
      howlRef.current.pause();
    } else {
      setIsLoading(true);
      howlRef.current.play();
    }
  };

  const skipBackward = () => {
    if (!howlRef.current) return;
    const newSeek = Math.max(0, howlRef.current.seek() - 15);
    howlRef.current.seek(newSeek);
  };

  const skipForward = () => {
    if (!howlRef.current) return;
    const newSeek = Math.min(duration, howlRef.current.seek() + 15);
    howlRef.current.seek(newSeek);
  };

  const handleSeek = (value: number[]) => {
    if (!howlRef.current) return;
    howlRef.current.seek(value[0]);
    setSeek(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (howlRef.current) {
      howlRef.current.volume(newVolume);
    }
  };

  const toggleMute = () => {
    if (!howlRef.current) return;

    if (isMuted) {
      howlRef.current.volume(volume);
      setIsMuted(false);
    } else {
      howlRef.current.volume(0);
      setIsMuted(true);
    }
  };

  const downloadAudio = () => {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = `${title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareToWhatsApp = () => {
    const message = encodeURIComponent(
      `${currentLanguage === 'he' ? 'שיעור מוקלט:' : 'Shiur enregistré:'} ${title}\n\n` +
      `${currentLanguage === 'he' ? 'האזינו כאן:' : 'Écoutez ici:'} ${window.location.href}`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-200 p-6 ${className}`}>
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        {author && (
          <p className="text-sm text-gray-600">{author}</p>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <Slider
          value={[seek]}
          max={duration}
          step={1}
          onValueChange={handleSeek}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatTime(seek)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        {/* Playback Controls */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={skipBackward}
            className="p-2"
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          
          <Button
            onClick={togglePlayPause}
            disabled={isLoading}
            className="px-6"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={skipForward}
            className="p-2"
          >
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMute}
            className="p-2"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          
          <Slider
            value={[isMuted ? 0 : volume]}
            max={1}
            step={0.1}
            onValueChange={handleVolumeChange}
            className="w-20"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={downloadAudio}
            className="p-2"
          >
            <Download className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={shareToWhatsApp}
            className="p-2"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Status */}
      <div className="text-center text-sm text-gray-500">
        {isLoading && (currentLanguage === 'he' ? 'טוען...' : 'Chargement...')}
        {!isLoading && !isPlaying && (currentLanguage === 'he' ? 'מוכן להאזנה' : 'Prêt à écouter')}
        {isPlaying && (currentLanguage === 'he' ? 'מנגן' : 'En cours de lecture')}
      </div>
    </div>
  );
}
