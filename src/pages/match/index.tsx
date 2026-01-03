import { useState } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import { useMatchResult } from '@/hooks/useMatchResult.hook.ts';

export const MatchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [match, setMatch] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const courts = Number(searchParams.get('courts')) || 1;
  const players = Number(searchParams.get('players')) || 8;

  const { teamA, teamB } = useMatchResult(match, players, courts);

  console.log(`Courts: ${courts}, Players: ${players}`);

  return (
    <>
      <div className="bg-bgColor flex h-screen w-screen flex-col items-center justify-center">
        <div className="text-fontColor flex h-1/6 items-center text-4xl underline">
          MATCH RESULT
        </div>
        <div className="flex h-2/3 w-screen flex-col items-center">
          <span className="text-fontColor text-lg">Match {match + 1}</span>
          <PlayerCard
            playerName1={teamA.player1}
            playerName2={teamA.player2}
            teamName="Team A"
          />
          <PlayerCard
            playerName1={teamB.player1}
            playerName2={teamB.player2}
            teamName="Team B"
          />
        </div>
        <div className="flex h-1/6 w-screen items-center justify-center">
          <Button
            variant="secondary"
            size="lg"
            className="mx-3"
            onClick={() => {
              setIsProcessing(true);
              setMatch((prev) => (prev > 0 ? prev - 1 : prev));
              setTimeout(() => setIsProcessing(false), 200);
            }}
            disabled={isProcessing}
          >
            <AiOutlineCaretLeft />
            Prev Match
          </Button>
          <Button
            variant="default"
            size="lg"
            className="mx-3"
            disabled={isProcessing}
            onClick={() => {
              setIsProcessing(true);
              setMatch((prev) => prev + 1);
              setTimeout(() => setIsProcessing(false), 200);
            }}
          >
            <AiOutlineCaretRight />
            Next Match
          </Button>
        </div>
      </div>
    </>
  );
};

const PlayerCard: React.FC<{
  playerName1: string;
  playerName2: string;
  teamName: string;
}> = ({
  playerName1,
  playerName2,
  teamName,
}: {
  playerName1: string;
  playerName2: string;
  teamName: string;
}) => {
  return (
    <>
      <div className="bg-cardColor text-fontColor mt-3 flex w-4/5 flex-col items-center rounded-4xl py-3">
        <div className="text-2xl">{teamName}</div>
        <div className="my-1 text-5xl">{playerName1}</div>
        <div className="text-5xl">&</div>
        <div className="my-1 text-5xl">{playerName2}</div>
      </div>
    </>
  );
};
