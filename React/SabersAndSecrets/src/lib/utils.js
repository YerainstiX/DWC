"use strict"

import ep1 from "../assets/1.jpeg"
import ep2 from "../assets/2.jpeg"
import ep3 from "../assets/3.jpeg"
import ep4 from "../assets/4.jpeg"
import ep5 from "../assets/5.jpeg"
import ep6 from "../assets/6.jpeg"
import defaultPoster from "../assets/defaultPoster.jpeg"

const posterByEpisode = {
    1: ep1,
    2: ep2,
    3: ep3,
    4: ep4,
    5: ep5,
    6: ep6,
}

export const getPosterByEpisode = (id) => posterByEpisode[id] || defaultPoster
