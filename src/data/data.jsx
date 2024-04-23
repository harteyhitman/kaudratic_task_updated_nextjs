import { Icon } from '@iconify/react';

export const portal= [
    {
        id: 'admin',
        portalNames: 'Admin Portal',
        portalIcons: <Icon icon="ri:admin-fill" />,
        route: "/admin"
    },
    {
        id: 'admssion',
        portalNames: 'Admissions',
        portalIcons: <Icon icon="material-symbols-light:other-admission-outline-sharp" />,
        route: "/admssion"
    },
    {
        id: 'asset',
        portalNames: 'Asset',
        portalIcons: <Icon icon="carbon:software-resource-cluster" />,
        route: "/asset"
    },
    {
        id: 'attendance',
        portalNames: 'Attendance',
        portalIcons: <Icon icon="material-symbols-light:co-present-outline" />,
        route: "/attendance"
    },
    {
        id: 'busing',
        portalNames: 'Busing',
        portalIcons: <Icon icon="solar:bus-outline" />,
        route: "/busing"
    },
    {
        id: 'clubs',
        portalNames: 'Clubs',
        portalIcons: <Icon icon="emojione-monotone:game-die" />,
        route: "/clubs"
    },
    {
        id: 'engagement',
        portalNames: 'Engagement',
        portalIcons: <Icon icon="fluent:people-community-20-regular" />,
        route: "/engagement"
    },
    {
        id: 'enrollment',
        portalNames: 'Enrollment',
        portalIcons: <Icon icon="fluent-mdl2:open-enrollment" />,
        route: "/enrollment"
    },
    {
        id: 'finance',
        portalNames: 'Finance',
        portalIcons: <Icon icon="arcticons:finance-manager" />,
        route: "/finance"
    },
    {
        id: 'forms',
        portalNames: 'Forms',
        portalIcons: <Icon icon="fluent:form-new-28-regular"/>,
        route: "/forms"
    },
    {
        id: 'gradebooks',
        portalNames: 'Gradebook',
        portalIcons: <Icon icon="arcticons:score-sheets"/>,
        route: "/gradebooks"
    },
    {
        id: 'newsletter',
        portalNames: 'Newsletter',
        portalIcons: <Icon icon="quill:inbox-newsletter"/>,
        route: "/newsletter"
    },
    {
        id: 'planner',
        portalNames: 'Planner',
        portalIcons: <Icon icon="fluent-mdl2:plan-view" className='  hover:text-primary' />,
        route: "/planner"
    },
]

export const dashboardBtn=[
    {
        id: 'dashboard',
        ButtonIcon: <Icon icon="material-symbols:dashboard-outline" className='hover:text-secondary text-xl w-4 h-4 text-primary ' />,
        name: 'Dashboard',
        route: "/dashboard"
    },
    {
        id: 'track',
        ButtonIcon: <Icon icon="eos-icons:monitoring" className='hover:text-secondary text-xl w-4 h-4 text-primary' />,
        name: 'Track',
        route: "/track"

    },
    {
        id: 'reports',
        ButtonIcon: <Icon icon="iconoir:reports-solid" className='hover:text-secondary text-xl w-4 h-4 text-primary' />,
        name: 'Reports',
        route: "/reports"

    },
    {
        id: 'profile',
        ButtonIcon: <Icon icon="iconamoon:profile-circle-light" className='hover:text-secondary text-xl w-4 h-4 text-primary' />,
        name: 'Profile',
        route: "/profile"

    },
]

export const Reports = [
    {
        id: 'calendar',
      reportIcon:  <Icon icon="majesticons:calendar" />,
      main: '04.06.22',
      dropDown: <Icon icon="octicon:chevron-down-24" />
    },
    {
        id: 'grade',
      reportIcon:  <Icon icon="icons8:student" />,
      main: 'Grade',
      dropDown: <Icon icon="octicon:chevron-down-24" />
    },
    {
        id: 'term1',
      main: 'Term 1',
      dropDown: <Icon icon="octicon:chevron-down-24" />
    },
    {
        id: 'bulk-action',
      main: 'Bulk Action',
      dropDown: <Icon icon="octicon:chevron-down-24" />
    },
    {
        id: 'export',
      main: 'Export',
      dropDown: <Icon icon="octicon:chevron-down-24" />
    },
    {
        id: 'printer',
        reportIcon:  <Icon icon="carbon:printer" />,
    },
]

export const registerData = [
    {
        id: 'all',
        status: <Icon icon="ic:round-person"   />,
        text: 'All',
        numbers: 190,
        bars: <Icon className='text-secondary'icon="svg-spinners:bars-scale-middle" />,
        triangle: <Icon icon="lucide:triangle-right" className='text-secondary' />
    },
    {
        id: 'present',
        status: <Icon icon="ic:round-person" />,
        text: 'Present',
        numbers: 140,
        percent:  73,
        bars: <Icon 
        icon="svg-spinners:bars-scale-middle" className='text-dimGreen' />,
        triangle: <Icon icon="lucide:triangle-right" className='text-dimGreen' />
    },
    {
        id: 'absent',
        status: <Icon icon="ic:round-person" />,
        text: 'Absent',
        numbers: 50,
        percent:  27,
        bars: <Icon icon="svg-spinners:bars-scale-middle" className='text-dimRed'/>,
        triangle: <Icon icon="lucide:triangle-right" className=' text-dimRed' />
    },
]

export const quickActions =[
    {
        id: 'reported absence',
        option: 'Reported Absence',
        calendarTitle: 'Thursday, June 2, 2023',
        mistyTaylor: 'Misty Taylor',
        digits: '435 152', 
        g2: 'G2',
          drop:  <Icon icon="octicon:chevron-down-24" className='bg-secondary text-primary rounded-full p-3'/>
    },
    {
        id: 'Reported Lateness',
        option: 'Reported Lateness',
        calendarTitle: 'Thursday, June 2, 2023',
        mistyTaylor: 'Misty Taylor',
        digits: '435 152', 
        g2: 'G2',
        drop:  <Icon icon="octicon:chevron-down-24" className='bg-secondary text-primary rounded-full p-3'/>

    }
]