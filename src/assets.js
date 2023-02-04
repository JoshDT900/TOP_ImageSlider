import leftArrow from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/arrow_back_FILL0_wght400_GRAD0_opsz48.svg';
import rightArrow from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg';
import bubbleFull from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/fiber_manual_record_FILL1_wght400_GRAD0_opsz48.svg';
import bubbleEmpty from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/fiber_manual_record_FILL0_wght400_GRAD0_opsz48.svg';
import gitLogo from '/home/josh/Documents/repos/TOP_ImageSlider/src/images/GitHub-Mark-120px-plus.png';
import firstImg from '../src/images/ismael-rodriguez-XjMrUsQtXxc-unsplash.jpg'
import secondImg from '../src/images/job-savelsberg-E2Y4aju0n8U-unsplash.jpg'
import thirdImg from '../src/images/job-savelsberg-EvsVRfU9_p4-unsplash.jpg'
import fourthImg from '../src/images/marek-piwnicki-qee91c-o56s-unsplash.jpg'
import fifthImg from '../src/images/zetong-li-2XpVkLppH_o-unsplash.jpg'

const imageAssets = (function() {
    let leftArrowImg = leftArrow;
    let rightArrowImg = rightArrow;
    let bubbleFullImg = bubbleFull;
    let bubbleEmptyImg = bubbleEmpty;
    let gitImg = gitLogo;
    let imgArr = [firstImg, secondImg, thirdImg, fourthImg, fifthImg];

    let imgObj = [
        {
            img: firstImg,
            owner: "Ismael Rodriguez",
            link: "https://unsplash.com/@ismaelrguez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            unsplash: "https://unsplash.com/photos/XjMrUsQtXxc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            img: secondImg,
            owner: "Job Savelsberg",
            link: "https://unsplash.com/@jobsavelsberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            unsplash: "https://unsplash.com/photos/E2Y4aju0n8U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            img: thirdImg,
            owner: "Job Savelsberg",
            link: "https://unsplash.com/@jobsavelsberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            unsplash: "https://unsplash.com/photos/EvsVRfU9_p4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            img: fourthImg,
            owner: "Marek Piwnicki",
            link: "https://unsplash.com/@marekpiwnicki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            unsplash: "https://unsplash.com/photos/qee91c-o56s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            img: fifthImg,
            owner: "Zetong Li",
            link: "https://unsplash.com/@zetong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            unsplash: "https://unsplash.com/photos/2XpVkLppH_o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
    ]


    return { leftArrowImg, rightArrowImg, bubbleEmptyImg, bubbleFullImg, gitImg, imgArr, imgObj };
})();

export { imageAssets };