import { PlaylistItem } from '@m8d/web/shared/features/audio-player';

interface Playlist {
  beforeEvent: Array<PlaylistItem>;
  afterEvent: Array<PlaylistItem>;
}

export const secretGardenConfig: { playlist: Playlist; eventDate: string; quotes: Array<string> } = {
  eventDate: '2025-03-08T19:00:00',
  playlist: {
    beforeEvent: [
      {
        src: 'https://fine.sunproxy.net/file/dEdKYURYeXlIeVpNdkNQNkVlSG4wTURIb1ZFWTdNclFrWEc0cE9XWU8zblFzVDU5NXovNlZJckMrWjFSTEk2cGszN0dMN0J6Z3phYml2engrRW03amxHS0hNaWIyT05JWWdjQ1hHVUJUcjg9/Lady_Gaga_-_Always_Remember_(SkySound.cc).mp3',
        title: 'Always Remember us this way',
        artist: '[Hidden]',
      },
      {
        src: 'https://fine.sunproxy.net/file/YjMrRHkreVNFVGlsaTRPRHIzOGlzdmVuTTN5VytGMm9ndW1jbGd3RlNWMEZGbkZqUkVibC9nUTY1QUpHV09YR2E3VTZTUklHNjRMUmV2VmhVYVBnKzhtNmI3VXNBTFpTb1JMSGpRaTBHSW89/Lana_Del_Rey_-_Summertime_Sadness_(SkySound.cc).mp3',
        title: 'Summertime Sadness',
        artist: '[Hidden]',
      },
      {
        src: 'https://fine.sunproxy.net/file/YjMrRHkreVNFVGlsaTRPRHIzOGlzdmVuTTN5VytGMm9ndW1jbGd3RlNWMEZGbkZqUkVibC9nUTY1QUpHV09YRzUrNHFLVXhMbFhEWHQ1QnZEU1JZRE1jWUxRZDM2S3hGbUQ0UjZoZDdzNE09/Pascal_Letoublon_-_Friendships_(SkySound.cc).mp3',
        title: 'Friendships',
        artist: '[Hidden]',
      },
    ],
    afterEvent: [
      {
        src: 'https://fine.sunproxy.net/file/YjMrRHkreVNFVGlsaTRPRHIzOGlzdmVuTTN5VytGMm9ndW1jbGd3RlNWMEZGbkZqUkVibC9nUTY1QUpHV09YR3dHRjhkdU5Ec2dWRGhRYXlZTnFaOVNKci9hdWJXUzBBNzh5ODQ2OUlFUGs9/-_(SkySound.cc).mp3',
        title: '墨尔本的秋天',
        artist: '(吉他独奏版)',
      },
      {
        src: 'https://fine.sunproxy.net/file/YjMrRHkreVNFVGlsaTRPRHIzOGlzdmVuTTN5VytGMm9ndW1jbGd3RlNWMEZGbkZqUkVibC9nUTY1QUpHV09YR2xLeHR2Tm9IVlJHRSs0alIzbjBoc3VybEtOdHZBczZKaTRDcGxZT3kyaXc9/P_nk_-_Try_(SkySound.cc).mp3',
        title: 'Try',
        artist: '[Hidden]',
      },
      {
        src: 'https://fine.sunproxy.net/file/YjMrRHkreVNFVGlsaTRPRHIzOGlzdmVuTTN5VytGMm9ndW1jbGd3RlNWMUxMVWJPOG5zb05YUGtXdjBhdUovelpGcURkQkYyVmwxdjZuMk9lOXJUZmpOQm1OU2RMVWkveHRRT2I4TEZJVEU9/Indila_-_Love_Story_Version_Orchestrale_(SkySound.cc).mp3',
        title: 'Love Story',
        artist: '[Hidden]',
      },
      {
        src: 'https://fine.sunproxy.net/file/YjMrRHkreVNFVGlsaTRPRHIzOGlzdmVuTTN5VytGMm9ndW1jbGd3RlNWMEZGbkZqUkVibC9nUTY1QUpHV09YR2tuRGFOZHNxdEUvM3ZXdTBmTGg0L0Q5dmpETGxSdjZYLzFLRC9YMHkzSnc9/Imagine_Dragons_-_Bad_Liar_(SkySound.cc).mp3',
        title: 'Bad Liar',
        artist: '[Hidden]',
      },
    ],
  },
  quotes: [
    'True happiness comes from love, laughter, and the presence of those who cherish you. May your day be filled with the warmth of genuine connections and endless joy. Enjoy Women’s Day!',
    'You carry grace in your every step, beauty in your soul, and strength in your spirit. May this day remind you of just how extraordinary you truly are. Wishing you a wonderful Women’s Day!',
  ],
};
