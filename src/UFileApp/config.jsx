
const UF_FIELD_CONFIG = {
    Merchant: {
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
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
            }
        }
    },
    Agreement: {
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
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

        }
    },
    Terminal: {
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
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
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
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
        }
    },
    // Simple u-file
    Merchant_Simple: {
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
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
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
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
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
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
        fields: {
            TABLE_NAME: {
                name: "UF Table",
                max: 15,
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
    }
};

export default UF_FIELD_CONFIG;
