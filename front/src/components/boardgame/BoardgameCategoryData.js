export const categoryData = {
    "player" : {
        "2": "2인",
        "3": "3인",
        "4": "4인",
        "5": "5인 이상"
    },
    "age" : {
        "9": "9세",
        "12": "12세",
        "15": "15세",
        "19": "19세"
    },
    "complexity" : {
        "1": "쉬움",
        "2": "중간",
        "3": "어려움",
        "4": "최고 어려움"
    },
    "theme" : {
        "Strategy Games": "Strategy Games",
        "Thematic Games": "Thematic Games",
        "Wargames": "Wargames",
        "Family Games": "Family Games",
        "Customizable Games": "Customizable Games",
        "Abstract Games": "Abstract Games", 
        "Party Games" : "Party Games",
    },
    "time" : {
        "30": "30분",
        "60": "60분",
        "120": "120분",
    },
}

export const categoryName = (category) => {
    const categoryData = {
        "player" : "게임 인원",
        "age" : "게임 연령",
        "complexity" : "게임 난이도",
        "theme" : "테마",
        "time" : "게임 시간",
    }

    return categoryData[category]
}

export const categoryValue = (category, value) => {
    return categoryData[category][value]
}