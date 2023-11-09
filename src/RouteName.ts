export enum RouteName {
  ROOT = "/",
  LOGIN = "/login",
  SIGNUP = "/signup",
  VERIFY_EMAIL = "/verify-email",

  ADMIN_DASHBOARD = "/admin/score-board/:matchId?",
  ADMIN_DASHBOARD2 = "/admin/score-board2/:matchId?",
  ADMIN_CREATE_TOURNAMENT = "/admin/create-tournament",
  // ADMIN_TOURNAMENT_LIST = "/admin/tournament-list",
  // ADMIN_MATCHES = "/admin/my-matches/points-table/:userId?",

  ADMIN_POINTS_TABLE = "/admin/points-table/:tournamentId?",
  ADMIN_MY_MATCHES_POINTS_TABLE = "/admin/my-matches/points-table/:userId?",
  ADMIN_LIVE_SCORE = "/admin/live-score/:matchId",
  // ADMIN_MAIN_DASHBOARD = "/admin/dashboard/:tournamentId?",
  ADMIN_USER_MANAGEMENT = "/admin/user-management",
  ADMIN_USER_MANAGEMENT_Tournament = "/admin/user-tournament/:userId?",
  ADMIN_USER_MANAGEMENT_TournamentList = "/admin/user-management-tournament/:tournamentId?",
  ADMIN_PROFILE = "/admin/profile/:tournamentId?",
  ADMIN_DEMO_USERS = "/admin/demo-users",

  //new routes
  ADMIN_SUBSCRIPTIONS = "/admin/subscriptions",
  ADMIN_UPGRADE_PACKAGE = "/admin/upgrade-package/:userId?",
  ADMIN_MAIN_DASHBOARD = "/admin/dashboard",
  ADMIN_MY_MATCHES = "/admin/my-matches/:userId?",
  ADMIN_MY_MATCHES_QUICK_TEAMS = "/admin/my-matches/teams/:userId?",
  ADMIN_MY_MATCHES_CREATE_QUICK_MATCH = "/admin/my-matches/create-quick-match/:userId?",
  // ADMIN_MY_MATCHES_CREATE_QUICK_TEAMS = "/admin/my-matches/create-quick-teams/:userId?",
   ADMIN_MY_MATCHES_CREATE_QUICK_TEAMS = "/admin/my-matches/create-quick-teams/:userId?/:state?",
  ADMIN_MY_MATCHES_PLAN_QUICK_MATCH="/admin/my-matches/plan-quick-match/:userId?",


  // ADMIN_MY_MATCHES_Matches="/admin/my-matches/matches/:userId?",
  ADMIN_TOURNAMENT_DASHBOARD = "/admin/tournament-dashboard",
  ADMIN_SINGLE_TOURNAMENT = "/admin/tournament/:tournamentName?/:tournamentId?",
  ADMIN_TOURNAMENT_TEAMS = `/admin/teams/:tournamentId?`,
 ADMIN_TOURNAMENT_MATCHES  = `/admin/matches/:tournamentId?`,



  //plan upgrade/payment routes
  ADMIN_REQUEST_SILVER_PLAN_LINK = "/admin/request-silver-plan-link",
  ADMIN_REQUEST_GOLD_PLAN_LINK = "/admin/request-gold-plan-link",
  ADMIN_PAYMENT_DONE = "/admin/payment-done",

  SUPERADMIN_SEND_PAY_LINK = "/superadmin/send-pay-link/:userId?",
  SUPERADMIN_CONFIRM_TO_SILVER = "/superadmin/confirm-to-silver/:userId?",
  SUPERADMIN_CONFIRM_TO_GOLD = "/superadmin/confirm-to-gold/:userId?",
}
