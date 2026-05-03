
import { create } from 'zustand';

type ModalType = "default" | "custom";

interface ModalState {
  isOpen: boolean;
  modalType: ModalType;
  /** Set on tour detail pages so one global SignTour can use “Book this tour” copy and email context. */
  bookingTour: string | null;
  openModal: (type?: ModalType) => void;
  closeModal: () => void;
  setBookingTour: (tour: string | null) => void;
}

interface ToggleModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
interface navState {
  isOpen: boolean;
  activeSection: string; 
  closeModal: () => void;
  setActiveSection: (id: string) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: "default",
  bookingTour: null,
  openModal: (type = "default") => set({ isOpen: true, modalType: type }),
  closeModal: () => set({ isOpen: false, modalType: "default" }),
  setBookingTour: (tour) => set({ bookingTour: tour }),
}));

export const useModalBookATourStore = create<ToggleModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true}),
  closeModal: () => set({ isOpen: false})
}));

export const useOpenBurgerStore = create<ToggleModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true}),
  closeModal: () => set({ isOpen: false})
}));



export const useNavStore = create<navState>((set) => ({
  isOpen: false,
  activeSection: '',
  closeModal: () => set({ isOpen: false }),
  setActiveSection: (id) => set({ activeSection: id }),
}));