import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  cryptoFraudLegalSupportData,
  cryptoFraudLegalSupportMetadata,
} from '@/data/services/crypto-fraud-legal-support';

export const metadata = cryptoFraudLegalSupportMetadata;

export default function CryptoFraudLegalSupportPage() {
  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={cryptoFraudLegalSupportData} />
    </main>
  );
}
