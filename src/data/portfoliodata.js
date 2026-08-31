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
import WWTMain from '../assets/images/worldwartoys/Main.png';
import WWTGameplay1 from '../assets/images/worldwartoys/Gameplay1.png';
import WWTGameplay2 from '../assets/images/worldwartoys/Gameplay2.png';
import WWTGameplay3 from '../assets/images/worldwartoys/Gameplay3.png';
import StackNMatchMain from '../assets/images/stacknmatch/StackNMatchMain.png';
import StackNMatchStart from '../assets/images/stacknmatch/StackNMatchStart.png';
import StackNMatchGameplay1 from '../assets/images/stacknmatch/StackNMatchGameplay1.png';
import StackNMatchGameplay2 from '../assets/images/stacknmatch/StackNMatchGameplay2.png';
import StackNMatchGameplay3 from '../assets/images/stacknmatch/StackNMatchGameplay3.png';
import BurgerShackMain from '../assets/images/burgershack/Main.png';
import BurgerShackGameplay1 from '../assets/images/burgershack/Gameplay1.png';
import BurgerShackGameplay2 from '../assets/images/burgershack/Gameplay2.png';
import BurgerShackGameplay3 from '../assets/images/burgershack/Gameplay3.png';
import BurgerShackEnd from '../assets/images/burgershack/End.png';
import HYMain from '../assets/images/hyakkiyakko/Main.png';
import HYGameplay1 from '../assets/images/hyakkiyakko/Gameplay1.jpg';
import HYGameplay2 from '../assets/images/hyakkiyakko/Gameplay2.jpg';
import HYGameplay3 from '../assets/images/hyakkiyakko/Gameplay3.jpg';

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
        contributions: ['Programmed player controls using Unity\'s Input system', 'Scripted enemy and boss AI using Unity\'s Raycast System'],
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
        contributions: ['Scripted cube rolling system', 'Designed rt assets using 3DS Max and Photoshop', 'Designed game levels with increasing difficulty'],
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
        plaform: 'Android',
        duration: '21 Weeks',
        teamSize: '6 Members',
        roles: 'Programmer',
        toolsUsed: 'Unity',
        overview: 'A match 3 game made for C3AFA which is done in unity. Players have to cheer customers up by changing Seika-chan\'s costume.',
        desc: '',
        contributions: ['Scripted match 3 system using 2d Arrays.', 'Scripted player and enemy interactions.'],
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
        plaform: 'Android',
        duration: '2 Weeks',
        teamSize: 'Solo',
        roles: 'Programmer and Designer',
        toolsUsed: 'Unity',
        overview: 'A mobile physics game where players have to transport the egg to the end by drawing lines.',
        desc: 'Players have to draw lines for the egg to roll on. There is a gauge on the top of the screen showing how much ink is there left and the amount of ink the player can use before the number of stars for the level decreases. The player can change the lines to a booster line which will increase the speed of the egg.\nThe egg has to avoid obstacles to reach the end. It will also break if it goes too fast.',
        contributions: ['Built egg movement system using Unity\'s Physics Engine', 'Scripted ink system', 'Designed game levels with increasing difficulty'],
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
    // {
    //     src: WWTMain,
    //     title: 'World War Toys',
    //     plaform: 'Desktop',
    //     duration: '20 Weeks',
    //     teamSize: '6 Members',
    //     roles: 'Programmer',
    //     toolsUsed: 'Unity',
    //     overview: 'A tower defense game where players take control of various toy weapons to prevent toy animals from reaching the end.',
    //     desc: 'Players have to protect their base from the toy animals and the lanes that toy animals take have different heights. Players have to place down turrets in order to prevent the toy animals from reaching the base. Players also have to stack the turrets in order to reach the lanes that are higher up.\nThere are 5 different types of turrets and 4 different enemies.',
    //     contributions: ['Built turret building system using Unity\'s Raycast System', 'Scripted enemy mechanics using Unity\'s NavMesh system', 'Scripted boss mechanic and movement'],
    //     carousel: [
    //         // {
    //         //     img: 'https://www.youtube.com/embed/HN389IQfL60?si=1b_Hj1_LGbY3d8pb',
    //         //     title: 'Travel Egg Gameplay Video',
    //         //     isImg: false,
    //         // },
    //         {
    //             img: WWTMain,
    //             title: 'World War Toys Main Screen',
    //             isImg: true,
    //         },
    //         {
    //             img: WWTGameplay1,
    //             title: 'World War Toys Gameplay Screenshot',
    //             isImg: true,
    //         },
    //         {
    //             img: WWTGameplay2,
    //             title: 'World War Toys Gameplay Screenshot',
    //             isImg: true,
    //         },
    //         {
    //             img: WWTGameplay3,
    //             title: 'World War Toys Gameplay Screenshot',
    //             isImg: true,
    //         },
    //     ],
    // },
    {
        src: StackNMatchMain,
        title: 'StackNMatch',
        plaform: 'Android',
        duration: '2 Weeks',
        teamSize: 'Solo',
        roles: 'Programmer and Designer',
        toolsUsed: 'Unity',
        overview: '​A casual AR game where players have to match blocks that fall from the sky. Made with vuforia.',
        desc: 'The blocks will fall in a 2x2 square on to the AR marker. Players have to swipe left and right to rotate the set of blocks in order to match them. The game will end when the height of the blocks exceed the height limit.',
        contributions: ['Scripted block falling and chaining mechanic using Unity\'s Raycast System.', 'Designed main gameplay loop.'],
        carousel: [
            {
                img: 'https://www.youtube.com/embed/ky6ZITNYeL8?si=ydzIhv_XB0paoLZt',
                title: 'StackNMatch Gameplay Video',
                isImg: false,
            },
            {
                img: StackNMatchMain,
                title: 'StackNMatch Main Screen',
                isImg: true,
            },
            {
                img: StackNMatchStart,
                title: 'StackNMatch Gameplay Screenshot',
                isImg: true,
            },
            {
                img: StackNMatchGameplay1,
                title: 'StackNMatch Gameplay Screenshot',
                isImg: true,
            },
            {
                img: StackNMatchGameplay2,
                title: 'StackNMatch Gameplay Screenshot',
                isImg: true,
            },
            {
                img: StackNMatchGameplay3,
                title: 'StackNMatch End Screen',
                isImg: true,
            },
        ],
    },
    {
        src: BurgerShackMain,
        title: 'Burger Shack',
        plaform: 'Desktop',
        duration: '5 Weeks',
        teamSize: 'Solo',
        roles: 'Programmer and Designer',
        toolsUsed: 'Unity',
        overview: 'A VR game where players have to serve burgers to the customers. Made with VRTK. ',
        desc: 'Customers will come in and have a menu above their heads with the burger they want which is randomly selected from a list. Players will then have to grab the necessary ingredients and stack them up and serve them to the customers. For every correct order, the player\'s score will increase. The game ends when the time runs out and there are no customers left in the store. ',
        contributions: ['Built system to allow players to interact with and snap ingredients to each other using VRTK.', 'Built system for checking burger orders using Unity\'s Raycast system' ,'Scripted customer mechanics', 'Designed the main gameplay loop of stacking burger ingredients and serving them.'],
        carousel: [
            {
                img: 'https://www.youtube.com/embed/BYvGEROGAB0?si=FJHjb75BIkxNICqn',
                title: 'Burger Shack Gameplay Video',
                isImg: false,
            },
            {
                img: BurgerShackMain,
                title: 'Burger Shack Main Screen',
                isImg: true,
            },
            {
                img: BurgerShackGameplay1,
                title: 'Burger Shack Gameplay Screenshot',
                isImg: true,
            },
            {
                img: BurgerShackGameplay2,
                title: 'Burger Shack Gameplay Screenshot',
                isImg: true,
            },
            {
                img: BurgerShackGameplay3,
                title: 'Burger Shack Gameplay Screenshot',
                isImg: true,
            },
            {
                img: BurgerShackEnd,
                title: 'Burger Shack End Screen',
                isImg: true,
            },
        ],
    },
    {
        src: HYMain,
        title: 'Hyakki Yakko',
        plaform: 'Desktop',
        duration: '36 Weeks',
        teamSize: '6 Members',
        roles: 'Programmer',
        toolsUsed: 'Unity',
        overview: 'Hyakki Yako is a 3rd person hack and slash, where the player will control a shrine maiden and exorcise the demons in her village.',
        desc: 'With the power of god, Miko uses wind and lightning from her broom to defeat the demons. Set in the Edo period of Japan, the game has our own take on the Hyakki Yako folklore, with demons possessing lanterns, and a young shrine maiden doing her job. \n\nThe goal of the game is to defeat the boss at the end. To get to the boss, the player has to fight through the enemies in the different areas in the level. Players have 2 attacks, light and heavy, and can dash to avoid the enemy attacks. Players also can heal when they take too much damage. There are also checkpoints in the game for when the player dies in the game.',
        contributions: ['Built combat system', 'Scripted enemy mechanics using Unity\'s NavMesh system', 'Scripted boss mechanics with different mechanics in each phase.'],
        carousel: [
            {
                img: 'https://www.youtube.com/embed/mZ3w3BIVYBk?si=XnoKr4W80Dbaftfx',
                title: 'Hyakki Yakko Gameplay Video',
                isImg: false,
            },
            {
                img: HYMain,
                title: 'Hyakki Yakko Main Screen',
                isImg: true,
            },
            {
                img: HYGameplay1,
                title: 'Hyakki Yakko Gameplay Screenshot',
                isImg: true,
            },
            {
                img: HYGameplay2,
                title: 'Hyakki Yakko Gameplay Screenshot',
                isImg: true,
            },
            {
                img: HYGameplay3,
                title: 'Hyakki Yakko Gameplay Screenshot',
                isImg: true,
            },
        ],
    },
];
export default PortfolioData;