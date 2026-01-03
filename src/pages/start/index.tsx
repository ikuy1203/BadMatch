import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button.tsx';
import { ButtonGroup } from '@/components/ui/button-group.tsx';
import { Slider } from '@/components/ui/slider.tsx';

export const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const [courts, setCourts] = useState(1);
  const [players, setPlayers] = useState(8);

  return (
    <>
      <div className="bg-bgColor flex h-screen w-screen flex-col items-center justify-center">
        <div className="text-fontColor flex h-1/6 items-center text-4xl underline">
          MATCH SETUP
        </div>
        <div className="flex h-2/3 w-screen flex-col items-center">
          <CourtsCard setCourts={setCourts} />
          <PlayersCard players={players} setPlayers={setPlayers} />
          <div className="my-5 flex flex-col items-center">
            <div className="text-fontColor">Courts: {courts}</div>
            <div className="text-fontColor">Players: {players}</div>
          </div>
        </div>
        <div className="flex h-1/6 w-screen items-center justify-center">
          <Button
            variant="default"
            size="slg"
            onClick={() => {
              void navigate(`/match?courts=${courts}&players=${players}`);
            }}
          >
            Start
          </Button>
        </div>
      </div>
    </>
  );
};

const CourtsCard: React.FC<{
  setCourts: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  setCourts,
}: {
  setCourts: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <div className="bg-cardColor mt-5 flex w-4/5 flex-col items-center rounded-4xl py-3">
        <div className="text-fontColor text-3xl">Courts</div>
        <div className="text-fontColor mb-4 text-sm">
          Number of courts in use
        </div>
        <ButtonGroup>
          <Button variant={'outline'} size={'lg'} onClick={() => setCourts(1)}>
            1
          </Button>
          <Button variant={'outline'} size={'lg'} onClick={() => setCourts(2)}>
            2
          </Button>
          <Button variant={'outline'} size={'lg'} onClick={() => setCourts(3)}>
            3
          </Button>
          <Button variant={'outline'} size={'lg'} onClick={() => setCourts(4)}>
            4
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

const PlayersCard: React.FC<{
  players: number;
  setPlayers: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  players,
  setPlayers,
}: {
  players: number;
  setPlayers: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <div className="bg-cardColor mt-5 flex w-4/5 flex-col items-center rounded-4xl py-3">
        <div className="text-fontColor text-3xl">Players</div>
        <div className="text-fontColor mb-4 text-sm">Number of players</div>
        <Slider
          defaultValue={[8]}
          min={5}
          max={16}
          step={1}
          value={[players]}
          onValueChange={(value) => setPlayers(value[0])}
          className="my-3 w-[80%]"
        />
      </div>
    </>
  );
};
