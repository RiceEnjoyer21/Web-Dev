export interface Category {
    name: string,
    products: Product[];
}

export interface Product {
    id: number,
    image: string,
    name: string,
    description: string,
    rating: number,
    link: string,
    likes: number;
}

export const shirtsProducts: Product[] = [
    {
        id: 101,
        image: 'https://pixelbite.co/cdn/shop/products/mens-classic-t-shirt-black-front-628f0e6f94db0.png?v=1653542631&width=990',
        name: 'Skyline R34',
        description: 'A comfortable cotton T-shirt available in various colors',
        rating: 4.5,
        link: 'https://pixelbite.co/products/skyline-r34',
        likes: 352
    },
    {
        id: 102,
        image: 'https://pixelbite.co/cdn/shop/products/mens-classic-t-shirt-black-front-6262fc1929a28.png?v=1650654305&width=990',
        name: '1990 Countach',
        description: 'Stylish option for 1990 Countach connoisseurs',
        rating: 4.8,
        link: 'https://pixelbite.co/products/1990-countarch',
        likes: 864
    },
    {
        id: 103,
        image: 'https://pixelbite.co/cdn/shop/products/mens-classic-t-shirt-black-front-6256f6a7c17af.png?v=1649971219&width=990',
        name: 'Tureno AE86',
        description: 'Fiction shirt for future days',
        rating: 4.7,
        link: 'https://pixelbite.co/products/trueno-ae86-t-shirt',
        likes: 544
    },
    {
        id: 104,
        image: 'https://pixelbite.co/cdn/shop/products/mens-classic-t-shirt-black-front-62f546ba2e294.png?v=1660241856&width=990',
        name: 'Bronco T-Shirt',
        description: 'Heavy option for heavy-weighted persons',
        rating: 4.3,
        link: 'https://pixelbite.co/products/ford-bronco-t-shirt',
        likes: 379
    },
    {
        id: 105,
        image: 'https://pixelbite.co/cdn/shop/products/mens-classic-t-shirt-navy-front-62588df1c80ed.png?v=1649971084&width=1445',
        name: 'MX5 Miata',
        description: 'Classic. Never wrong.',
        rating: 4.4,
        link: 'https://kaspi.kz/shop/p/vetrovka-northug-oppdal-training-jacket-chernyi-l-128522438/?c=750000000',
        likes: 987
    }
];

export const hoodieProducts: Product[] = [
    {
        id: 201,
        image: 'https://pixelplugstore.com/cdn/shop/products/HoodiewhiteOP04_1296x.jpg?v=1604342825',
        name: 'Monkey D. Luffy',
        description: 'Your heart will be your guide, raise the sails and take the helm',
        rating: 4.6,
        link: 'https://pixelplugstore.com/collections/hoodie/products/op04-hoodie',
        likes: 2432
    },
    {
        id: 202,
        image: 'https://pixelplugstore.com/cdn/shop/products/HoodieblackOP05_1296x.jpg?v=1605203051',
        name: 'Roronoa Zoro',
        description: 'If you do not go to hell, I will push you there!',
        rating: 4.8,
        link: 'https://pixelplugstore.com/collections/hoodie/products/op05-hoodie',
        likes: 2412
    },
    {
        id: 203,
        image: 'https://pixelplugstore.com/cdn/shop/products/SHIBAUNISEXWHITEHOODIE_1296x.jpg?v=1603294264',
        name: 'Good Boy Shiba Inu',
        description: 'A timeless model enhanced by a Shiba Inu design',
        rating: 4.5,
        link: 'https://pixelplugstore.com/collections/hoodie/products/shiba-hoodie',
        likes: 1255
    },
    {
        id: 204,
        image: 'https://pixelplugstore.com/cdn/shop/products/HoodieblackDB08_1296x.jpg?v=1604417147',
        name: 'DB - Bluma',
        description: 'A guide to help you improve your personal and professional life.',
        rating: 4.7,
        link: 'https://pixelplugstore.com/collections/hoodie/products/db08-hoodie',
        likes: 3521
    },
    {
        id: 205,
        image: 'https://pixelplugstore.com/cdn/shop/products/HoodiewhiteOP07_c2aef5ac-5a86-4b34-af78-b192b94bd285_1296x.jpg?v=1605308666',
        name: 'Tony Tony Chopper',
        description: 'When a man loses his soul, he ceases to be a man!',
        rating: 4.5,
        link: 'https://pixelplugstore.com/collections/hoodie/products/op07-hoodie',
        likes: 2114
    },
    {
        id: 206,
        image: 'https://pixelplugstore.com/cdn/shop/products/HoodieBLACKUNISEXHxH01_1296x.jpg?v=1641050633',
        name: 'Gon and Killua',
        description: 'Best friends forever',
        rating: 4.9,
        link: 'https://pixelplugstore.com/collections/hoodie/products/hxh01-hoodie',
        likes: 3209
    },
    {
        id: 207,
        image: 'https://pixelplugstore.com/cdn/shop/products/HoodieblackOP32_1296x.jpg?v=1604277470',
        name: 'Marine Admirals Portrait',
        description: 'Speed is power. Have you ever been kicked at the speed of light?',
        rating: 4.2,
        link: 'https://pixelplugstore.com/collections/hoodie/products/op32-hoodie',
        likes: 1983
    }
];

