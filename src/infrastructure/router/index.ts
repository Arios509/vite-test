import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const all = "all";
const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: '/dashboard' },
    {
        path: '/dashboard', name: "DashboardPage",
        component: () => import('views/Dashboard/HomePage.vue'),
        meta: { roles: all }
    },
    {
        path: '/coming', name: "ComingSoonPage",
        component: () => import('views/Dashboard/ComingSoonPage.vue'),
        meta: {}
    },
    {
        path: '/browse/:recordId', name: "BrowsePage",
        component: () => import('views/Dashboard/BrowsePage.vue'),
        props: true
    },
    {
        path: '/auth', name: "AuthPage",
        component: () => import('views/Auth/AuthPage.vue'),
        children: [
            {
                path: '/register', name: "RegisterPage",
                component: () => import('views/Auth/RegisterPage.vue')
            },
            {
                path: '/login', name: "LoginPage",
                component: () => import('views/Auth/LoginPage.vue')
            },
            {
                path: '/forgot-password', name: "PasswordResetPage",
                component: () => import('views/Auth/ForgotPasswordPage.vue')
            },
        ]
    },


    {
        path: '/moneylog', name: "MoneyLogPage",
        component: () => import('views/MoneyLog/MoneyLogPage.vue')
    },
    {
        path: '/transaction', name: "TransactionPage",
        component: () => import('views/Transaction/TransactionPage.vue'),
        children: [
            {
                path: 'withdrawlog', name: "TransactionSummaryWithdrawPage",
                component: () => import('views/Transaction/SummaryPage.vue'),
                props: true
            },
            {
                path: 'depositlog', name: "TransactionSummaryDepositPage",
                component: () => import('views/Transaction/SummaryPage.vue'),
                props: true
            },
            {
                path: 'withdraw', name: "WithdrawPage",
                component: () => import('views/Transaction/WithdrawPage.vue'),
            },
            {
                path: 'deposit', name: "DepositPage",
                component: () => import('views/Transaction/DepositPage.vue'),
            },
        ]
    },
    {
        path: '/investment', name: "InvestmentPage",
        component: () => import('views/Investment/InvestmentPage.vue'),
        children: [
            {
                path: '', name: "InvestmentSummaryPage",
                component: () => import('views/Investment/SummaryPage.vue'),
            },
            {
                path: ':recordId', name: "InvestmentDetailPage",
                component: () => import('views/Investment/InvestmentDetailPage.vue'),
                props: true
            },
            {
                path: ':recordId/add', name: "InvestmentAddPage",
                component: () => import('views/Investment/AddPage.vue'),
                props: true
            },
            {
                path: 'booking', name: "InvestmentBookingSummaryPage",
                component: () => import('views/Investment/InvestmentBookingSummaryPage.vue'),
                props: true
            },
            {
                path: 'booking/:recordId', name: "InvestmentBookingDetailPage",
                component: () => import('views/Investment/InvestmentBookingDetailPage.vue'),
                props: true
            },
        ]
    },
    {
        path: '/ranking', name: "RankingPage",
        component: () => import('views/Ranking/RankingPage.vue'),
        children: [
            {
                path: '', name: "RankingSummaryPage",
                component: () => import('views/Ranking/SummaryPage.vue'),
                props: true
            },
        ]
    },
    {
        path: '/profile', name: "ProfilePage",
        component: () => import('views/Profile/ProfilePage.vue'),
        children: [
            {
                path: '', name: "ProfileSummaryPage",
                component: () => import('views/Profile/SummaryPage.vue'),
                props: true
            },
            {
                path: 'change-name', name: "ProfileChangeNamePage",
                component: () => import('views/Profile/ChangeNamePage.vue'),
                props: true
            },
            {
                path: 'bank-account', name: "ProfileBankAccountPage",
                component: () => import('views/Profile/BankAccountPage.vue'),
                props: true
            },
            {
                path: 'bank-account/add', name: "ProfileBankAccountAddPage",
                component: () => import('views/Profile/BankAccountAddPage.vue'),
                props: true
            },
            {
                path: 'withdraw-password', name: "ProfileWithdrawPassowrdPage",
                component: () => import('views/Profile/WithdrawPasswordPage.vue'),
                props: true
            },
            {
                path: 'change-password', name: "ProfileChangePassowrdPage",
                component: () => import('views/Profile/ChangePasswordPage.vue'),
                props: true
            },
            {
                path: 'change-email', name: "ProfileChangeEmailPage",
                component: () => import('views/Profile/ChangeEmailPage.vue'),
                props: true
            },
        ]
    },
    {
        path: '/customer-support', name: "CustomerSupportPage",
        component: () => import('views/CustomerSupport/CustomerSupportPage.vue'),
        children: [
            {
                path: '', name: "CustomerSupportSummaryPage",
                component: () => import('views/CustomerSupport/SummaryPage.vue'),
                props: true
            },
            {
                path: 'content/:recordId', name: "CustomerSupportHtmlContentPage",
                component: () => import('views/CustomerSupport/HtmlContentPage.vue'),
                props: true
            },
        ]
    },
    {
        path: '/about-us', name: "AboutUsPage",
        component: () => import('views/AboutUs/AboutUsPage.vue'),
        children: [
            {
                path: '', name: "AboutUsSummaryPage",
                component: () => import('views/AboutUs/SummaryPage.vue'),
                props: true
            },
        ]
    },
    {
        path: '/tutorial', name: "TutorialPage",
        component: () => import('views/CustomerSupport/CustomerSupportPage.vue'),
        children: [
            {
                path: ':type', name: "TutorialHtmlContentPage",
                component: () => import('views/CustomerSupport/HtmlContentPage.vue'),
                props: true
            }
        ]
    },
    {
        path: '/app-download', name: "TutorialPage",
        component: () => import('views/Tutorial/TutorialPage.vue'),
        children: [
            {
                path: '', name: "TutorialSummaryPage",
                component: () => import('views/Tutorial/SummaryPage.vue'),
                props: true
            }
        ]
    },
    {
        path: '/profit', name: "ProfitCalculatorPage",
        component: () => import('views/ProfitCalculator/ProfitCalculatorPage.vue'),
        children: [
            {
                path: 'calculator', name: "ProfitCalculatorAddPage",
                component: () => import('views/ProfitCalculator/AddPage.vue'),
                props: true
            }
        ]
    },
    {
        path: '/mining-calculator', name: "MiningCalculatorPage",
        component: () => import('views/MiningCalculator/MiningCalculatorPage.vue'),
        children: [
            {
                path: '', name: "MiningCalculatorAddPage",
                component: () => import('views/MiningCalculator/AddPage.vue'),
                props: true
            }
        ]
    },
    {
        path: '/invite', name: "InvitePage",
        component: () => import('views/Invite/InvitePage.vue'),
        children: [
            {
                path: '', name: "InviteSummaryPage",
                component: () => import('views/Invite/SummaryPage.vue'),
                props: true
            }
        ]
    },
    {
        path: '/checkin-mission', name: "CheckInMissionPage",
        component: () => import('views/CheckInMission/CheckInMissionPage.vue'),
        children: [
            {
                path: '', name: "CheckInMissionSummaryPage",
                component: () => import('views/CheckInMission/SummaryPage.vue'),
                props: true
            }
        ]
    },
    {
        path: '/mining', name: "MiningPage",
        component: () => import('views/Mining/MiningPage.vue'),
        children: [
            {
                path: '', name: "MiningSummaryPage",
                component: () => import('views/Mining/SummaryPage.vue'),
                props: true
            },
            {
                path: 'detail/:recordId', name: "MiningDetailPage",
                component: () => import('views/Mining/DetailPage.vue'),
                props: true
            },
            {
                path: 'order/:recordId', name: "MiningAddPage",
                component: () => import('views/Mining/AddPage.vue'),
                props: true
            },
            {
                path: 'order', name: "MiningOrderSummaryPage",
                component: () => import('views/Mining/MiningOrderSummaryPage.vue'),
                props: true
            },
            {
                path: 'order/behalf', name: "MiningPurchaseOnBehalfPage",
                component: () => import('views/Mining/MiningPurchaseOnBehalfPage.vue'),
                props: true
            }
        ]
    },
    {
        path: '/exchange', name: "ExchangePage",
        component: () => import('views/Exchange/ExchangePage.vue'),
        children: [
            {
                path: '', name: "ExchangeSummaryPage",
                component: () => import('views/Exchange/SummaryPage.vue'),
                props: true
            },
            {
                path: 'detail/:recordId', name: "ExchangeDetailPage",
                component: () => import('views/Exchange/DetailPage.vue'),
                props: true
            },
        ]
    },
    {
        path: '/report', name: "TeamPage",
        component: () => import('views/Report/TeamPage.vue'),
        children: [
            {
                path: '', name: "TeamSummaryPage",
                component: () => import('views/Report/SummaryPage.vue'),
                props: true
            },
            {
                path: 'self', name: "SelfReportSummaryPage",
                component: () => import('views/Report/SelfReportSummaryPage.vue'),
                props: true
            },
        ]
    },
    {
        path: '/notification', name: "NotificationPage",
        component: () => import('views/Notification/NotificationPage.vue'),
        children: [
            {
                path: '', name: "NotificationSummaryPage",
                component: () => import('views/Notification/SummaryPage.vue'),
                props: true
            },
        ]
    },
    // otherwise redirect to home
    // { path: '/:pathMatch(.*)*', redirect: '/' },
    {
        path: '/:catchAll(.*)*',
        name: "NotFound",
        component: () => import('views/NotFound/NotFoundPage.vue'),
    },
];


function authorizationMiddleware(config: any) {

    return async (to: any, from: any, next: any) => {
        // const notFoundPage = { path: 'NotFound' };
        // const token = localStorage.getItem('token');
        // const requiredRoles = jwtDecrypt(token);

        // if (to.meta.roles === all) {
        //     next()
        // } else {
        //     console.log(';s')
        //     next(notFoundPage);
        // }
        return next()
    }
}


export function createRouterFunction(config: any) {
    const router = createRouter({
        history: createWebHashHistory(),
        routes: routes
    });

    if (config.role)
        router.beforeEach(authorizationMiddleware({ router, ...config }));

    router.beforeEach(authorizationMiddleware({ router }));
    return router;
}