export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action)
}

export const featuring = (store) => (next) => (action) => {
  const featured = [{name:"PokeCustom"}, ...action.action.payload];
  const updatedActionInfo = {
    ...action,
    action: { ...action.action,  payload:featured}
  };

  next(updatedActionInfo)

}