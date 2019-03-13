const NAME = 'PERSIST';

export const FINISH_REHYDRATE_DATA = `${NAME}/FINISH_REHYDRATE_DATA`;

export const isStoreRehydrated = store =>
  store[NAME].rehydrate.isDataRehydrated;

export const finishRehydrateData = () => ({
  type: FINISH_REHYDRATE_DATA,
});
