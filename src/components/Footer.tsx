import React from 'react';
import { Footer } from 'rk-designsystem';

export const FooterDefaultExample = () => {
  return <Footer />;
};

export const FooterPrimaryExample = () => {
  return (
    <Footer
      data-color="primary"
      showPrimaryLogo={true}
      showCrossCorners={true}
      shortcutsLinks={[
        { label: 'Om oss', href: '#' },
        { label: 'Kontakt', href: '#' },
        { label: 'Personvern', href: '#' },
      ]}
      linksLinks={[
        { label: 'Bli frivillig', href: '#' },
        { label: 'Støtt oss', href: '#' },
        { label: 'Nyheter', href: '#' },
      ]}
    />
  );
};

export const FooterAdditionalExample = () => {
  return (
    <Footer
      data-color="additional"
      showPrimaryLogo={true}
      showCrossCorners={true}
      shortcutsLinks={[
        { label: 'Om oss', href: '#' },
        { label: 'Kontakt', href: '#' },
      ]}
      linksLinks={[
        { label: 'Bli frivillig', href: '#' },
        { label: 'Støtt oss', href: '#' },
      ]}
    />
  );
};

export const FooterNeutralExample = () => {
  return (
    <Footer
      data-color="neutral"
      showPrimaryLogo={true}
      shortcutsLinks={[
        { label: 'Lenke 1', href: '#' },
        { label: 'Lenke 2', href: '#' },
      ]}
      linksLinks={[
        { label: 'Lenke 3', href: '#' },
        { label: 'Lenke 4', href: '#' },
      ]}
    />
  );
};

export const FooterWithNewsletterExample = () => {
  const handleNewsletterSubmit = (email: string) => {
    console.log('Newsletter signup:', email);
  };

  return (
    <Footer
      data-color="primary"
      showPrimaryLogo={true}
      showCrossCorners={true}
      newsletterDescription="Meld deg på vårt nyhetsbrev for å holde deg oppdatert."
      newsletterPlaceholder="Din e-postadresse"
      newsletterButtonText="Meld på"
      newsletterConsentText={
        <span>
          Ved å melde deg på godtar du våre <a href="#">vilkår</a>.
        </span>
      }
      onNewsletterSubmit={handleNewsletterSubmit}
      shortcutsLinks={[
        { label: 'Om oss', href: '#' },
        { label: 'Kontakt', href: '#' },
      ]}
      linksLinks={[
        { label: 'Bli frivillig', href: '#' },
        { label: 'Støtt oss', href: '#' },
      ]}
    />
  );
};

export const FooterWithoutNewsletterExample = () => {
  return (
    <Footer
      data-color="primary"
      showPrimaryLogo={true}
      hideNewsletter={true}
      shortcutsLinks={[
        { label: 'Om oss', href: '#' },
        { label: 'Kontakt', href: '#' },
      ]}
      linksLinks={[
        { label: 'Bli frivillig', href: '#' },
        { label: 'Støtt oss', href: '#' },
      ]}
    />
  );
};

export const FooterWithContactInfoExample = () => {
  return (
    <Footer
      data-color="primary"
      showPrimaryLogo={true}
      showCrossCorners={true}
      visitingAddress={['Hausmanns gate 7', '0186 Oslo']}
      organizationNumber="983 645 372"
      email="post@rodekors.no"
      shortcutsTitle="Snarveier"
      linksTitle="Lenker"
      shortcutsLinks={[
        { label: 'Om oss', href: '#' },
        { label: 'Kontakt', href: '#' },
        { label: 'Personvern', href: '#' },
      ]}
      linksLinks={[
        { label: 'Bli frivillig', href: '#' },
        { label: 'Støtt oss', href: '#' },
        { label: 'Nyheter', href: '#' },
      ]}
    />
  );
};

export const FooterWithSlotExample = () => {
  return (
    <Footer
      data-color="primary"
      showPrimaryLogo={true}
      shortcutsLinks={[
        { label: 'Om oss', href: '#' },
        { label: 'Kontakt', href: '#' },
      ]}
      linksLinks={[
        { label: 'Bli frivillig', href: '#' },
        { label: 'Støtt oss', href: '#' },
      ]}
      whiteSectionSlot={
        <div>
          <p>Tilpasset innhold i hvit seksjon</p>
        </div>
      }
    />
  );
};

export const FooterFullExample = () => {
  return (
    <Footer
      data-color="primary"
      showPrimaryLogo={true}
      primaryLogoAlt="Røde Kors Logo"
      showCrossCorners={true}
      newsletterDescription="Hold deg oppdatert med nyhetsbrevet vårt."
      newsletterPlaceholder="E-post"
      newsletterButtonText="Abonner"
      onNewsletterSubmit={(email) => console.log('Subscribed:', email)}
      shortcutsTitle="Snarveier"
      linksTitle="Lenker"
      shortcutsLinks={[
        { label: 'Om oss', href: '#' },
        { label: 'Kontakt', href: '#' },
        { label: 'Personvern', href: '#' },
        { label: 'Cookies', href: '#' },
      ]}
      linksLinks={[
        { label: 'Bli frivillig', href: '#' },
        { label: 'Støtt oss', href: '#' },
        { label: 'Nyheter', href: '#' },
        { label: 'Arrangementer', href: '#' },
      ]}
      visitingAddress={['Hausmanns gate 7', '0186 Oslo']}
      organizationNumber="983 645 372"
      email="post@rodekors.no"
    />
  );
};
