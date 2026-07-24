// ========== تأثير حقل النجوم ==========
(function () {
    const starCanvas = document.getElementById('starfield');
    const ctx = starCanvas.getContext('2d');
    let width, height;
    const stars = [];
    const STAR_COUNT = 250;
    const SPEED = 0.05;
    const MAX_DEPTH = 50;
    const MAX_RADIUS = 2.5;

    function randomRange(min, max) { return Math.random() * (max - min) + min; }
    function initStars() {
        stars.length = 0;
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: randomRange(-MAX_DEPTH, MAX_DEPTH),
                y: randomRange(-MAX_DEPTH, MAX_DEPTH),
                z: randomRange(1, MAX_DEPTH)
            });
        }
    }
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        starCanvas.width = width;
        starCanvas.height = height;
    }
    function drawStars() {
        ctx.clearRect(0, 0, width, height);
        const centerX = width / 2,
            centerY = height / 2;
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            star.z -= SPEED;
            if (star.z <= 0) {
                star.x = randomRange(-MAX_DEPTH, MAX_DEPTH);
                star.y = randomRange(-MAX_DEPTH, MAX_DEPTH);
                star.z = MAX_DEPTH;
            }
            const scale = 1 / star.z;
            const screenX = star.x * scale * 100 + centerX;
            const screenY = star.y * scale * 100 + centerY;
            if (screenX < 0 || screenX > width || screenY < 0 || screenY > height) {
                star.x = randomRange(-MAX_DEPTH, MAX_DEPTH);
                star.y = randomRange(-MAX_DEPTH, MAX_DEPTH);
                star.z = MAX_DEPTH;
                continue;
            }
            const radius = MAX_RADIUS * (1 - star.z / MAX_DEPTH) + 0.5;
            const alpha = 1 - star.z / MAX_DEPTH;
            ctx.beginPath();
            ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'white';
            ctx.fill();
            ctx.shadowBlur = 0;
        }
        requestAnimationFrame(drawStars);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initStars();
    drawStars();
})();

