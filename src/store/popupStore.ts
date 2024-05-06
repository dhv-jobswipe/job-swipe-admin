import { create } from 'zustand';

type IPopupState = {
  isOpen: boolean;
  description: string;
  confirmAction: () => void;

  openPopup: (_description: string, _confirmAction: () => void) => void;
  closePopup: () => void;
};

export const usePopupStore = create<IPopupState>((set) => ({
  isOpen: false,
  description: '',
  confirmAction: () => {},

  openPopup(description: string, confirmAction: () => void) {
    set(() => ({
      isOpen: true,
      description: description,
      confirmAction: confirmAction,
    }));
  },
  closePopup() {
    set(() => ({
      isOpen: false,
      description: '',
      confirmAction: () => {},
    }));
  },
}));
