import React from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import Header from '@edx/frontend-component-header';
import { reduxHooks } from 'hooks';

import MasqueradeBar from 'containers/MasqueradeBar';
import urls from 'data/services/lms/urls';
import ConfirmEmailBanner from './ConfirmEmailBanner';
import { useLearnerDashboardHeaderMenu, findCoursesNavClicked } from './hooks';

export const LearnerDashboardHeader = () => {
  const { authenticatedUser } = React.useContext(AppContext);
  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();

  const exploreCoursesClick = () => {
    findCoursesNavClicked(urls.baseAppUrl(courseSearchUrl));
  };

  const { mainMenu, secondaryMenu, userMenu } = useLearnerDashboardHeaderMenu({
    courseSearchUrl,
    authenticatedUser,
    exploreCoursesClick,
  });

  return (
    <>
      <ConfirmEmailBanner />
      <Header
        mainMenuItems={mainMenu}
        secondaryMenuItems={secondaryMenu}
        userMenuItems={userMenu}
      />
      <MasqueradeBar />
    </>
  );
};

export default LearnerDashboardHeader;
