import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import YoutubeIframe from "../common/YoutubeIFrame";
import AnimatedBorderTrail from "../common/AnimatedBorderTrail";

const HeroYotubeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src="/images/hero.svg"
          alt="hero image"
          className="hover:cursor-pointer w-[393px] h-[278px] lg:w-[1252px] lg:h-[668px]"
          width={393}
          height={278}
        />
      </DialogTrigger>
      <DialogContent className="p-2 min-w-full md:min-w-[calc(100vw-800px)]">
        <AnimatedBorderTrail trailSize="lg">
          <YoutubeIframe
            videoId="AVAR04vHdnY"
            autoPlay
            title="Welcome to Attio"
          />
        </AnimatedBorderTrail>
      </DialogContent>
    </Dialog>
  );
};

export default HeroYotubeModal;
