import timestampToKo from '../../../lib/utils/timestampToKo';
import { useNavigate } from 'react-router-dom';
import isoToYMDString from '../../../lib/utils/isoToYMDString';

export default function CategoryDetailItem({
  player,
}: {
  player: LiveCategoryPlayerObjType;
}) {
  const navigate = useNavigate();
  const goStreamerPage = (channelId: string, date: string) => {
    navigate(`/zzk/${channelId}?type=date&date=${isoToYMDString(date)}`);
  };

  return (
    <li
      className='sc-listItem my-2 py-2'
      onClick={() => goStreamerPage(player.channelId, player.playedAt)}>
      {player.channelInfo?.channelName}
      <div className='text-xs'>
        {timestampToKo(player.playedAt)}에 플레이
      </div>
    </li>
  );
}
