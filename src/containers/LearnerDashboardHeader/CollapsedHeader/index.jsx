import React from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Menu, Close } from '@edx/paragon/icons';
import { IconButton, Icon } from '@edx/paragon';

import { useLearnerDashboardHeaderData, useIsCollapsed } from '../hooks';
import { useRecommendationsModal } from '../../../components/ModalView/hooks';

import CollapseMenuBody from './CollapseMenuBody';
import BrandLogo from '../BrandLogo';

import messages from '../messages';

export const CollapsedHeader = () => {
  const { formatMessage } = useIntl();
  const isCollapsed = useIsCollapsed();
  const { isOpen, toggleIsOpen } = useLearnerDashboardHeaderData();
  const { isRecommendationsModalOpen, toggleRecommendationsModal } = useRecommendationsModal();

  return (
    isCollapsed && (
      <>
        <header className="d-flex shadow-sm align-items-center learner-variant-header">
          <IconButton
            invertColors
            isActive
            src={isOpen ? Close : Menu}
            iconAs={Icon}
            alt={
              isOpen
                ? formatMessage(messages.collapseMenuOpenAltText)
                : formatMessage(messages.collapseMenuClosedAltText)
            }
            onClick={toggleIsOpen}
            variant="primary"
            className="p-4"
          />
          <BrandLogo />
        </header>
        <CollapseMenuBody
          isOpen={isOpen}
          setIsRecommendationsModalOpen={toggleRecommendationsModal}
          isRecommendationsModalOpen={isRecommendationsModalOpen}
        />
      </>
    )
  );
};

CollapsedHeader.propTypes = {};

export default CollapsedHeader;
