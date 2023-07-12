// Import the Enmity plugin API
import { Plugin } from 'enmity-plugin';

// Create a new plugin class
class MessageLoggerPlugin extends Plugin {

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

}

// Export the plugin
export default MessageLoggerPlugin;
