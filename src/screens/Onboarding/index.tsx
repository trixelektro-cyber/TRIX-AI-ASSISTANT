import React, { useState } from 'react';
import { View } from 'react-native';
import Intro from './Intro';
import Permissions from './Permissions';
import Finish from './Finish';

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(0, s - 1));
  const finish = () => {
    // TODO: persist onboarding completion flag
    setStep(0);
  };

  return (
    <View style={{ flex: 1 }}>
      {step === 0 && <Intro onNext={next} />}
      {step === 1 && <Permissions onNext={next} onBack={back} />}
      {step === 2 && <Finish onFinish={finish} />}
    </View>
  );
}
