import { BoardGameModel } from "../db/schemas/boardgame";

class boardGameService {
    // 정렬 type 설정
    // service에 이 코드가 존재해도 되는지 궁금 ..??
    static sortType({ type }) {
        switch (type) {
            case "rank":
                return { rank: 1 };
            case "rating":
                return { bayes_average: -1 };
            case "userRated":
                return { user_rated: -1 };
            default:
                return null;
        }
    }

    // find board game 함수화
    static async findBoardGame({ options, type, page, perPage }) {
        // 조건에 따른 전체 보드게임 수 조회
        const total = await BoardGameModel.countDocuments(options);

        // 조건에 따른 보드게임 조회
        const games = await BoardGameModel.find(options)
            .sort(this.sortType({ type }))
            .skip(perPage * (page - 1))
            .limit(perPage);

        // 전체 페이지 수 얻기
        const totalPage = Math.ceil(total / perPage);

        return { totalPage, games };
    }

    // 최신 게임 전체 조회(보드게임 메인 페이지 default 조회)
    static async findByRecentlyGames({ page, perPage }) {
        const boardGames = await BoardGameModel2020.find({});
        return boardGames;
    }

    // game_id로 조회
    static async findByGameId({ gameId }) {
        const games = await BoardGameModel.findOne({ game_id: gameId });
        return games;
    }

    // todo: search 에서 사용할 함수
    static async findAllGames({ page, perPage }) {
        // 모든 보드게임 검색 - 저장된 순서대로 나옴
        const boardgames = await BoardGameModel.find({});
        return boardgames;
    }

    // player 기준 범위 안 보드게임 조회
    static async findByPlayer({ playerCount, type, page, perPage }) {
        // 인원 수 조회 option
        const options = {
            $nor: [
                { min_player: { $gt: playerCount } },
                { max_player: { $lt: playerCount } },
            ],
        };

        const { totalPage, games } = await this.findBoardGame({
            options,
            type,
            page,
            perPage,
        });

        if (games.length === 0) {
            return new Error("조회된 데이터가 없습니다.");
        }
        return { totalPage, games };
    }

    // 연령별 기준 보드게임 조회
    static async findByAge({ age, type, page, perPage }) {
        const options = {
            min_age: { $lte: age },
        };

        const { totalPage, games } = await this.findBoardGame({
            options,
            type,
            page,
            perPage,
        });

        return { totalPage, games };
    }

    // theme 기준 정렬
    static async findByTheme({ theme, type, page, perPage }) {
        const options = {
            theme: { $in: [theme] },
        };
        const { totalPage, games } = await this.findBoardGame({
            options,
            type,
            page,
            perPage,
        });

        return { totalPage, games };
    }

    // 시간 기준 정렬
    static async findByTime({ time, type, page, perPage }) {
        const options = {
            $nor: [
                { min_playing_time: { $gt: time } },
                { max_playing_time: { $lt: time } },
            ],
        };

        const { totalPage, games } = await this.findBoardGame({
            options,
            type,
            page,
            perPage,
        });

        return { totalPage, games };
    }

    static async findByComplexity({ complexity, type, page, perPage }) {
        const options = {
            complexity_average: {
                $gte: Math.floor(complexity),
                $lte: Math.floor(complexity) + 1,
            },
        };
        const { totalPage, games } = await this.findBoardGame({
            options,
            type,
            page,
            perPage,
        });

        return { totalPage, games };
    }
}

export { boardGameService };
