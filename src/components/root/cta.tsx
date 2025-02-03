import { Heart } from 'lucide-react'
import { AnimationPlaybackControls, motion, useAnimate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Cta = () => {
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        animation.current = animate(
            scope.current, { x: "-50%"}, {duration : 30, ease : "linear", repeat : Infinity}
        )
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered){
                animation.current.speed = 0.5;
            }
            else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);

  return (
    <motion.section className='py-24'>
        <div className='overflow-x-clip p-4 flex'>
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                ref={scope}
                className='flex group gap-16 pr-16 text-6xl md:text-8xl font-medium flex-none cursor-pointer'>
                    {Array.from({length : 10}).map((_, con) => (
                        <div key={con} className='flex items-center gap-16'>
                            <Heart className="text-primary fill-primary h-[2.5rem] w-[2.5rem]" />
                            <span className='group-hover:text-primary'>Try it for free</span>
                        </div>
                    ))}
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Cta