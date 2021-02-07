import { contextMenu } from '@goosemod/patcher';

let unpatch;

export default {
  goosemodHandlers: {
    onImport: () => {
      unpatch = contextMenu.patch('user', {
        label: 'Copy Avatar URL',
        action: (_orig, info) => {
          window.DiscordNative.clipboard.copy(info.user.avatarURL)
        }
      });
    },

    onRemove: () => {
      unpatch();
    }
  }
};