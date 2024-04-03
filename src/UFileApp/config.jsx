
const UF_FIELD_CONFIG = {
    Header: {
        name: "00",
        deletable: false,
        fields: {
            MTID: {
                name: "MTID",
                max: 2,
                readOnly: true,
            },
            FILE_NAME: {
                name: "File Name",
                max: 12,
            },
            LAST_FILE: {
                name: "Last File",
                max: 12,
            },
            VERSION: {
                name: "Version",
                max: 4,
            }
        },
    },
    Footer: {
        name: "99",
        deletable: false,
        fields: {
            MTID: {
                name: "MTID",
                max: 2,
                readOnly: true,
            },
            FILE_NAME: {
                name: "File Name",
                max: 12,
            },
            COUNT: {
                name: "Record count",
                max: 10,
            }
        },
    },
    Merchant: {
        name: "MERCHANTS_ALL",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            MERCHANT: {
                name: "Merchant",
                max: 15,
            },
            PARENT: {
                name: "Parent",
                max: 15,
            },
            ABRV_NAME: {
                name: "Abreviation",
                max: 27,
            },
            FAX: {
                name: "Fax",
                max: 11,
            },
            FULL_NAME: {
                name: "Full Name",
                max: 78,
            },
            CNTRY: {
                name: "Country",
                max: 3,
            },
            CITY: {
                name: "City",
                max: 15,
            },
            REG_NR: {
                name: "Reg Number",
                max: 25,
            },
            STREET: {
                name: "Street",
                max: 30,
            },
            POST_IND: {
                name: "Postal Index",
                max: 6,
            },
            PHONE: {
                name: "Phone",
                max: 11,
            },
            CONT_PERSON: {
                name: "Contact Person",
                max: 30,
            },
            MCC: {
                name: "MCC",
                max: 4,
            },
            P_CNTRY: {
                name: "P Country",
                max: 3,
            },
            P_CITY: {
                name: "P City",
                max: 15,
            },
            P_STREET: {
                name: "P Street",
                max: 30,
            },
            P_POST_IND: {
                name: "P Postal Index",
                max: 6,
            },
            MRC_PHONE: {
                name: "MRC Phone",
                max: 15,
            },
            REPORT_CRIT: {
                name: "Report Crit",
                max: 1,
            },
            E_MAIL: {
                name: "E-Mail",
                max: 256,
            },
            ADD_INFO: {
                name: "Add Info",
                max: 30,
            },
            REPORT_CRIT2: {
                name: "Report Crit 2",
                max: 4,
            },
            USER_FIELD: {
                name: "User field",
                max: 10
            },
            REGION: {
                name: "Region",
                max: 3
            },
            TAX_TYPE: {
                name: "Tax Type",
                max: 1
            },
            POST_IND_NEW: {
                name: "Postal Index New",
                max: 8
            },
            P_POST_IND_NEW: {
                name: "P Postal Index New",
                max: 8
            },
            YF_FILE: {
                name: "YF File",
                max: 1
            },
            YD_FILE: {
                name: "YD File",
                max: 1
            },
            AUTH_PROFILE: {
                name: "Auth Profile",
                max: 32
            },
            ADD_CONTACT_INFO: {
                name: "Add contact info",
                max: 25
            },
            URL: {
                name: "URL",
                max: 255
            },
            STATE_PROVINCE: {
                name: "State/Province",
                max: 3
            },
            ORIG_CNTRY: {
                name: "Country of origin",
                max: 3
            },
            PHONE_NEW: {
                name: "Phone New",
                max: 15
            },
            MRC_PHONE_NEW: {
                name: "MRC Phone New",
                max: 16
            },
        }
    },
    Agreement_ON_US: {
        name: "AGR_ON_US_ALL",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            CARD_TYPE: {
                name: "Card Type",
                max: 2,
            },
            MERCHANT: {
                name: "Merchant",
                max: 15,
            },
            ISS_CMI: {
                name: "ISS CMI",
                max: 8,
            },
            IMPRINT_FEE: {
                name: "Imprint Fee",
                max: 6,
            },
            IMPRINT_MIN: {
                name: "Imprint Min",
                max: 8,
            },
            IMPRINT_MAX: {
                name: "Imprint Max",
                max: 12,
            },
            POS_FEE: {
                name: "POS Fee",
                max: 6,
            },
            POS_MIN: {
                name: "POS Min",
                max: 8,
            },
            POS_MAX: {
                name: "POS Max",
                max: 12,
            },
            CASHBACK_FEE: {
                name: "Cashback Fee",
                max: 6,
            },
            CASHBACK_MIN: {
                name: "Cashback Min",
                max: 8,
            },
            CASHBACK_MAX: {
                name: "Cashback Max",
                max: 12,
            },
            ATM_FEE: {
                name: "ATM Fee",
                max: 6,
            },
            ATM_MIN: {
                name: "ATM Min",
                max: 8,
            },
            ATM_MAX: {
                name: "ATM Max",
                max: 12,
            },
            TR_CCY: {
                name: "Tr Currency",
                max: 3,
            },
            BIN: {
                name: "BIN",
                max: 15,
            },
            ALGORITHM: {
                name: "Algorithm",
                max: 1
            }
        }
    },
    Agreement: {
        name: "AGREEMENTS_ALL",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            CARD_TYPE: {
                name: "Card Type",
                max: 2,
            },
            MERCHANT: {
                name: "Merchant",
                max: 15,
            },
            ACQ_BANK: {
                name: "Acquirer Bank",
                max: 2,
            },
            ACQ_BRANCH: {
                name: "Acquirer Branch",
                max: 3,
            },
            TR_CCY: {
                name: "Tr Currency",
                max: 3,
            },
            IMPRINT_FEE: {
                name: "Imprint Fee",
                max: 6,
            },
            IMPRINT_MIN: {
                name: "Imprint Min",
                max: 8,
            },
            IMPRINT_MAX: {
                name: "Imprint Max",
                max: 12,
            },
            POS_FEE: {
                name: "POS Fee",
                max: 6,
            },
            POS_MIN: {
                name: "POS Min",
                max: 8,
            },
            POS_MAX: {
                name: "POS Max",
                max: 12,
            },
            CASHBACK_FEE: {
                name: "Cashback Fee",
                max: 6,
            },
            CASHBACK_MIN: {
                name: "Cashback Min",
                max: 8,
            },
            CASHBACK_MAX: {
                name: "Cashback Max",
                max: 12,
            },
            ATM_FEE: {
                name: "ATM Fee",
                max: 6,
            },
            ATM_MIN: {
                name: "ATM Min",
                max: 8,
            },
            ATM_MAX: {
                name: "ATM Max",
                max: 12,
            },
            POS_LIMIT: {
                name: "POS Limit",
                max: 12,
            },
            POS_LIMIT_ACT: {
                name: "POS Limit Act",
                max: 12,
            },
            IMPRINT_LIMIT: {
                name: "Imprint Limit",
                max: 12,
            },
            STATUS: {
                name: "Status",
                max: 1,
            },
            AGR_NUMBER: {
                name: "Agreement Number",
                max: 15,
            },
            AGR_DATE: {
                name: "Agreement Date",
                max: 10,
            },
            ALGORITHM: {
                name: "Algorithm",
                max: 1,
            },
            OTHER_PERIOD: {
                name: "Other Period",
                max: 2,
            },
            BANK_POS_FEE: {
                name: "Bank POS Fee",
                max: 6,
            },
            BANK_POS_MIN: {
                name: "Bank POS Min",
                max: 8,
            },
            BANK_POS_MAX: {
                name: "Bank POS Max",
                max: 12,
            },
            BANK_IMP_FEE: {
                name: "Bank Imprint Fee",
                max: 6,
            },
            BANK_IMP_MIN: {
                name: "Bank Imprint Min",
                max: 8,
            },
            BANK_IMP_MAX: {
                name: "Bank Imprint Max",
                max: 12,
            },
            BANK_ATM_FEE: {
                name: "Bank ATM Fee",
                max: 6,
            },
            BANK_ATM_MIN: {
                name: "Bank ATM Min",
                max: 8,
            },
            BANK_ATM_MAX: {
                name: "Bank ATM Max",
                max: 12,
            },
            BANK_ALGORITHM: {
                name: "Bank Algorithm",
                max: 1,
            },
            BANK_CALC_MODE: {
                name: "Bank Calc Mode",
                max: 1,
            },
            BANK_ACCOUNT: {
                name: "Bank Account",
                max: 35,
            },
        }
    },
    Terminal: {
        name: "SET0_ACC_TR_ALL",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            TERMINAL_ID: {
                name: "Terminal ID",
                max: 8,
            },
            ACCEPTOR_ID: {
                name: "Acceptor ID",
                max: 15,
            },
            TERM_TYPE: {
                name: "Terminal Type",
                max: 12,
            },
            POINT_CODE: {
                name: "Point Code",
                max: 12,
            },
            INSTALL_DATE: {
                name: "Install Date",
                max: 8,
            },
            STATUS: {
                name: "Status",
                max: 1,
                type: "select",
                options: [0,1,2,3],
            },
            SERIAL_NR: {
                name: "Serial Number",
                max: 24,
            },
            INV_NR: {
                name: "Invoice Number",
                max: 24,
            },
            NOTES: {
                name: "Notes",
                max: 150,
            }
        }
    },
    Department: {
        name: "DEPARTMENTS_ALL",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            CARD_TYPE: {
                name: "Card Type",
                max: 2,
            },
            DEPARTMENT: {
                name: "Department",
                max: 15,
            },
            DEP_BANK: {
                name: "Department Bank",
                max: 2,
            },
            DEP_BRANCH: {
                name: "Department Branch",
                max: 3,
            },
            CRED_ACCOUNT: {
                name: "Credit Account",
                max: 25,
            },
            MERCHANT: {
                name: "Merchant",
                max: 15,
            },
            OTHER_CODE: {
                name: "Other Code",
                max: 15,
            },
            STATUS: {
                name: "Status",
                max: 1,
            },
            CRED_ACCOUNT_NEW: {
                name: "Credit Account New",
                max: 35,
            },
            ABU_FLAG: {
                name: "ABU Flag",
                max: 1,
            },
            MNA_IND: {
                name: "MNA Index",
                max: 1,
            },
            VISA_PAYM_FAC_ID: {
                name: "Visa Payment Facility ID",
                max: 11,
            },
            MC_PAYM_FAC_ID: {
                name: "Mastercard Payment Facility ID",
                max: 11,
            },
            VISA_PAYM_FAC_NAME: {
                name: "Visa Payment Facility Name",
                max: 12,
            },
            MC_PAYM_FAC_NAME: {
                name: "Mastercard Payment Facility Name",
                max: 12,
            },
            MIR_PAYM_FAC_NAME: {
                name: "Mir Payment Facility Name",
                max: 12,
            },
            VISA_ISO_ID: {
                name: "Visa ISO ID",
                max: 11,
            },
            MC_ISO_ID: {
                name: "Mastercard ISO ID",
                max: 11,
            },
            PARTNER_ID: {
                name: "Partner ID",
                max: 6,
            },
            MVI: {
                name: "MVI",
                max: 1,
            }
        }
    },
    Agreements_MPCS_DEP_P: {
        name: "MPCS_DEP_P_ALL",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            CARD_TYPE: {
                name: "Card Type",
                max: 2,
            },
            DEPARTMENT: {
                name: "Department",
                max: 15,
            },
            CURRENCY: {
                name: "Currency",
                max: 3,
            },
            RECEIVER_BANK: {
                name: "Receiver Bank",
                max: 2,
            },
            RECEIVER_BRANCH: {
                name: "Receiver Branch",
                max: 3,
            },
            RECEIVER_ACCOUNT: {
                name: "Receiver Account",
                max: 25,
            },
            STATUS: {
                name: "Status",
                max: 1,
            },
            RECEIVER_ACCOUNT_NEW: {
                name: "Receiver Account New",
                max: 35,
            },
            VISA_PAYM_FAC_ID: {
                name: "Visa Payment Facility ID",
                max: 11,
            },
            MC_PAYM_FAC_ID: {
                name: "Mastercard Payment Facility ID",
                max: 11,
            },
            VISA_PAYM_FAC_NAME: {
                name: "Visa Payment Facility Name",
                max: 12,
            },
            MC_PAYM_FAC_NAME: {
                name: "Mastercard Payment Facility Name",
                max: 12,
            },
            MIR_PAYM_FAC_NAME: {
                name: "Mir Payment Facility Name",
                max: 12,
            },
            VISA_ISO_ID: {
                name: "Visa ISO ID",
                max: 11,
            },
            MC_ISO_ID: {
                name: "Mastercard ISO ID",
                max: 11,
            },
        }
    },
    Banks: {
        name: "BANKS_ALL",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            BANK: {
                name: "Bank",
                max: 2,
            },
            BANK_NAME: {
                name: "Bank Name",
                max: 27,
            },
            BRANCH: {
                name: "Branch",
                max: 3,
            },
            BRANCH_NAME: {
                name: "Branch Name",
                max: 27,
            },
            POST_IND: {
                name: "Postal Index",
                max: 6,
            },
            CITY: {
                name: "City",
                max: 15,
            },
            STREET: {
                name: "Street",
                max: 30,
            },
            MFO: {
                name: "MFO",
                max: 15,
            },
            REG_NR: {
                name: "Reg Number",
                max: 25,
            },
            SWIFT: {
                name: "SWIFT",
                max: 12,
            },
        }
    },
    Merchant_Commisions: {
        name: "M_COM_ALL",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            CARD_TYPE: {
                name: "Card Type",
                max: 2,
            },
            MERCHANT: {
                name: "Merchant",
                max: 15,
            },
            TR_CCY: {
                name: "Tr Currency",
                max: 3,
            },
            IMPRINT_FEE: {
                name: "Imprint Fee",
                max: 6,
            },
            IMPRINT_MIN: {
                name: "Imprint Min",
                max: 8,
            },
            IMPRINT_MAX: {
                name: "Imprint Max",
                max: 12,
            },
            POS_FEE: {
                name: "POS Fee",
                max: 6,
            },
            POS_MIN: {
                name: "POS Min",
                max: 8,
            },
            POS_MAX: {
                name: "POS Max",
                max: 12,
            },
            CASHBACK_FEE: {
                name: "Cashback Fee",
                max: 6,
            },
            CASHBACK_MIN: {
                name: "Cashback Min",
                max: 8,
            },
            CASHBACK_MAX: {
                name: "Cashback Max",
                max: 12,
            },
            ATM_FEE: {
                name: "ATM Fee",
                max: 6,
            },
            ATM_MIN: {
                name: "ATM Min",
                max: 8,
            },
            ATM_MAX: {
                name: "ATM Max",
                max: 12,
            },
            POS_LIMIT: {
                name: "POS Limit",
                max: 12,
            },
            POS_LIMIT_ACT: {
                name: "POS Limit Act",
                max: 12,
            },
            IMPRINT_LIMIT: {
                name: "Imprint Limit",
                max: 12,
            },
            BANK_POS_FEE: {
                name: "Bank POS Fee",
                max: 6,
            },
            BANK_POS_MIN: {
                name: "Bank POS Min",
                max: 8,
            },
            BANK_POS_MAX: {
                name: "Bank POS Max",
                max: 12,
            },
            BANK_IMP_FEE: {
                name: "Bank Imprint Fee",
                max: 6,
            },
            BANK_IMP_MIN: {
                name: "Bank Imprint Min",
                max: 8,
            },
            BANK_IMP_MAX: {
                name: "Bank Imprint Max",
                max: 12,
            },
            BANK_ATM_FEE: {
                name: "Bank ATM Fee",
                max: 6,
            },
            BANK_ATM_MIN: {
                name: "Bank ATM Min",
                max: 8,
            },
            BANK_ATM_MAX: {
                name: "Bank ATM Max",
                max: 12,
            },
            BANK_ALGORITHM: {
                name: "Bank Algorithm",
                max: 1,
            },
            BANK_CALC_MODE: {
                name: "Bank Calc Mode",
                max: 1,
            },
            BANK_ACCOUNT: {
                name: "Bank Account",
                max: 35,
            },
        }
    },
    Corresponding_Bank: {
        name: "COR_BANK",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            CARD_TYPE: {
                name: "Card Type",
                max: 2,
            },
            BANK: {
                name: "Bank",
                max: 2,
            },
            BRANCH: {
                name: "Branch",
                max: 3,
            },
            CURRENCY: {
                name: "Currency",
                max: 3,
            },
            COR_BANK: {
                name: "Corresponding Bank",
                max: 2,
            },
            COR_BRANCH: {
                name: "Corresponding Branch",
                max: 3,
            },
            COR_ACCOUNT: {
                name: "Corresponding Account",
                max: 35,
            },
            COR_TYPE: {
                name: "Corresponding Type",
                max: 1,
            },
        }
    },
    Acquier_Surcharge: {
        name: "ACQ_SURCHARGE",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            CARD_TYPE: {
                name: "Card Type",
                max: 2,
            },
            MERCHANT: {
                name: "Merchant",
                max: 15,
            },
            TR_CCY: {
                name: "Tr Currency",
                max: 3,
            },
            ISS_CMI: {
                name: "ISS CMI",
                max: 8,
            },
            BIN: {
                name: "BIN",
                max: 15,
            },
            POINT_CODE: {
                name: "Point Code",
                max: 12,
            },
            PROC_CODE: {
                name: "Proc Code",
                max: 6,
            },
            ALGORITHM: {
                name: "Algorithm",
                max: 2,
            },
            FEE: {
                name: "Fee",
                max: 10,
            },
            MIN: {
                name: "Min",
                max: 8,
            },
            MAX: {
                name: "Max",
                max: 12,
            },
            METHOD: {
                name: "Method",
                max: 2,
            },
        }
    },

    // Simple u-file
    Merchant_Simple: {
        name: "MERCHANTS",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            MERCHANT: {
                name: "Merchant",
                max: 15,
            },
            PARENT: {
                name: "Parent",
                max: 15,
            },
            ABRV_NAME: {
                name: "Abreviation",
                max: 27,
            },
            FULL_NAME: {
                name: "Full Name",
                max: 78,
            },
            CNTRY: {
                name: "Country",
                max: 3,
            },
            CITY: {
                name: "City",
                max: 15,
            },
            STREET: {
                name: "Street",
                max: 30,
            },
            MCC: {
                name: "MCC",
                max: 4,
            },
            P_CNTRY: {
                name: "P Country",
                max: 3,
            },
            MRC_PHONE: {
                name: "MRC Phone",
                max: 15,
            },
            POST_IND: {
                name: "Postal Index",
                max: 8,
            },
            USER_FIELD: {
                name: "User field",
                max: 10
            },
            ORIG_CNTRY: {
                name: "Country of origin",
                max: 3
            },
            ADD_CONTACT_INFO: {
                name: "Add contact info",
                max: 25
            },
            URL: {
                name: "URL",
                max: 255
            },
            STATE_PROVINCE: {
                name: "State/Province",
                max: 3
            },
            MRC_PHONE_NEW: {
                name: "MRC Phone New",
                max: 16
            },
        }
    },
    Terminal_Simple: {
        name: "SET0_ACC_TRM",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            TERMINAL_ID: {
                name: "Terminal ID",
                max: 8,
            },
            ACCEPTOR_ID: {
                name: "Acceptor ID",
                max: 15,
            },
            TERM_TYPE: {
                name: "Terminal Type",
                max: 12,
            },
            POINT_CODE: {
                name: "Point Code",
                max: 12,
            },
            STATUS: {
                name: "Status",
                max: 1,
                type: "select",
                options: [0,1,2,3],
            }
        }
    },
    Agreement_Simple: {
        name: "AGREEMENTS",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            CARD_TYPE: {
                name: "Card Type",
                max: 2,
            },
            MERCHANT: {
                name: "Merchant",
                max: 15,
            },
            ACQ_BANK: {
                name: "Acquirer Bank",
                max: 2,
            },
            ACQ_BRANCH: {
                name: "Acquirer Branch",
                max: 3,
            },
            TR_CCY: {
                name: "Tr Currency",
                max: 3,
            },
            POS_LIMIT: {
                name: "POS Limit",
                max: 12,
            },
            POS_LIMIT_ACT: {
                name: "POS Limit Act",
                max: 12,
            },
            IMPRINT_LIMIT: {
                name: "Imprint Limit",
                max: 12,
            },
            STATUS: {
                name: "Status",
                max: 1,
            }
        }
    },
    Department_Simple: {
        name: "DEPARTMENTS",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            CARD_TYPE: {
                name: "Card Type",
                max: 2,
            },
            DEPARTMENT: {
                name: "Department",
                max: 15,
            },
            DEP_BANK: {
                name: "Department Bank",
                max: 2,
            },
            DEP_BRANCH: {
                name: "Department Branch",
                max: 3,
            },
            MERCHANT: {
                name: "Merchant",
                max: 15,
            },
            OTHER_CODE: {
                name: "Other Code",
                max: 15,
            },
            STATUS: {
                name: "Status",
                max: 1,
            },
            ABU_FLAG: {
                name: "ABU Flag",
                max: 1,
            },
            MVI: {
                name: "MVI",
                max: 1,
            }
        }
    },
    Merchant_Commisions_Simple: {
        name: "M_COM",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            CARD_TYPE: {
                name: "Card Type",
                max: 2,
            },
            MERCHANT: {
                name: "Merchant",
                max: 15,
            },
            TR_CCY: {
                name: "Tr Currency",
                max: 3,
            },
            POS_LIMIT: {
                name: "POS Limit",
                max: 12,
            },
            POS_LIMIT_ACT: {
                name: "POS Limit Act",
                max: 12,
            },
            IMPRINT_LIMIT: {
                name: "Imprint Limit",
                max: 12,
            }
        }
    },
    Agreements_MPCS_DEP_PAY_Simple: {
        name: "MPCS_DEP_PAY",
        deletable: true,
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
                readOnly: true,
            },
            ACTION: {
                name: "Action",
                max: 1,
                type: "select",
                options: ["I", "U", "D"],
            },
            CARD_TYPE: {
                name: "Card Type",
                max: 2,
            },
            DEPARTMENT: {
                name: "Department",
                max: 15,
            },
            CURRENCY: {
                name: "Currency",
                max: 3,
            },
            RECEIVER_BANK: {
                name: "Receiver Bank",
                max: 2,
            },
            RECEIVER_BRANCH: {
                name: "Receiver Branch",
                max: 3,
            },
            STATUS: {
                name: "Status",
                max: 1,
            }
        }
    }
};

