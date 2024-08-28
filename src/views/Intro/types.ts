export type NavigationType = {
  path: string;
  label: string;
  icon?: JSX.Element;
  target?: "_self" | "_blank"
}
export type StatsType = {
  total_users: number;
  total_transactions: number;
  total_trading_volume: number;
  total_l2_network: number;
  total_dapp: number;
}
