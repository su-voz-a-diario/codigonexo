import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import LogoCloud from './LogoCloud';
import TechStackStrip from './TechStackStrip';
import styles from './HomeHero.module.css';

interface HomeHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  brands: string[];
  technologies: string[];
}

export default function HomeHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  brands,
  technologies,
}: HomeHeroProps) {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.backgroundPattern} aria-hidden="true" />
      <div className={styles.content}>
        <Image
          src="/assets/images/logo-solo.webp"
          alt="Código Nexo"
          width={3932}
          height={3627}
          priority
          sizes="(max-width: 768px) 112px, 144px"
          className={styles.logo}
        />
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 id="home-hero-title" className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <Link href={primaryCta.href} className={styles.primaryCta}>
            {primaryCta.label}
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <Link href={secondaryCta.href} className={styles.secondaryCta}>
            {secondaryCta.label}
          </Link>
        </div>
        <div className={styles.supporting}>
          <LogoCloud label="Referencias y proyectos mencionados" items={brands} />
          <TechStackStrip label="Ecosistema tecnológico" items={technologies} />
        </div>
      </div>
      <Link href="#servicios" className={styles.scrollCue} aria-label="Ir a servicios">
        <ChevronDown size={28} aria-hidden="true" />
      </Link>
    </section>
  );
}
