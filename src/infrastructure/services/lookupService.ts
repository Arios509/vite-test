import { imageUrlFormatter } from "../seedwork/imageUrlFormatter"
export default function () {

    return {
        async getSubmenu() {
            return [null, [
                {
                    id: 1,
                    name: "labelDashboardMyMiner",
                    icon: imageUrlFormatter("assets/img/icons/myminer.png"),
                    link: 'MiningOrderSummaryPage'
                },
                {
                    id: 1,
                    name: "labelDashboardMinerCalculator",
                    icon: imageUrlFormatter("assets/img/icons/minercalculator.png"),
                    link: 'MiningCalculatorAddPage'
                },
                {
                    id: 1,
                    name: "labelDashboardCrytoExchange",
                    icon: imageUrlFormatter("assets/img/icons/cryptoexchange.png"),
                    link: 'ExchangeSummaryPage'
                },
                {
                    id: 1,
                    name: "labelDashboardMyInvestment",
                    icon: imageUrlFormatter("assets/img/icons/myinvestment.png"),
                    link: 'InvestmentBookingSummaryPage',
                    isComingSoon: true
                },
                {
                    id: 1,
                    name: "labelDashboardProfitCalculator",
                    icon: imageUrlFormatter("assets/img/icons/investmentcalculator.png"),
                    link: 'ProfitCalculatorAddPage',
                    isComingSoon: true
                },
                {
                    id: 1, name: "labelDashboardRanking",
                    icon: imageUrlFormatter("assets/img/icons/leaderboard.png"),
                    link: 'RankingSummaryPage',
                    isComingSoon: false
                },
                {
                    id: 1,
                    name: "labelDashboardSelfReport",
                    icon: imageUrlFormatter("assets/img/icons/dailyreport.png"),
                    link: 'SelfReportSummaryPage'
                },
                {
                    id: 1,
                    name: "labelDashboardTeamReport",
                    icon: imageUrlFormatter("assets/img/icons/teamreport.png"),
                    link: 'TeamSummaryPage'
                },
                {
                    id: 1,
                    name: "labelDashboardDepositHistory",
                    icon: imageUrlFormatter("assets/img/icons/depositlog.png"),
                    link: 'TransactionSummaryDepositPage',
                    tab: 'deposit'
                },
                {
                    id: 1,
                    name: "labelDashboardWithdrawHistory",
                    icon: imageUrlFormatter("assets/img/icons/withdrawallog.png"),
                    link: 'TransactionSummaryWithdrawPage',
                    tab: 'withdrawal'
                },

                {
                    id: 1,
                    name: "labelDashboardContactUs",
                    icon: imageUrlFormatter("assets/img/icons/helpcenter.png"),
                    link: 'CustomerSupportSummaryPage'
                },
                {
                    id: 1,
                    name: "labelDashboardSocialAccount",
                    icon: imageUrlFormatter("assets/img/icons/socialaccountbinding.png"),
                    link: 'ComingSoonPage',
                    isComingSoon: true
                },
                {
                    id: 1,
                    name: "labelDashboardAboutUs",
                    icon: imageUrlFormatter("assets/img/icons/aboutglobalm.png"),
                    link: 'AboutUsSummaryPage'
                },
                {
                    id: 1,
                    name: "labelDashboardProfile",
                    icon: imageUrlFormatter("assets/img/icons/accountsetting.png"),
                    link: 'ProfileSummaryPage'
                },
                {
                    id: 1,
                    name: "labelDashboardDownloadApp",
                    icon: imageUrlFormatter("assets/img/icons/appdownload.png"),
                    link: 'TutorialSummaryPage'
                },
            ]]
        },
        getCountrieCodes() {
            return [null, [
                { id: 60, value: "+60", img: imageUrlFormatter(`assets/img/country/malaysia.svg`) },
                { id: 62, value: "+62", img: imageUrlFormatter(`assets/img/country/indonesia.svg`) },
                { id: 65, value: "+65", img: imageUrlFormatter(`assets/img/country/singapore.svg`) },
                { id: 66, value: "+66", img: imageUrlFormatter(`assets/img/country/thailand.svg`) },
                { id: 84, value: "+84", img: imageUrlFormatter(`assets/img/country/vietnam.svg`) },
                { id: 86, value: "+86", img: imageUrlFormatter(`assets/img/country/china.svg`) },
                { id: 95, value: "+95", img: imageUrlFormatter(`assets/img/country/myanmar.svg`) },
                { id: 852, value: "+852", img: imageUrlFormatter(`assets/img/country/hongkong.svg`) },
                { id: 855, value: "+855", img: imageUrlFormatter(`assets/img/country/cambodia.svg`) },
                { id: 856, value: "+856", img: imageUrlFormatter(`assets/img/country/laos.svg`) },
                { id: 886, value: "+886", img: imageUrlFormatter(`assets/img/country/taiwan.svg`) },
                { id: 971, value: "+971", img: imageUrlFormatter(`assets/img/country/unitedArab.svg`) },
            ]]
        },
        getCountries() {
            return [null, [
                { id: 60, value: "labelMalaysia", img: imageUrlFormatter(`assets/img/country/malaysia.svg`) },
                { id: 62, value: "labelIndonesia", img: imageUrlFormatter(`assets/img/country/indonesia.svg`) },
                { id: 65, value: "labelSingapore", img: imageUrlFormatter(`assets/img/country/singapore.svg`) },
                { id: 66, value: "labelThailand", img: imageUrlFormatter(`assets/img/country/thailand.svg`) },
                { id: 84, value: "labelVietnam", img: imageUrlFormatter(`assets/img/country/vietnam.svg`) },
                { id: 86, value: "labelChina", img: imageUrlFormatter(`assets/img/country/china.svg`) },
                { id: 95, value: "labelMyanmar", img: imageUrlFormatter(`assets/img/country/myanmar.svg`) },
                { id: 852, value: "labelHongKong", img: imageUrlFormatter(`assets/img/country/hongkong.svg`) },
                { id: 855, value: "labelCambodia", img: imageUrlFormatter(`assets/img/country/cambodia.svg`) },
                { id: 856, value: "labelLaos", img: imageUrlFormatter(`assets/img/country/laos.svg`) },
                { id: 886, value: "labelTaiwan", img: imageUrlFormatter(`assets/img/country/taiwan.svg`) },
                { id: 971, value: "labelUnitedArab", img: imageUrlFormatter(`assets/img/country/unitedArab.svg`) },
            ]]
        }
    }
}