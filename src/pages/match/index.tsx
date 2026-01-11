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
      <div className="bg-bgColor flex min-h-dvh w-dvw flex-col items-center">
        <div className="text-fontColor flex shrink-0 items-center py-6 text-4xl tracking-wide underline">
          MATCH RESULT
        </div>
        <div
          className={cn(
            'flex min-h-0 w-full max-w-5xl flex-1 flex-col items-center gap-3 px-6',
            viewMode === 'single' ? 'overflow-y-auto' : 'overflow-hidden',
          )}
        >
          <div className="bg-cardColor my-2 flex items-center gap-3 rounded-full px-4 py-2 shadow-sm">
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
              <span className="text-fontColor text-sm tracking-wider uppercase">
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
          <div className="flex w-full items-center justify-center py-6">
            <div className="flex w-full max-w-5xl justify-center gap-6 px-6">
              <Button
                variant="secondary"
                size="lg"
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
      <div className="bg-cardColor text-fontColor mt-3 flex w-full max-w-3xl flex-col items-center rounded-4xl px-6 py-5 shadow-md">
        <div className="text-lg tracking-widest uppercase">{teamName}</div>
        <div className="my-1 text-4xl leading-tight">{playerName1}</div>
        <div className="text-3xl leading-tight">&</div>
        <div className="my-1 text-4xl leading-tight">{playerName2}</div>
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
    <div className="mt-1 h-[75dvh] w-full max-w-3xl overflow-auto px-4 pb-6">
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
      <div className="bg-cardColor text-fontColor mt-3 flex w-full flex-col gap-2 rounded-2xl px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:gap-4">
        <div className="flex items-center justify-between text-xs tracking-wider uppercase sm:justify-start sm:text-sm">
          <span>Match {matchNo}</span>
          <span className="sm:hidden">vs</span>
        </div>
        <div className="flex items-center gap-2 text-xs tracking-wider uppercase sm:text-sm">
          <span>Team A</span>
        </div>
        <div className="text-md flex flex-wrap items-center gap-2 leading-snug">
          <span className="rounded-full px-2 py-0.5 text-sm sm:text-base">
            {teamA.player1}
          </span>
          <span className="text-xs tracking-wider uppercase sm:text-sm">&</span>
          <span className="rounded-full px-2 py-0.5 text-sm sm:text-base">
            {teamA.player2}
          </span>
        </div>
        <span className="hidden text-sm tracking-wider uppercase sm:inline">
          vs
        </span>
        <div className="flex items-center gap-2 text-xs tracking-wider uppercase sm:text-sm">
          <span>Team B</span>
        </div>
        <div className="text-md flex flex-wrap items-center gap-2 leading-snug">
          <span className="rounded-full px-2 py-0.5 text-sm sm:text-base">
            {teamB.player1}
          </span>
          <span className="text-xs tracking-wider uppercase sm:text-sm">&</span>
          <span className="rounded-full px-2 py-0.5 text-sm sm:text-base">
            {teamB.player2}
          </span>
        </div>
      </div>
    </>
  );
};