export const posterProducts: Product[] = [
    {
        id: 301,
        image: 'https://thesoundofvinyl.us/cdn/shop/files/Kanye-West---Late-Registration-_2LP.png?v=1732133560&width=800',
        name: 'Late Registration',
        description: 'Late Registration is the second studio album by American hip hop artist Kanye West, released on August 30, 2005, by Roc-A-Fella Records.',
        rating: 4.9,
        link: 'https://thesoundofvinyl.us/collections/hip-hop/products/kanye-west-late-registration',
        likes: 6594
      },
      {
        id: 302,
        image: 'https://thesoundofvinyl.us/cdn/shop/products/FlowerBoy2lp.png?v=1675450474&width=800',
        name: 'Flower Boy',
        description: 'Flower Boy is the new and long-awaited album from Tyler, The Creator. The album follows up on 2015s Cherry Bomb and is available as a vinyl LP.',
        rating: 4.8,
        link: 'https://thesoundofvinyl.us/collections/hip-hop/products/tyler-the-creator-flower-boy',
        likes: 5468
      },
      {
        id: 303,
        image: 'https://thesoundofvinyl.us/cdn/shop/products/lost-2.png?v=1658968059&width=800',
        name: 'CALL ME IF YOU GET LOST',
        description: 'Double vinyl LP pressing in gatefold jacket. Includes poster. 2022 release. CALL ME IF YOU GET LOST is Tylers sixth studio album and includes additional guest appearances from 42 Dugg, Lil Wayne, Domo Genesis, Brent Faiyaz, Lil Uzi Vert, Pharrell Williams, Teezo Touchdown, Fana Hues, and Daisy World.',
        rating: 4.99,
        link: 'https://kaspi.kz/shop/p/kieslect-calling-smartwatch-kr-pro-mul-tikolor-106533620/?c=750000000',
        likes: 7659
      },
      {
        id: 304,
        image: 'https://thesoundofvinyl.us/cdn/shop/products/damn.png?v=1679348540&width=800',
        name: 'DAMN.',
        description: 'The fourth album from hip hop superstar Kendrick Lamar. DAMN. is made up of 14 songs, including the lead single, "Humble." Rihanna appears on a song called "Loyalty." and U2 appears on "XXX."  DAMN. is the follow-up to his ground-breaking album To Pimp A Butterfly. Born and raised in Compton, California, Kendrick embarked on his musical career as a teenager under the stage name K-Dot, releasing a mixtape that garnered local attention and led to his signing with indie record label Top Dawg Entertainment.',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/msi-a1vgg-423kz-16-32-gb-ssd-1000-gb-win-11-home-9s7-15f423-423-134900748/?c=750000000',
        likes: 10584
      },
      {
        id: 305,
        image: 'https://thesoundofvinyl.us/cdn/shop/products/2961737.png?v=1655319024&width=800',
        name: 'To Pimp a Butterfly',
        description: 'Double vinyl LP pressing. Kendrick Lamars highly anticipated 2015 album, To Pimp a Butterfly: "honest, fearful and unapologetic".',
        rating: 4.5,
        link: 'https://thesoundofvinyl.us/collections/hip-hop/products/kendrick-lamar-to-pimp-a-butterfly',
        likes: 9754
      }
];

export const legoProducts: Product[] = [
    {
        id: 401,
        image: 'https://www.lego.com/cdn/cs/set/assets/blteb31801f928bfd22/77000_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
        name: 'Shadow the Hedgehog',
        description: 'I am the ultimate life form!',
        rating: 4.7,
        link: 'https://www.lego.com/en-us/product/shadow-the-hedgehog-77000',
        likes: 4563
      },
      {
        id: 402,
        image: 'https://www.lego.com/cdn/cs/set/assets/blt18c4b6cac19ffe03/77070_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
        name: 'Durrr Burger',
        description: 'Durrr BURGERRR!!!',
        rating: 4.6,
        link: 'https://www.lego.com/en-us/product/durrr-burger-77070',
        likes: 2315
      },
      {
        id: 403,
        image: 'https://www.lego.com/cdn/cs/set/assets/blt49f484f1e7076fd0/76328_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
        name: 'Batman™: The Classic TV Series Batmobile™',
        description: 'Where is the DETONATOR?!',
        rating: 4.3,
        link: 'https://www.lego.com/en-us/product/batman-the-classic-tv-series-batmobile-76328',
        likes: 2513
      },
      {
        id: 404,
        image: 'https://www.lego.com/cdn/cs/set/assets/blt367981020b706de2/77073_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
        name: 'Battle Bus',
        description: 'OMG Fortnite T_T',
        rating: 4.5,
        link: 'https://www.lego.com/en-us/product/battle-bus-77073',
        likes: 5443
      },
      {
        id: 405,
        image: 'https://www.lego.com/cdn/cs/set/assets/blte25a9ccc4d363ee2/21349.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
        name: 'Tuxedo Cat',
        description: 'Legend.',
        rating: 5,
        link: 'https://www.lego.com/en-us/product/tuxedo-cat-21349',
        likes: 9999
      }
]