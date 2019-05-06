import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { tutorialReducer } from "./tutorial.reducers";

export interface State {}

export const reducers: ActionReducerMap<State> = {
  tutorial: tutorialReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
