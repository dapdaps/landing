import type { NetworkId } from '@/utils/types';

type NetworkComponents = {
  bosDirectory: string;
  componentSummary: string;
  componentsPage: string;
  default: string;
  digButton: string;
  editorComponentSearch: string;
  horizon: {
    homePage: string;
    appPage: string;
  };
  image: string;
  nearOrg: {
    ecosystemCommunityPage: string;
    ecosystemGetFundingPage: string;
    ecosystemOverviewPage: string;
    ecosystemWorkAndEarnPage: string;
    footer: string;
    homePage: string;
    learningLinks: string;
    usePage: string;
  };
  notificationButton: string;
  notificationsPage: string;
  peoplePage: string;
  profileImage: string;
  profileInlineBlock: string;
  profileName: string;
  profilePage: string;
  search: {
    indexPage: string;
    typeAheadDropdown: string;
  };
  tosCheck: string;
  tosContent: string;
  viewSource: string;
  widgetMetadata: string;
  widgetMetadataEditor: string;
  wrapper: string;
  near: string;
  warmUp: string;
  'polygon-zkevm': string;
  tabNavigation: string;
  base: string;
  mantle: string;
  allChains: string;
  arbitrum: string;
  bsc: string;
  linea: string;
  metis: string;
  polygon: string;
  gnosis: string;
  zkSync: string;
  avalanche: string;
  optimism: string;
  uniswap: string;
  manta?: string;
};

