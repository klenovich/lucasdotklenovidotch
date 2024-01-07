import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Page: NextPage = () => {
  const [currentFeature, setCurrentFeature] = useState<number>(0);
  const features = ['feature 1', 'feature 2', 'feature 3', 'feature 4'];

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        setCurrentFeature((prevCurrentFeature) => Math.max(prevCurrentFeature - 1, 0));
      } else if (event.deltaY > 0) {
        setCurrentFeature((prevCurrentFeature) => Math.min(prevCurrentFeature + 1, features.length - 1));
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll);
  }, [features.length]);

  return (
    <div className={styles.container}>
      <div
        className={styles.leftPanel}
        style={{ flex: currentFeature === 0 ? '1' : '0.25' }}
      >
        <h1>fund.codes</h1>
        {/* Other content */}
      </div>
      <div className={styles.rightPanel}>
        {/* Feature content */}
      </div>
    </div>
  );
};

export default Page;