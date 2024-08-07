import Video from 'next-video';
import advert from '@/videos/sbs.mp4';
import thumbnail from "@/videos/adv-thumbnail.png"
function Ad() {
  return (
    <Video
    poster={thumbnail.src} 
    src={advert} />
  )
}

export default Ad