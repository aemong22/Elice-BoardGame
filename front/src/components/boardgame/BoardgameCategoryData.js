export const categoryData = {
    "player" : {
        "2": "2인",
        "3": "3인",
        "4": "4인",
        "5": "5인 이상"
    },
    "age" : {
        "9": "9세 이상",
        "12": "12세 이상",
        "15": "15세 이상",
        "19": "19세 이상"
    },
    "time" : {
        "30": "30분",
        "60": "60분",
        "120": "120분",
    },
    "complexity" : {
        "1": "쉬움",
        "2": "중간",
        "3": "어려움",
        "4": "최고 어려움"
    },
    "theme" : {
        "전략": "전략 게임",
        "가족": "가족 게임",
        "추상": "추상 전략 게임",
        "파티": "파티 게임",
        "전쟁": "전쟁 게임",
        "테마": "테마 게임",
        "사용자 맞춤": "사용자 정의 게임",
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