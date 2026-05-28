import { useEffect, useRef } from "react";

type video = {
    videoUrl: any
}

const VideoBg = ({videoUrl}: video) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(videoRef.current){
            videoRef.current.playbackRate = 0.6
        }
    })
    return(
        <>
        <div className='relative w-screen h-screen overflow-hidden'>
            <video
            ref={videoRef} 
            autoPlay  
            muted 
            playsInline 
            className='fixed top-0 left-0 w-screen h-screen object-cover -z-10'>
                <source src={videoUrl} type='video/mp4' />
                Seu navegador não suporta vídeos
            </video>
      </div>
      </>
    )
}

export default VideoBg;