import { PlaylistItem } from '@m8d/web/shared/features/audio-player';

export interface QuoteItem {
  id: number;
  quote: string;
  author?: string;
}

export const homeViewConfig: { quotes: Array<QuoteItem>; playlist: Array<PlaylistItem>; mediaUrl: string } = {
  quotes: [
    { id: 1, quote: 'There is no limit to what we, as women, can accomplish.', author: 'Michelle Obama' },
    { id: 2, quote: 'A woman is the full circle. Within her is the power to create, nurture, and transform.', author: `Diane Mariechild. Happy Women's Day!` },
    { id: 3, quote: 'Well-behaved women seldom make history.', author: `Laurel Thatcher Ulrich. Happy Women's Day!` },
    { id: 4, quote: 'I am grateful to be a woman. I must have done something great in another life.', author: 'Maya Angelou' },
    { id: 5, quote: 'Empowered women empower the world.', author: 'Unknown' },
    { id: 6, quote: 'She believed she could, so she did.', author: `R.S. Grey. Happy Women's Day!` },
    { id: 7, quote: `Every woman's success should be an inspiration to another. We're strongest when we cheer each other on.`, author: 'Serena Williams' },
    { id: 8, quote: 'A strong woman looks a challenge in the eye and gives it a wink.', author: 'Gina Carey' },
    { id: 9, quote: 'Women are the real architects of society.', author: 'Cher' },
    { id: 10, quote: `Feminism isn't about making women strong. Women are already strong. It's about changing the way the world perceives that strength.`, author: 'G.D. Anderson' },
    { id: 11, quote: 'Women are the largest untapped reservoir of talent in the world.', author: 'Hillary Clinton' },
    { id: 12, quote: 'No one can make you feel inferior without your consent.', author: 'Eleanor Roosevelt' },
    { id: 13, quote: 'Each time a woman stands up for herself, without knowing it possibly, without claiming it, she stands up for all women.', author: 'Maya Angelou' },
    { id: 14, quote: 'I raise up my voice – not so I can shout, but so that those without a voice can be heard.', author: 'Malala Yousafzai' },
    { id: 15, quote: 'Women are powerful and unstoppable.', author: 'Malala Yousafzai' },
    { id: 16, quote: 'You have what it takes to be a victorious, independent, fearless woman.', author: 'Tyra Banks' },
    { id: 17, quote: 'A woman is like a tea bag – you never know how strong she is until she gets in hot water.', author: 'Eleanor Roosevelt' },
    { id: 18, quote: 'Do not live someone else’s life and someone else’s idea of what womanhood is. Womanhood is you.', author: 'Viola Davis' },
    { id: 19, quote: 'The best protection any woman can have is courage.', author: 'Elizabeth Cady Stanton' },
    { id: 20, quote: 'Strong women don’t play the victim. They stand and they deal.', author: 'Mandy Hale' },
    { id: 21, quote: 'Women hold up half the sky.', author: 'Chinese Proverb' },
    { id: 22, quote: 'Behind every successful woman is herself.', author: 'Unknown' },
    { id: 23, quote: 'One is not born, but rather becomes, a woman.', author: 'Simone de Beauvoir' },
    { id: 24, quote: 'Strong women don’t have ‘attitudes’; we have standards.', author: 'Marilyn Monroe' },
    { id: 25, quote: 'To tell a woman everything she cannot do is to tell her what she can.', author: 'Spanish Proverb' },
    { id: 26, quote: 'Happy International Women’s Day! May you always shine with confidence and grace.' },
    { id: 27, quote: 'To all the fantastic women out there, keep inspiring, keep achieving, and keep shining. Happy Women’s Day!' },
    { id: 28, quote: 'Wishing you a day filled with love, joy, and celebration. You deserve it all!' },
    { id: 29, quote: 'May you continue to break barriers and soar to new heights. Happy Women’s Day!' },
    { id: 30, quote: 'Here’s to strong women: May we know them, may we be them, may we raise them.' },
    { id: 31, quote: 'To the incredible women in my life, thank you for your strength and kindness. Happy Women’s Day!' },
    { id: 32, quote: 'Happy Women’s Day to all the powerful, resilient, and inspiring women out there. Keep conquering the world!' },
    { id: 33, quote: 'You are the heart and soul of every home and workplace. Wishing you success and happiness today and always!' },
    { id: 34, quote: 'Your strength, courage, and determination inspire everyone around you. Happy Women’s Day!' },
    { id: 35, quote: 'To the women who make the world a better place – thank you! Wishing you a wonderful Women’s Day.' },
    { id: 36, quote: 'You are an inspiration and a role model. Happy Women’s Day!' },
    { id: 37, quote: 'May you always find success and happiness in all you do. Happy Women’s Day!' },
    { id: 38, quote: 'Wishing you a day as strong, beautiful, and unique as you are!' },
    { id: 39, quote: 'To my best friend, thank you for always uplifting and supporting me. Happy Women’s Day!' },
    { id: 40, quote: 'Happy Women’s Day to my mother – my first and forever hero!' },
    { id: 41, quote: 'You are more powerful than you know and deserve every bit of happiness today! Happy Women’s Day!' },
    { id: 42, quote: 'Wishing my colleagues a fantastic Women’s Day! Keep striving for greatness.' },
    { id: 43, quote: 'Happy Women’s Day to my sister – thank you for always being my guiding light!' },
    { id: 44, quote: 'To all the incredible women I work with, thank you for your brilliance and hard work. Enjoy this day!' },
    { id: 45, quote: 'Women like you make the world a better place. Happy Women’s Day!' },
    { id: 46, quote: '“Be a first-rate version of yourself, not a second-rate version of someone else.”', author: 'Judy Garland' },
    { id: 47, quote: '“Love yourself first and everything else falls into line.”', author: 'Lucille Ball' },
    { id: 48, quote: '“Owning our story and loving ourselves through that process is the bravest thing we’ll ever do.”', author: 'Brené Brown' },
    { id: 49, quote: '“Don’t let anyone speak for you, and don’t rely on others to fight for you.”', author: 'Michelle Obama' },
    { id: 50, quote: '“She remembered who she was and the game changed.”', author: 'Lalah Delia' },
    { id: 51, quote: '“There is no force more powerful than a woman determined to rise.”', author: 'W.E.B. Dubois' },
    { id: 52, quote: '“Women standing together can move mountains.”', author: 'Unknown' },
    { id: 53, quote: '“Surround yourself with only people who are going to lift you higher.”', author: 'Oprah Winfrey' },
    { id: 54, quote: '“A strong woman stands up for herself. A stronger woman stands up for others.”', author: 'Unknown' },
    { id: 55, quote: '“Sisterhood is powerful.”', author: 'Robin Morgan' },
    { id: 56, quote: '“Behind every successful woman is a tribe of other successful women who have her back.”', author: 'Unknown' },
    { id: 57, quote: '“I’m not afraid of storms, for I’m learning how to sail my ship.”', author: 'Louisa May Alcott' },
    { id: 58, quote: '“Who runs the world? Girls!”', author: 'Beyoncé' },
    { id: 59, quote: '“I am and always will be a catalyst for change.”', author: 'Shirley Chisholm' },
    { id: 60, quote: '“Strong women: May we know them, may we be them, may we raise them.”', author: 'Unknown' },
    { id: 61, quote: '“A mother’s arms are made of tenderness and children sleep soundly in them.”', author: 'Victor Hugo. Happy Women’s Day!' },
    { id: 62, quote: '“The influence of a mother in the lives of her children is beyond calculation.”', author: 'James E. Faust.' },
    { id: 63, quote: '“Mothers are like glue. Even when you can’t see them, they’re still holding the family together.”', author: 'Susan Gale' },
    { id: 64, quote: '“There is no way to be a perfect mother, but a million ways to be a great one.”', author: 'Jill Churchill' },
    { id: 65, quote: '“The heart of a mother is a deep abyss at the bottom of which you will always find forgiveness.”', author: 'Honoré de Balzac' },
    { id: 66, quote: '“The future belongs to those who believe in the beauty of their dreams.”', author: 'Eleanor Roosevelt' },
    { id: 67, quote: '“There is nothing stronger than a broken woman who has rebuilt herself.”', author: 'Hannah Gadsby' },
    { id: 68, quote: '“Women’s rights are human rights.”', author: 'Hillary Clinton' },
    { id: 69, quote: '“A girl should be two things: who and what she wants.”', author: 'Coco Chanel' },
    { id: 70, quote: '“A woman with a voice is, by definition, a strong woman.”', author: 'Melinda Gates.' },
    { id: 71, quote: '“Fight for the things that you care about, but do it in a way that will lead others to join you.”', author: 'Ruth Bader Ginsburg' },
    { id: 72, quote: '“Women belong in all places where decisions are being made.”', author: 'Ruth Bader Ginsburg.' },
    { id: 73, quote: '“We want deeper sincerity of motive, a greater courage in speech, and earnestness in action.”', author: 'Sarojini Naidu' },
    { id: 74, quote: '“The power you have is to be the best version of yourself you can be, so you can create a better world.”', author: 'Ashley Rickards.' },
    { id: 75, quote: '“The test for whether or not you can hold a job should not be the arrangement of your chromosomes.”', author: 'Bella Abzug' },
    { id: 76, quote: 'May you continue to shine and inspire the world with your strength and grace!' },
    { id: 77, quote: 'Keep breaking barriers and chasing your dreams fearlessly!' },
    { id: 78, quote: 'Your resilience and courage make the world a better place – keep shining!' },
    { id: 79, quote: 'A woman like you is the epitome of strength and wisdom – keep inspiring!' },
    { id: 80, quote: 'You are a force to be reckoned with – unstoppable, unbreakable, and truly inspiring!' },
    { id: 81, quote: 'May your courage and kindness change the world, one step at a time!' },
    { id: 82, quote: 'Today is a reminder of how powerful, talented, and unstoppable you are!' },
    { id: 83, quote: 'Your strength is unmatched, and your kindness is endless – keep being amazing!' },
    { id: 84, quote: 'Keep empowering others as you rise – your journey is an inspiration!' },
    { id: 85, quote: 'You are a warrior in your own way – celebrate your brilliance every day!' },
    { id: 86, quote: 'Wishing you love, joy, and endless happiness today and always!' },
    { id: 87, quote: 'May you always find the strength to chase your dreams and the love to fill your heart!' },
    { id: 88, quote: 'You deserve all the happiness in the world – celebrating you today and always!' },
    { id: 89, quote: 'Your kindness and warmth make life beautiful – thank you for being you!' },
    { id: 90, quote: 'You are loved, cherished, and appreciated – today and every day!' },
    { id: 91, quote: 'May you always be surrounded by love, laughter, and the success you deserve!' },
    { id: 92, quote: 'Your presence brings so much joy – keep spreading your light to the world!' },
    { id: 93, quote: 'Thank you for being a source of love and support – wishing you the best always!' },
    { id: 94, quote: 'You make the world a brighter place with your kindness – happy Women’s Day!' },
    { id: 95, quote: 'May your life be filled with happiness, strength, and all the success you desire!' },
    { id: 96, quote: 'Be bold, be strong, be unstoppable—because you already are!' },
    { id: 97, quote: 'The world needs more fearless, empowered women like you—keep shining!' },
    { id: 98, quote: 'Your voice, your strength, and your wisdom make a difference—never forget that!' },
    { id: 99, quote: 'You are a leader, a dreamer, and a fighter—keep inspiring!' },
    { id: 100, quote: 'Nothing can stop a determined woman—may you always chase your dreams!' },
    { id: 101, quote: 'Every woman has the power to change the world—keep leading the way!' },
    { id: 102, quote: 'Believe in yourself, because the world already believes in you!' },
    { id: 103, quote: 'Keep proving that women can achieve anything they set their minds to!' },
    { id: 104, quote: 'You are powerful beyond measure—embrace it and conquer the world!' },
    { id: 105, quote: 'Strong women build strong societies—your strength is an inspiration!' },
  ],
  playlist: [
    {
      title: 'Theme 1',
      artist: 'Unknown artist',
      src: 'https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3',
    },
    {
      title: 'Goldn',
      artist: 'Praz Khanal',
      src: 'https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3',
    },
    {
      title: 'Phir Milainge',
      artist: 'Redazx',
      src: 'https://cdn.pixabay.com/audio/2022/08/03/audio_54ca0ffa52.mp3',
    },
    {
      title: 'Resistance',
      artist: 'Gvidon',
      src: 'https://cdn.pixabay.com/audio/2022/07/25/audio_3266b47d61.mp3',
    },
    {
      title: 'Desperate Decision',
      artist: 'Aleksei Chistilin',
      src: 'https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3',
    },
    {
      title: 'Dreams',
      artist: 'Hamidshax',
      src: 'https://fine.sunproxy.net/file/dEdKYURYeXlIeVpNdkNQNkVlSG4wTURIb1ZFWTdNclFrWEc0cE9XWU8zblFzVDU5NXovNlZJckMrWjFSTEk2cG50Ukd6OVI0WVdpeWpKcnIxbFp5Q1QrcDlpcVRDTVBFZTJRU3ZmenBhVm89/Hamidshax_Music_-_Hamidshax_-_Dreams_Original_Mix_(SkySound.cc).mp3',
    }
  ],
  mediaUrl: 'https://pixabay.com',
}
