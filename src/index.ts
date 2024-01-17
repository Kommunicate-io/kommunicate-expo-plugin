import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to KommunicateExpoPlugin.web.ts
// and on native platforms to KommunicateExpoPlugin.ts
import KommunicateExpoPluginModule from './KommunicateExpoPluginModule';
import KommunicateExpoPluginView from './KommunicateExpoPluginView';
import { ChangeEventPayload, KommunicateExpoPluginViewProps } from './KommunicateExpoPlugin.types';

// Get the native constant value.
export const PI = KommunicateExpoPluginModule.PI;

export function hello(): string {
  return KommunicateExpoPluginModule.hello();
}

export async function setValueAsync(value: string) {
  return await KommunicateExpoPluginModule.setValueAsync(value);
}

const emitter = new EventEmitter(KommunicateExpoPluginModule ?? NativeModulesProxy.KommunicateExpoPlugin);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { KommunicateExpoPluginView, KommunicateExpoPluginViewProps, ChangeEventPayload };
