import { useRef } from "react";

const useAudioElement = () => {
  const audioEl = useRef<HTMLAudioElement | null>();

  const init = () => {
    const element = document.getElementById("track-player") as HTMLAudioElement;

    audioEl.current = element;
  };

  const play = (src?: string) => {
    init();
    audioEl.current && src && (audioEl.current.src = src);
    audioEl.current?.play();
  };

  const pause = () => {
    init();
    audioEl.current?.pause();
  };

  const rewind = () => {
    init();
    if (!audioEl.current) return;
    audioEl.current.pause();
    audioEl.current.currentTime = audioEl.current.currentTime - 5;
    audioEl.current.play();
  };

  const forward = () => {
    init();
    if (!audioEl.current) return;
    audioEl.current.pause();
    audioEl.current.currentTime = audioEl.current.currentTime + 5;
    audioEl.current.play();
  };

  return {
    play,
    pause,
    rewind,
    forward,
  };
};

export default useAudioElement;
