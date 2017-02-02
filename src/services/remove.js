
import _remove from '../common/_remove';
import checkContextIf from './check-context-if';
import getItems from './get-items';

export default function (...fieldNames) {
  console.log('DEPRECATED. Use omit. (remove)');

  return hook => {
    checkContextIf(hook, 'before', ['create', 'update', 'patch'], 'remove');

    if (hook.params.provider) {
      _remove(getItems(hook), fieldNames);
    }

    return hook;
  };
}