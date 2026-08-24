import staticLuvMain from '../assets/images/staticLuv/StaticLuvMain.png';
import staticLuvGameplay1 from '../assets/images/staticLuv/Gameplay1.png';
import staticLuvGameplay2 from '../assets/images/staticLuv/Gameplay2.png';
import staticLuvGameplay3 from '../assets/images/staticLuv/Gameplay3.png';
import staticLuvBoss from '../assets/images/staticLuv/BossFight.png';
import HerdingMain from '../assets/images/herding/HerdingMain.png';
import HerdingGameplay1 from '../assets/images/herding/HerdingGameplay1.png';
import HerdingGameplay2 from '../assets/images/herding/HerdingGameplay2.png';
import HerdingWin from '../assets/images/herding/HerdingWin.png';
import HerdingLose from '../assets/images/herding/HerdingLose.png';
import SeikaCheerMain from '../assets/images/seikacheer/SeikaCheerMain.png';
import SeikaCheerGameplay1 from '../assets/images/seikacheer/SeikaCheerGameplay1.png';
import SeikaCheerGameplay2 from '../assets/images/seikacheer/SeikaCheerGameplay2.png';
import SeikaCheerGameplay3 from '../assets/images/seikacheer/SeikaCheerGameplay3.png';
import SeikaCheerWin from '../assets/images/seikacheer/SeikaCheerWin.png';
import TravelEggMain from '../assets/images/travelegg/Main.jpg';
import TravelEggGameplay1 from '../assets/images/travelegg/Gameplay1.jpg';
import TravelEggGameplay2 from '../assets/images/travelegg/Gameplay2.jpg';
import TravelEggGameplay3 from '../assets/images/travelegg/Gameplay3.jpg';
import TravelEggWin from '../assets/images/travelegg/Win.jpg';

