import { QUEST_PATH } from '@/config/quest';
import {get} from '@/utils/http';

export enum StatusType {
  ongoing = 'ongoing',
  ended = 'ended',
  un_start = 'un_start',
}

export interface Odyssey {
  id: number;
  name: string;
  description: string;
  start_time: number;
  end_time: number;
  status: StatusType;
  banner: string;
  link: string;
  category: string;
  rule: string;
  chains_id: string;
  networks_id: string;
  reward: string;
  is_new: boolean;
  trading_volume: string;
  total_transactions: number;
  total_users: number;
  reward_value?: string;
}

interface Reward {
  name: string;
  value: string;
  logo_key: string;
}

export interface FormattedRewardList {
  logo_key: string;
  value: string;
  name: string;
  odysseys: Odyssey[];
}


export default function useDappReward() {
  const formatRewardList = (data: Odyssey[]): FormattedRewardList[] => {
    if (!data || !data.length) return [];
    return data.reduce((result: FormattedRewardList[], item: Odyssey) => {
      const rewards: Reward[] = item.reward ? JSON.parse(item.reward) : [];
  
      rewards.forEach((reward) => {
        const existingReward = result.find(r => r.logo_key === reward.logo_key);
  
        if (existingReward) {
          existingReward.odysseys.push({ ...item, reward_value: reward.value });
        } else {
          result.push({
            logo_key: reward.logo_key,
            value: reward.value,
            name: reward.name,
            odysseys: [{ ...item, reward_value: reward.value }],
          });
        }
      });
      return result;
    }, []);
  }

  const fetchRewardData = async () => {
    try {
      const result = await get(`${QUEST_PATH}/api/compass/reward-list`);
      return result?.data ?? [];
    } catch {
      return [];
    }
  }

  return {
    fetchRewardData,
    formatRewardList
  }
}