export const componentsByNetworkId: Record<NetworkId, NetworkComponents | undefined> = {
  testnet: {
    bosDirectory: 'one.testnet/widget/BOSDirectory',
    componentSummary: 'discom.testnet/widget/ComponentSummary',
    componentsPage: 'discom.testnet/widget/ComponentsPage',
    default: 'discom.testnet/widget/ActivityPage',
    digButton: 'discom.testnet/widget/DIG.Button',
    editorComponentSearch: 'one.testnet/widget/Editor.ComponentSearch',
    horizon: {
      homePage: 'nearhorizon.near/widget/HomePage',
      appPage: 'nearhorizon.near/widget/Index',
    },
    image: 'eugenethedream/widget/Image',
    nearOrg: {
      ecosystemCommunityPage: 'discom.testnet/widget/NearOrg.Ecosystem.CommunityPage',
      ecosystemGetFundingPage: 'discom.testnet/widget/NearOrg.Ecosystem.GetFundingPage',
      ecosystemOverviewPage: 'discom.testnet/widget/NearOrg.Ecosystem.OverviewPage',
      ecosystemWorkAndEarnPage: 'discom.testnet/widget/NearOrg.Ecosystem.WorkAndEarnPage',
      footer: 'discom.testnet/widget/NearOrg.Footer',
      homePage: 'discom.testnet/widget/NearOrg.HomePage',
      learningLinks: 'discom.testnet/widget/NearOrg.LearningLinks',
      usePage: 'discom.testnet/widget/NearOrg.UsePage',
    },
    notificationButton: 'discom.testnet/widget/NotificationButton',
    notificationsPage: 'discom.testnet/widget/NotificationsPage',
    peoplePage: 'discom.testnet/widget/PeoplePage',
    profileImage: 'eugenethedream/widget/ProfileImage',
    profileInlineBlock: 'eugenethedream/widget/Profile.InlineBlock',
    profileName: 'eugenethedream/widget/ProfileName',
    profilePage: 'discom.testnet/widget/ProfilePage',
    search: {
      indexPage: 'discom.testnet/widget/Search.IndexPage',
      typeAheadDropdown: 'discom.testnet/widget/Search.TypeAheadDropdown',
    },
    tosCheck: 'discom.testnet/widget/TosCheck',
    tosContent: 'discom.testnet/widget/TosContent',
    viewSource: 'eugenethedream/widget/WidgetSource',
    widgetMetadata: 'eugenethedream/widget/WidgetMetadata',
    widgetMetadataEditor: 'discom.testnet/widget/WidgetMetadataEditor',
    wrapper: 'discom.testnet/widget/DIG.Theme',
    near: 'juaner.near/widget/ref-home',
    warmUp: 'guessme.near/widget/ZKEVMWarmUp.warm-up',
    'polygon-zkevm': 'bluebiu.near/widget/ZKEVM-all-in-one',
    tabNavigation: 'ref-admin.near/widget/TabNavigation',
    base: 'bluebiu.near/widget/Base.All-in-one',
    mantle: 'bluebiu.near/widget/Mantle.All-in-one',
    allChains: 'bluebiu.near/widget/AllChains.AllChainsPage',
    arbitrum: 'bluebiu.near/widget/Arbitrum.All-in-one',
    bsc: 'bluebiu.near/widget/Bsc.All-in-one',
    linea: 'bluebiu.near/widget/Linea.All-in-one',
    polygon: 'bluebiu.near/widget/Polygon.All-in-one',
    metis: 'bluebiu.near/widget/Metis.All-in-one',
    gnosis: 'bluebiu.near/widget/Gnosis.All-in-one',
    zkSync: 'bluebiu.near/widget/zkSync.All-in-one',
    avalanche: 'bluebiu.near/widget/Avalanche.All-in-one',
    optimism: 'bluebiu.near/widget/Optimism.All-in-one',
    uniswap: 'dapdapbos.near/widget/Uniswap.Swap.Dex',
  },

  mainnet: {
    bosDirectory: 'onboarder.near/widget/BOSDirectory',
    componentSummary: 'near/widget/ComponentSummary',
    componentsPage: 'near/widget/ComponentsPage',
    default: 'near/widget/ActivityPage',
    digButton: 'near/widget/DIG.Button',
    editorComponentSearch: 'mob.near/widget/Editor.ComponentSearch',
    horizon: {
      homePage: 'nearhorizon.near/widget/HomePage',
      appPage: 'nearhorizon.near/widget/Index',
    },
    image: 'mob.near/widget/Image',
    nearOrg: {
      ecosystemCommunityPage: 'near/widget/NearOrg.Ecosystem.CommunityPage',
      ecosystemGetFundingPage: 'near/widget/NearOrg.Ecosystem.GetFundingPage',
      ecosystemOverviewPage: 'near/widget/NearOrg.Ecosystem.OverviewPage',
      ecosystemWorkAndEarnPage: 'near/widget/NearOrg.Ecosystem.WorkAndEarnPage',
      footer: 'near/widget/NearOrg.Footer',
      homePage: 'near/widget/NearOrg.HomePage',
      learningLinks: 'near/widget/NearOrg.LearningLinks',
      usePage: 'near/widget/NearOrg.UsePage',
    },
    notificationButton: 'near/widget/NotificationButton',
    notificationsPage: 'near/widget/NotificationsPage',
    peoplePage: 'near/widget/PeoplePage',
    profileImage: 'mob.near/widget/ProfileImage',
    profileInlineBlock: 'mob.near/widget/Profile.InlineBlock',
    profileName: 'patrick.near/widget/ProfileName',
    profilePage: 'near/widget/ProfilePage',
    search: {
      indexPage: 'near/widget/Search.IndexPage',
      typeAheadDropdown: 'near/widget/Search.TypeAheadDropdown',
    },
    tosCheck: 'near/widget/TosCheck',
    tosContent: 'adminalpha.near/widget/TosContent',
    viewSource: 'mob.near/widget/WidgetSource',
    widgetMetadata: 'mob.near/widget/WidgetMetadata',
    widgetMetadataEditor: 'near/widget/WidgetMetadataEditor',
    wrapper: 'near/widget/DIG.Theme',
    near: 'juaner.near/widget/ref-home',
    warmUp: 'guessme.near/widget/ZKEVMWarmUp.warm-up',
    'polygon-zkevm': 'bluebiu.near/widget/ZKEVM-all-in-one',
    tabNavigation: 'ref-admin.near/widget/TabNavigation',
    base: 'bluebiu.near/widget/Base.All-in-one',
    mantle: 'bluebiu.near/widget/Mantle.All-in-one',
    allChains: 'bluebiu.near/widget/AllChains.AllChainsPage',
    arbitrum: 'bluebiu.near/widget/Arbitrum.All-in-one',
    bsc: 'bluebiu.near/widget/Bsc.All-in-one',
    linea: 'bluebiu.near/widget/Linea.All-in-one',
    polygon: 'bluebiu.near/widget/Polygon.All-in-one',
    metis: 'bluebiu.near/widget/Metis.All-in-one',
    gnosis: 'bluebiu.near/widget/Gnosis.All-in-one',
    zkSync: 'bluebiu.near/widget/zkSync.All-in-one',
    avalanche: 'bluebiu.near/widget/Avalanche.All-in-one',
    optimism: 'bluebiu.near/widget/Optimism.All-in-one',
    manta: 'bluebiu.near/widget/All-in-one',
    uniswap: 'dapdapbos.near/widget/Uniswap.Swap.Dex',
  },
};
