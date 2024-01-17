import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { KommunicateExpoPluginViewProps } from './KommunicateExpoPlugin.types';

const NativeView: React.ComponentType<KommunicateExpoPluginViewProps> =
  requireNativeViewManager('KommunicateExpoPlugin');

export default function KommunicateExpoPluginView(props: KommunicateExpoPluginViewProps) {
  return <NativeView {...props} />;
}
