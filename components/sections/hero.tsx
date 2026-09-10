"use client"

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  const t = useTranslations('hero');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {t('name')}
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              {t('title')}
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              {t('subtitle')}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          >
            <Button size="lg" onClick={scrollToContact}>
              {t('cta')}
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/ROMAN EMILIANO ARENAS.pdf" download="ROMAN_EMILIANO_ARENAS.pdf" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                {t('viewResume')}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
