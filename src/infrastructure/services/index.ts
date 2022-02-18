import createLookupService from './lookupService';
import createAnnouncementService from './announcementService';
import createAuthService from './authService';
import createSlideshowService from './slideshowService';
import createMoneyLogService from './moneyLogService';
import createDepositWithdrawalService from './depositWithdrawalService';
import createInvestmentService from './investmentService';
import createBankService from './bankService';
import createUserService from './userService';
import createRankingService from './rankingService';
import createStaticService from './staticService';
import createSettingService from './settingService';
import createMissionService from './missionService';
import createMiningService from './miningService';
import createNotificationService from './notificationService';
import createFnqService from './fnqService';

export default function createService(config: any) {
    return {
        lookupService: createLookupService(),
        announcementService: createAnnouncementService(config),
        authService: createAuthService(config),
        slideshowService: createSlideshowService(config),
        moneyLogService: createMoneyLogService(config),
        depositWithdrawalService: createDepositWithdrawalService(config),
        investmentService: createInvestmentService(config),
        bankService: createBankService(config),
        userService: createUserService(config),
        rankingService: createRankingService(config),
        staticService: createStaticService(config),
        settingService: createSettingService(config),
        missionService: createMissionService(config),
        miningService: createMiningService(config),
        notificationService: createNotificationService(config),
        fnqService: createFnqService(config),
    }
}