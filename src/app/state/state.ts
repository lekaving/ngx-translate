import { Injectable } from '@angular/core';
// T is it enum of actions
import { BehaviorSubject, merge, MonoTypeOperatorFunction, Observable, OperatorFunction, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  exhaustMap,
  filter,
  map,
  publishReplay,
  refCount,
  scan,
  startWith,
  takeUntil
} from 'rxjs/operators';

export interface Action {
  type: string;
  payload?: any;
}

export function ofType<T extends Action>(type: string): MonoTypeOperatorFunction<T> {
  return filter((_) => type === _.type);
}

export function hasEditedObjectValue(previous: unknown, current: unknown) {
  if (Array.isArray(previous) && Array.isArray(current)) {
    return JSON.stringify(previous) === JSON.stringify(current);
  } else if (typeof previous === 'object' && typeof current === 'object') {
    return Object.keys(current).reduce((acc, key) => {
      if (current[key] !== previous[key]) {
        acc = false;
      }
      return acc;
    }, true);
  } else {
    return previous === current;
  }
}

export function selectState<T, R>(stateName: string): OperatorFunction<DeepReadonly<T>, R> {
  return input$ => input$.pipe(
    map(state => state[stateName]),
    filter(state => state !== null),
    distinctUntilChanged((previous, current) => hasEditedObjectValue(previous, current))
  );
}

type DeepReadonlyObject<T> = { readonly [K in keyof T]: DeepReadonlyObject<T[K]> };
export type DeepReadonly<T> = T extends Array<infer E> ?
  ReadonlyArray<DeepReadonlyObject<E>> :
  T extends object ? DeepReadonlyObject<T> :
    T;


interface IStoreState {
  currentLanguage: string;
}

type StoreState = DeepReadonly<IStoreState>;
const defaultState: StoreState = {
  currentLanguage: 'en'
};

@Injectable({
  providedIn: 'root'
})
export class Store {
  state$: BehaviorSubject<StoreState> = new BehaviorSubject<StoreState>(defaultState);
  actions$ = new Subject<Action>();

  private destroy$ = new Subject<void>();

  constructor() {
    this.stateObs$.pipe(takeUntil(this.destroy$)).subscribe(data => this.state$.next(data));
  }

  private changeLanguage$: Observable<Action> = this.actions$.pipe(
    ofType('change'),
    map((payload) => ({type: 'changeLanguage'}))
  );

  currentLanguage$: Observable<any> = this.state$.pipe(selectState('currentLanguage'));

  private dispatcher$: Observable<Action> = merge(
    this.actions$,
    this.changeLanguage$
  );

  stateObs$: Observable<StoreState> = this.dispatcher$.pipe(
    startWith(defaultState),
    scan((state: StoreState, action: Action): StoreState => {
      switch (action.type) {
        case 'changeLanguage':
          const lang = state.currentLanguage === 'en' ? 'ru' : 'en';
          return {currentLanguage: lang}
        default:
          return {...state};
      }
    }),
    publishReplay(1),
    refCount()
  );

  dispatch(action: Action) {
    this.actions$.next(action);
  }
}
