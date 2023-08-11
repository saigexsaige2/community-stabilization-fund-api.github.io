import {
  Modal,
  Toggle,
  // Button 
} from '@carbon/react';

import { useState } from "react";

import type { ChangeEvent} from "react";

import { ChecklistConfigSection } from "./ChecklistConfigSection";

interface SettingsModalProps {
  openSettingsModal: boolean;
  handleOpen: (key: string) => void;
  handleClose: (key: string) => void;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SettingsModal = ({ 
  openSettingsModal,
  handleOpen,
  handleClose,
  handleChange,
}: SettingsModalProps) => {
  const [showChecklistConfig, setShowChecklistConfig] = useState<boolean>(false);
  // const deleteAllFormResponsesText = "WARNING: This will delete all existing form data!";

  return (
    <Modal
      open={openSettingsModal}
      modalHeading='Settings'
      modalLabel='Admin functions'
      passiveModal={true}
      size={'sm'}
      onRequestClose={() => handleClose('settingsModal')}
    >
      <Toggle 
        id="toggle-checklist-config"
        aria-label="toggle checklist configuration"
        labelText="Configure Checklists"
        hideLabel 
        onToggle={toggleChecklistConfig}
      />
      { showChecklistConfig && (
        <ChecklistConfigSection handleOpen={handleOpen} handleChange={handleChange} />
      )}
      {/* <p className='mt-4 mb-2'>{deleteAllFormResponsesText}</p>
    <Button kind={'danger'} onClick={deleteAllFormResponses}>
      Reset
    </Button> */}
    </Modal>
  );

  function toggleChecklistConfig(checked: boolean, _id: string, _e: ChangeEvent<HTMLInputElement>) {
    setShowChecklistConfig(checked);
  }
};

export { SettingsModal };