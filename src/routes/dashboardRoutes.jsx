//  PAGES
import Dashboard from "views/dashboard/home/Dashboard";
import Account from 'views/dashboard/account';
import TradeBitcoin from 'views/dashboard/trade/bitcoin';
import TradeUsdt from 'views/dashboard/trade/usdt';
import UserHistory from 'views/dashboard/history';
import Support from 'views/dashboard/support';
import HowToUse from "../views/dashboard/howToUse";

const dashboardRoutes = [
  // page route
  { path: "/dashboard/home", component: Dashboard },
  { path: "/dashboard/account", component: Account },
  { path: "/dashboard/how-to-use", component: HowToUse },
  { path: "/dashboard/history", component: UserHistory },
  { path: "/dashboard/support", component: Support },
  { path: "/dashboard/trade/bitcoin", component: TradeBitcoin },
  { path: "/dashboard/trade/usdt", component: TradeUsdt }
];

export default dashboardRoutes;
