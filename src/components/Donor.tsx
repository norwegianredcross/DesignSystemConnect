import React from 'react';
import { Donor } from 'rk-designsystem';

export const DonorDefaultExample = () => {
  return <Donor />;
};

export const DonorPrimaryExample = () => {
  return (
    <Donor
      data-color="primary"
      amounts={[
        { value: 200, label: '200 kr' },
        { value: 500, label: '500 kr' },
        { value: 1000, label: '1 000 kr' },
      ]}
      defaultAmount={500}
      oneTimeLabel="Engangsbeløp"
      monthlyLabel="Månedlig"
      customAmountPlaceholder="Valgfritt beløp"
      amountLabel="Velg beløp"
      impactMessage="Med {amount} kr kan du hjelpe noen i nød"
      vippsButtonLabel="Betal med"
      currencySuffix="kr"
      showVippsButton={true}
      showImpactMessage={true}
      heartVariant="filled"
      onVippsClick={(amount, frequency) =>
        console.log(`Vipps: ${amount} (${frequency})`)
      }
      onAmountChange={(amount, frequency) =>
        console.log(`Amount changed: ${amount} (${frequency})`)
      }
    />
  );
};

export const DonorNeutralExample = () => {
  return (
    <Donor
      data-color="neutral"
      amounts={[
        { value: 100, label: '100 kr' },
        { value: 250, label: '250 kr' },
        { value: 500, label: '500 kr' },
      ]}
      defaultAmount={250}
      showVippsButton={true}
      showAvtalegiroLink={true}
      avtalegiroLabel="Opprett AvtaleGiro"
      avtalegiroHref="#"
      showImpactMessage={true}
      heartVariant="outlined"
      impactMessage="Ditt bidrag på {amount} kr gjør en forskjell"
    />
  );
};

export const DonorMinimalExample = () => {
  return (
    <Donor
      amounts={[
        { value: 100, label: '100 kr' },
        { value: 300, label: '300 kr' },
        { value: 500, label: '500 kr' },
      ]}
      showVippsButton={false}
      showAvtalegiroLink={false}
      showImpactMessage={false}
    />
  );
};