const EntityTable = {
    MERCHANTS_ALL: "Merchant",
    SET0_ACC_TR_ALL: "Terminal",
    AGREEMENTS_ALL: "Agreement",
    DEPARTMENTS_ALL: "Department",
    AGR_ON_US_ALL: "Agreement_ON_US",
    M_COM_ALL: "Merchant_Commisions",
    MPCS_DEP_P_ALL: "Agreements_MPCS_DEP_P",
    BANKS_ALL: "Banks",
    COR_BANK: "Corresponding_Bank",
    ACQ_SURCHARGE: "Acquier_Surcharge",

    // simple ufiles
    MERCHANTS: "Merchant_Simple",
    SET0_ACC_TRM: "Terminal_Simple",
    AGREEMENTS: "Agreement_Simple",
    DEPARTMENTS: "Department_Simple",
    M_COM: "Merchant_Commisions_Simple",
    MPCS_DEP_PAY: "Agreements_MPCS_DEP_PAY_Simple",

};

const Actions = {
    I: "INSERT",
    U: "UPDATE",
    D: "DELETE",
    0: "IN-STOCK",
    1: "ACTIVE",
    2: "UNINSTALL",
    3: "CLOSED"
};

const Order = [
    "00", "MERCHANTS_ALL",
    "SET0_ACC_TR_ALL",
    "AGREEMENTS_ALL",
    "DEPARTMENTS_ALL",
    "AGR_ON_US_ALL",
    "M_COM_ALL",
    "MPCS_DEP_P_ALL",
    "BANKS_ALL",
    "COR_BANK",
    "ACQ_SURCHARGE",

    // simple
    "MERCHANTS",
    "SET0_ACC_TRM",
    "AGREEMENTS",
    "DEPARTMENTS",
    "M_COM",
    "MPCS_DEP_PAY",
    "99"
];

export { UF_FIELD_CONFIG, EntityTable, Actions, Order };
