"use client"

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'motion/react';

interface Project {
  name: string;
  role?: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  image?: string;
  images?: string[];
}

export function ProjectsSection() {
  const t = useTranslations('projects');

  const getTechnologies = (projectIndex: number): string[] => {
    const techs: string[] = [];
    for (let techIndex = 0; techIndex < 10; techIndex++) {
      try {
        const tech = t(`items.${projectIndex}.tech${techIndex}`);
        if (tech && !tech.includes('items.') && !tech.includes('tech')) {
          techs.push(tech);
        }
      } catch {
        break;
      }
    }
    return techs;
  };

  const projects: Project[] = [];

  try {
    projects.push({
      name: t('items.0.name'),
      role: t('items.0.role'),
      description: t('items.0.description'),
      technologies: getTechnologies(0),
      link: t('items.0.link'),
      github: t('items.0.github'),
      image: t('items.0.image'),
    });
  } catch {}

  try {
    const lacesImages: string[] = [];
    try { lacesImages.push(t('items.1.image0')); } catch {}
    try { lacesImages.push(t('items.1.image1')); } catch {}
    try { lacesImages.push(t('items.1.image2')); } catch {}

    const lacesTechs: string[] = [];
    try { lacesTechs.push(t('items.1.tech0')); } catch {}
    try { lacesTechs.push(t('items.1.tech1')); } catch {}
    try { lacesTechs.push(t('items.1.tech2')); } catch {}
    try { lacesTechs.push(t('items.1.tech3')); } catch {}
    try { lacesTechs.push(t('items.1.tech4')); } catch {}
    try { lacesTechs.push(t('items.1.tech5')); } catch {}
    try { lacesTechs.push(t('items.1.tech6')); } catch {}
    try { lacesTechs.push(t('items.1.tech7')); } catch {}

    projects.push({
      name: t('items.1.name'),
      role: t('items.1.role'),
      description: t('items.1.description'),
      technologies: lacesTechs,
      link: t('items.1.link'),
      github: t('items.1.github'),
      images: lacesImages.length > 0 ? lacesImages : undefined,
    });
  } catch {}

  try {
    projects.push({
      name: t('items.2.name'),
      role: t('items.2.role'),
      description: t('items.2.description'),
      technologies: getTechnologies(2),
      link: t('items.2.link'),
      github: t('items.2.github'),
      image: t('items.2.image'),
    });
  } catch {}

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/50">
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                <Card className="flex flex-col hover:shadow-lg transition-shadow overflow-hidden h-full">
                  {project.image && !project.images && (
                    <div className="relative w-full h-48 bg-muted">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {project.images && project.images.length > 0 && (
                    <div className="w-full bg-muted">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.images.map((img, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <div className="relative w-full h-48">
                                <Image
                                  src={img}
                                  alt={`${project.name} - Image ${imgIndex + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    {project.role && (
                      <p className="text-sm font-medium text-primary">{project.role}</p>
                    )}
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">{t('technologies')}:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.link !== '#' && (
                      <Button asChild variant="default" className="flex-1">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {t('viewProject')}
                        </a>
                      </Button>
                    )}
                    {project.github !== '#' && (
                      <Button asChild variant="outline" className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          {t('viewCode')}
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
