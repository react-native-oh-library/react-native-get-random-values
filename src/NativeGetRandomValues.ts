/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';


export interface Spec extends TurboModule {
    // getRandomValues:(array) => void
    getRandomBase64: (byteLength: number) => void;
    
}   
 
export default TurboModuleRegistry.get<Spec>('GetRandomValuesNativeModule') as Spec | null;