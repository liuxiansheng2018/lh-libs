import { useEffect } from 'react';

var useMount = function useMount(fn) {
  useEffect(function () {
    fn();
  }, []);
};

export { useMount };
