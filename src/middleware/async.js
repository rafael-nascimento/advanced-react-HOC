export default ({ dispatch }) => next => action => {
  /*
    Check to see if the action has a promise in payload property.
    If it does, then wait for it to resolve.
    If it doesn't, send the action on to the next middleware
  */

  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(data => {
    const newAction = {
      type: action.type,
      payload: data
    };

    dispatch(newAction);
  });
};