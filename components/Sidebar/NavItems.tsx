import { FiServer } from 'react-icons/fi';
import { BiHdd } from 'react-icons/bi';
import { BsFillCreditCardFill, BsPeople, BsGear } from 'react-icons/bs';

import type { NavItem } from './types';

export const NavItems: NavItem[] = [
  {
    label: 'Databases',
    href: '/',
    icon: FiServer,
  },
  {
    label: 'Usage',
    icon: BiHdd,
  },
  {
    label: 'Billing',
    icon: BsFillCreditCardFill,
  },
  {
    label: 'Members',
    icon: BsPeople,
  },
  {
    label: 'Space Settings',
    icon: BsGear,
  },
];
