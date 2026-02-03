import React from 'react';
import { Header } from 'rk-designsystem';

export const HeaderDefaultExample = () => {
  return <Header />;
};

export const HeaderPrimaryExample = () => {
  return (
    <Header
      data-color="primary"
      showHeaderExtension={true}
      showNavItems={true}
      navItems={[
        { label: 'Hjem', href: '#' },
        { label: 'Om oss', href: '#' },
        { label: 'Tjenester', href: '#' },
        { label: 'Kontakt', href: '#' },
      ]}
    />
  );
};

export const HeaderNeutralExample = () => {
  return (
    <Header
      data-color="neutral"
      showHeaderExtension={true}
      showNavItems={true}
      navItems={[
        { label: 'Hjem', href: '#' },
        { label: 'Om oss', href: '#' },
        { label: 'Kontakt', href: '#' },
      ]}
    />
  );
};

export const HeaderWithSearchExample = () => {
  return (
    <Header
      data-color="primary"
      showHeaderExtension={true}
      showSearch={true}
      showNavItems={true}
      navItems={[
        { label: 'Hjem', href: '#' },
        { label: 'Om oss', href: '#' },
      ]}
    />
  );
};

export const HeaderWithLoginExample = () => {
  return (
    <Header
      data-color="primary"
      showHeaderExtension={true}
      showLogin={true}
      showUser={true}
      showNavItems={true}
      navItems={[
        { label: 'Hjem', href: '#' },
        { label: 'Om oss', href: '#' },
      ]}
    />
  );
};

export const HeaderWithCtaExample = () => {
  return (
    <Header
      data-color="primary"
      showHeaderExtension={true}
      showCta={true}
      ctaLabel="Bli frivillig"
      onCtaClick={() => console.log('CTA clicked')}
      showNavItems={true}
      navItems={[
        { label: 'Hjem', href: '#' },
        { label: 'Om oss', href: '#' },
      ]}
    />
  );
};

export const HeaderWithThemeToggleExample = () => {
  return (
    <Header
      data-color="primary"
      showHeaderExtension={true}
      showThemeToggle={true}
      showModeToggle={true}
      showNavItems={true}
      navItems={[
        { label: 'Hjem', href: '#' },
        { label: 'Om oss', href: '#' },
      ]}
    />
  );
};

export const HeaderWithLanguageSwitchExample = () => {
  return (
    <Header
      data-color="primary"
      showHeaderExtension={true}
      showLanguageSwitch={true}
      showNavItems={true}
      navItems={[
        { label: 'Hjem', href: '#' },
        { label: 'Om oss', href: '#' },
      ]}
    />
  );
};

export const HeaderWithSecondaryLogoExample = () => {
  return (
    <Header
      data-color="primary"
      showHeaderExtension={true}
      secondaryLogo={true}
      secondaryLogoAlt="Partner Logo"
      showNavItems={true}
      navItems={[
        { label: 'Hjem', href: '#' },
        { label: 'Om oss', href: '#' },
      ]}
    />
  );
};

export const HeaderWithMenuButtonExample = () => {
  return (
    <Header
      data-color="primary"
      showHeaderExtension={true}
      showMenuButton={true}
      showNavItems={true}
      navItems={[
        { label: 'Hjem', href: '#' },
        { label: 'Om oss', href: '#' },
        { label: 'Tjenester', href: '#' },
        { label: 'Kontakt', href: '#' },
      ]}
    />
  );
};

export const HeaderWithActivePageExample = () => {
  const [activePage, setActivePage] = React.useState('Hjem');

  return (
    <Header
      data-color="primary"
      showHeaderExtension={true}
      activePage={activePage}
      setPage={setActivePage}
      showNavItems={true}
      navItems={[
        { label: 'Hjem', href: '#' },
        { label: 'Om oss', href: '#' },
        { label: 'Tjenester', href: '#' },
        { label: 'Kontakt', href: '#' },
      ]}
    />
  );
};

export const HeaderFullExample = () => {
  const [activePage, setActivePage] = React.useState('Hjem');

  return (
    <Header
      data-color="primary"
      showHeaderExtension={true}
      activePage={activePage}
      setPage={setActivePage}
      showUser={true}
      showSearch={true}
      showLogin={true}
      showCta={true}
      ctaLabel="Støtt oss"
      onCtaClick={() => console.log('CTA clicked')}
      showThemeToggle={true}
      showModeToggle={true}
      showLanguageSwitch={true}
      showMenuButton={true}
      showNavItems={true}
      navItems={[
        { label: 'Hjem', href: '#' },
        { label: 'Om oss', href: '#' },
        { label: 'Tjenester', href: '#' },
        { label: 'Aktuelt', href: '#' },
        { label: 'Kontakt', href: '#' },
      ]}
    />
  );
};
