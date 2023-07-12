import { get, set, SettingsStore } from "enmity/api/settings";
import { FormRow, FormSection, FormSwitch } from "enmity/components";
import { Plugin, registerPlugin } from "enmity/managers/plugins";
import { Messages, React, Toasts } from "enmity/metro/common";
import { create } from "enmity/patcher";
import SettingsPage from "../../common/components/_pluginSettings/settingsPage";
import { Icons } from "../../common/components/_pluginSettings/utils";
import manifest from "../manifest.json";

interface SettingsProps {
    settings: SettingsStore;
}

const Patcher = create(manifest.name);
import React from 'react';

export class MessageLoggerPlugin extends Plugin {

  // Called when the plugin is loaded
  async onLoad() {
    // Register a listener for message events
    this.eventEmitter.on('message', (message) => {
      // Log the message to the console
      console.log(message);
    });

    // Register a listener for message deletion events
    this.eventEmitter.on('messageDeleted', (message) => {
      // Get the message view
      const messageView = this.messageViews.get(message.id);

      // If the message view exists, set its color to red
      if (messageView) {
        messageView.style.color = 'red';
      }
    });
  }
// Google Bard helped me with this a lot.
