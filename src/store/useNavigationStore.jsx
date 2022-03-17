import create from 'zustand';
import produce from 'immer';

const initialShowNavigation = false;

const toggleNavigation = (set) => {
  return set(produce((draft) => {
    draft.showNavigation = !draft.showNavigation;
  }));
};

const useNavigationStore = create((set) => {
  return {
    showNavigation: initialShowNavigation,
    toggleNavigation: () => toggleNavigation(set),
  };
});

export default useNavigationStore;
