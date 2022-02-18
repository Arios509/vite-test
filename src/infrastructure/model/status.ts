const STATUS_CLASS: any = {
    1: "text-green-500",
    0: "text-yellow-500",
    "-1": "text-red-500",
};

const STATUS: any = {
    1: "fieldLabelApproved",
    0: "fieldLabelPending",
    "-1": "fieldLabelRejected",
};

const STATUS_INVESTMENT: any = {
    1: "labelInvestmentRunning",
    2: "labelInvestmentCompleted",
    "-1": "labelInvestmentCancelled",
    "-2": "labelInvestmentCancelled",
};

const STATUS_INVESTMENT_CLASS: any = {
    1: "text-green-500",
    2: "text-blue-500",
    "-1": "text-red-500",
    "-2": "text-blue-500",
};

const STATUS_INVESTMENT_DETAIL: any = {
    1: "labelInvestmentPending",
    2: "labelInvestmentTransferred",
    0: "labelInvestmentCancelled",
};

const STATUS_INVESTMENT_DETAIL_CLASS: any = {
    1: "text-yellow-500",
    2: "text-green-500",
    0: "text-red-500",
};

export {
    STATUS_CLASS, STATUS, STATUS_INVESTMENT, STATUS_INVESTMENT_CLASS,
    STATUS_INVESTMENT_DETAIL, STATUS_INVESTMENT_DETAIL_CLASS
}