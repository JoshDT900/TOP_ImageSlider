import leftArrow from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/arrow_back_FILL0_wght400_GRAD0_opsz48.svg';
import rightArrow from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg';
import bubbleFull from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/fiber_manual_record_FILL1_wght400_GRAD0_opsz48.svg';
import bubbleEmpty from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/fiber_manual_record_FILL0_wght400_GRAD0_opsz48.svg';
import gitLogo from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/GitHub-Mark-120px-plus.png';

const imageAssets = (function() {
    let leftArrowImg = leftArrow;
    let rightArrowImg = rightArrow;
    let bubbleFullImg = bubbleFull;
    let bubbleEmptyImg = bubbleEmpty;
    let gitImg = gitLogo;


    return { leftArrowImg, rightArrowImg, bubbleEmptyImg, bubbleFullImg, gitImg };
})();

export { imageAssets };