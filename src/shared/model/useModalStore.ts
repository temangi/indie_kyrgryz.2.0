
import { create } from 'zustand';

interface ModalState {
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
  openModal: () => set({ isOpen: true}),
  closeModal: () => set({ isOpen: false})
}));

export const useModalBookATourStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true}),
  closeModal: () => set({ isOpen: false})
}));

export const useOpenBurgerStore = create<ModalState>((set) => ({
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