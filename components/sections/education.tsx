"use client"

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Languages } from 'lucide-react';

export function EducationSection() {
  const t = useTranslations('education');
  const tAchievements = useTranslations('achievements');

  const certifications = [
    t('certifications.items.0'),
    t('certifications.items.1'),
    t('certifications.items.2'),
    t('certifications.items.3'),
    t('certifications.items.4'),
  ];

  const achievements = [
    tAchievements('items.0'),
    tAchievements('items.1'),
    tAchievements('items.2'),
    tAchievements('items.3'),
    tAchievements('items.4'),
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* Education */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  {t('sectionTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">{t('institutions.0.name')}</p>
                    <p className="text-muted-foreground">{t('institutions.0.description')}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">{t('institutions.1.name')}</p>
                    <p className="text-muted-foreground">{t('institutions.1.description')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-primary" />
                  {t('languages.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{t('languages.spanish')}</span>
                  <Badge>{t('languages.native')}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{t('languages.english')}</span>
                  <Badge>{t('languages.advanced')}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {t('certifications.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {tAchievements('title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
