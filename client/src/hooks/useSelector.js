import { useContext } from 'react';
import { GlobalContext } from '../contexts';

const useSelector = (selector) => {
  const state = useContext(GlobalContext);
  return selector(state);
};

export default useSelector;
