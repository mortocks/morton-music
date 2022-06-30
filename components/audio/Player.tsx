import React, { useEffect, useRef, useCallback, useState, SyntheticEvent } from 'react';
import WaveSurfer from 'wavesurfer.js';


type WaveformProps = {
  url: string
}

const Waveform = ({ url }: WaveformProps) => {  



  const waveform = useRef<WaveSurfer>();
  const container = useRef<HTMLDivElement>(null);
  
  const [isLoaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {

      if (waveform.current) {
        waveform.current.destroy()
      }
  
      setLoaded(false)

      waveform.current = WaveSurfer.create({
        barWidth: 3,
        barGap: 1,
        barRadius: 1,
        cursorWidth: 1,
        container: container.current!,
        backend: 'WebAudio',
        height: 80,
        progressColor: '#F47121',
        responsive: true,
        waveColor: '#EFEFEF',
        cursorColor: 'transparent',
      });


      /**
      * Events
      */
      waveform.current?.on('ready', function () {
        setLoaded(true)
        if (isPlaying) {
          waveform.current?.play()
        }
      });
      waveform.current?.on('finish', function () {
        setIsPlaying(waveform.current?.isPlaying() || false)
      });
      waveform.current?.on('play', function () {
        setIsPlaying(waveform.current?.isPlaying() || true)
      });
      waveform.current?.on('pause', function () { 
        setIsPlaying(waveform.current?.isPlaying() || false)
      });





    /**
    * Load
    */
    if (url && waveform.current) {
      console.log('ok', waveform.current)
      waveform.current?.load(url);
   }


    
  }, [url, container])

  useEffect(() => {
    return () => {
      waveform.current?.pause()
      waveform.current?.destroy()
    }
  }, [])


  const playPause = useCallback(() => {
    waveform.current?.playPause();
  }, [waveform])

  const onVolume = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    waveform.current?.setVolume(parseFloat(e.currentTarget?.value));
  }, [waveform])


  const kill = () => {
    waveform.current?.destroy()
  }


    return (
      <div>
        { isLoaded && 
          <>
            <button onClick={playPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <input type="range" min="0" max="1" step={0.01} className="range" onChange={onVolume} />
          </>
        }
          <div ref={container} style={{height: 80, width: 400 }} />
        </div>
    );
};

export default Waveform;