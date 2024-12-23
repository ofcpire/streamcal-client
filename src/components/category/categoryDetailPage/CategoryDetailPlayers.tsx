import React, { useMemo } from 'react';
import CategoryDetailItem from './CategoryDetailItem';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

interface playedMonthObjectType {
  [key: string]: LiveCategoryPlayerObjType[];
}

export default function CategoryDetailPlayers({
  players,
}: {
  players: LiveCategoryPlayerObjType[];
}) {
  const makePlayedMonthArray = (players: LiveCategoryPlayerObjType[]) => {
    const result: playedMonthObjectType = {};
    for (let item of players) {
      const monthKey = dayjs(item.playedAt).format('YYYY년 MM월');
      if (!result[monthKey]) {
        result[monthKey] = [];
      }
      result[monthKey].push(item);
    }
    return result;
  };

  const playersByMonth = makePlayedMonthArray(players);

  return (
    <ul className='sm:flex sm:flex-wrap sm:justify-center flex-col'>
      {Object.keys(playersByMonth).map((monthKey: string) => {
        return (
          <li>
            <h3 className='font-medium text-base sm:text-lg mx-4 my-2 text-scBrightDarkColor dark:text-scOffWhiteColor'>
              {monthKey}
            </h3>
            <ul>
              {playersByMonth[monthKey].map((player) => {
                return (
                  <CategoryDetailItem
                    player={player}
                    key={player.channelId}
                  />
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
