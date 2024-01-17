import * as React from 'react';

import { KommunicateExpoPluginViewProps } from './KommunicateExpoPlugin.types';

export default function KommunicateExpoPluginView(props: KommunicateExpoPluginViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
