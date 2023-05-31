'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/variants/fade-in';
import Link from 'next/link';

type Props = {};

export default function IntroText({}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className="px-8">
        <motion.h1
          className="font-display text-stone-400 text-3xl tracking-[-0.02em] drop-shadow-sm md:text-6xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Very Dashing Pics</Balancer>
        </motion.h1>
        <motion.h1
          className="font-display text-zinc-800  text-3xl tracking-[-0.02em] drop-shadow-sm md:text-6xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            When a tech fanatic and a creative become roommates. welcome to our
            journey.
          </Balancer>
        </motion.h1>
      </div>
      <motion.div
        className="mx-auto mt-6 flex items-center justify-center space-x-5"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      ></motion.div>

      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="mt-6 space-x-4 flex justify-center"
      >
        {/* <Badge variant="secondary">Accountless</Badge>
      <Badge variant="secondary">Permanent</Badge>
      <Badge variant="secondary">Instant</Badge> */}
      </motion.div>
    </motion.div>
  );
}
