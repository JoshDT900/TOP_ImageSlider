import leftArrow from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/arrow_back_FILL0_wght400_GRAD0_opsz48.svg'
import rightArrow from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg'
import bubbles from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/fiber_manual_record_FILL1_wght400_GRAD0_opsz48.svg'
import gitLogo from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/GitHub-Mark-120px-plus.png'

const imageAssets = (function() {
    let leftArrowImg = leftArrow;
    let rightArrowImg = rightArrow;
    let bubbleImg = bubbles;
    let gitImg = gitLogo;


    return { leftArrowImg, rightArrowImg, bubbleImg, gitImg }
})();

export { imageAssets }