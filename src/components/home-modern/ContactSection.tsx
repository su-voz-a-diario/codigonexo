'use client';

import { useRef, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import HomeContactForm from './HomeContactForm';
import HomePrivacyModal from './HomePrivacyModal';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  email: string;
  phoneLabel: string;
  phoneHref: string;
  location: string;
}

export default function ContactSection({ email, phoneLabel, phoneHref, location }: ContactSectionProps) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const privacyTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.formPanel}>
          <HomeContactForm
            onOpenPrivacy={() => setIsPrivacyOpen(true)}
            privacyTriggerRef={privacyTriggerRef}
          />
        </div>
        <div className={styles.infoPanel}>
          <div className={styles.infoItem}>
            <div className={styles.icon} aria-hidden="true">
              <Mail size={22} />
            </div>
            <div>
              <h3>Email</h3>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.icon} aria-hidden="true">
              <Phone size={22} />
            </div>
            <div>
              <h3>Teléfono</h3>
              <a href={phoneHref}>{phoneLabel}</a>
              <p>También puedes escribirnos por WhatsApp.</p>
            </div>
          </div>
          <div className={styles.location}>
            <MapPin size={24} aria-hidden="true" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <HomePrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        restoreFocusRef={privacyTriggerRef}
      />
    </>
  );
}
