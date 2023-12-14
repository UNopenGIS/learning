import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
// import tutorials from '../tutorials.json';

import Translate, {translate} from '@docusaurus/Translate';

const tutorials = [
  {
    id: 'maplibre-gl-js',
    title: 'MapLibre GL JS',
    link: 'tutorials/maplibre',
    description: 'Get started with MapLibre GL JS.'
  },
  {
    id: 'geojson-io',
    title: 'GeoJson.io',
    link: 'tutorials/geojson',
    description: 'Learn how to use GeoJson.io.'
  }
];
function TutorialCards() {
  return (
    <div className={styles.tutorialCards}>
      {tutorials.map((tutorial, idx) => (
        <div 
          key={idx} 
          className={styles.tutorialCard} 
          onClick={() => window.location.href = tutorial.link}
        >
          <div className={styles.cardContent}>
            <h2><Translate>{tutorial.title}</Translate></h2>
            <p><Translate>{tutorial.description}</Translate></p>
            <div className={styles.readMore}><Translate>Read More</Translate></div>
          </div>
        </div>
      ))}
    </div>
  );
}
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate>UN Smart Maps Learning Hub</Translate>
        </Heading>
        <p className="hero__subtitle"><Translate>Keep learning open for a better world</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            <Translate>Get started ✏️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function ChallengeCards() {
  // Fetch or define your challenges data here
  // Map over your challenges and return a card for each one
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn to smart map here! <head />">
      <HomepageHeader />
      <main>
        <TutorialCards />
        <ChallengeCards />
      </main>
    </Layout>
  );
}