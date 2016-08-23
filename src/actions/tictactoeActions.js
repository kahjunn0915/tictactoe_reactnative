
import * as types from './actionTypes';

export function forward() {
  return {
    type: types.FORWARD
  };
}

export function backward() {
  return {
    type: types.BACKWARD
  };
}