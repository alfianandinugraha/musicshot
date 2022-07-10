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

  return {
    play,
    pause,
  };
};

export default useAudioElement;
