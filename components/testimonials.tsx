import { motion } from "motion/react";
import VideoCard from "./ui/video-card";

export default function TestimonialSection() {
  const featuredVideo = {
    src: "https://res.cloudinary.com/dtw3o2jxc/video/upload/v1772367229/manu-paaji-itshover-yt_uiqsor.mp4",
    title: "Its Hover Feature by Manu Arora",
    aspectRatio: "video" as const,
    delay: 0.2,
  };

  const featuredReel = {
    src: "https://res.cloudinary.com/dtw3o2jxc/video/upload/v1772367229/manu-paaji-itshover-reel_q854ta.mp4",
    title: "Its Hover Reel Showcase",
    aspectRatio: "reel" as const,
    delay: 0.1,
  };

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center space-y-4 text-center"
        >
          <div className="border-primary/20 bg-primary/5 text-primary rounded-full border px-4 py-1.5 text-xs font-medium tracking-wider uppercase">
            Community Love
          </div>
          <h2
            className="font-serif text-5xl md:text-6xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl px-4 text-lg">
            Join thousands of creators who are bringing their icons to life with
            intent.
          </p>
        </motion.div>

        {/* Featured Videos Row */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_2fr]">
          <VideoCard
            src={featuredReel.src}
            title={featuredReel.title}
            aspectRatio={featuredReel.aspectRatio}
            delay={featuredReel.delay}
            className="shadow-primary/5 shadow-2xl"
          />
          <VideoCard
            src={featuredVideo.src}
            title={featuredVideo.title}
            aspectRatio={featuredVideo.aspectRatio}
            delay={featuredVideo.delay}
            className="shadow-primary/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
