/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import { Dispatcher } from 'react-reconciler/src/ReactFiberHooks';

/**
                                                                    * Keeps track of the current dispatcher.
                                                                    * 全局变量
                                                                    */
const ReactCurrentDispatcher = {
  /**
                                  * @internal
                                  * @type {ReactComponent}
                                  */
  current: (null as null | Dispatcher) };


export default ReactCurrentDispatcher;
