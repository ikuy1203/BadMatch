import { useState } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import {
  getAllMatches,
  getTotalMatches,
  useMatchResult,
} from '@/hooks/useMatchResult.hook.ts';
import { cn } from '@/lib/utils.ts';

export const MatchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [match, setMatch] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');
  const courts = Number(searchParams.get('courts')) || 1;
  const players = Number(searchParams.get('players')) || 8;

  const { teamA, teamB } = useMatchResult(match, players, courts);
  const totalMatches = getTotalMatches(players);
  const displayMatch = totalMatches > 0 ? (match % totalMatches) + 1 : 0;

  const allMatchesList = getAllMatches(players);

  return (
    <>
      <div className="bg-bgColor flex h-screen w-screen flex-col items-center justify-center">
        <div className="text-fontColor flex h-1/6 items-center text-4xl underline">
          MATCH RESULT
        </div>
        <div
          className={cn(
            'flex w-screen flex-col items-center',
            viewMode === 'single' ? 'h-2/3' : 'h-5/6',
          )}
        >
          <div className="my-1">
            <Button
              variant="secondary"
              size="sm"
              className="mx-3"
              onClick={() => {
                setViewMode('single');
              }}
            >
              Single
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="mx-3"
              onClick={() => {
                setViewMode('all');
              }}
            >
              All
            </Button>
          </div>
          {viewMode === 'single' ? (
            <>
              <span className="text-fontColor text-lg">
                Match {displayMatch} / {totalMatches}
              </span>
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
            </>
          ) : (
            <MatchList allMatchesList={allMatchesList} />
          )}
        </div>
        {viewMode === 'single' && (
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
        )}
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

const MatchList: React.FC<{
  allMatchesList: {
    teamA: { player1: string; player2: string };
    teamB: { player1: string; player2: string };
  }[];
}> = ({
  allMatchesList,
}: {
  allMatchesList: {
    teamA: { player1: string; player2: string };
    teamB: { player1: string; player2: string };
  }[];
}) => {
  return (
    <div className="mt-1 h-5/6 overflow-y-scroll">
      {allMatchesList.map((match, index) => (
        <MatchCard
          key={`match-card-${index}`}
          matchNo={index + 1}
          teamA={match.teamA}
          teamB={match.teamB}
        />
      ))}
    </div>
  );
};

const MatchCard: React.FC<{
  teamA: { player1: string; player2: string };
  teamB: { player1: string; player2: string };
  matchNo: number;
}> = ({
  teamA,
  teamB,
  matchNo,
}: {
  teamA: { player1: string; player2: string };
  teamB: { player1: string; player2: string };
  matchNo: number;
}) => {
  return (
    <>
      <div className="bg-cardColor text-fontColor mt-3 flex flex-row items-center gap-3 rounded-xl p-3">
        <span className="text-md">{matchNo}:</span>
        <div className="text-md flex items-center gap-1">
          <span>{teamA.player1}</span>
          <span className="text-sm">&</span>
          <span>{teamA.player2}</span>
        </div>
        <span>vs</span>
        <div className="text-md flex items-center gap-1">
          <span>{teamB.player1}</span>
          <span className="text-sm">&</span>
          <span>{teamB.player2}</span>
        </div>
      </div>
    </>
  );
};