// ========== كود الشطرنج الكامل ==========
(function () {
    // -------- هياكل البيانات الأساسية --------
    class OpeningTrie {
        constructor() {
            this.root = {};
            this.names = {};
        }
        _parseMoves(str) {
            try {
                const tokens = str.trim().split(/\s+/);
                return tokens.filter(t => !t.endsWith('.'));
            } catch (e) {
                return [];
            }
        }
        insert(movesStr, name, eco = '') {
            const moves = this._parseMoves(movesStr);
            let node = this.root;
            for (const m of moves) {
                if (!node[m]) node[m] = {};
                node = node[m];
            }
            this.names[node] = { name, eco };
        }
        find(movesStr) {
            try {
                const moves = this._parseMoves(movesStr);
                let node = this.root,
                    lastName = null,
                    lastEco = null;
                for (const m of moves) {
                    if (m in node) {
                        node = node[m];
                        if (this.names[node]) {
                            lastName = this.names[node].name;
                            lastEco = this.names[node].eco;
                        }
                    } else break;
                }
                return { name: lastName, eco: lastEco };
            } catch (e) {
                return { name: null, eco: null };
            }
        }
    }

    const openingList = [
        ['', 'Opening Position'],
        ['1. e4', "King's Pawn"],
        ['1. d4', "Queen's Pawn"],
        ['1. e4 e5 2. Nf3 Nc6 3. Bc4', "Italian Game"],
        ['1. e4 e5 2. Nf3 Nc6 3. Bb5', "Ruy Lopez"],
        ['1. e4 e5 2. Nf3 Nc6 3. d4', 'Scotch Game'],
        ['1. e4 e5 2. Nf3 Nc6 3. Nc3', 'Three Knights'],
        ['1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6', 'Four Knights'],
        ['1. e4 e5 2. Nf3', "King's Knight"],
        ['1. e4 e5', "Open Game"],
        ['1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6', 'Two Knights Defense'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5', 'Giuoco Piano'],
        ['1. e4 e5 2. Nf3 d6', 'Philidor Defense'],
        ['1. e4 e5 2. Nf3 Nf6', "Petrov's Defense"],
        ['1. e4 d5', 'Scandinavian Defense'],
        ['1. e4 c5', 'Sicilian Defense'],
        ['1. e4 e6', 'French Defense'],
        ['1. e4 c6', 'Caro-Kann Defense'],
        ['1. d4 d5 2. c4', "Queen's Gambit"],
        ['1. d4 Nf6', 'Indian Game'],
        ['1. c4', 'English'],
        ['1. Nf3', 'Réti'],
        ['1. e4 c5 2. Nf3 Nc6 3. d4', 'Open Sicilian'],
        ['1. e4 c5 2. Nf3 e6', 'Sicilian: French Var.'],
        ['1. d4 d5 2. c4 dxc4', "QG Accepted"],
        ['1. d4 d5 2. c4 e6', "QG Declined"],
        ['1. e4 e5 2. f4 exf4', "KG Accepted"],
        ['1. d4 d5', "Closed Game"],
        ['1. e4 e5 2. Nc3', 'Vienna Game'],
        ['1. e4 c5 2. Nc3', 'Closed Sicilian'],
        ['1. d4 d5 2. c4 c6', 'Slav Defense'],
        ['1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5', 'Scandinavian: Main Line'],
        ['1. e4 e5 2. Bc4', "Bishop's Opening"],
        ['1. e4 e5 2. f4', "King's Gambit"],
        ['1. e3', "Van't Kruijs"],
        ['1. g3', 'Hungarian'],
        ['1. f4', 'Bird'],
        ['1. b3', 'Nimzowitsch-Larsen'],
        ['1. d3', 'Mieses'],
        ['1. b4', 'Orangutan'],
        ['1. e4 d6', 'Pirc Defense'],
        ['1. e4 g6', 'Modern Defense'],
        ['1. e4 b6', 'Owen Defense'],
        ['1. e4 Nf6', 'Alekhine Defense'],
        ['1. e4 Nc6', 'Nimzowitsch Defense'],
        ['1. d4 e6', 'Horwitz Defense'],
        ['1. d4 g6', 'Modern Defense (d4)'],
        ['1. d4 e5', 'Englund Gambit'],
        ['1. d4 c5', 'Old Benoni Defense'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4', 'Ruy Lopez: Morphy Defense'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6', 'Ruy Lopez: Exchange Var.'],
        ['1. e4 c5 2. Nf3 d6 3. d4', 'Sicilian: Najdorf'],
        ['1. d4 d5 2. c4 e6 3. Nc3 Nf6', "Queen's Gambit Declined"],
        ['1. d4 Nf6 2. c4 e6 3. Nc3 Bb4', 'Nimzo-Indian'],
        ['1. d4 Nf6 2. c4 g6 3. Nc3 d5', 'Grünfeld Defense'],
        ['1. e4 e6 2. d4 d5 3. Nc3', 'French: Classical'],
        ['1. e4 c6 2. d4 d5 3. Nc3', 'Caro-Kann: Classical'],
        ['1. e4 d5 2. exd5 Nf6', 'Scandinavian: Modern'],
        ['1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4', 'Sicilian: Open, 4.Nxd4'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4', 'Italian: Evans Gambit'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5', 'Italian: Two Knights, 4.Ng5'],
        ['1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4', 'KGA: Kieseritzky Gambit'],
        ['1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3', 'Slav: Main Line'],
        ['1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6', 'Sicilian: Najdorf, 5.Nc3'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O', 'Ruy Lopez: Berlin Defense, 4.O-O'],
        ['1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3', 'Nimzo-Indian: Rubinstein'],
        ['1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5', "Queen's Gambit Declined: 4.Bg5"],
    ];
    const openingTrie = new OpeningTrie();
    openingList.forEach(([moves, name]) => openingTrie.insert(moves, name));

    const DIFFICULTY_TIMES = { easy: 2000, medium: 4000, hard: 8000 };
    let currentDifficulty = 'medium';
    let SEARCH_TIME_PER_MOVE = DIFFICULTY_TIMES[currentDifficulty];
    let suggestionLoading = false;
    let trapModeActive = false;

    const pieceDisplay = { king: '♚', queen: '♛', rook: '♜', bishop: '♝', knight: '♞', pawn: '♟' };
    const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    let gameHistory = [],
        positionCount = new Map(),
        lastComputerMoveHighlight = null;
    let historyStack = [],
        redoStack = [],
        lastComputerDepth = 0;
    let moveHistoryStr = [];

    function setDifficulty(level) {
        currentDifficulty = level;
        SEARCH_TIME_PER_MOVE = DIFFICULTY_TIMES[level];
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('diff' + level.charAt(0).toUpperCase() + level.slice(1)).classList.add('active');
    }
    document.getElementById('diffEasy').addEventListener('click', () => setDifficulty('easy'));
    document.getElementById('diffMedium').addEventListener('click', () => setDifficulty('medium'));
    document.getElementById('diffHard').addEventListener('click', () => setDifficulty('hard'));

    // -------- دوال الحالة والحركات --------
    function fenToBoard(fen) {
        const parts = fen.split(' ');
        const rows = parts[0].split('/');
        const board = Array(8).fill().map(() => Array(8).fill(null));
        for (let r = 0; r < 8; r++) {
            let c = 0;
            for (const ch of rows[r]) {
                if (ch >= '1' && ch <= '8') c += +ch;
                else {
                    const color = ch === ch.toUpperCase() ? 'white' : 'black';
                    const type = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' } [ch.toLowerCase()];
                    board[r][c] = { type, color, hasMoved: false };
                    c++;
                }
            }
        }
        const turn = parts[1] === 'w' ? 'white' : 'black';
        const castling = {
            K: parts[2].includes('K'),
            Q: parts[2].includes('Q'),
            k: parts[2].includes('k'),
            q: parts[2].includes('q')
        };
        const ep = parts[3] === '-' ? null : { row: turn === 'white' ? 2 : 5, col: 'abcdefgh'.indexOf(parts[3][0]) };
        const halfMoveClock = parseInt(parts[4]) || 0;
        const fullMove = parseInt(parts[5]) || 1;
        return { board, turn, castling, enPassant: ep, halfMoveClock, fullMove };
    }

    function boardToFen(s) {
        let fen = '';
        for (let r = 0; r < 8; r++) {
            let empty = 0;
            for (let c = 0; c < 8; c++) {
                const p = s.board[r][c];
                if (!p) empty++;
                else {
                    if (empty > 0) { fen += empty;
                        empty = 0; }
                    const pieceChar = { king: 'k', queen: 'q', rook: 'r', bishop: 'b', knight: 'n', pawn: 'p' } [p.type];
                    fen += p.color === 'white' ? pieceChar.toUpperCase() : pieceChar;
                }
            }
            if (empty > 0) fen += empty;
            if (r < 7) fen += '/';
        }
        fen += ' ' + (s.turn === 'white' ? 'w' : 'b') + ' ';
        fen += (s.castling.K ? 'K' : '') + (s.castling.Q ? 'Q' : '') + (s.castling.k ? 'k' : '') + (s.castling.q ?
            'q' : '') || '-';
        fen += ' ' + (s.enPassant ? 'abcdefgh' [s.enPassant.col] + (8 - s.enPassant.row) : '-');
        fen += ' ' + (s.halfMoveClock || 0) + ' ' + (s.fullMove || 1);
        return fen;
    }

    function hashState(s) {
        return boardToFen(s).split(' ').slice(0, 4).join(' ');
    }

    let gameState = fenToBoard(START_FEN);
    let playerColor = 'white',
        selectedCell = null,
        legalMovesMap = [],
        gameOver = false,
        promotionResolve = null;
    const isWithin = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;

    const cloneState = (s) => ({
        board: s.board.map(r => r.map(c => c ? { ...c } : null)),
        turn: s.turn,
        castling: { ...s.castling },
        enPassant: s.enPassant ? { ...s.enPassant } : null,
        halfMoveClock: s.halfMoveClock,
        fullMove: s.fullMove
    });

    function clonePositionData() {
        return {
            gameHistory: [...gameHistory],
            positionCount: new Map(positionCount),
            playerColor,
            moveHistoryStr: [...moveHistoryStr]
        };
    }

    function restorePositionData(d) {
        gameHistory = [...d.gameHistory];
        positionCount = new Map(d.positionCount);
        playerColor = d.playerColor;
        moveHistoryStr = [...d.moveHistoryStr];
    }

    function createSnapshot() {
        return { state: cloneState(gameState), data: clonePositionData() };
    }

    function restoreFromSnapshot(snap) {
        gameState = cloneState(snap.state);
        restorePositionData(snap.data);
        selectedCell = null;
        legalMovesMap = [];
        gameOver = false;
        lastComputerMoveHighlight = null;
        document.getElementById('promo-overlay').style.display = 'none';
        updateOpeningDisplaySafe();
        render();
        clearAllEffects();
    }

    function pushSnapshot() {
        historyStack.push(createSnapshot());
        redoStack = [];
    }

    function moveToShortAlgebraic(move, state) {
        try {
            if (!move || !move.piece) return '';
            const piece = move.piece,
                from = move.from,
                to = move.to;
            const files = 'abcdefgh';
            const fromFile = files[from[1]],
                toFile = files[to[1]],
                toRank = 8 - to[0];
            let notation = '';
            if (move.castlingRookFrom) return to[1] > from[1] ? 'O-O' : 'O-O-O';
            if (piece.type === 'pawn') {
                if (move.capture || move.enPassant) notation = fromFile + 'x' + toFile + toRank;
                else notation = toFile + toRank;
            } else {
                const pieceLetter = { king: 'K', queen: 'Q', rook: 'R', bishop: 'B', knight: 'N' } [piece.type];
                notation = pieceLetter + toFile + toRank;
                if (move.capture) notation = pieceLetter + 'x' + toFile + toRank;
            }
            if (move.promotion) {
                const promoLetter = { queen: 'Q', rook: 'R', bishop: 'B', knight: 'N' } [move.promotion];
                notation += '=' + promoLetter;
            }
            return notation;
        } catch (e) {
            return '';
        }
    }

    function updateOpeningDisplaySafe() {
        try {
            if (moveHistoryStr.length === 0) {
                document.querySelector('.opening-name').textContent = '';
                return;
            }
            let fullStr = '';
            for (let i = 0; i < moveHistoryStr.length; i++) {
                if (i % 2 === 0) fullStr += (Math.floor(i / 2) + 1) + '. ';
                fullStr += moveHistoryStr[i] + ' ';
            }
            const result = openingTrie.find(fullStr.trim());
            document.querySelector('.opening-name').textContent = result.name ? '📖 ' + result.name : '';
        } catch (e) {
            document.querySelector('.opening-name').textContent = '';
        }
    }

    function recordMoveSafe(move) {
        try {
            const notation = moveToShortAlgebraic(move, gameState);
            if (notation) moveHistoryStr.push(notation);
            updateOpeningDisplaySafe();
        } catch (e) {}
    }

    function isSquareAttacked(board, row, col, attackerColor) {
        const opp = attackerColor === 'white' ? 'black' : 'white';
        if (attackerColor === 'white') {
            if (isWithin(row + 1, col - 1) && board[row + 1][col - 1]?.color === 'white' && board[row + 1][col - 1].type ===
                'pawn') return true;
            if (isWithin(row + 1, col + 1) && board[row + 1][col + 1]?.color === 'white' && board[row + 1][col + 1].type ===
                'pawn') return true;
        } else {
            if (isWithin(row - 1, col - 1) && board[row - 1][col - 1]?.color === 'black' && board[row - 1][col - 1].type ===
                'pawn') return true;
            if (isWithin(row - 1, col + 1) && board[row - 1][col + 1]?.color === 'black' && board[row - 1][col + 1].type ===
                'pawn') return true;
        }
        for (const [dr, dc] of [
                [-2, -1],
                [-2, 1],
                [-1, -2],
                [-1, 2],
                [1, -2],
                [1, 2],
                [2, -1],
                [2, 1]
            ]) {
            if (isWithin(row + dr, col + dc) && board[row + dr][col + dc]?.color === attackerColor && board[row + dr][col +
                    dc
                ].type === 'knight') return true;
        }
        for (let dr = -1; dr <= 1; dr++)
            for (let dc = -1; dc <= 1; dc++)
                if (dr || dc) {
                    if (isWithin(row + dr, col + dc) && board[row + dr][col + dc]?.color === attackerColor && board[row + dr][
                            col + dc
                        ].type === 'king') return true;
                }
        for (const [dr, dc] of [
                [-1, 0],
                [1, 0],
                [0, -1],
                [0, 1]
            ]) {
            let r = row + dr,
                c = col + dc;
            while (isWithin(r, c)) {
                if (board[r][c]) {
                    if (board[r][c].color === attackerColor && (board[r][c].type === 'rook' || board[r][c].type === 'queen'))
                        return true;
                    break;
                }
                r += dr;
                c += dc;
            }
        }
        for (const [dr, dc] of [
                [-1, -1],
                [-1, 1],
                [1, -1],
                [1, 1]
            ]) {
            let r = row + dr,
                c = col + dc;
            while (isWithin(r, c)) {
                if (board[r][c]) {
                    if (board[r][c].color === attackerColor && (board[r][c].type === 'bishop' || board[r][c].type ===
                            'queen')) return true;
                    break;
                }
                r += dr;
                c += dc;
            }
        }
        return false;
    }

    function isKingInCheck(state, color) {
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++) {
                if (state.board[r][c]?.type === 'king' && state.board[r][c].color === color)
                    return isSquareAttacked(state.board, r, c, color === 'white' ? 'black' : 'white');
            }
        return false;
    }

    function generatePseudoMoves(state) {
        const board = state.board,
            castling = state.castling,
            ep = state.enPassant,
            turn = state.turn;
        const opp = turn === 'white' ? 'black' : 'white',
            dir = turn === 'white' ? -1 : 1,
            startRow = turn === 'white' ? 6 : 1,
            promoRow = turn === 'white' ? 0 : 7;
        const moves = [];
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++) {
                const piece = board[r][c];
                if (!piece || piece.color !== turn) continue;
                const add = (tr, tc, extra) => {
                    if (!isWithin(tr, tc)) return;
                    const target = board[tr][tc];
                    if (target && target.color === turn) return;
                    const capture = target && target.color === opp ? { type: target.type, color: target.color } : null;
                    if (piece.type === 'pawn' && tr === promoRow) {
                        for (const p of ['queen', 'rook', 'bishop', 'knight']) moves.push({
                            from: [r, c],
                            to: [tr, tc],
                            piece,
                            capture,
                            promotion: p,
                            enPassant: extra?.enPassant || false,
                            castlingRookFrom: extra?.castlingRookFrom || null,
                            castlingRookTo: extra?.castlingRookTo || null
                        });
                    } else moves.push({
                        from: [r, c],
                        to: [tr, tc],
                        piece,
                        capture,
                        promotion: null,
                        enPassant: extra?.enPassant || false,
                        castlingRookFrom: extra?.castlingRookFrom || null,
                        castlingRookTo: extra?.castlingRookTo || null
                    });
                };
                switch (piece.type) {
                    case 'pawn':
                        const one = r + dir;
                        if (isWithin(one, c) && !board[one][c]) {
                            add(one, c);
                            if (r === startRow) {
                                const two = r + 2 * dir;
                                if (isWithin(two, c) && !board[two][c]) moves.push({ from: [r, c], to: [two, c], piece,
                                    capture: null, promotion: null });
                            }
                        }
                        for (const dc of [-1, 1]) {
                            const nc = c + dc;
                            if (isWithin(one, nc) && board[one][nc]?.color === opp) add(one, nc);
                        }
                        if (ep && ep.row === one && Math.abs(c - ep.col) === 1 && board[r][ep.col]?.color === opp && board[r][
                                ep.col
                            ].type === 'pawn')
                            moves.push({ from: [r, c], to: [ep.row, ep.col], piece, capture: { type: 'pawn', color: opp },
                                promotion: null, enPassant: true });
                        break;
                    case 'knight':
                        for (const [dr, dc] of [
                                [-2, -1],
                                [-2, 1],
                                [-1, -2],
                                [-1, 2],
                                [1, -2],
                                [1, 2],
                                [2, -1],
                                [2, 1]
                            ]) add(r + dr, c + dc);
                        break;
                    case 'bishop':
                        for (const [dr, dc] of [
                                [-1, -1],
                                [-1, 1],
                                [1, -1],
                                [1, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { if (board[nr][nc]) { if (board[nr][nc].color ===
                                        opp) add(nr, nc); break; } add(nr, nc);
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'rook':
                        for (const [dr, dc] of [
                                [-1, 0],
                                [1, 0],
                                [0, -1],
                                [0, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { if (board[nr][nc]) { if (board[nr][nc].color ===
                                        opp) add(nr, nc); break; } add(nr, nc);
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'queen':
                        for (const [dr, dc] of [
                                [-1, -1],
                                [-1, 0],
                                [-1, 1],
                                [0, -1],
                                [0, 1],
                                [1, -1],
                                [1, 0],
                                [1, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { if (board[nr][nc]) { if (board[nr][nc].color ===
                                        opp) add(nr, nc); break; } add(nr, nc);
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'king':
                        for (let dr = -1; dr <= 1; dr++)
                            for (let dc = -1; dc <= 1; dc++)
                                if (dr || dc) add(r + dr, c + dc);
                        if (!piece.hasMoved && !isKingInCheck(state, turn)) {
                            const row = r;
                            if (castling[turn === 'white' ? 'K' : 'k']) {
                                const rook = board[row][7];
                                if (rook?.type === 'rook' && !rook.hasMoved && !board[row][5] && !board[row][6] && !
                                    isSquareAttacked(board, row, 5, opp) && !isSquareAttacked(board, row, 6, opp))
                                    moves.push({ from: [r, c], to: [row, 6], piece, capture: null, promotion: null,
                                        castlingRookFrom: [row, 7], castlingRookTo: [row, 5] });
                            }
                            if (castling[turn === 'white' ? 'Q' : 'q']) {
                                const rook = board[row][0];
                                if (rook?.type === 'rook' && !rook.hasMoved && !board[row][1] && !board[row][2] && !board[row][
                                        3
                                    ] && !isSquareAttacked(board, row, 2, opp) && !isSquareAttacked(board, row, 3, opp))
                                    moves.push({ from: [r, c], to: [row, 2], piece, capture: null, promotion: null,
                                        castlingRookFrom: [row, 0], castlingRookTo: [row, 3] });
                            }
                        }
                        break;
                }
            }
        return moves;
    }

    function makeMove(state, move) {
        const ns = cloneState(state);
        const board = ns.board,
            castling = ns.castling;
        const [fr, fc] = move.from,
            [tr, tc] = move.to;
        const piece = board[fr][fc];
        const captured = move.capture ? (move.enPassant ? board[state.turn === 'white' ? tr + 1 : tr - 1][tc] : board[tr][
            tc
        ]) : null;

        board[fr][fc] = null;
        if (move.capture) {
            if (move.enPassant) board[state.turn === 'white' ? tr + 1 : tr - 1][tc] = null;
            else board[tr][tc] = null;
        }
        board[tr][tc] = { type: move.promotion || piece.type, color: piece.color, hasMoved: true };

        if (piece.type === 'king') {
            if (piece.color === 'white') { castling.K = false;
                castling.Q = false; } else { castling.k = false;
                castling.q = false; }
        }
        if (piece.type === 'rook') {
            if (fr === 7 && fc === 0) castling.Q = false;
            if (fr === 7 && fc === 7) castling.K = false;
            if (fr === 0 && fc === 0) castling.q = false;
            if (fr === 0 && fc === 7) castling.k = false;
        }
        if (captured && captured.type === 'rook') {
            if (tr === 7 && tc === 0) castling.Q = false;
            if (tr === 7 && tc === 7) castling.K = false;
            if (tr === 0 && tc === 0) castling.q = false;
            if (tr === 0 && tc === 7) castling.k = false;
        }

        if (move.castlingRookFrom) {
            board[move.castlingRookTo[0]][move.castlingRookTo[1]] = board[move.castlingRookFrom[0]][move.castlingRookFrom[
                1]];
            board[move.castlingRookFrom[0]][move.castlingRookFrom[1]] = null;
            board[move.castlingRookTo[0]][move.castlingRookTo[1]].hasMoved = true;
        }

        if (piece.type === 'pawn' && Math.abs(tr - fr) === 2) ns.enPassant = { row: (fr + tr) / 2, col: fc };
        else ns.enPassant = null;

        if (piece.type === 'pawn' || move.capture) ns.halfMoveClock = 0;
        else ns.halfMoveClock = (state.halfMoveClock || 0) + 1;

        ns.fullMove = state.fullMove + (state.turn === 'black' ? 1 : 0);
        ns.turn = state.turn === 'white' ? 'black' : 'white';
        return ns;
    }

    function getLegalMoves(state) {
        return generatePseudoMoves(state).filter(m => !isKingInCheck(makeMove(state, m), state.turn));
    }

    // ========== SEE والمهاجمين ==========
    function pieceAttacksSquare(board, r, c, tr, tc, piece = null) {
        if (!piece) piece = board[r][c];
        if (!piece) return false;
        const dr = Math.abs(r - tr),
            dc = Math.abs(c - tc);
        switch (piece.type) {
            case 'pawn': {
                const dir = piece.color === 'white' ? -1 : 1;
                return (r + dir === tr) && Math.abs(c - tc) === 1;
            }
            case 'knight':
                return (dr === 2 && dc === 1) || (dr === 1 && dc === 2);
            case 'king':
                return dr <= 1 && dc <= 1 && (dr + dc > 0);
            case 'bishop':
                return dr === dc && dr !== 0 && isPathClear(board, r, c, tr, tc);
            case 'rook':
                return (dr === 0 || dc === 0) && (dr + dc !== 0) && isPathClear(board, r, c, tr, tc);
            case 'queen':
                return (dr === dc || dr === 0 || dc === 0) && (dr + dc !== 0) && isPathClear(board, r, c, tr, tc);
            default:
                return false;
        }
    }

    function isPathClear(board, r1, c1, r2, c2) {
        const dr = r2 > r1 ? 1 : (r2 < r1 ? -1 : 0);
        const dc = c2 > c1 ? 1 : (c2 < c1 ? -1 : 0);
        let r = r1 + dr,
            c = c1 + dc;
        while (r !== r2 || c !== c2) {
            if (board[r][c]) return false;
            r += dr;
            c += dc;
        }
        return true;
    }

    function see(move, state) {
        const [tr, tc] = move.to;
        let gain = move.capture ? pieceValues[move.capture.type] : 0;
        if (move.promotion) gain += pieceValues[move.promotion] - pieceValues.pawn;

        const board = state.board.map(row => row.map(cell => cell ? { type: cell.type, color: cell.color } : null));
        const turn = state.turn;
        const opp = turn === 'white' ? 'black' : 'white';

        const [fr, fc] = move.from;
        const movingPiece = board[fr][fc];
        board[tr][tc] = movingPiece;
        board[fr][fc] = null;
        if (move.promotion) board[tr][tc] = { type: move.promotion, color: turn };
        if (move.enPassant) {
            const capturedRow = turn === 'white' ? tr + 1 : tr - 1;
            board[capturedRow][tc] = null;
        }

        let side = opp;
        let movingPieceValue = move.promotion ? pieceValues[move.promotion] : pieceValues[movingPiece.type];
        let gainList = [gain];
        let depth = 0;

        while (true) {
            const attackers = [];
            for (let r = 0; r < 8; r++) {
                for (let c = 0; c < 8; c++) {
                    const piece = board[r][c];
                    if (piece && piece.color === side) {
                        if (pieceAttacksSquare(board, r, c, tr, tc, piece)) {
                            attackers.push({ type: piece.type, color: piece.color, fromRow: r, fromCol: c });
                        }
                    }
                }
            }
            if (attackers.length === 0) break;
            attackers.sort((a, b) => pieceValues[a.type] - pieceValues[b.type]);
            const cheapest = attackers[0];
            const attVal = pieceValues[cheapest.type];
            depth++;
            gainList[depth] = movingPieceValue - gainList[depth - 1];
            board[cheapest.fromRow][cheapest.fromCol] = null;
            board[tr][tc] = { type: cheapest.type, color: side };
            movingPieceValue = attVal;
            side = side === 'white' ? 'black' : 'white';
        }

        while (depth > 0) {
            gainList[depth - 1] = -Math.max(-gainList[depth - 1], gainList[depth]);
            depth--;
        }
        return gainList[0];
    }

    // ========== خوارزميات البحث ==========
    const INF = 999999,
        MAX_DEPTH = 24;
    let searchStartTime, searchStopped;
    let transTable = new Map();
    let killerMoves, historyTable, lastBestScore;
    const EXACT = 0,
        LOWER = 1,
        UPPER = 2;
    const MAX_QUIESCENCE_DEPTH = 8;
    const TT_MAX_SIZE = 500000;

    function ttStore(h, e) {
        const existing = transTable.get(h);
        if (existing && existing.depth >= e.depth) return;
        if (transTable.size >= TT_MAX_SIZE) {
            let oldestKey = transTable.keys().next().value;
            transTable.delete(oldestKey);
        }
        transTable.set(h, e);
    }

    const mvvLva = { pawn: 100, knight: 200, bishop: 300, rook: 400, queen: 500 };

    function scoreMove(move, ply, state, hashMove) {
        if (hashMove && move.from[0] === hashMove.from[0] && move.from[1] === hashMove.from[1] && move.to[0] === hashMove.to[
                0
            ] && move.to[1] === hashMove.to[1])
            return 1000000;
        if (move.capture) {
            const victimVal = mvvLva[move.capture.type] || 0;
            const attackerVal = mvvLva[move.piece.type] || 0;
            let sc = 10000 + (victimVal * 100 - attackerVal);
            const seeVal = see(move, state);
            if (seeVal < 0) sc = -1000 + seeVal;
            return sc;
        }
        if (move.promotion) return 9000 + pieceValues[move.promotion];
        if (killerMoves[ply][0] && move.from[0] === killerMoves[ply][0].from[0] && move.from[1] === killerMoves[ply][0].from[
                1
            ] && move.to[0] === killerMoves[ply][0].to[0] && move.to[1] === killerMoves[ply][0].to[1]) return 8500;
        if (killerMoves[ply][1] && move.from[0] === killerMoves[ply][1].from[0] && move.from[1] === killerMoves[ply][1].from[
                1
            ] && move.to[0] === killerMoves[ply][1].to[0] && move.to[1] === killerMoves[ply][1].to[1]) return 7500;
        return historyTable.get(move.from[0] + ',' + move.from[1] + '-' + move.to[0] + ',' + move.to[1]) || 0;
    }

    function fastMobility(board, color) {
        let count = 0;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++) {
                const piece = board[r][c];
                if (!piece || piece.color !== color) continue;
                switch (piece.type) {
                    case 'pawn':
                        if (color === 'white') { if (isWithin(r - 1, c)) count++; } else { if (isWithin(r + 1, c))
                            count++; }
                        break;
                    case 'knight':
                        for (const [dr, dc] of [
                                [-2, -1],
                                [-2, 1],
                                [-1, -2],
                                [-1, 2],
                                [1, -2],
                                [1, 2],
                                [2, -1],
                                [2, 1]
                            ])
                            if (isWithin(r + dr, c + dc)) count++;
                        break;
                    case 'bishop':
                        for (const [dr, dc] of [
                                [-1, -1],
                                [-1, 1],
                                [1, -1],
                                [1, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { count++; if (board[nr][nc]) break;
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'rook':
                        for (const [dr, dc] of [
                                [-1, 0],
                                [1, 0],
                                [0, -1],
                                [0, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { count++; if (board[nr][nc]) break;
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'queen':
                        for (const [dr, dc] of [
                                [-1, -1],
                                [-1, 0],
                                [-1, 1],
                                [0, -1],
                                [0, 1],
                                [1, -1],
                                [1, 0],
                                [1, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { count++; if (board[nr][nc]) break;
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'king':
                        for (let dr = -1; dr <= 1; dr++)
                            for (let dc = -1; dc <= 1; dc++)
                                if ((dr || dc) && isWithin(r + dr, c + dc)) count++;
                        break;
                }
            }
        return count;
    }

    // -------- جداول PST المزدوجة --------
    const pstPawnMG = [0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 10, 10, 20, 30, 30, 20, 10, 10, 5, 5, 10,
        25, 25, 10, 5, 5, 0, 0, 0, 20, 20, 0, 0, 0, 5, -5, -10, 0, 0, -10, -5, 5, 5, 10, 10, -20, -20, 10, 10, 5, 0, 0, 0,
        0, 0, 0, 0, 0
    ];
    const pstPawnEG = [0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 60, 60, 60, 30, 30, 40, 50, 50, 40, 30, 30, 10, 10, 20,
        35, 35, 20, 10, 10, 5, 5, 10, 25, 25, 10, 5, 5, 0, 0, 0, 20, 20, 0, 0, 0, 5, -5, -10, 0, 0, -10, -5, 5, 0, 0, 0,
        0, 0, 0, 0, 0
    ];
    const pstKnightMG = [-50, -40, -30, -30, -30, -30, -40, -50, -40, -20, 0, 0, 0, 0, -20, -40, -30, 0, 10, 15, 15, 10, 0,
        -30, -30, 5, 15, 20, 20, 15, 5, -30, -30, 0, 15, 20, 20, 15, 0, -30, -30, 5, 10, 15, 15, 10, 5, -30, -40, -20, 0,
        5, 5, 0, -20, -40, -50, -40, -30, -30, -30, -30, -40, -50
    ];
    const pstKnightEG = [-40, -30, -20, -20, -20, -20, -30, -40, -30, -10, 0, 5, 5, 0, -10, -30, -20, 0, 10, 15, 15, 10, 0,
        -20, -10, 5, 15, 20, 20, 15, 5, -10, -10, 0, 15, 20, 20, 15, 0, -10, -20, 5, 10, 15, 15, 10, 5, -20, -30, -10, 0,
        5, 5, 0, -10, -30, -40, -30, -20, -20, -20, -20, -30, -40
    ];
    const pstBishopMG = [-20, -10, -10, -10, -10, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 10, 10, 10, 10, 0, -10,
        -10, 5, 5, 10, 10, 5, 5, -10, -10, 0, 5, 10, 10, 5, 0, -10, -10, 10, 10, 10, 10, 10, 10, -10, -10, 5, 0, 0, 0, 0,
        5, -10, -20, -10, -10, -10, -10, -10, -10, -20
    ];
    const pstBishopEG = [-15, -10, -5, -5, -5, -5, -10, -15, -10, 0, 5, 5, 5, 5, 0, -10, -5, 5, 10, 10, 10, 10, 5, -5, -5,
        5, 10, 15, 15, 10, 5, -5, -5, 5, 10, 15, 15, 10, 5, -5, -5, 0, 10, 10, 10, 10, 0, -5, -10, 5, 5, 5, 5, 5, 5, -10,
        -15, -10, -5, -5, -5, -5, -10, -15
    ];
    const pstRookMG = [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 10, 10, 10, 10, 10, 5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0,
        0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0
    ];
    const pstRookEG = [0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    const pstQueenMG = [-20, -10, -10, -5, -5, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 5, 5, 5, 0, -10, -5, 0,
        5, 5, 5, 5, 0, -5, 0, 0, 5, 5, 5, 5, 0, -5, -10, 5, 5, 5, 5, 5, 0, -10, -10, 0, 5, 0, 0, 0, 0, -10, -20, -10, -10,
        -5, -5, -10, -10, -20
    ];
    const pstQueenEG = [-15, -5, -5, -3, -3, -5, -5, -15, -5, 0, 3, 5, 5, 3, 0, -5, -3, 3, 8, 10, 10, 8, 3, -3, -3, 5, 10,
        12, 12, 10, 5, -3, 0, 5, 10, 12, 12, 10, 5, 0, -5, 3, 8, 10, 10, 8, 3, -5, -5, 0, 3, 5, 5, 3, 0, -5, -15, -5, -5,
        -3, -3, -5, -5, -15
    ];
    const pstKingMG = [-30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50,
        -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -20, -30, -30, -40, -40, -30, -30, -20, -10, -20, -20,
        -20, -20, -20, -20, -10, 20, 20, 0, 0, 0, 0, 20, 20, 20, 30, 10, 0, 0, 10, 30, 20
    ];
    const pstKingEG = [-50, -40, -30, -20, -20, -30, -40, -50, -30, -20, -10, 0, 0, -10, -20, -30, -20, -10, 5, 15, 15, 5,
        -10, -20, -10, 0, 15, 25, 25, 15, 0, -10, -10, 0, 15, 25, 25, 15, 0, -10, -20, -10, 5, 15, 15, 5, -10, -20, -30,
        -20, -10, 0, 0, -10, -20, -30, -50, -40, -30, -20, -20, -30, -40, -50
    ];

    const pieceValues = { pawn: 100, knight: 325, bishop: 335, rook: 510, queen: 950, king: 20000 };

    function gamePhase(board) {
        let mat = 0;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]) {
                    const t = board[r][c].type;
                    if (t === 'knight' || t === 'bishop') mat += 1;
                    else if (t === 'rook') mat += 2;
                    else if (t === 'queen') mat += 4;
                }
        return Math.max(0, Math.min(1, (mat - 6) / 18));
    }

    function getPstValue(pt, color, r, c, phase) {
        const idx = r * 8 + c;
        let mg, eg;
        switch (pt) {
            case 'pawn':
                mg = pstPawnMG[idx];
                eg = pstPawnEG[idx];
                break;
            case 'knight':
                mg = pstKnightMG[idx];
                eg = pstKnightEG[idx];
                break;
            case 'bishop':
                mg = pstBishopMG[idx];
                eg = pstBishopEG[idx];
                break;
            case 'rook':
                mg = pstRookMG[idx];
                eg = pstRookEG[idx];
                break;
            case 'queen':
                mg = pstQueenMG[idx];
                eg = pstQueenEG[idx];
                break;
            case 'king':
                mg = pstKingMG[idx];
                eg = pstKingEG[idx];
                break;
            default:
                return 0;
        }
        if (color === 'black') {
            const revIdx = 63 - idx;
            switch (pt) {
                case 'pawn':
                    mg = pstPawnMG[revIdx];
                    eg = pstPawnEG[revIdx];
                    break;
                case 'knight':
                    mg = pstKnightMG[revIdx];
                    eg = pstKnightEG[revIdx];
                    break;
                case 'bishop':
                    mg = pstBishopMG[revIdx];
                    eg = pstBishopEG[revIdx];
                    break;
                case 'rook':
                    mg = pstRookMG[revIdx];
                    eg = pstRookEG[revIdx];
                    break;
                case 'queen':
                    mg = pstQueenMG[revIdx];
                    eg = pstQueenEG[revIdx];
                    break;
                case 'king':
                    mg = pstKingMG[revIdx];
                    eg = pstKingEG[revIdx];
                    break;
            }
        }
        return mg * phase + eg * (1 - phase);
    }

    function evaluate(state) {
        const phase = gamePhase(state.board);
        let b = state.board,
            score = 0;
        let pc = { white: { queen: 0, rook: 0, bishop: 0, knight: 0, pawn: 0 }, black: { queen: 0, rook: 0, bishop: 0,
                knight: 0, pawn: 0 } };
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (b[r][c]) {
                    let p = b[r][c],
                        val = pieceValues[p.type] + getPstValue(p.type, p.color, r, c, phase);
                    score += p.color === 'white' ? val : -val;
                    pc[p.color][p.type]++;
                }
        if (pc.white.bishop >= 2) score += 45 + (pc.white.bishop - 2) * 15;
        if (pc.black.bishop >= 2) score -= 45 + (pc.black.bishop - 2) * 15;
        score += evaluatePawnStructure(b, 'white') - evaluatePawnStructure(b, 'black');
        score += kingSafety(b, 'white') - kingSafety(b, 'black');
        score += (fastMobility(b, 'white') - fastMobility(b, 'black')) * 1;
        score += controlAndRookScore(b, 'white') - controlAndRookScore(b, 'black');
        score += knightOutpost(b, 'white') - knightOutpost(b, 'black');
        if (isEndgame(b)) {
            for (let r = 0; r < 8; r++)
                for (let c = 0; c < 8; c++) {
                    if (b[r][c]?.type === 'king') {
                        const centerDist = Math.max(Math.abs(3.5 - r), Math.abs(3.5 - c));
                        score += (b[r][c].color === 'white' ? -centerDist : centerDist) * 12;
                    }
                }
        }
        return state.turn === 'white' ? score : -score;
    }

    function evaluatePawnStructure(board, color) {
        let val = 0,
            pawns = [];
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]?.color === color && board[r][c].type === 'pawn') pawns.push({ r, c });
        let opp = color === 'white' ? 'black' : 'white';
        for (let p of pawns) {
            let col = p.c,
                row = p.r,
                dir = color === 'white' ? -1 : 1,
                isolated = true;
            for (let r2 = 0; r2 < 8; r2++) {
                if (col > 0 && board[r2][col - 1]?.color === color && board[r2][col - 1].type === 'pawn') isolated = false;
                if (col < 7 && board[r2][col + 1]?.color === color && board[r2][col + 1].type === 'pawn') isolated = false;
            }
            if (isolated) val -= 20;
            let doubled = false;
            for (let r2 = 0; r2 < 8; r2++)
                if (r2 !== row && board[r2][col]?.color === color && board[r2][col].type === 'pawn') doubled = true;
            if (doubled) val -= 18;
            let passed = true;
            for (let r3 = row + dir; isWithin(r3, col); r3 += dir) {
                if (board[r3][col]?.color === opp && board[r3][col].type === 'pawn') { passed = false; break; }
                if (col > 0 && board[r3][col - 1]?.color === opp && board[r3][col - 1].type === 'pawn') { passed = false;
                    break; }
                if (col < 7 && board[r3][col + 1]?.color === opp && board[r3][col + 1].type === 'pawn') { passed = false;
                    break; }
            }
            if (passed) {
                let rank = color === 'white' ? 8 - row : row + 1;
                val += 20 + rank * 5;
                if (col > 0 && board[row][col - 1]?.color === color && board[row][col - 1].type === 'pawn') val += 12;
                if (col < 7 && board[row][col + 1]?.color === color && board[row][col + 1].type === 'pawn') val += 12;
            }
            if (!passed && row >= (color === 'white' ? 4 : 3)) {
                let ahead = 0;
                for (let r3 = row + dir; isWithin(r3, col); r3 += dir)
                    if (board[r3][col]?.color === opp && board[r3][col].type === 'pawn') ahead++;
                if (ahead === 0 && !isolated) val += 8;
            }
            if (!passed && !isolated) {
                let backward = true,
                    rBehind = row - dir;
                if (isWithin(rBehind, col - 1) && board[rBehind][col - 1]?.color === color && board[rBehind][col - 1].type ===
                    'pawn') backward = false;
                if (isWithin(rBehind, col + 1) && board[rBehind][col + 1]?.color === color && board[rBehind][col + 1].type ===
                    'pawn') backward = false;
                if (backward) val -= 10;
            }
        }
        return val;
    }

    function kingSafety(board, color) {
        let pos = null;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]?.type === 'king' && board[r][c].color === color) pos = [r, c];
        if (!pos) return 0;
        let [row, col] = pos,
            safety = 0,
            dir = color === 'white' ? -1 : 1,
            pawnShield = 0;
        for (let dc = -1; dc <= 1; dc++) {
            let r2 = row + dir,
                c2 = col + dc;
            if (isWithin(r2, c2) && board[r2][c2]?.color === color && board[r2][c2].type === 'pawn') pawnShield++;
            let r3 = row + 2 * dir,
                c3 = col + dc;
            if (isWithin(r3, c3) && board[r3][c3]?.color === color && board[r3][c3].type === 'pawn') pawnShield += 0.5;
        }
        safety += pawnShield * 28;
        let opp = color === 'white' ? 'black' : 'white';
        for (let dc = -1; dc <= 1; dc++) {
            let file = col + dc;
            if (file < 0 || file > 7) continue;
            let friendly = false,
                enemy = false;
            for (let r = 0; r < 8; r++)
                if (board[r][file]?.type === 'pawn') {
                    if (board[r][file].color === color) friendly = true;
                    else enemy = true;
                }
            if (!friendly && enemy) safety -= 35;
            else if (!friendly && !enemy) safety -= 15;
        }
        let attackCount = 0;
        for (let dr = -2; dr <= 2; dr++)
            for (let dc = -2; dc <= 2; dc++) {
                let nr = row + dr,
                    nc = col + dc;
                if (isWithin(nr, nc) && board[nr][nc]?.color === opp && board[nr][nc].type !== 'king') attackCount++;
            }
        safety -= attackCount * 9;
        let closeAttack = 0;
        for (let dr = -1; dr <= 1; dr++)
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                let nr = row + dr,
                    nc = col + dc;
                if (isWithin(nr, nc) && board[nr][nc] && board[nr][nc].color === opp) {
                    if (board[nr][nc].type === 'queen') closeAttack += 40;
                    else if (board[nr][nc].type === 'rook') closeAttack += 25;
                    else if (board[nr][nc].type === 'bishop' || board[nr][nc].type === 'knight') closeAttack += 12;
                }
            }
        safety -= closeAttack;
        return safety;
    }

    function controlAndRookScore(board, color) {
        let score = 0;
        for (let [r, c] of [
                [3, 3],
                [3, 4],
                [4, 3],
                [4, 4]
            ])
            if (board[r][c]?.color === color) score += 10;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]?.color === color && board[r][c].type === 'rook') {
                    let open = true,
                        semi = true;
                    for (let r2 = 0; r2 < 8; r2++)
                        if (board[r2][c]?.type === 'pawn') { open = false; if (board[r2][c].color === color) semi =
                            false; }
                    if (open) score += 20;
                    else if (semi) score += 12;
                    if (r === (color === 'white' ? 1 : 6)) score += 30;
                }
        return score;
    }

    function knightOutpost(board, color) {
        let score = 0,
            opp = color === 'white' ? 'black' : 'white';
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]?.color === color && board[r][c].type === 'knight') {
                    let supported = false,
                        dir = color === 'white' ? -1 : 1;
                    if (isWithin(r + dir, c - 1) && board[r + dir][c - 1]?.color === color && board[r + dir][c - 1].type ===
                        'pawn') supported = true;
                    if (isWithin(r + dir, c + 1) && board[r + dir][c + 1]?.color === color && board[r + dir][c + 1].type ===
                        'pawn') supported = true;
                    if (!supported) continue;
                    let attacked = false;
                    if (opp === 'white') {
                        if (isWithin(r - 1, c - 1) && board[r - 1][c - 1]?.color === 'white' && board[r - 1][c - 1].type ===
                            'pawn') attacked = true;
                        if (isWithin(r - 1, c + 1) && board[r - 1][c + 1]?.color === 'white' && board[r - 1][c + 1].type ===
                            'pawn') attacked = true;
                    } else {
                        if (isWithin(r + 1, c - 1) && board[r + 1][c - 1]?.color === 'black' && board[r + 1][c - 1].type ===
                            'pawn') attacked = true;
                        if (isWithin(r + 1, c + 1) && board[r + 1][c + 1]?.color === 'black' && board[r + 1][c + 1].type ===
                            'pawn') attacked = true;
                    }
                    if (!attacked && supported) score += 25;
                }
        return score;
    }

    function isEndgame(board) {
        let queens = 0,
            rooks = 0,
            minors = 0;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]) {
                    if (board[r][c].type === 'queen') queens++;
                    else if (board[r][c].type === 'rook') rooks++;
                    else if (board[r][c].type === 'bishop' || board[r][c].type === 'knight') minors++;
                }
        return (queens === 0 && rooks <= 2 && minors <= 2);
    }

    function quiescence(state, alpha, beta, qDepth = 0) {
        if (searchStopped || qDepth >= MAX_QUIESCENCE_DEPTH) return evaluate(state);
        const hash = hashState(state);
        const tt = transTable.get(hash);
        if (tt && tt.depth >= 0) {
            if (tt.flag === EXACT) return tt.score;
            if (tt.flag === LOWER && tt.score > alpha) alpha = tt.score;
            if (tt.flag === UPPER && tt.score < beta) beta = tt.score;
            if (alpha >= beta) return tt.score;
        }
        const stand = evaluate(state);
        if (stand >= beta) { ttStore(hash, { score: beta, depth: 0, flag: LOWER }); return beta; }
        if (stand > alpha) alpha = stand;

        const inCheck = isKingInCheck(state, state.turn);
        const allMoves = generatePseudoMoves(state);
        const candidates = inCheck ? allMoves : allMoves.filter(m => m.capture || m.promotion);

        const scored = candidates.map(m => ({
                move: m,
                seeVal: m.capture ? see(m, state) : 0
            })).filter(item => inCheck || item.seeVal >= 0)
            .sort((a, b) => b.seeVal - a.seeVal);

        for (const { move } of scored) {
            if (!inCheck && !move.promotion && move.capture) {
                const gain = pieceValues[move.capture.type] + 200;
                if (stand + gain < alpha) continue;
            }
            const next = makeMove(state, move);
            if (isKingInCheck(next, state.turn)) continue;
            const score = -quiescence(next, -beta, -alpha, qDepth + 1);
            if (score >= beta) {
                ttStore(hash, { score: beta, depth: 0, flag: LOWER });
                return beta;
            }
            if (score > alpha) alpha = score;
        }
        ttStore(hash, { score: alpha, depth: 0, flag: EXACT });
        return alpha;
    }

    function alphaBeta(state, depth, alpha, beta, ply, nullOk, timeLimit) {
        if (searchStopped || performance.now() - searchStartTime > timeLimit) { searchStopped = true; return 0; }
        const hash = hashState(state),
            tt = transTable.get(hash);
        if (tt && tt.depth >= depth) {
            if (tt.flag === EXACT) return tt.score;
            if (tt.flag === LOWER && tt.score > alpha) alpha = tt.score;
            if (tt.flag === UPPER && tt.score < beta) beta = tt.score;
            if (alpha >= beta) return tt.score;
        }
        if (depth <= 0) return quiescence(state, alpha, beta);
        let moves = getLegalMoves(state);
        if (!moves.length) return isKingInCheck(state, state.turn) ? -INF + ply : 0;

        if (nullOk && !isKingInCheck(state, state.turn) && depth >= 3 && !isEndgame(state.board)) {
            const ns = cloneState(state);
            ns.turn = state.turn === 'white' ? 'black' : 'white';
            ns.enPassant = null;
            const R = 3 + Math.floor(depth / 4);
            if (-alphaBeta(ns, depth - 1 - R, -beta, -beta + 1, ply + 1, false, timeLimit) >= beta) return beta;
        }

        if (moves.length === 1) depth += 1;

        let hashMove = tt?.bestMove || null;
        if (!hashMove && depth >= 4) { alphaBeta(state, depth - 2, alpha, beta, ply + 1, false, timeLimit);
            hashMove = transTable.get(hashState(state))?.bestMove; }
        moves.forEach(m => m.score = scoreMove(m, ply, state, hashMove));
        moves.sort((a, b) => b.score - a.score);
        let best = null,
            origAlpha = alpha;
        for (let i = 0; i < moves.length; i++) {
            const move = moves[i],
                next = makeMove(state, move);
            const givesCheck = isKingInCheck(next, next.turn);
            let newDepth = depth - 1 + (givesCheck || (move.piece.type === 'pawn' && (move.to[0] === 0 || move.to[0] ===
                7)) ? 1 : 0);
            if (!move.capture && !move.promotion && !givesCheck && newDepth <= 3) {
                const futilityMargin = (isEndgame(state.board) ? 200 : 150) + 50 * depth;
                if (evaluate(state) + futilityMargin <= alpha) continue;
            }
            const LMR = !move.capture && !move.promotion && i >= 4 && depth >= 3 && !givesCheck;
            let score = LMR ? -alphaBeta(next, newDepth - 2, -alpha - 1, -alpha, ply + 1, true, timeLimit) : -alphaBeta(
                next, newDepth, -beta, -alpha, ply + 1, true, timeLimit);
            if (searchStopped) return 0;
            if (LMR && score > alpha && score < beta) score = -alphaBeta(next, newDepth, -beta, -alpha, ply + 1, true,
                timeLimit);
            if (score >= beta) {
                if (!move.capture && !move.promotion) { killerMoves[ply][1] = killerMoves[ply][0];
                    killerMoves[ply][0] = { from: [...move.from], to: [...move.to] }; }
                historyTable.set(move.from[0] + ',' + move.from[1] + '-' + move.to[0] + ',' + move.to[1], (historyTable.get(
                    move.from[0] + ',' + move.from[1] + '-' + move.to[0] + ',' + move.to[1]) || 0) + depth * depth);
                ttStore(hash, { score: beta, depth, flag: LOWER, bestMove: move });
                return beta;
            }
            if (score > alpha) { alpha = score;
                best = move; }
        }
        ttStore(hash, { score: alpha, depth, flag: alpha > origAlpha ? EXACT : UPPER, bestMove: best });
        return alpha;
    }

    function iterativeDeepening(state, timeLimit, maxDepth = MAX_DEPTH) {
        searchStartTime = performance.now();
        searchStopped = false;
        killerMoves = Array(maxDepth + 2).fill().map(() => [null, null]);
        historyTable = new Map();
        const moves = getLegalMoves(state);
        let bestMove = moves[0] || null,
            alpha = -INF,
            beta = INF,
            completedDepth = 0;
        for (let d = 1; d <= maxDepth; d++) {
            if (performance.now() - searchStartTime > timeLimit * 0.9) break;
            if (d >= 2 && bestMove) { alpha = lastBestScore - 25;
                beta = lastBestScore + 25; }
            let score = alphaBeta(state, d, alpha, beta, 0, true, timeLimit);
            if (searchStopped) break;
            if (score <= alpha || score >= beta) { alpha = -INF;
                beta = INF;
                score = alphaBeta(state, d, alpha, beta, 0, true, timeLimit); if (searchStopped) break; }
            lastBestScore = score;
            const entry = transTable.get(hashState(state));
            if (entry?.bestMove) bestMove = entry.bestMove;
            completedDepth = d;
            if (score > 9000 || score < -9000) break;
        }
        return { move: bestMove, score: lastBestScore, depth: completedDepth };
    }

    function isInsufficientMaterial(board) {
        const pieces = { white: [], black: [] },
            bishops = { white: [], black: [] };
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]) {
                    const p = board[r][c];
                    pieces[p.color].push(p.type);
                    if (p.type === 'bishop') bishops[p.color].push((r + c) % 2);
                }
        const only = (color, types) => pieces[color].length > 0 && pieces[color].every(t => types.includes(t));
        if (pieces.white.length === 1 && pieces.black.length === 1) return true;
        if (only('white', ['king', 'knight']) && pieces.black.length === 1 && pieces.black[0] === 'king') return true;
        if (only('black', ['king', 'knight']) && pieces.white.length === 1 && pieces.white[0] === 'king') return true;
        if (only('white', ['king', 'bishop']) && pieces.black.length === 1 && pieces.black[0] === 'king') return true;
        if (only('black', ['king', 'bishop']) && pieces.white.length === 1 && pieces.white[0] === 'king') return true;
        if (only('white', ['king', 'bishop']) && only('black', ['king', 'bishop']) && bishops.white[0] === bishops.black[0])
            return true;
        return false;
    }

    const openingBook = new Map();
    (function buildBook() {
        const lines = [
            ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -', 'e2e4', 'e4'],
            ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -', 'd2d4', 'd4'],
            ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -', 'g1f3', 'Nf3'],
        ];
        lines.forEach(l => {
            if (!openingBook.has(l[0])) openingBook.set(l[0], []);
            openingBook.get(l[0]).push({ move: l[1], name: l[2] });
        });
    })();

    function getBookMove(state) {
        const fenKey = boardToFen(state).split(' ').slice(0, 4).join(' ');
        const entries = openingBook.get(fenKey);
        if (!entries) return null;
        const entry = entries[Math.floor(Math.random() * entries.length)];
        const fromCol = entry.move.charCodeAt(0) - 97,
            fromRow = 8 - parseInt(entry.move[1]);
        const toCol = entry.move.charCodeAt(2) - 97,
            toRow = 8 - parseInt(entry.move[3]);
        const moves = getLegalMoves(state);
        for (const m of moves)
            if (m.from[0] === fromRow && m.from[1] === fromCol && m.to[0] === toRow && m.to[1] === toCol) return { move: m,
                name: entry.name };
        return null;
    }

    function updateGameHistory(state) { const h = hashState(state);
        gameHistory.push(h);
        positionCount.set(h, (positionCount.get(h) || 0) + 1); }

    function isRepetitionDraw(state) { return positionCount.has(hashState(state)) && positionCount.get(hashState(state)) >=
        2; }

    function getDynamicStockfishTime(state) {
        const legalMoves = getLegalMoves(state).length;
        let pieceCount = 0;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (state.board[r][c]) pieceCount++;
        let baseTime = 2000;
        baseTime += legalMoves * 50;
        if (pieceCount > 20) baseTime += 300;
        if (pieceCount < 10) baseTime += 500;
        const levelFactor = currentDifficulty === 'easy' ? 1 : (currentDifficulty === 'hard' ? 2 : 1.5);
        return Math.min(baseTime * levelFactor, 30000);
    }

    function getAdaptiveTime(state) {
        let pieceCount = 0;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (state.board[r][c]) pieceCount++;
        const factor = 1 + (32 - pieceCount) * 0.03;
        return Math.floor(DIFFICULTY_TIMES[currentDifficulty] * factor);
    }

    function getBestMove(state) {
        if (isInsufficientMaterial(state.board)) return null;
        const bookResult = getBookMove(state);
        if (bookResult) { document.querySelector('.opening-name').textContent = '⚡ ' + bookResult.name; return bookResult
                .move; }
        const timeLimit = stockfish?.isReady ? SEARCH_TIME_PER_MOVE : 800;
        const res = iterativeDeepening(state, timeLimit);
        if (res.move) {
            lastComputerDepth = res.depth;
            const next = makeMove(state, res.move);
            if (isRepetitionDraw(next)) { const alt = getLegalMoves(state).find(m => !isRepetitionDraw(makeMove(state,
                    m))); if (alt) res.move = alt; }
        }
        return res.move;
    }

    function clearAllEffects() {
        document.getElementById('suggestion-arrows').innerHTML = '';
        document.querySelectorAll('.cell.player-move').forEach(c => c.classList.remove('player-move'));
    }

    function drawArrows(moves) {
        const svg = document.getElementById('suggestion-arrows');
        svg.innerHTML = '';
        const size = 66,
            offset = size / 2;
        const flipBoard = playerColor === 'black';
        for (const move of moves) {
            let fr = move.from[0],
                fc = move.from[1];
            let tr = move.to[0],
                tc = move.to[1];
            if (flipBoard) { fr = 7 - fr;
                fc = 7 - fc;
                tr = 7 - tr;
                tc = 7 - tc; }
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", fc * size + offset);
            line.setAttribute("y1", fr * size + offset);
            line.setAttribute("x2", tc * size + offset);
            line.setAttribute("y2", tr * size + offset);
            line.setAttribute("stroke", "#ffaa00");
            line.setAttribute("stroke-width", "6");
            line.setAttribute("marker-end", "url(#arrowhead)");
            line.setAttribute("filter", "url(#glow)");
            svg.appendChild(line);
        }
    }

    function highlightPlayerMove(fr, fc, tr, tc) {
        document.querySelectorAll('.cell.player-move').forEach(c => c.classList.remove('player-move'));
        const cells = document.querySelectorAll('#board .cell');
        const flipBoard = playerColor === 'black';
        let dfr = flipBoard ? 7 - fr : fr,
            dfc = flipBoard ? 7 - fc : fc;
        let dtr = flipBoard ? 7 - tr : tr,
            dtc = flipBoard ? 7 - tc : tc;
        const fromIdx = dfr * 8 + dfc,
            toIdx = dtr * 8 + dtc;
        if (cells[fromIdx]) cells[fromIdx].classList.add('player-move');
        if (cells[toIdx]) cells[toIdx].classList.add('player-move');
    }

    function getPieceShadowStyle(color, isPlayerWhite) {
        const hOffset = isPlayerWhite ? '2px' : '-2px';
        const vOffset = '4px',
            blur = '10px',
            spread = '0px';
        const shadowColor = 'rgba(0,0,0,0.5)';
        return `${hOffset} ${vOffset} ${blur} ${spread} ${shadowColor}`;
    }

    function render() {
        const boardDiv = document.getElementById('board');
        boardDiv.innerHTML = '';
        const flipBoard = playerColor === 'black';
        const files = 'abcdefgh';
        const coordsTop = document.getElementById('coords-top'),
            coordsBottom = document.getElementById('coords-bottom');
        const coordsLeft = document.getElementById('coords-left'),
            coordsRight = document.getElementById('coords-right');
        coordsTop.innerHTML = '';
        coordsBottom.innerHTML = '';
        coordsLeft.innerHTML = '';
        coordsRight.innerHTML = '';
        coordsTop.appendChild(document.createElement('div'));
        for (let c = 0; c < 8; c++) { const d = document.createElement('div');
            d.textContent = files[flipBoard ? 7 - c : c];
            coordsTop.appendChild(d); }
        coordsTop.appendChild(document.createElement('div'));
        for (let r = 0; r < 8; r++) { const d = document.createElement('div');
            d.textContent = flipBoard ? r + 1 : 8 - r;
            coordsLeft.appendChild(d);
            coordsRight.appendChild(d.cloneNode()); }
        coordsBottom.appendChild(document.createElement('div'));
        for (let c = 0; c < 8; c++) { const d = document.createElement('div');
            d.textContent = files[flipBoard ? 7 - c : c];
            coordsBottom.appendChild(d); }
        coordsBottom.appendChild(document.createElement('div'));

        const isPlayerWhite = playerColor === 'white';
        for (let dr = 0; dr < 8; dr++) {
            const r = flipBoard ? 7 - dr : dr;
            for (let c = 0; c < 8; c++) {
                const cell = document.createElement('div');
                cell.className = 'cell ' + ((r + c) % 2 === 0 ? 'light' : 'dark');
                if (selectedCell && selectedCell.row === r && selectedCell.col === c) cell.className += ' selected';
                const lm = legalMovesMap.find(m => m.row === r && m.col === c);
                if (lm) { cell.className += ' legal'; if (lm.capture) cell.className += ' capture'; }
                if (lastComputerMoveHighlight && ((r === lastComputerMoveHighlight.fromRow && c ===
                        lastComputerMoveHighlight.fromCol) || (r === lastComputerMoveHighlight.toRow && c ===
                        lastComputerMoveHighlight.toCol))) {
                    cell.className += ' computer-move';
                }
                const piece = gameState.board[r][c];
                if (piece) {
                    const span = document.createElement('span');
                    span.className = 'piece ' + (piece.color === 'white' ? 'w' : 'b');
                    span.textContent = pieceDisplay[piece.type];
                    span.style.boxShadow = getPieceShadowStyle(piece.color, isPlayerWhite);
                    cell.appendChild(span);
                }
                (function (ir, ic) { cell.addEventListener('click', () => cellClicked(ir, ic)); })(r, c);
                boardDiv.appendChild(cell);
            }
        }
    }

    function cellClicked(r, c) {
        if (gameOver || gameState.turn !== playerColor) return;
        if (selectedCell && selectedCell.row === r && selectedCell.col === c) { selectedCell = null;
            legalMovesMap = [];
            render(); return; }
        if (selectedCell) {
            const move = legalMovesMap.find(m => m.row === r && m.col === c);
            if (move) { executePlayerMove(move); return; }
            const piece = gameState.board[r][c];
            if (piece && piece.color === playerColor) setSelected(r, c);
            else { selectedCell = null;
                legalMovesMap = [];
                render(); }
        } else {
            const piece = gameState.board[r][c];
            if (piece && piece.color === playerColor) setSelected(r, c);
        }
    }

    function setSelected(r, c) {
        selectedCell = { row: r, col: c };
        legalMovesMap = getLegalMoves(gameState).filter(m => m.from[0] === r && m.from[1] === c).map(m => ({
            row: m.to[0],
            col: m.to[1],
            capture: !!(m.capture || m.enPassant),
            promotion: m.promotion,
            fullMove: m
        }));
        render();
    }

    function executePlayerMove(disp) {
        lastComputerMoveHighlight = null;
        const move = disp.fullMove;
        clearAllEffects();
        const promoRow = playerColor === 'white' ? 0 : 7;
        if (move.piece.type === 'pawn' && move.to[0] === promoRow) {
            requestPromotion().then(p => {
                const nm = { ...move, promotion: p };
                gameState = makeMove(gameState, nm);
                recordMoveSafe(nm);
                updateGameHistory(gameState);
                selectedCell = null;
                legalMovesMap = [];
                render();
                highlightPlayerMove(move.from[0], move.from[1], move.to[0], move.to[1]);
                pushSnapshot();
                if (!checkGameOver()) { gameState.turn = playerColor === 'white' ? 'black' : 'white';
                    setTimeout(computerMove, 60); }
            });
        } else {
            gameState = makeMove(gameState, move);
            recordMoveSafe(move);
            updateGameHistory(gameState);
            selectedCell = null;
            legalMovesMap = [];
            render();
            highlightPlayerMove(move.from[0], move.from[1], move.to[0], move.to[1]);
            pushSnapshot();
            if (!checkGameOver()) { gameState.turn = playerColor === 'white' ? 'black' : 'white';
                setTimeout(computerMove, 60); }
        }
    }

    function executePlayerMoveDirect(move) {
        lastComputerMoveHighlight = null;
        clearAllEffects();
        const promoRow = playerColor === 'white' ? 0 : 7;
        if (move.piece.type === 'pawn' && move.to[0] === promoRow) {
            requestPromotion().then(p => {
                const nm = { ...move, promotion: p };
                gameState = makeMove(gameState, nm);
                recordMoveSafe(nm);
                updateGameHistory(gameState);
                selectedCell = null;
                legalMovesMap = [];
                render();
                highlightPlayerMove(move.from[0], move.from[1], move.to[0], move.to[1]);
                pushSnapshot();
                if (!checkGameOver()) { gameState.turn = playerColor === 'white' ? 'black' : 'white';
                    setTimeout(computerMove, 60); }
            });
        } else {
            gameState = makeMove(gameState, move);
            recordMoveSafe(move);
            updateGameHistory(gameState);
            selectedCell = null;
            legalMovesMap = [];
            render();
            highlightPlayerMove(move.from[0], move.from[1], move.to[0], move.to[1]);
            pushSnapshot();
            if (!checkGameOver()) { gameState.turn = playerColor === 'white' ? 'black' : 'white';
                setTimeout(computerMove, 60); }
        }
    }

    function requestPromotion() {
        return new Promise(resolve => {
            promotionResolve = resolve;
            document.getElementById('promo-overlay').style.display = 'flex';
        });
    }
    document.getElementById('promo-overlay').addEventListener('click', function (e) {
        if (e.target.dataset.p && promotionResolve) {
            promotionResolve(e.target.dataset.p);
            promotionResolve = null;
            this.style.display = 'none';
        }
    });

    function checkGameOver() {
        const moves = getLegalMoves(gameState);
        if (!moves.length) {
            gameOver = true;
            document.getElementById('status').textContent = isKingInCheck(gameState, gameState.turn) ? (gameState.turn ===
                playerColor ? 'كش ملك! خسرت!' : 'كش ملك! فزت!') : 'تعادل (ردب)!';
            return true;
        }
        if (gameState.halfMoveClock >= 100) { gameOver = true;
            document.getElementById('status').textContent = 'تعادل (قاعدة 50 نقلة)'; return true; }
        if (isRepetitionDraw(gameState)) { gameOver = true;
            document.getElementById('status').textContent = 'تعادل (تكرار)'; return true; }
        if (isInsufficientMaterial(gameState.board)) { gameOver = true;
            document.getElementById('status').textContent = 'تعادل (نقص مادة)'; return true; }
        return false;
    }

    function undoMove() {
        if (historyStack.length < 3) return;
        gameOver = false;
        redoStack.push({ human: historyStack.pop(), computer: historyStack.pop() });
        restoreFromSnapshot(historyStack[historyStack.length - 1]);
        clearAllEffects();
        document.getElementById('status').innerHTML = (playerColor === 'white' ? 'دورك (أبيض)' : 'دورك (أسود)') +
            ' <span class="opening-name"></span>';
        displaySuggestions();
    }

    function redoMove() {
        if (!redoStack.length) return;
        const pair = redoStack.pop();
        historyStack.push(pair.human, pair.computer);
        restoreFromSnapshot(pair.computer);
        clearAllEffects();
        document.getElementById('status').innerHTML = (playerColor === 'white' ? 'دورك (أبيض)' : 'دورك (أسود)') +
            ' <span class="opening-name"></span>';
        displaySuggestions();
    }

    function startGame(asWhite) {
        playerColor = asWhite ? 'white' : 'black';
        gameState = fenToBoard(START_FEN);
        selectedCell = null;
        legalMovesMap = [];
        gameOver = false;
        gameHistory = [];
        positionCount.clear();
        moveHistoryStr = [];
        updateGameHistory(gameState);
        lastComputerMoveHighlight = null;
        historyStack = [];
        redoStack = [];
        lastComputerDepth = 0;
        pushSnapshot();
        clearAllEffects();
        transTable = new Map();
        document.getElementById('promo-overlay').style.display = 'none';
        updateOpeningDisplaySafe();
        render();
        if (asWhite) {
            gameState.turn = 'white';
            document.getElementById('status').innerHTML = 'دورك (أبيض) <span class="opening-name"></span>';
        } else {
            gameState.turn = 'white';
            document.getElementById('status').innerHTML = 'الحاسوب يفكر... <span class="opening-name"></span>';
            setTimeout(computerMove, 250);
        }
    }

    document.getElementById('startWhite').addEventListener('click', () => startGame(true));
    document.getElementById('startBlack').addEventListener('click', () => startGame(false));
    document.getElementById('bigStart').addEventListener('click', () => startGame(true));
    document.getElementById('reset').addEventListener('click', () => {
        playerColor = 'white';
        gameState = fenToBoard(START_FEN);
        selectedCell = null;
        legalMovesMap = [];
        gameOver = false;
        gameHistory = [];
        positionCount.clear();
        moveHistoryStr = [];
        updateGameHistory(gameState);
        lastComputerMoveHighlight = null;
        historyStack = [];
        redoStack = [];
        lastComputerDepth = 0;
        pushSnapshot();
        clearAllEffects();
        transTable = new Map();
        document.getElementById('status').innerHTML = 'اختر وضع اللعب <span class="opening-name"></span>';
        document.getElementById('suggestions-list').innerHTML =
            '<div style="color:#aaa;text-align:center;">اضغط 💡 لتحليل المحرك</div>';
        document.getElementById('computer-plan').style.display = 'none';
        updateOpeningDisplaySafe();
        render();
    });
    document.getElementById('undoBtn').addEventListener('click', undoMove);
    document.getElementById('redoBtn').addEventListener('click', redoMove);
    document.getElementById('suggestion-btn').addEventListener('click', displaySuggestions);

    document.getElementById('trapModeBtn').addEventListener('click', function () {
        trapModeActive = !trapModeActive;
        this.textContent = trapModeActive ? '🕸️ وضع الصياد: مفعّل' : '🕸️ وضع الصياد: متوقف';
        this.style.background = trapModeActive ? '#ff5500' : '';
        this.style.color = trapModeActive ? '#000' : '#ffaa00';
    });

    // ================== Stockfish 18 Lite Engine Integration ==================
    class StockfishEngine {constructor() {
    // توجيه المحرك لتحميل ملف wasm من نفس الإصدار على CDN
    self.locateFile = (file) => `https://cdn.jsdelivr.net/npm/stockfish.wasm@0.10.0/${file}`;

    try {
        // تحميل محرك Stockfish الكامل من CDN
        this.worker = new Worker('stockfish-worker.js');
    } catch (e) {
        document.getElementById('engine-status').textContent = '⚠️ تعذر تحميل محرك Stockfish من CDN';
        return;
    }

    this.worker.onmessage = (e) => this.handleMessage(e.data);
    this.worker.onerror = () => document.getElementById('engine-status').textContent = '❌ خطأ في محرك Stockfish.';
    this.isReady = false;
    this.pendingResolve = null;
    this.pvs = [];
    this.currentListener = null;

    // إعدادات المحرك (UCI)
    this.send('uci');
    this.send('setoption name Threads value 1');        // خيط واحد (لأن Worker يعمل بخيط واحد)
    this.send('setoption name Hash value 128');          // ذاكرة التخزين المؤقت 128 ميغابايت
    this.send('setoption name MultiPV value 1');         // أفضل نقلة واحدة فقط (للاستخدام العادي)
    this.send('setoption name Use NNUE value true');     // تفعيل الشبكة العصبية (قد يكون افتراضياً)
    this.send('isready');                                // طلب تأكيد الجاهزية
}
        send(cmd) { if (this.worker) this.worker.postMessage(cmd); }
        handleMessage(line) {
            if (line === 'readyok') {
                this.isReady = true;
                document.getElementById('engine-status').textContent = '✅ Stockfish 18 Lite جاهز (تحليل ممتاز)';
            } else if (line.startsWith('bestmove')) {
                if (this.pendingResolve) { this.pendingResolve(this.pvs);
                    this.pendingResolve = null;
                    this.pvs = []; }
            } else if (line.startsWith('info') && line.includes(' pv ')) {
                const sc = line.match(/score cp (-?\d+)/);
                const pv = line.match(/ pv (.+)/);
                if (sc && pv) {
                    const depth = parseInt(line.match(/depth (\d+)/)?.[1] || '0');
                    const moves = pv[1].trim().split(' ');
                    const best = moves[0];
                    const ex = this.pvs.find(p => p.bestMove === best);
                    if (ex) { if (depth >= ex.depth) { ex.depth = depth;
                            ex.score = parseInt(sc[1]);
                            ex.moves = moves; } } else this.pvs.push({ depth, score: parseInt(sc[1]), bestMove: best,
                        moves });
                }
            }
        }
        analyze(fen, ms = 2500) {
            if (!this.worker) return Promise.resolve([]);
            this.pvs = [];
            this.send('ucinewgame');
            this.send(`position fen ${fen}`);
            this.send(`go movetime ${ms}`);
            return new Promise(res => {
                this.pendingResolve = res;
                setTimeout(() => { if (this.pendingResolve) { this.pendingResolve(this.pvs);
                        this.pendingResolve = null; } }, ms + 500);
            });
        }
        destroy() { if (this.worker) this.worker.terminate(); }
    }

    let stockfish = null;

    function initStockfish() { if (!stockfish) stockfish = new StockfishEngine(); }

    function uciToMove(uci, state) {
        const fc = uci.charCodeAt(0) - 97,
            fr = 8 - parseInt(uci[1]);
        const tc = uci.charCodeAt(2) - 97,
            tr = 8 - parseInt(uci[3]);
        const promoChar = uci[4];
        const promo = promoChar ? { q: 'queen', r: 'rook', b: 'bishop', n: 'knight' } [promoChar] : null;
        return getLegalMoves(state).find(m =>
            m.from[0] === fr && m.from[1] === fc && m.to[0] === tr && m.to[1] === tc &&
            ((!promo && !m.promotion) || (promo && m.promotion === promo))
        );
    }

    function processCandidates(candidates, doMove) {
        if (candidates.length === 0) { doMove(null); return; }
        const trapsScores = [];
        for (const cand of candidates) {
            const stateAfter = makeMove(gameState, cand.move);
            const bestOpp = iterativeDeepening(stateAfter, 250, 6);
            const bestOppScore = -bestOpp.score;
            const oppMoves = getLegalMoves(stateAfter);
            let worstPlausibleScore = -INF;
            for (const om of oppMoves.slice(0, 8)) {
                const afterOm = makeMove(stateAfter, om);
                const evalOm = evaluate(afterOm);
                if (evalOm > worstPlausibleScore && evalOm < bestOppScore + 150) worstPlausibleScore = evalOm;
            }
            if (worstPlausibleScore === -INF) worstPlausibleScore = bestOppScore;
            const trapScore = Math.max(0, worstPlausibleScore - bestOppScore);
            trapsScores.push({ move: cand.move, quality: cand.score, trapScore, finalScore: cand.score + trapScore *
                    0.3 });
        }
        trapsScores.sort((a, b) => b.finalScore - a.finalScore);
        doMove(trapsScores[0].move);
    }

    function computerMove() {
        if (gameOver) return;
        clearAllEffects();
        const fen = boardToFen(gameState);
        const useStockfish = stockfish && stockfish.worker && stockfish.isReady;
        const doMove = (move) => {
            if (!move) { gameOver = true;
                document.getElementById('status').textContent = 'تعادل'; return; }
            gameState = makeMove(gameState, move);
            recordMoveSafe(move);
            lastComputerMoveHighlight = { fromRow: move.from[0], fromCol: move.from[1], toRow: move.to[0], toCol: move
                    .to[1] };
            updateGameHistory(gameState);
            render();
            pushSnapshot();
            if (!checkGameOver()) {
                gameState.turn = playerColor;
                document.getElementById('status').innerHTML = (playerColor === 'white' ? 'دورك (أبيض)' :
                        'دورك (أسود)') +
                    ` (عمق الحاسوب: ${lastComputerDepth}) <span class="opening-name"></span>`;
                updateOpeningDisplaySafe();
            }
        };

        if (!trapModeActive) {
            if (useStockfish) {
                if (stockfish.currentListener) stockfish.worker.removeEventListener('message', stockfish
            .currentListener);
                const listener = (e) => {
                    if (e.data.startsWith('bestmove')) {
                        const best = e.data.split(' ')[1];
                        stockfish.worker.removeEventListener('message', listener);
                        stockfish.currentListener = null;
                        if (best && best !== '(none)') { lastComputerDepth = 'SF';
                            doMove(uciToMove(best, gameState)); } else doMove(null);
                    }
                };
                stockfish.currentListener = listener;
                stockfish.worker.addEventListener('message', listener);
                stockfish.send('ucinewgame');
                stockfish.send(`position fen ${fen}`);
                stockfish.send(`go movetime ${getDynamicStockfishTime(gameState)}`);
            } else {
                const move = getBestMove(gameState);
                doMove(move);
            }
        } else {
            const timeLimit = SEARCH_TIME_PER_MOVE * 1.5;
            if (useStockfish) {
                if (stockfish.currentListener) stockfish.worker.removeEventListener('message', stockfish
            .currentListener);
                const candidates = [];
                const listener = (e) => {
                    const line = e.data;
                    if (line.startsWith('bestmove')) {
                        stockfish.worker.removeEventListener('message', listener);
                        stockfish.currentListener = null;
                        processCandidates(candidates, doMove);
                    } else if (line.startsWith('info') && line.includes(' pv ')) {
                        const depth = parseInt(line.match(/depth (\d+)/)?.[1] || '0');
                        const scoreCp = line.match(/score cp (-?\d+)/);
                        const pvMatch = line.match(/ pv (.+)/);
                        if (scoreCp && pvMatch) {
                            const uci = pvMatch[1].trim().split(' ')[0];
                            const move = uciToMove(uci, gameState);
                            if (move) {
                                const ex = candidates.find(c => c.move.from[0] === move.from[0] && c.move
                                    .from[1] === move.from[1] && c.move.to[0] === move.to[0] && c.move
                                    .to[1] === move.to[1]);
                                if (!ex) candidates.push({ move, score: parseInt(scoreCp[1]), depth });
                                else if (depth > ex.depth) { ex.score = parseInt(scoreCp[1]);
                                    ex.depth = depth; }
                            }
                        }
                    }
                };
                stockfish.currentListener = listener;
                stockfish.worker.addEventListener('message', listener);
                stockfish.send('ucinewgame');
                stockfish.send(`position fen ${fen}`);
                stockfish.send('setoption name MultiPV value 15');
                stockfish.send(`go movetime ${timeLimit}`);
            } else {
                const moves = getLegalMoves(gameState);
                const scored = moves.map(m => {
                    const next = makeMove(gameState, m);
                    const res = iterativeDeepening(next, 300, 8);
                    return { move: m, score: -res.score };
                }).sort((a, b) => b.score - a.score);
                processCandidates(scored.slice(0, 12), doMove);
            }
        }
    }

    // ================== اقتراحات حصراً من Stockfish ==================
    async function displaySuggestions() {
        if (gameOver || gameState.turn !== playerColor) return;
        if (suggestionLoading) return;
        const listDiv = document.getElementById('suggestions-list');
        document.getElementById('computer-plan').style.display = 'none';
        listDiv.innerHTML = '<div style="color:#ffcc00;text-align:center;">⏳ جاري التحليل بواسطة Stockfish...</div>';
        suggestionLoading = true;
        document.getElementById('suggestion-btn').disabled = true;
        clearAllEffects();

        try {
            if (!stockfish || !stockfish.worker) {
                throw new Error('محرك Stockfish غير محمل. تأكد من وجود الملفات في نفس المجلد.');
            }
            let timeout = 0;
            while (!stockfish.isReady && timeout < 10000) {
                await new Promise(r => setTimeout(r, 100));
                timeout += 100;
            }
            if (!stockfish.isReady) throw new Error('المحرك غير جاهز بعد. حاول مرة أخرى.');

            const fen = boardToFen(gameState);
            const res = await stockfish.analyze(fen, 2500);
            if (!res.length) throw new Error('لم يُرجع المحرك أي اقتراحات.');

            res.sort((a, b) => b.score - a.score);
            const uniq = [];
            const seen = new Set();
            for (const r of res) {
                if (!seen.has(r.bestMove)) { seen.add(r.bestMove);
                    uniq.push(r); }
                if (uniq.length >= 3) break;
            }

            const movesToDraw = [];
            let html = '';
            for (const r of uniq) {
                const uci = r.bestMove;
                const fc = uci.charCodeAt(0) - 97,
                    fr = 8 - parseInt(uci[1]);
                const tc = uci.charCodeAt(2) - 97,
                    tr = 8 - parseInt(uci[3]);
                const promoChar = uci[4];
                const promo = promoChar ? { q: 'queen', r: 'rook', b: 'bishop', n: 'knight' } [promoChar] : null;
                const move = getLegalMoves(gameState).find(m =>
                    m.from[0] === fr && m.from[1] === fc && m.to[0] === tr && m.to[1] === tc &&
                    ((!promo && !m.promotion) || (promo && m.promotion === promo))
                );
                if (!move) continue;
                movesToDraw.push(move);
                const notation = moveToShortAlgebraic(move, gameState);
                const evalPawn = (r.score / 100).toFixed(2);
                const cls = evalPawn >= 0 ? 'positive' : 'negative';
                html +=
                    `<div class="suggestion-entry" data-fr="${fr}" data-fc="${fc}" data-tr="${tr}" data-tc="${tc}" data-promo="${move.promotion||''}">
                        <span class="suggestion-move">${notation}</span>
                        <span class="suggestion-eval ${cls}">${evalPawn>0?'+':''}${evalPawn}</span>
                    </div>`;
            }
            listDiv.innerHTML = html || '<div style="color:#aaa;">لا توجد اقتراحات.</div>';
            drawArrows(movesToDraw);
            attachSuggestionEvents();
        } catch (e) {
            console.error(e);
            listDiv.innerHTML = `<div style="color:#ff6666;">❌ ${e.message}</div>`;
            document.getElementById('engine-status').textContent = '⚠️ تعذر الحصول على اقتراحات.';
        } finally {
            suggestionLoading = false;
            document.getElementById('suggestion-btn').disabled = false;
        }
    }

    function attachSuggestionEvents() {
        document.querySelectorAll('.suggestion-entry').forEach(el => {
            el.addEventListener('click', function () {
                const fr = +this.dataset.fr,
                    fc = +this.dataset.fc,
                    tr = +this.dataset.tr,
                    tc = +this.dataset.tc;
                const promo = this.dataset.promo;
                const move = getLegalMoves(gameState).find(m =>
                    m.from[0] === fr && m.from[1] === fc && m.to[0] === tr && m.to[1] === tc &&
                    (!promo || m.promotion === promo)
                );
                if (move) {
                    clearAllEffects();
                    const promoRow = playerColor === 'white' ? 0 : 7;
                    if (move.piece.type === 'pawn' && move.to[0] === promoRow && !move.promotion) {
                        requestPromotion().then(p => executePlayerMoveDirect({ ...move, promotion: p }));
                    } else executePlayerMoveDirect(move);
                }
            });
        });
    }

    historyStack = [];
    redoStack = [];
    pushSnapshot();
    render();
    initStockfish();
})();
