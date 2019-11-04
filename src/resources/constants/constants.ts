import { testTranslations } from './translations/en';
import { testSidebarData } from './sidebar';
import { testTableColumns } from './mock/testTableColumns';
import { testDropdownItemsWithIcon } from './mock/testDropdownItemsWithIcon';
import { testDropdownItemsWithoutIcon } from './mock/testDropdownItemsWithoutIcon';
import { testOrderableMenuItems } from './mock/testOrderableMenuItems';
import { testNavData } from './mock/testNavData';
import { testTableData } from './mock/testTableData';
import { testPageData } from './mock/testPageData';
import { testView } from './mock/testView';

const testInitialData = {
  initial: {
    user: {
      locale: 'en'
    },
    sidebar: testSidebarData,
    translations: testTranslations
  }
};

export {
  testInitialData,
  testTranslations,
  testSidebarData,
  testTableColumns,
  testDropdownItemsWithIcon,
  testDropdownItemsWithoutIcon,
  testOrderableMenuItems,
  testNavData,
  testTableData,
  testView,
  testPageData
};

