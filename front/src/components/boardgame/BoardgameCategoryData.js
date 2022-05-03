export const categoryData = {
    "player" : {
        "2": "2인",
        "3": "3인",
        "4": "4인",
        "5": "5인 이상"
    },
    "age" : {
        "9": "9세 이하",
        "12": "12세 이하",
        "15": "15세 이하",
        "19": "19세 이하"
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
        "전략": "전략",
        "가족": "가족",
        "전쟁": "전쟁",
        "형성": "형성",
        "모음": "모음",
        "맞춤형": "맞춤형",

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