'use client';

import React from 'react';
import Navbar from '@/components/navbar';
import IntroText from '@/components/intro-text';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const images = [
    '/landing.jpg',
    '/landing1.jpg',
    '/landing2.jpg',
    '/landing3.jpg',
  ];
  const captions = [
    'Caption for landing',
    'Caption for landing1',
    'Caption for landing2',
    'Caption for landing3',
  ];

  const totalCount = images.length; // update based on the total number of images

  const [index, setIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalCount);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalCount]);

  return (
    <div>
      <Navbar />
      <div className="bg-white overflow-hidden">
        <div className="relative isolate pt-14">
          <div className="py-24 sm:py-32 lg:pb-40">
            <div>
              <div>
                <div>
                  <IntroText />
                </div>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <motion.div
                    className="rounded-md"
                    initial={{ y: 100, opacity: 0 }} // Image starts from 100px below and fully transparent
                    animate={{ y: 0, opacity: 1 }} // Image ends at its original position and fully opaque
                    transition={{ type: 'spring', stiffness: 50, damping: 20 }} // transition specifications
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <Image
                          src={images[index]}
                          alt=""
                          width={1016}
                          height={150}
                          className="w-full h-[50rem] object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-between px-12 mt-6">
                      {/* <h1 className="text-3xl">Very Dashing Pics</h1> */}
                      <AnimatePresence mode="wait">
                        <motion.h1
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-3xl"
                        >
                          {captions[index]}
                        </motion.h1>
                      </AnimatePresence>
                      <div className="flex">
                        <motion.span
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="text-3xl flex"
                        >
                          {index + 1}
                        </motion.span>
                        <span className="text-3xl">/{totalCount}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-12">
                <Image src="/grid1.jpg" alt="" width={300} height={300} />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
