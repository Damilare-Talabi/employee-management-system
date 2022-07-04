import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx bxs-dashboard',
        link: 'dashboard',
    },
    {
        id: 3,
        isLayout: true
    },
    {
        id: 4,
        label: 'MENUITEMS.ADMINISTRATOR.TEXT',
        isTitle: true
    },
    {
        id: 5,
        isLayout: true
    },
    {
        id: 10,
        label: 'MENUITEMS.PROFILE.TEXT',
        icon: 'mdi mdi-account-circle',
        link: '/employee/profile',
    },
    {
        id: 25,
        label: 'MENUITEMS.APPLICATION.TEXT',
        icon: 'mdi mdi-briefcase-edit',
        subItems: [
            {
                id: 26,
                label: 'MENUITEMS.APPLICATION.LIST.ABSENCE',
                link: '/employee/absence',
                parentId: 25
            },
            {
                id: 27,
                label: 'MENUITEMS.APPLICATION.LIST.LEAVE',
                link: '/employee/leave',
                parentId: 25
            },
        ]
    },
    {
        id: 10,
        label: 'MENUITEMS.EMPLOYEE NOTICE.TEXT',
        icon: 'mdi mdi-comment-eye-outline',
        link: '/employee/generalnotice',
    },
    {
        id: 34,
        isLayout: true
    },
    {
        id: 25,
        label: 'MENUITEMS.EMPLOYEE.TEXT',
        icon: 'mdi mdi-human-capacity-increase',
        subItems: [
            {
                id: 26,
                label: 'MENUITEMS.EMPLOYEE.LIST.INFORMATION',
                link: '/administrator/employeeinfo',
                parentId: 25
            },
            {
                id: 27,
                label: 'MENUITEMS.EMPLOYEE.LIST.REGISTRATION',
                link: '/administrator/employeeregister',
                parentId: 25
            }

        ]
    },
    {
        id: 10,
        label: 'MENUITEMS.NOTICE.TEXT',
        icon: 'mdi mdi-account-tie-voice',
        link: '/administrator/notice',
    },
    {
        id: 10,
        label: 'MENUITEMS.RETIRED.TEXT',
        icon: 'mdi mdi-hail',
        link: '/administrator/employeeretired',
    },
    {
        id: 10,
        label: 'MENUITEMS.DEPARTMENT.TEXT',
        icon: 'mdi mdi-family-tree',
        link: '/administrator/departmentinfo',
    },
    {
        id: 34,
        isLayout: true
    },

    // {
    //     id: 8,
    //     label: 'MENUITEMS.EMPLOYEE UPDATE.TEXT',
    //     icon: 'dripicons-box',
    //     link: '/administrator/employeeupdate',
    // },


    {
        id: 20,
        isLayout: true
    },
    // {
    //     id: 21,
    //     label: 'MENUITEMS.BACKOFFICE.TEXT',
    //     isTitle: true
    // },
    // {
    //     id: 22,
    //     isLayout: true
    // },
    // {
    //     id: 23,
    //     label: 'MENUITEMS.APPROVAL.TEXT',
    //     icon: 'dripicons-thumbs-up',
    //     // badge: {
    //     //     variant: 'primary',
    //     //     text: '26',
    //     // },
    //     subItems: [
    //         {
    //             id: 24,
    //             label: 'MENUITEMS.APPROVAL.LIST.PRODUCTION',
    //             link: '/frontoffice/approval/production',
    //             parentId: 23
    //         },
    //     ]
    // },
    // {
    //     id: 25,
    //     label: 'MENUITEMS.PRODUCTION.TEXT',
    //     icon: 'dripicons-gear',
    //     subItems: [
    //         {
    //             id: 26,
    //             label: 'MENUITEMS.PRODUCTION.LIST.AFISSTATUS',
    //             link: '/backoffice/afis/status',
    //             parentId: 25
    //         },
    //         {
    //             id: 27,
    //             label: 'MENUITEMS.PRODUCTION.LIST.PERSONALIZATION',
    //             link: '/backoffice/personalization/inquiry',
    //             parentId: 25
    //         },
    //         {
    //             id: 28,
    //             label: 'MENUITEMS.PRODUCTION.LIST.QUALITYASSURANCE',
    //             link: '/backoffice/qualityassurance/inquiry',
    //             parentId: 25
    //         },
    //     ]
    // },
    // {
    //     id: 29,
    //     label: 'MENUITEMS.ISSUANCE.TEXT',
    //     icon: 'dripicons-card',
    //     subItems: [
    //         {
    //             id: 30,
    //             label: 'MENUITEMS.ISSUANCE.LIST.ISSUANCEINQUIRY',
    //             link: '/backoffice/issuance/inquiry',
    //             parentId: 29
    //         },
    //         {
    //             id: 31,
    //             label: 'MENUITEMS.ISSUANCE.LIST.PASSPORTISSUANCE',
    //             link: '/tables/datatable',
    //             parentId: 29
    //         },
    //     ]
    // },
    // {
    //     id: 32,
    //     label: 'MENUITEMS.INVENTORY.TEXT',
    //     icon: 'dripicons-box',
    //     subItems: [
    //         {
    //             id: 33,
    //             label: 'MENUITEMS.INVENTORY.LIST.RECEIVEBOOKLETS',
    //             link: '/tables/datatable',
    //             parentId: 32
    //         },
    //         {
    //             id: 33,
    //             label: 'MENUITEMS.INVENTORY.LIST.ACTIVATEBOOKLETS',
    //             link: '/tables/datatable',
    //             parentId: 32
    //         },
    //     ]
    // },
    // {
    //     id: 34,
    //     isLayout: true
    // },
    // {
    //     id: 35,
    //     label: 'MENUITEMS.UTILITIES.TEXT',
    //     isTitle: true
    // },
    // {
    //     id: 36,
    //     isLayout: true
    // },
    // {
    //     id: 37,
    //     label: 'MENUITEMS.QUERY.TEXT',
    //     icon: 'dripicons-search',
    //     subItems: [
    //         {
    //             id: 38,
    //             label: 'MENUITEMS.QUERY.LIST.APPLICATIONSTATUS',
    //             link: '/utilities/application/status',
    //             parentId: 37
    //         }
    //     ]
    // },
    // {
    //     id: 39,
    //     label: 'MENUITEMS.REPORT.TEXT',
    //     icon: 'dripicons-graph-bar',
    //     subItems: [
    //         {
    //             id: 40,
    //             label: 'MENUITEMS.REPORT.LIST.REPORTS',
    //             link: '/apps/chat',
    //             parentId: 39
    //         },
    //     ]
    // },
    // {
    //     id: 41,
    //     label: 'MENUITEMS.SUPPORT.TEXT',
    //     icon: 'bx bx-support',
    //     subItems: [
    //         {
    //             id: 42,
    //             label: 'MENUITEMS.SUPPORT.LIST.HELPDESK',
    //             link: '/apps/chat',
    //             parentId: 41
    //         },
    //         {
    //             id: 43,
    //             label: 'MENUITEMS.SUPPORT.LIST.CHAT',
    //             link: '/tables/datatable',
    //             parentId: 41
    //         },
    //     ]
    // },
    // {
    //     id: 41,
    //     isLayout: true
    // },
    // {
    //     id: 42,
    //     label: 'MENUITEMS.ADMINISTRATION.TEXT',
    //     isTitle: true
    // },
    // {
    //     id: 43,
    //     isLayout: true
    // },
    // {
    //     id: 44,
    //     label: 'MENUITEMS.PRIVILEDGES.TEXT',
    //     icon: 'dripicons-lock',
    //     subItems: [
    //         {
    //             id: 45,
    //             label: 'MENUITEMS.PRIVILEDGES.LIST.MANAGEROLES',
    //             link: '/administration/privileges/managerole',
    //             parentId: 44
    //         },
    //         {
    //             id: 46,
    //             label: 'MENUITEMS.PRIVILEDGES.LIST.MANAGEPERMISSIONS',
    //             link: '/administration/privileges/managepermission',
    //             parentId: 44
    //         },
    //     ]
    // },
    // {
    //     id: 47,
    //     label: 'MENUITEMS.PROFILES.TEXT',
    //     icon: 'dripicons-user-group',
    //     subItems: [
    //         {
    //             id: 48,
    //             label: 'MENUITEMS.PROFILES.LIST.MANAGEPROFILES',
    //             link: '/administration/profiles/manageprofile',
    //             parentId: 47
    //         }
    //     ]
    // },
    // {
    //     id: 8,
    //     label: 'MORE',
    //     isTitle: true
    // },
    // {
    //     id: 9,
    //     label: 'MENUITEMS.APPS.TEXT',
    //     icon: 'bx bxs-grid',
    //     subItems: [
    //         {
    //             id: 10,
    //             label: 'MENUITEMS.APPS.LIST.CALENDAR',
    //             link: '/apps/calender',
    //             parentId: 9
    //         },
    //         {
    //             id: 11,
    //             label: 'MENUITEMS.APPS.LIST.CHAT',
    //             link: '/apps/chat',
    //             parentId: 9
    //         },
    //         {
    //             id: 12,
    //             label: 'MENUITEMS.APPS.LIST.EMAIL',
    //             badge: {
    //                 variant: 'success',
    //                 text: 'Em',
    //             },
    //             parentId: 9,
    //             subItems: [
    //                 {
    //                     id: 13,
    //                     label: 'MENUITEMS.APPS.LIST.SUB.INBOX',
    //                     link: '/apps/inbox',
    //                     parentId: 12
    //                 },
    //                 {
    //                     id: 14,
    //                     label: 'MENUITEMS.APPS.LIST.SUB.READEMAIL',
    //                     link: '/apps/read/1',
    //                     parentId: 12
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 15,
    //     label: 'MENUITEMS.AUTHENTICATION.TEXT',
    //     icon: 'bx bx-user-circle',
    //     badge: {
    //         variant: 'success',
    //         text: '9',
    //     },
    //     subItems: [
    //         {
    //             id: 16,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
    //             link: '/account/login',
    //             parentId: 15
    //         },
    //         {
    //             id: 16,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN1',
    //             link: '/account/login1',
    //             parentId: 15
    //         },
    //         {
    //             id: 17,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
    //             link: '/account/register',
    //             parentId: 15
    //         },
    //         {
    //             id: 17,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER1',
    //             link: '/account/register1',
    //             parentId: 15
    //         },
    //         {
    //             id: 18,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
    //             link: '/account/recoverpwd',
    //             parentId: 15
    //         },
    //         {
    //             id: 18,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD1',
    //             link: '/account/recoverpwd1',
    //             parentId: 15
    //         },
    //         {
    //             id: 19,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
    //             link: '/account/lockscreen',
    //             parentId: 15
    //         },
    //         {
    //             id: 20,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
    //             link: '/account/confirm-mail',
    //             parentId: 15
    //         },
    //         {
    //             id: 21,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
    //             link: '/account/email-verification',
    //             parentId: 15
    //         },
    //         {
    //             id: 22,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
    //             link: '/account/two-step-verification',
    //             parentId: 15
    //         }
    //     ]
    // },
    // {
    //     id: 23,
    //     label: 'MENUITEMS.PAGES.TEXT',
    //     icon: 'bx bx-file',
    //     subItems: [
    //         {
    //             id: 24,
    //             label: 'MENUITEMS.PAGES.LIST.STARTER',
    //             link: '/pages/starter',
    //             parentId: 23
    //         },
    //         {
    //             id: 26,
    //             label: 'MENUITEMS.PAGES.LIST.PROFILE',
    //             link: '/pages/profile',
    //             parentId: 23
    //         },
    //         {
    //             id: 27,
    //             label: 'MENUITEMS.PAGES.LIST.INVOICE',
    //             link: '/pages/invoice',
    //             parentId: 23
    //         },
    //         {
    //             id: 28,
    //             label: 'MENUITEMS.PAGES.LIST.MAINTENANCE',
    //             link: '/pages/maintenance',
    //             parentId: 23
    //         },
    //         {
    //             id: 29,
    //             label: 'MENUITEMS.PAGES.LIST.COMINGSOON',
    //             link: '/pages/comingsoon',
    //             parentId: 23
    //         },
    //         {
    //             id: 30,
    //             label: 'MENUITEMS.PAGES.LIST.TIMELINE',
    //             link: '/pages/timeline',
    //             parentId: 23
    //         },
    //         {
    //             id: 31,
    //             label: 'MENUITEMS.PAGES.LIST.PRICING',
    //             link: '/pages/pricing',
    //             parentId: 23
    //         },
    //         {
    //             id: 32,
    //             label: 'MENUITEMS.PAGES.LIST.ERROR404',
    //             link: '/pages/404',
    //             parentId: 23
    //         },
    //         {
    //             id: 33,
    //             label: 'MENUITEMS.PAGES.LIST.ERROR500',
    //             link: '/pages/500',
    //             parentId: 23
    //         }
    //     ]
    // },
    // {
    //     id: 34,
    //     label: 'MENUITEMS.ADMINKIT.TEXT',
    //     isTitle: true
    // },
    // {
    //     id: 35,
    //     label: 'MENUITEMS.UIELEMENTS.TEXT',
    //     icon: 'bx bx-briefcase',
    //     link: '/ui',

    // },
    // {
    //     id: 36,
    //     label: 'MENUITEMS.ADVANCEDKIT.TEXT',
    //     icon: 'bx bxs-cube-alt',
    //     subItems: [
    //         {
    //             id: 37,
    //             label: 'MENUITEMS.ADVANCEDKIT.LIST.SWEETALERT',
    //             link: '/advanced/sweet-alert',
    //             parentId: 36
    //         },
    //         {
    //             id: 38,
    //             label: 'MENUITEMS.ADVANCEDKIT.LIST.RANGESLIDER',
    //             link: '/advanced/rangeslider',
    //             parentId: 36
    //         },
    //         {
    //             id: 39,
    //             label: 'MENUITEMS.ADVANCEDKIT.LIST.NOTIFICATIONS',
    //             link: '/advanced/notifications',
    //             parentId: 36
    //         },
    //         {
    //             id: 40,
    //             label: 'MENUITEMS.ADVANCEDKIT.LIST.CAROUSEL',
    //             link: '/advanced/carousel',
    //             parentId: 36
    //         }
    //     ]
    // },
    // {
    //     id: 41,
    //     label: 'MENUITEMS.TYPOGRAPHY.TEXT',
    //     icon: 'bx bx-text',
    //     link: '/typography',

    // },
    // {
    //     id: 42,
    //     label: 'MENUITEMS.FORMS.TEXT',
    //     icon: 'bx bxs-magic-wand',
    //     badge: {
    //         variant: 'danger',
    //         text: '2',
    //     },
    //     subItems: [
    //         {
    //             id: 43,
    //             label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
    //             link: '/form/elements',
    //             parentId: 42
    //         },
    //         {
    //             id: 44,
    //             label: 'MENUITEMS.FORMS.LIST.ADVANCED',
    //             link: '/form/advanced',
    //             parentId: 42
    //         }
    //     ]
    // },
    // {
    //     id: 45,
    //     label: 'MENUITEMS.TABLES.TEXT',
    //     icon: 'bx bx-table',
    //     subItems: [
    //         {
    //             id: 46,
    //             label: 'MENUITEMS.TABLES.LIST.BASIC',
    //             link: '/tables/basic',
    //             parentId: 45
    //         },
    //         {
    //             id: 47,
    //             label: 'MENUITEMS.TABLES.LIST.ADVANCED',
    //             link: '/tables/datatable',
    //             parentId: 45
    //         }
    //     ]
    // },
    // {
    //     id: 48,
    //     label: 'MENUITEMS.CHARTS.TEXT',
    //     icon: 'bx bx-doughnut-chart',
    //     link: '/charts',

    // },
    // {
    //     id: 49,
    //     label: 'MENUITEMS.ICONS.TEXT',
    //     icon: 'bx bx-layer',
    //     subItems: [
    //         {
    //             id: 50,
    //             label: 'MENUITEMS.ICONS.LIST.BOXICONS',
    //             link: '/icons/boxicons',
    //             parentId: 49
    //         },
    //         {
    //             id: 51,
    //             label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
    //             link: '/icons/materialdesign',
    //             parentId: 49
    //         },
    //         {
    //             id: 52,
    //             label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
    //             link: '/icons/dripicons',
    //             parentId: 49
    //         },
    //         {
    //             id: 53,
    //             label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
    //             link: '/icons/fontawesome',
    //             parentId: 49
    //         }
    //     ]
    // },
    // {
    //     id: 54,
    //     label: 'MENUITEMS.MAPS.TEXT',
    //     icon: 'bx bx-map',
    //     link: '/maps',

    // },
    // {
    //     id: 55,
    //     label: 'MENUITEMS.MULTILEVEL.TEXT',
    //     icon: 'bx-share-alt',
    //     subItems: [
    //         {
    //             id: 56,
    //             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
    //             parentId: 55
    //         },
    //         {
    //             id: 57,
    //             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
    //             parentId: 55,
    //             subItems: [
    //                 {
    //                     id: 58,
    //                     label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
    //                     parentId: 57,
    //                 },
    //                 {
    //                     id: 59,
    //                     label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
    //                     parentId: 57,
    //                 }
    //             ]
    //         },
    //     ]
    // }
];

