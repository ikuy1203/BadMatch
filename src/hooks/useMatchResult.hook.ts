export const useMatchResult = (
  match: number,
  players: number,
  _courts: number,
) => {
  return matchPairs[players - 5][match % matchPairs[players - 5].length];
};

export const getTotalMatches = (players: number) => {
  return matchPairs[players - 5]?.length ?? 0;
};

export const getAllMatches = (players: number) => {
  return matchPairs[players - 5] || [];
};

const matchPairs = [
  [
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    // Match 2
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 2`, player2: `Player 3` },
    },
    // Match 3
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 2`, player2: `Player 5` },
    },
    // Match 4
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 4`, player2: `Player 5` },
    },
    // Match 5
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 3`, player2: `Player 5` },
    },
    // Match 6
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 2`, player2: `Player 4` },
    },
    // Match 7
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 1`, player2: `Player 2` },
    },
    // Match 8
    {
      teamA: { player1: `Player 4`, player2: `Player 5` },
      teamB: { player1: `Player 1`, player2: `Player 2` },
    },
    // Match 9
    {
      teamA: { player1: `Player 3`, player2: `Player 4` },
      teamB: { player1: `Player 1`, player2: `Player 5` },
    },
    // Match 10
    {
      teamA: { player1: `Player 2`, player2: `Player 3` },
      teamB: { player1: `Player 4`, player2: `Player 5` },
    },
    // Match 11
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 2`, player2: `Player 3` },
    },
    // Match 12
    {
      teamA: { player1: `Player 2`, player2: `Player 5` },
      teamB: { player1: `Player 1`, player2: `Player 3` },
    },
    // Match 13
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 1`, player2: `Player 5` },
    },
    // Match 14
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 1`, player2: `Player 4` },
    },
    // Match 15
    {
      teamA: { player1: `Player 2`, player2: `Player 5` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
  ],
  [
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    // Match 2
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 1`, player2: `Player 3` },
    },
    // Match 3
    {
      teamA: { player1: `Player 2`, player2: `Player 5` },
      teamB: { player1: `Player 4`, player2: `Player 6` },
    },
    // Match 4
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 2`, player2: `Player 3` },
    },
    // Match 5
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 1`, player2: `Player 5` },
    },
    // Match 6
    {
      teamA: { player1: `Player 3`, player2: `Player 6` },
      teamB: { player1: `Player 4`, player2: `Player 5` },
    },
    // Match 7
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 2`, player2: `Player 6` },
    },
    // Match 8
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 1`, player2: `Player 2` },
    },
    // Match 9
    {
      teamA: { player1: `Player 3`, player2: `Player 4` },
      teamB: { player1: `Player 5`, player2: `Player 6` },
    },
    // Match 10
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 2`, player2: `Player 5` },
    },
    // Match 11
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 1`, player2: `Player 6` },
    },
    // Match 12
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 4`, player2: `Player 6` },
    },
    // Match 13
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 2`, player2: `Player 6` },
    },
    // Match 14
    {
      teamA: { player1: `Player 2`, player2: `Player 3` },
      teamB: { player1: `Player 4`, player2: `Player 5` },
    },
    // Match 15
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 3`, player2: `Player 6` },
    },
    // Match 16
    {
      teamA: { player1: `Player 2`, player2: `Player 5` },
      teamB: { player1: `Player 3`, player2: `Player 6` },
    },
    // Match 17
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 5`, player2: `Player 6` },
    },
    // Match 18
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 2`, player2: `Player 4` },
    },
    // Match 19
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 4`, player2: `Player 6` },
    },
    // Match 20
    {
      teamA: { player1: `Player 2`, player2: `Player 6` },
      teamB: { player1: `Player 3`, player2: `Player 5` },
    },
  ],
  [
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    // Match 2
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 1`, player2: `Player 7` },
    },
    // Match 3
    {
      teamA: { player1: `Player 2`, player2: `Player 3` },
      teamB: { player1: `Player 5`, player2: `Player 7` },
    },
    // Match 4
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 2`, player2: `Player 6` },
    },
    // Match 5
    {
      teamA: { player1: `Player 3`, player2: `Player 7` },
      teamB: { player1: `Player 4`, player2: `Player 6` },
    },
    // Match 6
    {
      teamA: { player1: `Player 2`, player2: `Player 5` },
      teamB: { player1: `Player 1`, player2: `Player 3` },
    },
    // Match 7
    {
      teamA: { player1: `Player 4`, player2: `Player 5` },
      teamB: { player1: `Player 6`, player2: `Player 7` },
    },
    // Match 8
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 2`, player2: `Player 7` },
    },
    // Match 9
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 2`, player2: `Player 4` },
    },
    // Match 10
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 3`, player2: `Player 6` },
    },
    // Match 11
    {
      teamA: { player1: `Player 4`, player2: `Player 7` },
      teamB: { player1: `Player 1`, player2: `Player 2` },
    },
    // Match 12
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 4`, player2: `Player 6` },
    },
    // Match 13
    {
      teamA: { player1: `Player 2`, player2: `Player 7` },
      teamB: { player1: `Player 3`, player2: `Player 6` },
    },
    // Match 14
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 5`, player2: `Player 7` },
    },
    // Match 15
    {
      teamA: { player1: `Player 2`, player2: `Player 6` },
      teamB: { player1: `Player 4`, player2: `Player 5` },
    },
    // Match 16
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 6`, player2: `Player 7` },
    },
    // Match 17
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 3`, player2: `Player 7` },
    },
    // Match 18
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 2`, player2: `Player 5` },
    },
    // Match 19
    {
      teamA: { player1: `Player 3`, player2: `Player 4` },
      teamB: { player1: `Player 1`, player2: `Player 7` },
    },
    // Match 20
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 2`, player2: `Player 3` },
    },
  ],
  [
    // 8人用
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    // Match 2
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 8` },
    },
    // Match 3
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 5`, player2: `Player 7` },
    },
    // Match 4
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 6`, player2: `Player 8` },
    },
    // Match 5
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 4`, player2: `Player 8` },
    },
    // Match 6
    {
      teamA: { player1: `Player 2`, player2: `Player 3` },
      teamB: { player1: `Player 6`, player2: `Player 7` },
    },
    // Match 7
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 4`, player2: `Player 7` },
    },
    // Match 8
    {
      teamA: { player1: `Player 2`, player2: `Player 5` },
      teamB: { player1: `Player 3`, player2: `Player 8` },
    },
    // Match 9
    {
      teamA: { player1: `Player 1`, player2: `Player 7` },
      teamB: { player1: `Player 2`, player2: `Player 8` },
    },
    // Match 10
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 4`, player2: `Player 6` },
    },
    // Match 11
    {
      teamA: { player1: `Player 1`, player2: `Player 8` },
      teamB: { player1: `Player 3`, player2: `Player 6` },
    },
    // Match 12
    {
      teamA: { player1: `Player 2`, player2: `Player 7` },
      teamB: { player1: `Player 4`, player2: `Player 5` },
    },
    // Match 13
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 3`, player2: `Player 7` },
    },
    // Match 14
    {
      teamA: { player1: `Player 2`, player2: `Player 6` },
      teamB: { player1: `Player 5`, player2: `Player 8` },
    },
    // Match 15
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 5`, player2: `Player 6` },
    },
    // Match 16
    {
      teamA: { player1: `Player 3`, player2: `Player 4` },
      teamB: { player1: `Player 7`, player2: `Player 8` },
    },
    // Match 17
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 3`, player2: `Player 8` },
    },
    // Match 18
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 6`, player2: `Player 7` },
    },
    // Match 19
    {
      teamA: { player1: `Player 1`, player2: `Player 8` },
      teamB: { player1: `Player 4`, player2: `Player 6` },
    },
    // Match 20
    {
      teamA: { player1: `Player 2`, player2: `Player 3` },
      teamB: { player1: `Player 5`, player2: `Player 7` },
    },
  ],
  [
    // 9人用
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    // Match 2
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 8` },
    },
    // Match 3
    {
      teamA: { player1: `Player 1`, player2: `Player 9` },
      teamB: { player1: `Player 3`, player2: `Player 5` },
    },
    // Match 4
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 6`, player2: `Player 9` },
    },
    // Match 5
    {
      teamA: { player1: `Player 1`, player2: `Player 7` },
      teamB: { player1: `Player 6`, player2: `Player 8` },
    },
    // Match 6
    {
      teamA: { player1: `Player 2`, player2: `Player 3` },
      teamB: { player1: `Player 5`, player2: `Player 9` },
    },
    // Match 7
    {
      teamA: { player1: `Player 4`, player2: `Player 7` },
      teamB: { player1: `Player 5`, player2: `Player 8` },
    },
    // Match 8
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 4`, player2: `Player 6` },
    },
    // Match 9
    {
      teamA: { player1: `Player 2`, player2: `Player 7` },
      teamB: { player1: `Player 8`, player2: `Player 9` },
    },
    // Match 10
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 2`, player2: `Player 6` },
    },
    // Match 11
    {
      teamA: { player1: `Player 3`, player2: `Player 7` },
      teamB: { player1: `Player 4`, player2: `Player 9` },
    },
    // Match 12
    {
      teamA: { player1: `Player 2`, player2: `Player 8` },
      teamB: { player1: `Player 1`, player2: `Player 4` },
    },
    // Match 13
    {
      teamA: { player1: `Player 5`, player2: `Player 7` },
      teamB: { player1: `Player 3`, player2: `Player 6` },
    },
    // Match 14
    {
      teamA: { player1: `Player 1`, player2: `Player 8` },
      teamB: { player1: `Player 3`, player2: `Player 9` },
    },
    // Match 15
    {
      teamA: { player1: `Player 2`, player2: `Player 5` },
      teamB: { player1: `Player 4`, player2: `Player 8` },
    },
    // Match 16
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 9` },
    },
    // Match 17
    {
      teamA: { player1: `Player 3`, player2: `Player 8` },
      teamB: { player1: `Player 2`, player2: `Player 9` },
    },
    // Match 18
    {
      teamA: { player1: `Player 4`, player2: `Player 5` },
      teamB: { player1: `Player 6`, player2: `Player 7` },
    },
    // Match 19
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 7` },
    },
    // Match 20
    {
      teamA: { player1: `Player 8`, player2: `Player 9` },
      teamB: { player1: `Player 4`, player2: `Player 6` },
    },
  ],
  [
    // 10人用
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    // Match 2
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 8` },
    },
    // Match 3
    {
      teamA: { player1: `Player 9`, player2: `Player 10` },
      teamB: { player1: `Player 1`, player2: `Player 3` },
    },
    // Match 4
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 5`, player2: `Player 7` },
    },
    // Match 5
    {
      teamA: { player1: `Player 6`, player2: `Player 9` },
      teamB: { player1: `Player 8`, player2: `Player 10` },
    },
    // Match 6
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 3`, player2: `Player 7` },
    },
    // Match 7
    {
      teamA: { player1: `Player 2`, player2: `Player 6` },
      teamB: { player1: `Player 4`, player2: `Player 10` },
    },
    // Match 8
    {
      teamA: { player1: `Player 1`, player2: `Player 8` },
      teamB: { player1: `Player 5`, player2: `Player 9` },
    },
    // Match 9
    {
      teamA: { player1: `Player 3`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 10` },
    },
    // Match 10
    {
      teamA: { player1: `Player 2`, player2: `Player 8` },
      teamB: { player1: `Player 4`, player2: `Player 9` },
    },
    // Match 11
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 5`, player2: `Player 10` },
    },
    // Match 12
    {
      teamA: { player1: `Player 2`, player2: `Player 3` },
      teamB: { player1: `Player 7`, player2: `Player 9` },
    },
    // Match 13
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 6`, player2: `Player 8` },
    },
    // Match 14
    {
      teamA: { player1: `Player 2`, player2: `Player 5` },
      teamB: { player1: `Player 3`, player2: `Player 10` },
    },
    // Match 15
    {
      teamA: { player1: `Player 4`, player2: `Player 7` },
      teamB: { player1: `Player 8`, player2: `Player 9` },
    },
    // Match 16
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 2`, player2: `Player 10` },
    },
    // Match 17
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 4`, player2: `Player 8` },
    },
    // Match 18
    {
      teamA: { player1: `Player 1`, player2: `Player 7` },
      teamB: { player1: `Player 2`, player2: `Player 9` },
    },
    // Match 19
    {
      teamA: { player1: `Player 6`, player2: `Player 10` },
      teamB: { player1: `Player 3`, player2: `Player 8` },
    },
    // Match 20
    {
      teamA: { player1: `Player 4`, player2: `Player 5` },
      teamB: { player1: `Player 7`, player2: `Player 9` },
    },
  ],
  [
    // 11人用
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    // Match 2
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 8` },
    },
    // Match 3
    {
      teamA: { player1: `Player 9`, player2: `Player 10` },
      teamB: { player1: `Player 1`, player2: `Player 11` },
    },
    // Match 4
    {
      teamA: { player1: `Player 2`, player2: `Player 3` },
      teamB: { player1: `Player 5`, player2: `Player 7` },
    },
    // Match 5
    {
      teamA: { player1: `Player 4`, player2: `Player 6` },
      teamB: { player1: `Player 8`, player2: `Player 9` },
    },
    // Match 6
    {
      teamA: { player1: `Player 10`, player2: `Player 11` },
      teamB: { player1: `Player 2`, player2: `Player 5` },
    },
    // Match 7
    {
      teamA: { player1: `Player 1`, player2: `Player 7` },
      teamB: { player1: `Player 4`, player2: `Player 9` },
    },
    // Match 8
    {
      teamA: { player1: `Player 3`, player2: `Player 6` },
      teamB: { player1: `Player 8`, player2: `Player 11` },
    },
    // Match 9
    {
      teamA: { player1: `Player 2`, player2: `Player 10` },
      teamB: { player1: `Player 4`, player2: `Player 7` },
    },
    // Match 10
    {
      teamA: { player1: `Player 5`, player2: `Player 9` },
      teamB: { player1: `Player 3`, player2: `Player 11` },
    },
    // Match 11
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 8`, player2: `Player 10` },
    },
    // Match 12
    {
      teamA: { player1: `Player 2`, player2: `Player 7` },
      teamB: { player1: `Player 9`, player2: `Player 11` },
    },
    // Match 13
    {
      teamA: { player1: `Player 4`, player2: `Player 5` },
      teamB: { player1: `Player 1`, player2: `Player 8` },
    },
    // Match 14
    {
      teamA: { player1: `Player 3`, player2: `Player 10` },
      teamB: { player1: `Player 6`, player2: `Player 7` },
    },
    // Match 15
    {
      teamA: { player1: `Player 2`, player2: `Player 11` },
      teamB: { player1: `Player 4`, player2: `Player 8` },
    },
    // Match 16
    {
      teamA: { player1: `Player 1`, player2: `Player 9` },
      teamB: { player1: `Player 3`, player2: `Player 5` },
    },
    // Match 17
    {
      teamA: { player1: `Player 6`, player2: `Player 10` },
      teamB: { player1: `Player 7`, player2: `Player 11` },
    },
    // Match 18
    {
      teamA: { player1: `Player 2`, player2: `Player 8` },
      teamB: { player1: `Player 3`, player2: `Player 9` },
    },
    // Match 19
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 5`, player2: `Player 10` },
    },
    // Match 20
    {
      teamA: { player1: `Player 6`, player2: `Player 11` },
      teamB: { player1: `Player 3`, player2: `Player 8` },
    },
  ],
  [
    // 12人用
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    // Match 2
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 8` },
    },
    // Match 3
    {
      teamA: { player1: `Player 9`, player2: `Player 10` },
      teamB: { player1: `Player 11`, player2: `Player 12` },
    },
    // Match 4
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 5`, player2: `Player 7` },
    },
    // Match 5
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 6`, player2: `Player 9` },
    },
    // Match 6
    {
      teamA: { player1: `Player 8`, player2: `Player 11` },
      teamB: { player1: `Player 10`, player2: `Player 12` },
    },
    // Match 7
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 4`, player2: `Player 9` },
    },
    // Match 8
    {
      teamA: { player1: `Player 3`, player2: `Player 7` },
      teamB: { player1: `Player 6`, player2: `Player 11` },
    },
    // Match 9
    {
      teamA: { player1: `Player 2`, player2: `Player 10` },
      teamB: { player1: `Player 8`, player2: `Player 12` },
    },
    // Match 10
    {
      teamA: { player1: `Player 1`, player2: `Player 9` },
      teamB: { player1: `Player 7`, player2: `Player 11` },
    },
    // Match 11
    {
      teamA: { player1: `Player 4`, player2: `Player 5` },
      teamB: { player1: `Player 2`, player2: `Player 12` },
    },
    // Match 12
    {
      teamA: { player1: `Player 3`, player2: `Player 6` },
      teamB: { player1: `Player 8`, player2: `Player 10` },
    },
    // Match 13
    {
      teamA: { player1: `Player 9`, player2: `Player 11` },
      teamB: { player1: `Player 2`, player2: `Player 5` },
    },
    // Match 14
    {
      teamA: { player1: `Player 1`, player2: `Player 7` },
      teamB: { player1: `Player 6`, player2: `Player 12` },
    },
    // Match 15
    {
      teamA: { player1: `Player 3`, player2: `Player 8` },
      teamB: { player1: `Player 4`, player2: `Player 10` },
    },
    // Match 16
    {
      teamA: { player1: `Player 2`, player2: `Player 11` },
      teamB: { player1: `Player 1`, player2: `Player 6` },
    },
    // Match 17
    {
      teamA: { player1: `Player 5`, player2: `Player 9` },
      teamB: { player1: `Player 3`, player2: `Player 12` },
    },
    // Match 18
    {
      teamA: { player1: `Player 4`, player2: `Player 8` },
      teamB: { player1: `Player 7`, player2: `Player 10` },
    },
    // Match 19
    {
      teamA: { player1: `Player 1`, player2: `Player 12` },
      teamB: { player1: `Player 2`, player2: `Player 6` },
    },
    // Match 20
    {
      teamA: { player1: `Player 3`, player2: `Player 11` },
      teamB: { player1: `Player 5`, player2: `Player 10` },
    },
  ],
  [
    // 13人用
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    // Match 2
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 8` },
    },
    // Match 3
    {
      teamA: { player1: `Player 9`, player2: `Player 10` },
      teamB: { player1: `Player 1`, player2: `Player 11` },
    },
    // Match 4
    {
      teamA: { player1: `Player 12`, player2: `Player 13` },
      teamB: { player1: `Player 2`, player2: `Player 5` },
    },
    // Match 5
    {
      teamA: { player1: `Player 3`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 9` },
    },
    // Match 6
    {
      teamA: { player1: `Player 4`, player2: `Player 8` },
      teamB: { player1: `Player 10`, player2: `Player 12` },
    },
    // Match 7
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 3`, player2: `Player 13` },
    },
    // Match 8
    {
      teamA: { player1: `Player 2`, player2: `Player 11` },
      teamB: { player1: `Player 4`, player2: `Player 6` },
    },
    // Match 9
    {
      teamA: { player1: `Player 7`, player2: `Player 10` },
      teamB: { player1: `Player 11`, player2: `Player 13` },
    },
    // Match 10
    {
      teamA: { player1: `Player 8`, player2: `Player 9` },
      teamB: { player1: `Player 1`, player2: `Player 12` },
    },
    // Match 11
    {
      teamA: { player1: `Player 2`, player2: `Player 3` },
      teamB: { player1: `Player 6`, player2: `Player 10` },
    },
    // Match 12
    {
      teamA: { player1: `Player 4`, player2: `Player 7` },
      teamB: { player1: `Player 5`, player2: `Player 9` },
    },
    // Match 13
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 6`, player2: `Player 13` },
    },
    // Match 14
    {
      teamA: { player1: `Player 8`, player2: `Player 11` },
      teamB: { player1: `Player 3`, player2: `Player 12` },
    },
    // Match 15
    {
      teamA: { player1: `Player 2`, player2: `Player 9` },
      teamB: { player1: `Player 8`, player2: `Player 13` },
    },
    // Match 16
    {
      teamA: { player1: `Player 5`, player2: `Player 7` },
      teamB: { player1: `Player 10`, player2: `Player 11` },
    },
    // Match 17
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 9`, player2: `Player 12` },
    },
    // Match 18
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 4`, player2: `Player 10` },
    },
    // Match 19
    {
      teamA: { player1: `Player 2`, player2: `Player 7` },
      teamB: { player1: `Player 1`, player2: `Player 8` },
    },
    // Match 20
    {
      teamA: { player1: `Player 11`, player2: `Player 12` },
      teamB: { player1: `Player 4`, player2: `Player 13` },
    },
    // Match 21
    {
      teamA: { player1: `Player 3`, player2: `Player 9` },
      teamB: { player1: `Player 10`, player2: `Player 13` },
    },
    // Match 22
    {
      teamA: { player1: `Player 5`, player2: `Player 8` },
      teamB: { player1: `Player 6`, player2: `Player 11` },
    },
    // Match 23
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 7`, player2: `Player 12` },
    },
    // Match 24
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 5`, player2: `Player 10` },
    },
    // Match 25
    {
      teamA: { player1: `Player 2`, player2: `Player 6` },
      teamB: { player1: `Player 8`, player2: `Player 12` },
    },
    // Match 26
    {
      teamA: { player1: `Player 7`, player2: `Player 11` },
      teamB: { player1: `Player 9`, player2: `Player 13` },
    },
    // Match 27
    {
      teamA: { player1: `Player 1`, player2: `Player 10` },
      teamB: { player1: `Player 3`, player2: `Player 8` },
    },
    // Match 28
    {
      teamA: { player1: `Player 4`, player2: `Player 5` },
      teamB: { player1: `Player 9`, player2: `Player 11` },
    },
    // Match 29
    {
      teamA: { player1: `Player 2`, player2: `Player 10` },
      teamB: { player1: `Player 5`, player2: `Player 12` },
    },
    // Match 30
    {
      teamA: { player1: `Player 6`, player2: `Player 7` },
      teamB: { player1: `Player 1`, player2: `Player 13` },
    },
    // Match 31
    {
      teamA: { player1: `Player 3`, player2: `Player 11` },
      teamB: { player1: `Player 2`, player2: `Player 8` },
    },
    // Match 32
    {
      teamA: { player1: `Player 4`, player2: `Player 9` },
      teamB: { player1: `Player 6`, player2: `Player 12` },
    },
    // Match 33
    {
      teamA: { player1: `Player 1`, player2: `Player 9` },
      teamB: { player1: `Player 5`, player2: `Player 11` },
    },
    // Match 34
    {
      teamA: { player1: `Player 7`, player2: `Player 13` },
      teamB: { player1: `Player 8`, player2: `Player 10` },
    },
    // Match 35
    {
      teamA: { player1: `Player 2`, player2: `Player 6` },
      teamB: { player1: `Player 5`, player2: `Player 13` },
    },
    // Match 36
    {
      teamA: { player1: `Player 3`, player2: `Player 7` },
      teamB: { player1: `Player 4`, player2: `Player 12` },
    },
    // Match 37
    {
      teamA: { player1: `Player 1`, player2: `Player 8` },
      teamB: { player1: `Player 4`, player2: `Player 11` },
    },
    // Match 38
    {
      teamA: { player1: `Player 6`, player2: `Player 9` },
      teamB: { player1: `Player 3`, player2: `Player 10` },
    },
    // Match 39
    {
      teamA: { player1: `Player 2`, player2: `Player 12` },
      teamB: { player1: `Player 1`, player2: `Player 7` },
    },
    // Match 40
    {
      teamA: { player1: `Player 5`, player2: `Player 13` },
      teamB: { player1: `Player 8`, player2: `Player 9` },
    },
  ],
  [
    // 14人用（2コート）
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 8` },
    },
    // Match 2
    {
      teamA: { player1: `Player 9`, player2: `Player 10` },
      teamB: { player1: `Player 1`, player2: `Player 11` },
    },
    {
      teamA: { player1: `Player 12`, player2: `Player 13` },
      teamB: { player1: `Player 2`, player2: `Player 14` },
    },
    // Match 3
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 9`, player2: `Player 12` },
    },
    {
      teamA: { player1: `Player 4`, player2: `Player 6` },
      teamB: { player1: `Player 10`, player2: `Player 13` },
    },
    // Match 4
    {
      teamA: { player1: `Player 7`, player2: `Player 11` },
      teamB: { player1: `Player 2`, player2: `Player 3` },
    },
    {
      teamA: { player1: `Player 8`, player2: `Player 14` },
      teamB: { player1: `Player 1`, player2: `Player 4` },
    },
    // Match 5
    {
      teamA: { player1: `Player 5`, player2: `Player 13` },
      teamB: { player1: `Player 8`, player2: `Player 11` },
    },
    {
      teamA: { player1: `Player 6`, player2: `Player 9` },
      teamB: { player1: `Player 7`, player2: `Player 14` },
    },
    // Match 6
    {
      teamA: { player1: `Player 2`, player2: `Player 10` },
      teamB: { player1: `Player 4`, player2: `Player 5` },
    },
    {
      teamA: { player1: `Player 1`, player2: `Player 12` },
      teamB: { player1: `Player 3`, player2: `Player 6` },
    },
    // Match 7
    {
      teamA: { player1: `Player 7`, player2: `Player 10` },
      teamB: { player1: `Player 8`, player2: `Player 12` },
    },
    {
      teamA: { player1: `Player 9`, player2: `Player 11` },
      teamB: { player1: `Player 13`, player2: `Player 14` },
    },
    // Match 8
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 7`, player2: `Player 13` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 6` },
      teamB: { player1: `Player 8`, player2: `Player 9` },
    },
    // Match 9
    {
      teamA: { player1: `Player 3`, player2: `Player 10` },
      teamB: { player1: `Player 5`, player2: `Player 14` },
    },
    {
      teamA: { player1: `Player 4`, player2: `Player 11` },
      teamB: { player1: `Player 6`, player2: `Player 12` },
    },
    // Match 10
    {
      teamA: { player1: `Player 1`, player2: `Player 7` },
      teamB: { player1: `Player 2`, player2: `Player 9` },
    },
    {
      teamA: { player1: `Player 10`, player2: `Player 11` },
      teamB: { player1: `Player 12`, player2: `Player 14` },
    },
    // Match 11
    {
      teamA: { player1: `Player 3`, player2: `Player 8` },
      teamB: { player1: `Player 1`, player2: `Player 13` },
    },
    {
      teamA: { player1: `Player 4`, player2: `Player 7` },
      teamB: { player1: `Player 5`, player2: `Player 9` },
    },
    // Match 12
    {
      teamA: { player1: `Player 6`, player2: `Player 11` },
      teamB: { player1: `Player 3`, player2: `Player 14` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 12` },
      teamB: { player1: `Player 4`, player2: `Player 8` },
    },
    // Match 13
    {
      teamA: { player1: `Player 1`, player2: `Player 10` },
      teamB: { player1: `Player 6`, player2: `Player 14` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 13` },
      teamB: { player1: `Player 5`, player2: `Player 11` },
    },
    // Match 14
    {
      teamA: { player1: `Player 3`, player2: `Player 9` },
      teamB: { player1: `Player 4`, player2: `Player 13` },
    },
    {
      teamA: { player1: `Player 7`, player2: `Player 12` },
      teamB: { player1: `Player 8`, player2: `Player 10` },
    },
    // Match 15
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 5`, player2: `Player 8` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 11` },
      teamB: { player1: `Player 3`, player2: `Player 7` },
    },
    // Match 16
    {
      teamA: { player1: `Player 4`, player2: `Player 14` },
      teamB: { player1: `Player 5`, player2: `Player 12` },
    },
    {
      teamA: { player1: `Player 9`, player2: `Player 13` },
      teamB: { player1: `Player 6`, player2: `Player 10` },
    },
    // Match 17
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 11`, player2: `Player 12` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 8` },
      teamB: { player1: `Player 9`, player2: `Player 14` },
    },
    // Match 18
    {
      teamA: { player1: `Player 4`, player2: `Player 10` },
      teamB: { player1: `Player 2`, player2: `Player 5` },
    },
    {
      teamA: { player1: `Player 6`, player2: `Player 7` },
      teamB: { player1: `Player 3`, player2: `Player 13` },
    },
    // Match 19
    {
      teamA: { player1: `Player 1`, player2: `Player 8` },
      teamB: { player1: `Player 11`, player2: `Player 14` },
    },
    {
      teamA: { player1: `Player 7`, player2: `Player 9` },
      teamB: { player1: `Player 4`, player2: `Player 12` },
    },
    // Match 20
    {
      teamA: { player1: `Player 5`, player2: `Player 10` },
      teamB: { player1: `Player 3`, player2: `Player 12` },
    },
    {
      teamA: { player1: `Player 11`, player2: `Player 13` },
      teamB: { player1: `Player 6`, player2: `Player 8` },
    },
  ],
  [
    // 15人用（2コート）
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 8` },
    },
    // Match 2
    {
      teamA: { player1: `Player 9`, player2: `Player 10` },
      teamB: { player1: `Player 11`, player2: `Player 12` },
    },
    {
      teamA: { player1: `Player 13`, player2: `Player 14` },
      teamB: { player1: `Player 1`, player2: `Player 15` },
    },
    // Match 3
    {
      teamA: { player1: `Player 2`, player2: `Player 5` },
      teamB: { player1: `Player 9`, player2: `Player 13` },
    },
    {
      teamA: { player1: `Player 3`, player2: `Player 6` },
      teamB: { player1: `Player 10`, player2: `Player 14` },
    },
    // Match 4
    {
      teamA: { player1: `Player 4`, player2: `Player 7` },
      teamB: { player1: `Player 1`, player2: `Player 11` },
    },
    {
      teamA: { player1: `Player 8`, player2: `Player 12` },
      teamB: { player1: `Player 2`, player2: `Player 15` },
    },
    // Match 5
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 11`, player2: `Player 15` },
    },
    {
      teamA: { player1: `Player 6`, player2: `Player 13` },
      teamB: { player1: `Player 4`, player2: `Player 12` },
    },
    // Match 6
    {
      teamA: { player1: `Player 7`, player2: `Player 9` },
      teamB: { player1: `Player 2`, player2: `Player 14` },
    },
    {
      teamA: { player1: `Player 8`, player2: `Player 10` },
      teamB: { player1: `Player 1`, player2: `Player 5` },
    },
    // Match 7
    {
      teamA: { player1: `Player 3`, player2: `Player 11` },
      teamB: { player1: `Player 8`, player2: `Player 13` },
    },
    {
      teamA: { player1: `Player 4`, player2: `Player 6` },
      teamB: { player1: `Player 9`, player2: `Player 15` },
    },
    // Match 8
    {
      teamA: { player1: `Player 7`, player2: `Player 10` },
      teamB: { player1: `Player 13`, player2: `Player 15` },
    },
    {
      teamA: { player1: `Player 12`, player2: `Player 14` },
      teamB: { player1: `Player 4`, player2: `Player 5` },
    },
    // Match 9
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 7`, player2: `Player 12` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 6` },
      teamB: { player1: `Player 10`, player2: `Player 11` },
    },
    // Match 10
    {
      teamA: { player1: `Player 8`, player2: `Player 9` },
      teamB: { player1: `Player 4`, player2: `Player 14` },
    },
    {
      teamA: { player1: `Player 5`, player2: `Player 13` },
      teamB: { player1: `Player 2`, player2: `Player 11` },
    },
    // Match 11
    {
      teamA: { player1: `Player 7`, player2: `Player 15` },
      teamB: { player1: `Player 3`, player2: `Player 8` },
    },
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 9`, player2: `Player 12` },
    },
    // Match 12
    {
      teamA: { player1: `Player 5`, player2: `Player 10` },
      teamB: { player1: `Player 12`, player2: `Player 15` },
    },
    {
      teamA: { player1: `Player 11`, player2: `Player 14` },
      teamB: { player1: `Player 6`, player2: `Player 7` },
    },
    // Match 13
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 3`, player2: `Player 10` },
    },
    {
      teamA: { player1: `Player 1`, player2: `Player 13` },
      teamB: { player1: `Player 8`, player2: `Player 14` },
    },
    // Match 14
    {
      teamA: { player1: `Player 9`, player2: `Player 11` },
      teamB: { player1: `Player 4`, player2: `Player 8` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 7` },
      teamB: { player1: `Player 12`, player2: `Player 13` },
    },
    // Match 15
    {
      teamA: { player1: `Player 1`, player2: `Player 10` },
      teamB: { player1: `Player 6`, player2: `Player 15` },
    },
    {
      teamA: { player1: `Player 3`, player2: `Player 9` },
      teamB: { player1: `Player 5`, player2: `Player 14` },
    },
    // Match 16
    {
      teamA: { player1: `Player 2`, player2: `Player 8` },
      teamB: { player1: `Player 6`, player2: `Player 12` },
    },
    {
      teamA: { player1: `Player 4`, player2: `Player 10` },
      teamB: { player1: `Player 7`, player2: `Player 13` },
    },
    // Match 17
    {
      teamA: { player1: `Player 1`, player2: `Player 9` },
      teamB: { player1: `Player 5`, player2: `Player 11` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 3` },
      teamB: { player1: `Player 14`, player2: `Player 15` },
    },
    // Match 18
    {
      teamA: { player1: `Player 4`, player2: `Player 15` },
      teamB: { player1: `Player 5`, player2: `Player 7` },
    },
    {
      teamA: { player1: `Player 6`, player2: `Player 9` },
      teamB: { player1: `Player 3`, player2: `Player 13` },
    },
    // Match 19
    {
      teamA: { player1: `Player 1`, player2: `Player 12` },
      teamB: { player1: `Player 2`, player2: `Player 10` },
    },
    {
      teamA: { player1: `Player 8`, player2: `Player 11` },
      teamB: { player1: `Player 6`, player2: `Player 14` },
    },
    // Match 20
    {
      teamA: { player1: `Player 3`, player2: `Player 12` },
      teamB: { player1: `Player 7`, player2: `Player 14` },
    },
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 11`, player2: `Player 13` },
    },
  ],
  [
    // 16人用（2コート）
    // Match 1
    {
      teamA: { player1: `Player 1`, player2: `Player 2` },
      teamB: { player1: `Player 3`, player2: `Player 4` },
    },
    {
      teamA: { player1: `Player 5`, player2: `Player 6` },
      teamB: { player1: `Player 7`, player2: `Player 8` },
    },
    // Match 2
    {
      teamA: { player1: `Player 9`, player2: `Player 10` },
      teamB: { player1: `Player 11`, player2: `Player 12` },
    },
    {
      teamA: { player1: `Player 13`, player2: `Player 14` },
      teamB: { player1: `Player 15`, player2: `Player 16` },
    },
    // Match 3
    {
      teamA: { player1: `Player 1`, player2: `Player 5` },
      teamB: { player1: `Player 9`, player2: `Player 13` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 6` },
      teamB: { player1: `Player 10`, player2: `Player 14` },
    },
    // Match 4
    {
      teamA: { player1: `Player 3`, player2: `Player 7` },
      teamB: { player1: `Player 11`, player2: `Player 15` },
    },
    {
      teamA: { player1: `Player 4`, player2: `Player 8` },
      teamB: { player1: `Player 12`, player2: `Player 16` },
    },
    // Match 5
    {
      teamA: { player1: `Player 1`, player2: `Player 6` },
      teamB: { player1: `Player 11`, player2: `Player 16` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 5` },
      teamB: { player1: `Player 12`, player2: `Player 15` },
    },
    // Match 6
    {
      teamA: { player1: `Player 3`, player2: `Player 8` },
      teamB: { player1: `Player 9`, player2: `Player 14` },
    },
    {
      teamA: { player1: `Player 4`, player2: `Player 7` },
      teamB: { player1: `Player 10`, player2: `Player 13` },
    },
    // Match 7
    {
      teamA: { player1: `Player 1`, player2: `Player 12` },
      teamB: { player1: `Player 7`, player2: `Player 14` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 11` },
      teamB: { player1: `Player 8`, player2: `Player 13` },
    },
    // Match 8
    {
      teamA: { player1: `Player 3`, player2: `Player 5` },
      teamB: { player1: `Player 10`, player2: `Player 16` },
    },
    {
      teamA: { player1: `Player 4`, player2: `Player 6` },
      teamB: { player1: `Player 9`, player2: `Player 15` },
    },
    // Match 9
    {
      teamA: { player1: `Player 1`, player2: `Player 8` },
      teamB: { player1: `Player 10`, player2: `Player 15` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 7` },
      teamB: { player1: `Player 9`, player2: `Player 16` },
    },
    // Match 10
    {
      teamA: { player1: `Player 3`, player2: `Player 6` },
      teamB: { player1: `Player 12`, player2: `Player 13` },
    },
    {
      teamA: { player1: `Player 4`, player2: `Player 5` },
      teamB: { player1: `Player 11`, player2: `Player 14` },
    },
    // Match 11
    {
      teamA: { player1: `Player 1`, player2: `Player 7` },
      teamB: { player1: `Player 9`, player2: `Player 11` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 8` },
      teamB: { player1: `Player 10`, player2: `Player 12` },
    },
    // Match 12
    {
      teamA: { player1: `Player 3`, player2: `Player 13` },
      teamB: { player1: `Player 4`, player2: `Player 15` },
    },
    {
      teamA: { player1: `Player 5`, player2: `Player 14` },
      teamB: { player1: `Player 6`, player2: `Player 16` },
    },
    // Match 13
    {
      teamA: { player1: `Player 1`, player2: `Player 3` },
      teamB: { player1: `Player 2`, player2: `Player 14` },
    },
    {
      teamA: { player1: `Player 5`, player2: `Player 7` },
      teamB: { player1: `Player 8`, player2: `Player 15` },
    },
    // Match 14
    {
      teamA: { player1: `Player 4`, player2: `Player 16` },
      teamB: { player1: `Player 9`, player2: `Player 12` },
    },
    {
      teamA: { player1: `Player 6`, player2: `Player 10` },
      teamB: { player1: `Player 11`, player2: `Player 13` },
    },
    // Match 15
    {
      teamA: { player1: `Player 1`, player2: `Player 4` },
      teamB: { player1: `Player 5`, player2: `Player 10` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 13` },
      teamB: { player1: `Player 7`, player2: `Player 16` },
    },
    // Match 16
    {
      teamA: { player1: `Player 3`, player2: `Player 9` },
      teamB: { player1: `Player 8`, player2: `Player 11` },
    },
    {
      teamA: { player1: `Player 6`, player2: `Player 12` },
      teamB: { player1: `Player 14`, player2: `Player 15` },
    },
    // Match 17
    {
      teamA: { player1: `Player 1`, player2: `Player 13` },
      teamB: { player1: `Player 8`, player2: `Player 16` },
    },
    {
      teamA: { player1: `Player 2`, player2: `Player 4` },
      teamB: { player1: `Player 6`, player2: `Player 9` },
    },
    // Match 18
    {
      teamA: { player1: `Player 3`, player2: `Player 10` },
      teamB: { player1: `Player 7`, player2: `Player 15` },
    },
    {
      teamA: { player1: `Player 5`, player2: `Player 11` },
      teamB: { player1: `Player 12`, player2: `Player 14` },
    },
    // Match 19
    {
      teamA: { player1: `Player 2`, player2: `Player 9` },
      teamB: { player1: `Player 5`, player2: `Player 15` },
    },
    {
      teamA: { player1: `Player 4`, player2: `Player 10` },
      teamB: { player1: `Player 8`, player2: `Player 14` },
    },
    // Match 20
    {
      teamA: { player1: `Player 1`, player2: `Player 11` },
      teamB: { player1: `Player 3`, player2: `Player 16` },
    },
    {
      teamA: { player1: `Player 6`, player2: `Player 13` },
      teamB: { player1: `Player 7`, player2: `Player 12` },
    },
  ],
];
