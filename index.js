import { contextMenu } from '@goosemod/patcher';
import { findByProps } from '@goosemod/webpack';

const { copy } = findByProps('SUPPORTS_COPY', 'copy');

let unpatch;

export default {
  goosemodHandlers: {
    onImport: () => {
      unpatch = contextMenu.patch('user', {
        label: 'Copy Avatar URL',
        action: (_orig, info) => {
          copy(info.user.getAvatarURL(info.guildId, true).replace("size=256", "size=1024"));
        }
      });
    },

    onRemove: () => {
      unpatch();
    }
  }
};
