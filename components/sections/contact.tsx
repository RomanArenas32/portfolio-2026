"use client"

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactSection() {
  const t = useTranslations('contact');

  const contactInfo = [
    {
      icon: Mail,
      label: t('email'),
      value: 'roman.ea3232@gmail.com',
      href: 'mailto:roman.ea3232@gmail.com'
    },
    {
      icon: Phone,
      label: t('phone'),
      value: '+54 2281 568550',
      href: 'tel:+542281568550'
    },
    {
      icon: MapPin,
      label: t('location'),
      value: t('locationValue'),
      href: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Roman Emiliano Arenas',
      href: 'https://www.linkedin.com/in/roman-emiliano-arenas-55b8561aa/'
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-12">
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                      {info.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  {t('sendMessage')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    I&apos;m currently available for freelance work and full-time opportunities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:roman.ea3232@gmail.com"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                    <a
                      href="https://www.linkedin.com/in/roman-emiliano-arenas-55b8561aa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
