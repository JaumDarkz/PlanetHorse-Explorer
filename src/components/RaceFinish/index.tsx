// src/components/game/RaceFinish/index.tsx
import React from 'react';
import styles from './styles.module.scss';
import { Horse } from '@/domain/models/Horse';
import CountUp from 'react-countup';
import { HorseResults } from '../../views/modals/RaceStart'

interface Props {
  horseResult: HorseResults;
  horse: Horse | boolean;
}

const RaceFinish: React.FC<Props> = ({ horseResult, horse }) => {

  // Use the field your API actually returns:
  const finalReward = horseResult.tokenReward;

  return (
    <div className={styles.raceResultContent}>
    </div>
  );
};

export default RaceFinish;