const PortfolioData = [
    {
        src: staticLuvMain,
        title: 'StaticLuv',
        plaform: 'Desktop',
        duration: '8 Weeks',
        teamSize: '2 Members',
        roles: 'Programmer',
        toolsUsed: 'Unity',
        overview: 'A 2D platformer where players help a robot to save his girl from the evil boss.',
        desc: 'There\'s 2 different kinds of enemies, 1 that shoots bullets and 1 that hurts the player by touching them. There are also movable platforms in the game which is important in the boss fight.\nIn the boss fight, players have to make use of the movable platforms in order to shoot at the boss.The boss will move left and right which makes it harder for the player to hit it. The boss will also fire a bullet that follows the player until either 3 seconds is up or if the bullet hits an object.',
        contributions: ['Programmed player controls', 'Created enemy and boss AI'],
        carousel: [
            {
                img: 'https://www.youtube.com/embed/eJGmZQmmgTk?si=yEUF4PBotge1poY8',
                title: 'StaticLuv Gameplay Video',
                isImg: false,
            },
            {
                img: staticLuvMain,
                title: 'StaticLuv Main Screen',
                isImg: true,
            },
            {
                img: staticLuvGameplay1,
                title: 'StaticLuv Gameplay Screenshot',
                isImg: true,
            },
            {
                img: staticLuvGameplay2,
                title: 'StaticLuv Gameplay Screenshot',
                isImg: true,
            },
            {
                img: staticLuvGameplay3,
                title: 'StaticLuv Gameplay Screenshot',
                isImg: true,
            },
            {
                img: staticLuvBoss,
                title: 'StaticLuv Gameplay Screenshot',
                isImg: true,
            },
        ],
    },
    {
        src: HerdingMain,
        title: 'Herding',
        plaform: 'Desktop',
        duration: '2 Weeks',
        teamSize: 'Solo',
        roles: 'Programmer and Designer',
        toolsUsed: 'Unity, 3DS Max, Photoshop',
        overview: 'A 3D puzzle game cube where players take control a sheepdog and push the cows into their pens.',
        desc: 'The goal of this game is to get the cow into the pen before the player runs out of moves. \nThere are 3 different cubes apart from the player\'s cube, the pig, sheep and cow. The pig and sheep cubes will move one block in the direction the player pushes it, and the sheep is used to unlock the trampoline for the player to reach the higher levels. The cow will continuously move in the direction that the player pushes it until it is stopped by an obstacle.',
        contributions: ['Programmed gameplay functions', 'Designed the art assets', 'Designed game levels'],
        carousel: [
            {
                img: 'https://www.youtube.com/embed/FtQWxcrIrGI?si=aNZKBIrDQLrPZ_pz',
                title: 'Herding Gameplay Video',
                isImg: false,
            },
            {
                img: HerdingMain,
                title: 'Herding Main Screen',
                isImg: true,
            },
            {
                img: HerdingGameplay1,
                title: 'Herding Gameplay Screenshot',
                isImg: true,
            },
            {
                img: HerdingGameplay2,
                title: 'Herding Gameplay Screenshot',
                isImg: true,
            },
            {
                img: HerdingWin,
                title: 'Herding Win Screen',
                isImg: true,
            },
            {
                img: HerdingLose,
                title: 'Herding Lose Screen',
                isImg: true,
            },
        ],
    },
    {
        src: SeikaCheerMain,
        title: 'Seika Cheer',
        plaform: 'Andriod',
        duration: '21 Weeks',
        teamSize: '6 Members',
        roles: 'Programmer',
        toolsUsed: 'Unity',
        overview: 'A match 3 game made for C3AFA which is done in unity. Players have to cheer customers up by changing Seika-chan\'s costume.',
        desc: '',
        contributions:  ['Programmed main gameplay mechanic', 'Programmed enemy behaviour', 'Programmed player and enemy interactions'],
        carousel: [
            {
                img: 'https://www.youtube.com/embed/wy8N7xFQJqU?si=E76hOXfaioF01THL',
                title: 'Seika Cheer Gameplay Video',
                isImg: false,
            },
            {
                img: SeikaCheerMain,
                title: 'Seika Cheer Main Screen',
                isImg: true,
            },
            {
                img: SeikaCheerGameplay1,
                title: 'Seika Cheer Gameplay Screenshot',
                isImg: true,
            },
            {
                img: SeikaCheerGameplay2,
                title: 'Seika Cheer Gameplay Screenshot',
                isImg: true,
            },
                        {
                img: SeikaCheerGameplay3,
                title: 'Seika Cheer Gameplay Screenshot',
                isImg: true,
            },
            {
                img: SeikaCheerWin,
                title: 'Seika Cheer Win Screen',
                isImg: true,
            },
        ],
    },
    {
        src: TravelEggMain,
        title: 'Travel Egg',
        plaform: 'Andriod',
        duration: '2 Weeks',
        teamSize: 'Solo',
        roles: 'Programmer and Designer',
        toolsUsed: 'Unity',
        overview: 'A mobile physics game where players have to transport the egg to the end by drawing lines.',
        desc: 'Players have to draw lines for the egg to roll on. There is a gauge on the top of the screen showing how much ink is there left and the amount of ink the player can use before the number of stars for the level decreases. The player can change the lines to a booster line which will increase the speed of the egg.\nThe egg has to avoid obstacles to reach the end. It will also break if it goes too fast.',
        contributions:  ['Designed game levels and mechanics', 'Programmed gameplay mechanics' ],
        carousel: [
            {
                img: 'https://www.youtube.com/embed/HN389IQfL60?si=1b_Hj1_LGbY3d8pb',
                title: 'Travel Egg Gameplay Video',
                isImg: false,
            },
            {
                img: TravelEggMain,
                title: 'Travel Egg Main Screen',
                isImg: true,
            },
            {
                img: TravelEggGameplay1,
                title: 'Travel Egg Gameplay Screenshot',
                isImg: true,
            },
            {
                img: TravelEggGameplay2,
                title: 'Travel Egg Gameplay Screenshot',
                isImg: true,
            },
                        {
                img: TravelEggGameplay3,
                title: 'Travel Egg Gameplay Screenshot',
                isImg: true,
            },
            {
                img: TravelEggWin,
                title: 'Travel Egg Win Screen',
                isImg: true,
            },
        ],
    },
];
export default PortfolioData;