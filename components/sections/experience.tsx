"use client"

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin } from 'lucide-react';

interface Job {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
}

export function ExperienceSection() {
  const t = useTranslations('experience');

  // Get jobs from translations
  const jobs: Job[] = [
    {
      company: t('jobs.0.company'),
      position: t('jobs.0.position'),
      location: t('jobs.0.location'),
      period: t('jobs.0.period'),
      description: [
        t('jobs.0.description.0'),
        t('jobs.0.description.1'),
        t('jobs.0.description.2'),
        t('jobs.0.description.3'),
        t('jobs.0.description.4'),
        t('jobs.0.description.5'),
      ]
    },
    {
      company: t('jobs.1.company'),
      position: t('jobs.1.position'),
      location: t('jobs.1.location'),
      period: t('jobs.1.period'),
      description: [
        t('jobs.1.description.0'),
        t('jobs.1.description.1'),
        t('jobs.1.description.2'),
        t('jobs.1.description.3'),
        t('jobs.1.description.4'),
      ]
    },
    {
      company: t('jobs.2.company'),
      position: t('jobs.2.position'),
      location: t('jobs.2.location'),
      period: t('jobs.2.period'),
      description: [
        t('jobs.2.description.0'),
        t('jobs.2.description.1'),
        t('jobs.2.description.2'),
        t('jobs.2.description.3'),
        t('jobs.2.description.4'),
        t('jobs.2.description.5'),
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('title')}
            </h2>
          </div>

          <div className="w-full max-w-4xl space-y-8">
            {jobs.map((job, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{job.position}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground">
                        {job.company}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <Briefcase className="h-3 w-3" />
                          {job.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
