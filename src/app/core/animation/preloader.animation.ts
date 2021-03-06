import * as $ from 'jquery';
import { TweenLite, TimelineLite, Back, Bounce } from 'gsap';

import { LogoAnimation } from './logo.animation';
import { LogoPreloderAnimation } from './logo-preloader.animation';

const easeEffOpen  = Back.easeIn.config(0);
const easeEffClose = Back.easeOut.config(0);


const Preloader = {
  open: ({...opt}) => {
    const options = opt;

    LogoPreloderAnimation.stop();

    $('._preloader_loader').fadeOut('fast', () => {
      TweenLite.to('._preloader_base_line', .7, { ease:  easeEffOpen, width: '100%', opacity: .5, onComplete: () => {

        TweenLite.to('._preloader_door_top', 1, {
          ease:  easeEffOpen, delay: .3,
          bottom: '250%', onComplete: () => {

            $('._preloader_main').hide();

            // Action after open
            if ( opt.action ) {
              options.action();
            }

        }});
        TweenLite.to('._preloader_door_bottom', 1, { ease:  easeEffOpen, top: '250%', delay: .3});

      }});
    });

  },


  close: ({...opt}) => {
    const options = opt;

    if (options.currentSection === '/') {
      LogoAnimation.shine('stop');
    }

    $('._preloader_main').show();

    TweenLite.to('._preloader_door_top', 1, {
      ease: Bounce.easeOut,
      bottom: '49.9%', onComplete: () => {

        TweenLite.to('._preloader_base_line', .7, { ease:  easeEffOpen, width: '0%', opacity: 0, onComplete: () => {
          $('._preloader_loader').fadeIn(5, () => {

            LogoPreloderAnimation.play();

            // Action after close
            if ( opt.action ) {
              options.action();
            }
          });
        }});

    }});
    TweenLite.to('._preloader_door_bottom', 1, { ease: Bounce.easeOut, top: '49.94%'});
  },


  fadeIn: () => {

  },


  fadeOut: () => {

  },

  isOpen: () => {
    $('._preloader_main').hide();
    TweenLite.to('._preloader_base_line', 0, { width: '100%', opacity: .5, onComplete: () => {

        TweenLite.to('._preloader_door_top', 0, { bottom: '250%' });
        TweenLite.to('._preloader_door_bottom', 0, { top: '250%' });

      }});
  }
};

export { Preloader };
